class articulo extends EntidadAbstracta {
    constructor() {
        super();
        this.entidad = 'articulo';
        this.estructura = estructura_articulo;
        this.columnasamostrar = this.estructura.columnas_visibles_tabla;
        this.datosespecialestabla = this.estructura.columnas_modificadas_tabla;
        this._crearFuncionesValidacion();
    }

    _crearFuncionesValidacion() {
        const atributos = this.estructura?.attributes_list || [];
        for (const atributo of atributos) {
            if (!this[`comprobar_${atributo}`]) {
                this[`comprobar_${atributo}`] = () => this._validarCampo(atributo, this.accion || 'ADD');
            }
            if (!this[`comprobar_${atributo}_SEARCH`]) {
                this[`comprobar_${atributo}_SEARCH`] = () => this._validarCampo(atributo, 'SEARCH');
            }

            if (this.estructura?.attributes?.[atributo]?.html?.type === 'file') {
                const nuevoCampo = `nuevo_${atributo}`;
                if (!this[`comprobar_${nuevoCampo}`]) {
                    this[`comprobar_${nuevoCampo}`] = () => this._validarCampo(atributo, this.accion || 'ADD', nuevoCampo);
                }
                if (!this[`comprobar_${nuevoCampo}_SEARCH`]) {
                    this[`comprobar_${nuevoCampo}_SEARCH`] = () => this._validarCampo(atributo, 'SEARCH', nuevoCampo);
                }
            }
        }
    }

    _validarCampo(atributo, accion, idForzado = null) {
        const idCampo = idForzado || atributo;
        const reglas = this.estructura?.attributes?.[atributo]?.validation_rules?.[accion];

        if (!reglas) {
            this.mostrar_exito_campo(idCampo);
            return true;
        }

        for (const [regla, valor] of Object.entries(reglas)) {
            switch (regla) {
                case 'min_size':
                    if (!this.validaciones.min_size(idCampo, valor[0])) {
                        this.mostrar_error_campo(idCampo, valor[1]);
                        return valor[1];
                    }
                    break;
                case 'max_size':
                    if (!this.validaciones.max_size(idCampo, valor[0])) {
                        this.mostrar_error_campo(idCampo, valor[1]);
                        return valor[1];
                    }
                    break;
                case 'format':
                    if (!this.validaciones.format(idCampo, valor[0])) {
                        this.mostrar_error_campo(idCampo, valor[1]);
                        return valor[1];
                    }
                    break;
                case 'format_name_file': {
                    const archivo = document.getElementById(idCampo)?.files?.[0];
                    if (!archivo || !this.validaciones.format_name_file(archivo, valor[0])) {
                        this.mostrar_error_campo(idCampo, valor[1]);
                        return valor[1];
                    }
                    break;
                }
                case 'file_type': {
                    const archivo = document.getElementById(idCampo)?.files?.[0];
                    if (!archivo || !this.validaciones.type_file(archivo, valor[0])) {
                        this.mostrar_error_campo(idCampo, valor[1]);
                        return valor[1];
                    }
                    break;
                }
                case 'max_size_file': {
                    const archivo = document.getElementById(idCampo)?.files?.[0];
                    if (!archivo || !this.validaciones.max_size_file(archivo, valor[0])) {
                        this.mostrar_error_campo(idCampo, valor[1]);
                        return valor[1];
                    }
                    break;
                }
                case 'no_file': {
                    const input = document.getElementById(idCampo);
                    if (!input || input.files.length === 0) {
                        this.mostrar_error_campo(idCampo, valor);
                        return valor;
                    }
                    break;
                }
            }
        }

        this.mostrar_exito_campo(idCampo);
        return true;
    }

    cambiardatosespecialestabla(atributo, valoratributo) {
        if (atributo === 'file_articulo') {
            if (!valoratributo) {
                return 'no hay fichero';
            }
            const enlace = `http://193.147.87.202/ET2/filesuploaded/files_file_articulo/${valoratributo}`;
            return `${valoratributo}<a id="link_${atributo}" href="${enlace}"><img src="./iconos/FILE.png" /></a>`;
        }
        return super.cambiardatosespecialestabla(atributo, valoratributo);
    }
}

class DOM_validations extends DOM_class {
    constructor() {
        super();
    }

    load_validations() {
        const estructura = this.estructura;
        const accion = this.tipo_formulario || 'ADD';
        let ok = true;

        for (const atributo of estructura.attributes_list) {
            const config = estructura.attributes[atributo];
            const reglas = config.validation_rules ? config.validation_rules[accion] : null;
            if (!reglas) continue;

            const elemento = document.getElementById(atributo);
            if (!elemento) continue;

            let valor = elemento.type === 'file' ? elemento.files : elemento.value;

            for (const regla in reglas) {
                let datos = reglas[regla];
                let valido = true;
                switch (regla) {
                    case 'min_size':
                        valido = this.validaciones.min_size(valor, datos[0]);
                        break;
                    case 'max_size':
                        valido = this.validaciones.max_size(valor, datos[0]);
                        break;
                    case 'format':
                        valido = this.validaciones.format(valor, datos[0]);
                        break;
                    case 'no_file':
                        valido = this.validaciones.no_file(valor);
                        datos = [null, datos];
                        break;
                    case 'file_type':
                        valido = this.validaciones.file_type(valor, datos[0]);
                        break;
                    case 'max_size_file':
                        valido = this.validaciones.max_size_file(valor, datos[0]);
                        break;
                    case 'format_name_file':
                        valido = this.validaciones.format_name_file(valor, datos[0]);
                        break;
                }
                if (!valido) {
                    ok = false;
                    const codigo = Array.isArray(datos) ? datos[1] : datos;
                    this.mostrar_error_campo(atributo, codigo);
                    break;
                }
            }
            if (ok) {
                this.mostrar_exito_campo(atributo);
            }
        }

        return ok;
    }

    submit_test(accion) {
        if (this.load_validations()) {
            return this.access_functions.peticionBackGeneral('IU_form', this.entidad, accion);
        }
        return Promise.resolve({ ok: false });
    }
}


class Dom_validations {
    constructor() {
        this.domAux=new DOM_class();
    }
    load_validations(formId, action ,structure,atomicValidations) {
        const formulario = document.getElementById(formId);
        if (!formulario) return false;

        const inputs = Array.from(formulario.querySelectorAll('input, textarea'))
            .filter(el => !el.classList.contains('hidden'));

        for (const input of inputs) {
            const esValido = this.comprobarCampo(input.id, action, structure, atomicValidations);
            if (!esValido) {
                return false;
            }
        }
        return true;
    }
    submit_test(accion) {
        if (!this.load_validations('IU_form', accion, this.estructura, this.validaciones)) {
            return;
        }

        switch (accion) {
            case 'ADD':
                this.ADD();
                break;
            case 'EDIT':
                this.EDIT();
                break;
            case 'SEARCH':
                this.SEARCH();
                break;
            case 'DELETE':
                this.DELETE();
                break;
            case 'SHOWCURRENT':
                this.SHOWCURRENT();
                break;
            default:
                console.error('Acción no reconocida:', accion);
                break;
        }
    }

	comprobarCampo(campo, accion, estructura , atomicValidations ) {
        const atributo = campo.startsWith('nuevo_') ? campo.substring('nuevo_'.length) : campo;
        const reglas = estructura?.attributes?.[atributo]?.validation_rules?.[accion];

        if (!reglas) {
                this.domAux.mostrar_exito_campo(campo);
                return true;
        }

        for (const [regla, valor] of Object.entries(reglas)) {
                switch (regla) {
                        case 'min_size':
                                if (!atomicValidations.min_size(campo, valor[0])) {
                                        this.domAux.mostrar_error_campo(campo, valor[1]);
                                        return valor[1];
                                }
                                break;
                        case 'max_size':
                                if (!atomicValidations.max_size(campo, valor[0])) {
                                        this.domAux.mostrar_error_campo(campo, valor[1]);
                                        return valor[1];
                                }
                                break;
                        case 'format':
                                if (!atomicValidations.format(campo, valor[0])) {
                                        this.domAux.mostrar_error_campo(campo, valor[1]);
                                        return valor[1];
                                }
                                break;
                        case 'format_name_file': {
                                const file = document.getElementById(campo).files[0];
                                if (!file || !atomicValidations.format_name_file(file, valor[0])) {
                                        this.domAux.mostrar_error_campo(campo, valor[1]);
                                        return valor[1];
                                }
                                break;
                        }
                        case 'file_type': {
                                const file = document.getElementById(campo).files[0];
                                if (!file || !atomicValidations.type_file(file, valor[0])) {
                                        this.domAux.mostrar_error_campo(campo, valor[1]);
                                        return valor[1];
                                }
                                break;
                        }
                        case 'max_size_file': {
                                const file = document.getElementById(campo).files[0];
                                if (!file || !atomicValidations.max_size_file(file, valor[0])) {
                                        this.domAux.mostrar_error_campo(campo, valor[1]);
                                        return valor[1];
                                }
                                break;
                        }
                        case 'no_file':
                                if (document.getElementById(campo).files.length === 0) {
                                        this.domAux.mostrar_error_campo(campo, valor);
                                        return valor;
                                }
                                break;
                }
        }

        this.domAux.mostrar_exito_campo(campo);
        return true;
}
}

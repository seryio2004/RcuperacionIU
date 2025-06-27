class Dom_validations {
        constructor() {
                
        }
        load_validations(formId, action, structure, atomicValidations) {
                const formulario = document.getElementById(formId);
                const inputs = Array.from(formulario.querySelectorAll('input, textarea','select')).filter(el => !el.classList.contains('hidden'));
                if (!formulario) return false;

                

                for (const input of inputs) {
                        const esValido = this.comprobarCampo(input.id, action, structure, atomicValidations);
                        if (!esValido) {
                                return false;
                        }
                }
                return true;
        }

    mostrar_error_campo(id, codigoerror){
       document.getElementById('div_error_' + id).className =  codigoerror;
       document.getElementById(id).className='errorcampo';
       setLang();
    }
    mostrar_exito_campo(id) {
        const errorSpan = document.getElementById('div_error_' + id);
        const input = document.getElementById(id);
    
        if (errorSpan) {
            errorSpan.className = ''; // Limpiamos la clase
            errorSpan.innerHTML = '';
        }
    
        if (input) input.className = 'exitocampo';
    
        setLang(); // Para que se apliquen traducciones si hay mensaje traducible
    }

        submit_test(accion) {
                if (!this.load_validations('IU_form', accion, this.estructura, this.validaciones)) {
                        return;
                }
                let entidad = new EntidadAbstracta();
                entidad.access_functions = new ExternalAccess();
                switch (accion) {
                        case 'ADD':
                                entidad.ADD();
                                break;
                        case 'EDIT':
                                entidad.EDIT();
                                break;
                        case 'SEARCH':
                                entidad.SEARCH();
                                break;
                        case 'DELETE':
                                entidad.DELETE();
                                break;
                        case 'SHOWCURRENT':
                                entidad.SHOWCURRENT();
                                break;
                        default:
                                console.error('Acción no reconocida:', accion);
                                break;
                }
        }
        cerrarModalError() {
                this.cerrarModalError();
        }
        comprobarCampo(campo, accion, estructura, atomicValidations) {
                const atributo = campo.startsWith('nuevo_') ? campo.substring('nuevo_'.length) : campo;
                const reglas = estructura?.attributes?.[atributo]?.validation_rules?.[accion];

                if (!reglas) {
                        this.mostrar_exito_campo(campo);
                        return true;
                }

                for (const [regla, valor] of Object.entries(reglas)) {
                        switch (regla) {
                                case 'min_size':
                                        if (!atomicValidations.min_size(campo, valor[0])) {
                                                this.mostrar_error_campo(campo, valor[1]);
                                                return valor[1];
                                        }
                                        break;
                                case 'max_size':
                                        if (!atomicValidations.max_size(campo, valor[0])) {
                                                this.mostrar_error_campo(campo, valor[1]);
                                                return valor[1];
                                        }
                                        break;
                                case 'format':
                                        if (!atomicValidations.format(campo, valor[0])) {
                                                this.mostrar_error_campo(campo, valor[1]);
                                                return valor[1];
                                        }
                                        break;
                                case 'format_name_file': {
                                        const file = document.getElementById(campo).files[0];
                                        if (!file || !atomicValidations.format_name_file(file, valor[0])) {
                                                this.mostrar_error_campo(campo, valor[1]);
                                                return valor[1];
                                        }
                                        break;
                                }
                                case 'file_type': {
                                        const file = document.getElementById(campo).files[0];
                                        if (!file || !atomicValidations.type_file(file, valor[0])) {
                                                this.mostrar_error_campo(campo, valor[1]);
                                                return valor[1];
                                        }
                                        break;
                                }
                                case 'max_size_file': {
                                        const file = document.getElementById(campo).files[0];
                                        if (!file || !atomicValidations.max_size_file(file, valor[0])) {
                                                this.mostrar_error_campo(campo, valor[1]);
                                                return valor[1];
                                        }
                                        break;
                                }
                                case 'no_file':
                                        if (document.getElementById(campo).files.length === 0) {
                                                this.mostrar_error_campo(campo, valor);
                                                return valor;
                                        }
                                        break;
                        }
                }

                this.mostrar_exito_campo(campo);
                return true;
        }
}

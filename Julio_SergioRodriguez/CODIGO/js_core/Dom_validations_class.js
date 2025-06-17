class Dom_validations extends DOM_class {
    constructor() {
        super();
    }
    load_validations(formId, action, structure, atomicValidations) {
        const formulario = document.getElementById(formId);
        const inputs = Array.from(formulario.querySelector('input', 'textArea')).filter(el => !el.classList.contains('hidden'));
        for (const input of inputs) {
            const esValido = this.comprobarCampo(input.id, action, structure, atomicValidations);
            if (!esValido) {
                return false;
            }
        }
        return true;
    }
    submit_test(accion) {
        if (this.load_validations()) {
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
    }

	comprobarCampo(accion, campo) {
		let tests;
		if (campo.startsWith("nuevo")) {
			let campoCorregido = campo.substring("nuevo_".length).trim();
			tests = this.obtenerEstructura2()[accion][campoCorregido];
		} else {
			tests = this.obtenerEstructura2()[accion][campo];
		}
		
		for (test in tests) {
			switch (test) {
				case "min_length":
					if (!(this.validaciones.min_size(campo, tests[test].valor))) {
						this.mostrar_error_campo(campo, campo + "_length_min_KO");
						return campo + "_length_min_KO";
					}
					break;
				case "max_length":
					if (!(this.validaciones.max_size(campo, tests[test].valor))) {
						this.mostrar_error_campo(campo, campo + "_length_max_KO");
						return campo + "_length_max_KO";
					}
					break;
				case "format":
					if (!(this.validaciones.format(campo, tests[test].valor))) {
						this.mostrar_error_campo(campo, campo + "_format_KO");
						return campo + "_format_KO";
					}
					break;
				case "format_name_file":
					if (!(this.validaciones.format_name_file(document.getElementById(campo).files[0], tests[test].valor))) {
						this.mostrar_error_campo(campo, campo + "_format_name_file_KO");
						return campo + "_format_name_file_KO";
					}
					break;
				case "type_file":
					if (!(this.validaciones.type_file(document.getElementById(campo).files[0], tests[test].valor))) {
						this.mostrar_error_campo(campo, campo + "_type_file_KO");
						return campo + "_type_file_KO";
					}
					break;
			}
		}
		this.mostrar_exito_campo(campo);
	}

}

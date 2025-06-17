const estructura_project = {
    attributes_list: [
        'id_project',
        'name_project',
        'start_date_project',
        'end_date_project',
        'responsable_project',
        'organization_project',
        'description_project',
        'file_project',
        'code_project',
        'acronym_project',
        'id_sampling_methodology'
    ],
    columnas_visibles_tabla: [
        'id_project',
        'name_project',
        'start_date_project',
        'end_date_project',
        'responsable_project',
        'organization_project',
        'description_project',
        'code_project',
        'acronym_project',
        'id_sampling_methodology'
    ],
    columnas_modificadas_tabla: ['file_project'],
    attributes: {
        id_project :{
            html:{
                tag:'input',//es autoincremental por lo que no se podria usar input
                type:'number',
            },
            is_pK:'true',
            is_autoincrement:'true',
            validation_rules:{
                ADD: {
                    min_size: [1, 'id_project_min_size_KO'],
                    max_size: [11, 'id_project_characteristic_max_size_KO'],
                    format: ['^\d{1,11}$', "name_characteristic_format_KO"]
                },
                SEARCH: {
                    max_size: [11, 'id_project_characteristic_max_size_KO'],
                    format: ['^\d{1,11}$', "name_characteristic_format_KO"]
                },
            }
        },

        name_project :{
            html:{
                tag:'input',
                type:'text',
            },
            is_not_null: true,
            component_visible_size: 30,
            validation_rules:{
                ADD: {
                    min_size: [15, 'name_project_min_size_KO'],
                    max_size: [100, 'name_project_max_size_KO'],
                    format: ['^[A-Za-z ]+$', "name_project_format_KO"]
                },
                EDIT: {
                    min_size: [15, 'name_project_min_size_KO'],
                    max_size: [100, 'name_project_max_size_KO'],
                    format: ['^[A-Za-z ]+$', "name_project_format_KO"]
                },
                SEARCH: {
                    max_size: [100, 'name_project_max_size_KO'],
                    format: ['^[A-Za-z ]+$', "name_project_format_KO"]
                },
            }
        },
        start_date_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            component_visible_size: 10,
            validation_rules: {
                ADD: {
                    format: [
                        '^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$',
                        'start_date_project_format_KO'
                    ]
                },
                EDIT: {
                    format: [
                        '^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$',
                        'start_date_project_format_KO'
                    ]
                },
                SEARCH: {
                    format: [
                        '^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$',
                        'start_date_project_format_KO'
                    ]
                }
            }
        },
        end_date_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            component_visible_size: 10,
            validation_rules: {
                ADD: {
                    format: [
                        '^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$',
                        'end_date_project_format_KO'
                    ]
                },
                EDIT: {
                    format: [
                        '^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$',
                        'end_date_project_format_KO'
                    ]
                },
                SEARCH: {
                    format: [
                        '^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$',
                        'end_date_project_format_KO'
                    ]
                }
            }
        },
        responsable_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            component_visible_size: 60,
            validation_rules: {
                ADD: {
                    min_size: [6, 'responsable_project_min_size_KO'],
                    max_size: [60, 'responsable_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
                        'responsable_project_format_KO'
                    ]
                },
                EDIT: {
                    min_size: [6, 'responsable_project_min_size_KO'],
                    max_size: [60, 'responsable_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
                        'responsable_project_format_KO'
                    ]
                },
                SEARCH: {
                    max_size: [60, 'responsable_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
                        'responsable_project_format_KO'
                    ]
                }
            }
        },
        organization_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            component_visible_size: 100,
            validation_rules: {
                ADD: {
                    min_size: [6, 'organization_project_min_size_KO'],
                    max_size: [100, 'organization_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
                        'organization_project_format_KO'
                    ]
                },
                EDIT: {
                    min_size: [6, 'organization_project_min_size_KO'],
                    max_size: [100, 'organization_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
                        'organization_project_format_KO'
                    ]
                },
                SEARCH: {
                    max_size: [100, 'organization_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
                        'organization_project_format_KO'
                    ]
                }
            }
        },
        description_project: {
            html: {
                tag: 'textarea',
                rows: 5,
                columns: 50,
            },
            is_not_null: true,
            component_visible_size: 500,
            validation_rules: {
                ADD: {
                    min_size: [30, 'description_project_min_size_KO'],
                    max_size: [500, 'description_project_max_size_KO'],
                    format: ['^.{1,}$', 'description_project_format_KO']
                },
                EDIT: {
                    min_size: [30, 'description_project_min_size_KO'],
                    max_size: [500, 'description_project_max_size_KO'],
                    format: ['^.{1,}$', 'description_project_format_KO']
                },
                SEARCH: {
                    max_size: [500, 'description_project_max_size_KO'],
                    format: ['^.{0,}$', 'description_project_format_KO']
                }
            }
        },
        file_project: {
            html: {
                tag: 'input',
                type: 'file',
                multiple: true,
            },
            is_not_null: true,
            component_visible_size: 100,
            validation_rules: {
                ADD: {
                    no_file: 'file_project_no_file_KO',
                    file_type: [
                        'application/pdf',
                        'file_project_file_type_KO'
                    ],
                    max_size_file: [2000000, 'file_project_max_size_file_KO'],
                    format_name_file: [
                        '^(?=.{7,100}$)([A-Za-z]+(?:\\.[A-Za-z]+)*?)\\.(pdf|docx?)$',
                        'file_project_format_name_file_KO'
                    ]
                },
                EDIT: {
                    no_file: 'file_project_no_file_KO',
                    file_type: [
                        'application/pdf',
                        'file_project_file_type_KO'
                    ],
                    max_size_file: [2000000, 'file_project_max_size_file_KO'],
                    format_name_file: [
                        '^(?=.{7,100}$)([A-Za-z]+(?:\\.[A-Za-z]+)*?)\\.(pdf|docx?)$',
                        'file_project_format_name_file_KO'
                    ]
                }
            }
        },
        code_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            component_visible_size: 50,
            validation_rules: {
                ADD: {
                    min_size: [6, 'code_project_min_size_KO'],
                    max_size: [50, 'code_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÑñ .,;:!?¿¡()\-]+$',
                        'code_project_format_KO'
                    ]
                },
                EDIT: {
                    min_size: [6, 'code_project_min_size_KO'],
                    max_size: [50, 'code_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÑñ .,;:!?¿¡()\-]+$',
                        'code_project_format_KO'
                    ]
                },
                SEARCH: {
                    max_size: [50, 'code_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÑñ .,;:!?¿¡()\-]+$',
                        'code_project_format_KO'
                    ]
                }
            }
        },
        acronym_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            component_visible_size: 15,
            validation_rules: {
                ADD: {
                    min_size: [6, 'acronym_project_min_size_KO'],
                    max_size: [15, 'acronym_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÑñ.,;:!?¿¡()\-]+$',
                        'acronym_project_format_KO'
                    ]
                },
                EDIT: {
                    min_size: [6, 'acronym_project_min_size_KO'],
                    max_size: [15, 'acronym_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÑñ.,;:!?¿¡()\-]+$',
                        'acronym_project_format_KO'
                    ]
                },
                SEARCH: {
                    max_size: [15, 'acronym_project_max_size_KO'],
                    format: [
                        '^[A-Za-zÑñ.,;:!?¿¡()\-]+$',
                        'acronym_project_format_KO'
                    ]
                }
            }
        },
        id_sampling_methodology: {
            html: {
                tag: 'input',
                type: 'number',
            },
            is_not_null: true,
            component_visible_size: 11,
            validation_rules: {
                ADD: {
                    min_size: [1, 'id_sampling_methodology_min_size_KO'],
                    max_size: [11, 'id_sampling_methodology_max_size_KO'],
                    format: ['^\\d{1,11}$', 'id_sampling_methodology_format_KO']
                },
                SEARCH: {
                    max_size: [11, 'id_sampling_methodology_max_size_KO'],
                    format: ['^\\d{1,11}$', 'id_sampling_methodology_format_KO']
                }
            }
        }
    }
}

/*
attributes_list: ['id_characteristic','name_characteristic', 'description_characteristic','data_type_characteristic','category_characteristic','bibref_characteristic','file_characteristic'], //array atributos (obligatorio)
columnas_visibles_tabla : ['id_characteristic','name_characteristic','description_characteristic','bibref_characteristic'], //array columnas visibles (obligatorio)
columnas_modificadas_tabla: ['file_characteristic'], //array de atributos a cambiar formato en la tabla de datos (No obligatorio, solo si se cambia formato informacion en tabla)
attributes: { // conjunto de descripciones de atributos de la entidad (obligatorio)
    
    nombredeatributo :{ // clave con el nombre del atributo
        html: { //indicación de elemento en html para mostrar este campo
            tag: 'tag html', //tag html (select, input, textarea, .....)
            options : ['valor1', 'valor2'], // atributo de un tag select. array con las options (obligatorio con tag select)
            type : "", // atributo de tag input (file, text, data, number,.... ) obligatorio con tag input
            rows: 0,// atributo de tag textarea corresponde con las filas. Obligatorio con un textarea
            columns: 0,// atributo de tag textarea corresponde con las columnas. Obligatorio con un textarea
            multiple: true, // atributo de valores multiples (input file, select, chechbox, ...). Obligatorio si puede coger multiples valores el atributo
            component_visible_size: 7, // atributo de longitud fisica del campo del formulario. Obligatorio si se quiere que tenga su tamaño adecuado
        },
        is_pk: true, // indica si es clave primaria. No obligatorio, solo si es clave primaria
        is_autoincrement: true, // indica si es autoincremental. No obligatorio, solo si es autoincremetal
        is_null: true, // indica si el atributo permite nulos/vacios. No obligatorio, solo si permite nulos/vacios
        default_value: 'valorpordefecto', // indica si hay un valor por defecto que colocar en el campo si esta vacio. No obligatorio, solo si se desea un valor por defecto (obviamente seria en el ADD)
        validation_rules:{ // reglas de validacion
            nombreaccion:{ // indicación de la accion. No obligatorio si para el campo no hay validacion.(ADD,EDIT, SEARCH)
                min_size: [8, "nombredeatributo_min_size_KO"], // funcion atomica tamaño minimo, tiene el parametro de tamaño minimo del atributo (el que sea) y el codigo de error a devolver. No obligatorio sino se comprueba el tamaño minimo
                max_size: [68, "nombredeatributo_max_size_KO"], // funcion atomica tamaño maximo, tiene el parametro de tamaño maximo del atributo (el que sea) y el codigo de error a devolver. No obligatorio sino se comprueba el tamaño maximo
                format: ["expresionregular", "nombredeatributo_format_KO"], // funcion atomica formato de valor, tiene el parametro de expresión regular del valor del atributo (el que sea) y el codigo de error a devolver. No obligatorio sino se comprueba el formato
                no_file: "nuevo_nombredeatributo_no_file_KO", // funcion atomica no existe fichero. no obligatorio segun accion
                file_type :["application/pdf","nuevo_nombredeatributo_file_type_KO"], // funcion atomica tipo mime fichero. No obligatorio si no se comprueba tipo de fichero
                max_size_file: [2000, "nuevo_nombredeatributo_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                format_name_file: ["expresionregular","nuevo_nombredeatributo_format_name_file_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                personalized: "personalized_validation_nombreatributo($extravalues)", // funcion personalizada. corresponde con un metodo en la clase entidad correspondiente, para ejecutarla deben existir las variables parametro de la funcion (id, valor, extravalues). No obligatorio sino hay funciones de validacioin personalizadas
            }    
        }
    }, // fin de este atributo y se rellena para los siguientes
*/
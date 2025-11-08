const estructura_articulo = {
    attributes_list: [
        'id_articulo',
        'titulo_articulo',
        'autor_articulo',
        'revista_articulo',
        'fecha_articulo',
        'doi_articulo',
        'palabras_clave_articulo',
        'file_articulo'
    ],
    columnas_visibles_tabla: [
        'id_articulo',
        'titulo_articulo',
        'autor_articulo',
        'revista_articulo',
        'fecha_articulo',
        'doi_articulo'
    ],
    columnas_modificadas_tabla: ['file_articulo'],
    attributes: {
        id_articulo: {
            html: {
                tag: 'input',
                type: 'number'
            },
            is_pk: true,
            is_autoincrement: true,
            validation_rules: {
                ADD: {
                    min_size: [1, 'id_articulo_min_size_KO'],
                    max_size: [11, 'id_articulo_max_size_KO'],
                    format: ['^\\d{1,11}$', 'id_articulo_format_KO']
                },
                SEARCH: {
                    max_size: [11, 'id_articulo_max_size_KO'],
                    format: ['^\\d{1,11}$', 'id_articulo_format_KO']
                }
            }
        },
        titulo_articulo: {
            html: {
                tag: 'input',
                type: 'text'
            },
            is_not_null: true,
            component_visible_size: 120,
            validation_rules: {
                ADD: {
                    min_size: [10, 'titulo_articulo_min_size_KO'],
                    max_size: [200, 'titulo_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;-]+$', 'titulo_articulo_format_KO']
                },
                EDIT: {
                    min_size: [10, 'titulo_articulo_min_size_KO'],
                    max_size: [200, 'titulo_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;-]+$', 'titulo_articulo_format_KO']
                },
                SEARCH: {
                    max_size: [200, 'titulo_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;-]+$', 'titulo_articulo_format_KO']
                }
            }
        },
        autor_articulo: {
            html: {
                tag: 'input',
                type: 'text'
            },
            is_not_null: true,
            component_visible_size: 120,
            validation_rules: {
                ADD: {
                    min_size: [6, 'autor_articulo_min_size_KO'],
                    max_size: [200, 'autor_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ ,.-]+$', 'autor_articulo_format_KO']
                },
                EDIT: {
                    min_size: [6, 'autor_articulo_min_size_KO'],
                    max_size: [200, 'autor_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ ,.-]+$', 'autor_articulo_format_KO']
                },
                SEARCH: {
                    max_size: [200, 'autor_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ ,.-]+$', 'autor_articulo_format_KO']
                }
            }
        },
        revista_articulo: {
            html: {
                tag: 'input',
                type: 'text'
            },
            is_not_null: true,
            component_visible_size: 120,
            validation_rules: {
                ADD: {
                    min_size: [4, 'revista_articulo_min_size_KO'],
                    max_size: [150, 'revista_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;-]+$', 'revista_articulo_format_KO']
                },
                EDIT: {
                    min_size: [4, 'revista_articulo_min_size_KO'],
                    max_size: [150, 'revista_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;-]+$', 'revista_articulo_format_KO']
                },
                SEARCH: {
                    max_size: [150, 'revista_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;-]+$', 'revista_articulo_format_KO']
                }
            }
        },
        fecha_articulo: {
            html: {
                tag: 'input',
                type: 'text'
            },
            is_not_null: true,
            component_visible_size: 10,
            validation_rules: {
                ADD: {
                    format: ['^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$', 'fecha_articulo_format_KO']
                },
                EDIT: {
                    format: ['^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$', 'fecha_articulo_format_KO']
                },
                SEARCH: {
                    format: ['^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$', 'fecha_articulo_format_KO']
                }
            }
        },
        doi_articulo: {
            html: {
                tag: 'input',
                type: 'text'
            },
            is_not_null: true,
            component_visible_size: 80,
            validation_rules: {
                ADD: {
                    min_size: [6, 'doi_articulo_min_size_KO'],
                    max_size: [100, 'doi_articulo_max_size_KO'],
                    format: ['^[A-Za-z0-9./-]+$', 'doi_articulo_format_KO']
                },
                EDIT: {
                    min_size: [6, 'doi_articulo_min_size_KO'],
                    max_size: [100, 'doi_articulo_max_size_KO'],
                    format: ['^[A-Za-z0-9./-]+$', 'doi_articulo_format_KO']
                },
                SEARCH: {
                    max_size: [100, 'doi_articulo_max_size_KO'],
                    format: ['^[A-Za-z0-9./-]+$', 'doi_articulo_format_KO']
                }
            }
        },
        palabras_clave_articulo: {
            html: {
                tag: 'textarea',
                rows: 4,
                columns: 60
            },
            is_not_null: true,
            component_visible_size: 500,
            validation_rules: {
                ADD: {
                    min_size: [10, 'palabras_clave_articulo_min_size_KO'],
                    max_size: [500, 'palabras_clave_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,;-]+$', 'palabras_clave_articulo_format_KO']
                },
                EDIT: {
                    min_size: [10, 'palabras_clave_articulo_min_size_KO'],
                    max_size: [500, 'palabras_clave_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,;-]+$', 'palabras_clave_articulo_format_KO']
                },
                SEARCH: {
                    max_size: [500, 'palabras_clave_articulo_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,;-]+$', 'palabras_clave_articulo_format_KO']
                }
            }
        },
        file_articulo: {
            html: {
                tag: 'input',
                type: 'file'
            },
            is_not_null: false,
            component_visible_size: 80,
            validation_rules: {
                ADD: {
                    no_file: 'file_articulo_no_file_KO',
                    file_type: [['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'], 'file_articulo_file_type_KO'],
                    max_size_file: [2000000, 'file_articulo_max_size_file_KO'],
                    format_name_file: ['^(?=.{7,100}$)([A-Za-z0-9_-]+)\\.(pdf|docx?)$', 'file_articulo_format_name_file_KO']
                },
                EDIT: {
                    no_file: 'file_articulo_no_file_KO',
                    file_type: [['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'], 'file_articulo_file_type_KO'],
                    max_size_file: [2000000, 'file_articulo_max_size_file_KO'],
                    format_name_file: ['^(?=.{7,100}$)([A-Za-z0-9_-]+)\\.(pdf|docx?)$', 'file_articulo_format_name_file_KO']
                }
            }
        }
    }
};

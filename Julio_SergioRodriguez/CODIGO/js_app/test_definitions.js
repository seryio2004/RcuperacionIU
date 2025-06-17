var test_definitions = [
    {entidad:'characteristic', campo:'name_characteristic', num_def:1, descripcion:'nombre obligatorio', accion:'ADD', esperado:true, mensaje:'OK'}
];



let def_tests_analysis_preparation = Array(

    // ADD

    Array('analysis_preparation', 'name_analysis_preparation', 1, 'longitud < 8', 'ADD', 'name_analysis_preparation_length_min_KO', 'El nombre no puede tener menos de 8 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 2, 'longitud > 100', 'ADD', 'name_analysis_preparation_length_max_KO', 'El nombre no puede tener más de 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 3, 'no alfabético o acentos/ñ', 'ADD', 'name_analysis_preparation_format_KO', 'El nombre solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 'alfabético/espacios sin acentos/ñ', 'ADD', true, 'Válido'),

    Array('analysis_preparation', 'description_analysis_preparation', 5, 'longitud < 80', 'ADD', 'description_analysis_preparation_length_min_KO', 'La descripción no puede tener menos de 80 caracteres'),
    Array('analysis_preparation', 'description_analysis_preparation', 6, 'longitud > 5000', 'ADD', 'description_analysis_preparation_length_max_KO', 'La descripción no puede tener más de 5000 caracteres'),
    Array('analysis_preparation', 'description_analysis_preparation', 7, 'no alfabético o acentos/ñ', 'ADD', 'description_analysis_preparation_format_KO', 'La descripción solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('analysis_preparation', 'description_analysis_preparation', 8, 'alfabético/espacios sin acentos/ñ', 'ADD', true, 'Válido'),

    Array('analysis_preparation', 'bib_analysis_preparation', 9, 'longitud < 6', 'ADD', 'bib_analysis_preparation_length_min_KO', 'El bib no puede tener menos de 6 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 10, 'longitud > 200', 'ADD', 'bib_analysis_preparation_length_max_KO', 'El bib no puede tener más de 200 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 11, 'no alfabético/espacios/signos', 'ADD', 'bib_analysis_preparation_format_KO', 'El bib no puede tener caracteres no alfabéticos o espacios o signos de puntuación'),
    Array('analysis_preparation', 'bib_analysis_preparation', 12, 'alfabético/espacios/signos', 'ADD', true, 'Válido'),

    // EDIT

    Array('analysis_preparation', 'name_analysis_preparation', 13, 'longitud < 8', 'EDIT', 'name_analysis_preparation_length_min_KO', 'El nombre no puede tener menos de 8 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 14, 'longitud > 100', 'EDIT', 'name_analysis_preparation_length_max_KO', 'El nombre no puede tener más de 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 15, 'no alfabético o acentos/ñ', 'EDIT', 'name_analysis_preparation_format_KO', 'El nombre solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('analysis_preparation', 'name_analysis_preparation', 16, 'alfabético/espacios sin acentos/ñ', 'EDIT', true, 'Válido'),

    Array('analysis_preparation', 'description_analysis_preparation', 17, 'longitud < 80', 'EDIT', 'description_analysis_preparation_length_min_KO', 'La descripción no puede tener menos de 80 caracteres'),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 'longitud > 5000', 'EDIT', 'description_analysis_preparation_length_max_KO', 'La descripción no puede tener más de 5000 caracteres'),
    Array('analysis_preparation', 'description_analysis_preparation', 19, 'no alfabético o acentos/ñ', 'EDIT', 'description_analysis_preparation_format_KO', 'La descripción solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('analysis_preparation', 'description_analysis_preparation', 20, 'alfabético/espacios sin acentos/ñ', 'EDIT', true, 'Válido'),

    Array('analysis_preparation', 'bib_analysis_preparation', 21, 'longitud < 6', 'EDIT', 'bib_analysis_preparation_length_min_KO', 'El bib no puede tener menos de 6 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 22, 'longitud > 200', 'EDIT', 'bib_analysis_preparation_length_max_KO', 'El bib no puede tener más de 200 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 23, 'no alfabético/espacios/signos', 'EDIT', 'bib_analysis_preparation_format_KO', 'El bib no puede tener caracteres no alfabéticos o espacios o signos de puntuación'),
    Array('analysis_preparation', 'bib_analysis_preparation', 24, 'alfabético/espacios/signos', 'EDIT', true, 'Válido'),


    // SEARCH

    Array('analysis_preparation', 'id_analysis_preparation', 25, 'longitud > 11', 'SEARCH', 'id_analysis_preparation_length_max_KO', 'El ID no puede tener más de 11 caracteres'),
    Array('analysis_preparation', 'id_analysis_preparation', 26, 'no numéricos', 'SEARCH', 'id_analysis_preparation_format_KO', 'El ID solo permite números'),
    Array('analysis_preparation', 'id_analysis_preparation', 27, 'numéricos', 'SEARCH', true, 'Válido'),

    Array('analysis_preparation', 'name_analysis_preparation', 28, 'longitud > 100', 'SEARCH', 'name_analysis_preparation_length_max_KO', 'El nombre no puede tener más de 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 29, 'no alfabético o acentos/ñ', 'SEARCH', 'name_analysis_preparation_format_KO', 'El nombre solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('analysis_preparation', 'name_analysis_preparation', 30, 'alfabético/espacios sin acentos/ñ', 'SEARCH', true, 'Válido'),

    Array('analysis_preparation', 'description_analysis_preparation', 31, 'longitud > 5000', 'SEARCH', 'description_analysis_preparation_length_max_KO', 'La descripción no puede tener más de 5000 caracteres'),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 'no alfabético o acentos/ñ', 'SEARCH', 'description_analysis_preparation_format_KO', 'La descripción solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('analysis_preparation', 'description_analysis_preparation', 33, 'alfabético/espacios sin acentos/ñ', 'SEARCH', true, 'Válido'),

    Array('analysis_preparation', 'bib_analysis_preparation', 34, 'longitud > 200', 'SEARCH', 'bib_analysis_preparation_length_max_KO', 'El bib no puede tener más de 200 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 35, 'no alfabético/espacios/signos', 'SEARCH', 'bib_analysis_preparation_format_KO', 'El bib no puede tener caracteres no alfabéticos o espacios o signos de puntuación'),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 'alfabético/espacios/signos', 'SEARCH', true, 'Válido'),

    // ficheros

    // ADD

    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 'no existe', 'ADD', 'nuevo_file_analysis_preparation_empty_KO', 'Debes seleccionar un archivo.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 'longitud < 7', 'ADD', 'nuevo_file_analysis_preparation_length_min_KO', 'El archivo no puede tener menos de 7 caracteres.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 'longitud > 100', 'ADD', 'nuevo_file_analysis_preparation_length_max_KO', 'El archivo no puede tener más de 100 caracteres.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 40, 'no alfabético/. o acentos/ñ/espacios', 'ADD', 'nuevo_file_analysis_preparation_empty_KO', 'El nombre del archivo sólo puede tener letras y punto.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 41, 'no pdf/doc/docx', 'ADD', 'nuevo_file_analysis_preparation_type_KO', 'El archivo sólo puede ser de tipo pdf, doc o docx.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 42, 'archivo > 2MB', 'ADD', 'nuevo_file_analysis_preparation_size_KO', 'El archivo debe ocupar 2MB o menos.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 43, 'correcto', 'ADD', true, 'Válido.'),

    // EDIT

    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 44, 'longitud < 7', 'EDIT', 'nuevo_file_analysis_preparation_length_min_KO', 'El archivo no puede tener menos de 7 caracteres.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 45, 'longitud > 100', 'EDIT', 'nuevo_file_analysis_preparation_length_max_KO', 'El archivo no puede tener más de 100 caracteres.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 46, 'no alfabético/. o acentos/ñ/espacios', 'EDIT', 'nuevo_file_analysis_preparation_empty_KO', 'El nombre del archivo sólo puede tener letras y punto.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 47, 'no pdf/doc/docx', 'EDIT', 'nuevo_file_analysis_preparation_type_KO', 'El archivo sólo puede ser de tipo pdf, doc o docx.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 48, 'archivo > 2MB', 'EDIT', 'nuevo_file_analysis_preparation_size_KO', 'El archivo debe ocupar 2MB o menos.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 49, 'correcto', 'EDIT', true, 'Válido.'),

    // SEARCH

    Array('analysis_preparation', 'file_analysis_preparation', 50, 'longitud > 100', 'SEARCH', 'file_analysis_preparation_length_max_KO', 'El archivo no puede tener más de 100 caracteres.'),
    Array('analysis_preparation', 'file_analysis_preparation', 51, 'no alfabético/. o acentos/ñ/espacios', 'SEARCH', 'file_analysis_preparation_empty_KO', 'El nombre del archivo sólo puede tener letras y punto.'),
    Array('analysis_preparation', 'file_analysis_preparation', 52, 'correcto', 'SEARCH', true, 'Válido.'),

);
let pruebas_analysis_preparation = Array(

    // ADD

    Array('analysis_preparation', 'name_analysis_preparation', 1, 1, 'ADD', 'x'.repeat(7), 'name_analysis_preparation_length_min_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 1, 2, 'ADD', 'x'.repeat(8), true),
    Array('analysis_preparation', 'name_analysis_preparation', 2, 3, 'ADD', 'x'.repeat(101), 'name_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 2, 4, 'ADD', 'x'.repeat(100), true),
    Array('analysis_preparation', 'name_analysis_preparation', 3, 5, 'ADD', 'ñ'.repeat(8), 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 3, 6, 'ADD', 'x'.repeat(8), true),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 7, 'ADD', 'ñ'.repeat(8), 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 8, 'ADD', 'x'.repeat(8), true),

    Array('analysis_preparation', 'description_analysis_preparation', 5, 9, 'ADD', 'x'.repeat(79), 'description_analysis_preparation_length_min_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 5, 10, 'ADD', 'x'.repeat(80), true),
    Array('analysis_preparation', 'description_analysis_preparation', 6, 11, 'ADD', 'x'.repeat(5001), 'description_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 6, 12, 'ADD', 'x'.repeat(5000), true),
    Array('analysis_preparation', 'description_analysis_preparation', 7, 13, 'ADD', 'ñ'.repeat(80), 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 7, 14, 'ADD', 'x'.repeat(80), true),
    Array('analysis_preparation', 'description_analysis_preparation', 8, 15, 'ADD', 'ñ'.repeat(80), 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 8, 16, 'ADD', 'x'.repeat(80), true),

    Array('analysis_preparation', 'bib_analysis_preparation', 9, 17, 'ADD', 'x'.repeat(5), 'bib_analysis_preparation_length_min_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 9, 18, 'ADD', 'x'.repeat(6), true),
    Array('analysis_preparation', 'bib_analysis_preparation', 10, 19, 'ADD', 'x'.repeat(201), 'bib_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 10, 20, 'ADD', 'x'.repeat(200), true),
    Array('analysis_preparation', 'bib_analysis_preparation', 11, 21, 'ADD', '0'.repeat(6), 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 11, 22, 'ADD', 'x'.repeat(6), true),
    Array('analysis_preparation', 'bib_analysis_preparation', 12, 23, 'ADD', '0'.repeat(6), 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 12, 24, 'ADD', 'x'.repeat(6), true),

    // EDIT

    Array('analysis_preparation', 'name_analysis_preparation', 13, 25, 'EDIT', 'x'.repeat(7), 'name_analysis_preparation_length_min_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 13, 26, 'EDIT', 'x'.repeat(8), true),
    Array('analysis_preparation', 'name_analysis_preparation', 14, 27, 'EDIT', 'x'.repeat(101), 'name_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 14, 28, 'EDIT', 'x'.repeat(100), true),
    Array('analysis_preparation', 'name_analysis_preparation', 15, 29, 'EDIT', 'ñ'.repeat(8), 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 15, 30, 'EDIT', 'x'.repeat(8), true),
    Array('analysis_preparation', 'name_analysis_preparation', 16, 31, 'EDIT', 'ñ'.repeat(8), 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 16, 32, 'EDIT', 'x'.repeat(8), true),

    Array('analysis_preparation', 'description_analysis_preparation', 17, 33, 'EDIT', 'x'.repeat(79), 'description_analysis_preparation_length_min_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 17, 34, 'EDIT', 'x'.repeat(80), true),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 35, 'EDIT', 'x'.repeat(5001), 'description_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 36, 'EDIT', 'x'.repeat(5000), true),
    Array('analysis_preparation', 'description_analysis_preparation', 19, 37, 'EDIT', 'ñ'.repeat(80), 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 19, 38, 'EDIT', 'x'.repeat(80), true),
    Array('analysis_preparation', 'description_analysis_preparation', 20, 39, 'EDIT', 'ñ'.repeat(80), 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 20, 40, 'EDIT', 'x'.repeat(80), true),

    Array('analysis_preparation', 'bib_analysis_preparation', 21, 41, 'EDIT', 'x'.repeat(5), 'bib_analysis_preparation_length_min_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 21, 42, 'EDIT', 'x'.repeat(6), true),
    Array('analysis_preparation', 'bib_analysis_preparation', 22, 43, 'EDIT', 'x'.repeat(201), 'bib_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 22, 44, 'EDIT', 'x'.repeat(200), true),
    Array('analysis_preparation', 'bib_analysis_preparation', 23, 45, 'EDIT', '0'.repeat(6), 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 23, 46, 'EDIT', 'x'.repeat(6), true),
    Array('analysis_preparation', 'bib_analysis_preparation', 24, 47, 'EDIT', '0'.repeat(6), 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 24, 48, 'EDIT', 'x'.repeat(6), true),

    // SEARCH

    Array('analysis_preparation', 'id_analysis_preparation', 25, 49, 'SEARCH', '0'.repeat(12), 'id_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 25, 50, 'SEARCH', '0'.repeat(11), true),
    Array('analysis_preparation', 'id_analysis_preparation', 26, 51, 'SEARCH', 'x', 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 26, 52, 'SEARCH', '0', true),
    Array('analysis_preparation', 'id_analysis_preparation', 27, 53, 'SEARCH', 'x', 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 27, 54, 'SEARCH', '0', true),

    Array('analysis_preparation', 'name_analysis_preparation', 28, 55, 'SEARCH', 'x'.repeat(101), 'name_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 28, 56, 'SEARCH', 'x'.repeat(100), true),
    Array('analysis_preparation', 'name_analysis_preparation', 29, 57, 'SEARCH', 'ñ'.repeat(8), 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 29, 58, 'SEARCH', 'x'.repeat(8), true),
    Array('analysis_preparation', 'name_analysis_preparation', 30, 59, 'SEARCH', 'ñ'.repeat(8), 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 30, 60, 'SEARCH', 'x'.repeat(8), true),

    Array('analysis_preparation', 'description_analysis_preparation', 31, 61, 'SEARCH', 'x'.repeat(5001), 'description_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 31, 62, 'SEARCH', 'x'.repeat(5000), true),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 63, 'SEARCH', 'ñ'.repeat(80), 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 64, 'SEARCH', 'x'.repeat(80), true),
    Array('analysis_preparation', 'description_analysis_preparation', 33, 65, 'SEARCH', 'ñ'.repeat(80), 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 33, 66, 'SEARCH', 'x'.repeat(80), true),

    Array('analysis_preparation', 'bib_analysis_preparation', 34, 67, 'SEARCH', 'x'.repeat(201), 'bib_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 34, 68, 'SEARCH', 'x'.repeat(200), true),
    Array('analysis_preparation', 'bib_analysis_preparation', 35, 69, 'SEARCH', '0'.repeat(6), 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 35, 70, 'SEARCH', 'x'.repeat(6), true),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 71, 'SEARCH', '0'.repeat(6), 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 72, 'SEARCH', 'x'.repeat(6), true),

    Array('analysis_preparation', 'file_analysis_preparation', 50, 73, 'SEARCH', 'x'.repeat(101), 'file_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 50, 74, 'SEARCH', 'nombreDeArchivo', true),
    Array('analysis_preparation', 'file_analysis_preparation', 51, 75, 'SEARCH', 'n o m b r e D e A r c h i v o', 'file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 51, 76, 'SEARCH', 'nombreDeArchivo', true),
    Array('analysis_preparation', 'file_analysis_preparation', 52, 77, 'SEARCH', 'n o m b r e D e A r c h i v o', 'file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 52, 78, 'SEARCH', 'nombreDeArchivo', true),

);
let pruebas_file_analysis_preparation = Array(

    // ADD

    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 1, 'ADD', 'empty_file', Array(), 'nuevo_file_analysis_preparation_empty_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 2, 'ADD', 'empty_file', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 3, 'ADD', 'length_min', Array('nombre', Array('application/pdf'), 5000), 'nuevo_file_analysis_preparation_length_min_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 4, 'ADD', 'length_min', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 5, 'ADD', 'length_max', Array('x'.repeat(101), Array('application/pdf'), 5000), 'nuevo_file_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 6, 'ADD', 'length_max', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 40, 7, 'ADD', 'format_name', Array('n o m b r e D e A r c h i v o', Array('application/pdf'), 5000), 'nuevo_file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 40, 8, 'ADD', 'format_name', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 41, 9, 'ADD', 'type_file', Array('nombreDeArchivo', Array('image/jpeg'), 5000), 'nuevo_file_analysis_preparation_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 41, 10, 'ADD', 'type_file', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 42, 11, 'ADD', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 2000001), 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 42, 12, 'ADD', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 43, 13, 'ADD', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 2000001), 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 43, 14, 'ADD', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),


    // EDIT

    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 44, 15, 'EDIT', 'length_min', Array('nombre', Array('application/pdf'), 5000), 'nuevo_file_analysis_preparation_length_min_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 44, 16, 'EDIT', 'length_min', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 45, 17, 'EDIT', 'length_max', Array('x'.repeat(101), Array('application/pdf'), 5000), 'nuevo_file_analysis_preparation_length_max_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 45, 18, 'EDIT', 'length_max', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 46, 19, 'EDIT', 'format_name', Array('n o m b r e D e A r c h i v o', Array('application/pdf'), 5000), 'nuevo_file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 46, 20, 'EDIT', 'format_name', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 47, 21, 'EDIT', 'type_file', Array('nombreDeArchivo', Array('image/jpeg'), 5000), 'nuevo_file_analysis_preparation_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 47, 22, 'EDIT', 'type_file', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 48, 23, 'EDIT', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 2000001), 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 48, 24, 'EDIT', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 49, 25, 'EDIT', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 2000001), 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 49, 26, 'EDIT', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),


);



let def_tests_characteristic = Array(

    // ADD

    Array('characteristic', 'name_characteristic', 1, 'longitud < 8', 'ADD', 'name_characteristic_length_min_KO', 'El nombre de la característica no puede tener menos de 15 caracteres'),
    Array('characteristic', 'name_characteristic', 2, 'longitud > 100', 'ADD', 'name_characteristic_length_max_KO', 'El nombre de la característica no puede tener más de 100 caracteres'),
    Array('characteristic', 'name_characteristic', 3, 'no alfabético/espacios o acentos/ñ', 'ADD', 'name_characteristic_format_KO', 'El nombre de la característica solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('characteristic', 'name_characteristic', 4, 'alfabético/espacios', 'ADD', true, 'Válido'),

    Array('characteristic', 'description_characteristic', 5, 'longitud < 80', 'ADD', 'description_characteristic_length_min_KO', 'La descripción de la característica no puede tener menos de 380 caracteres'),
    Array('characteristic', 'description_characteristic', 6, 'longitud > 5000', 'ADD', 'description_characteristic_length_max_KO', 'La descripción de la característica no puede tener más de 5000 caracteres'),
    Array('characteristic', 'description_characteristic', 7, 'no alfabético/espacios o acentos/ñ', 'ADD', 'description_characteristic_format_KO', 'La descripción solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('characteristic', 'description_characteristic', 8, 'alfabético/espacios', 'ADD', true, 'Válido'),

    Array('characteristic', 'bibref_characteristic', 9, 'longitud < 16', 'ADD', 'bibref_characteristic_length_min_KO', 'La bibref de la característica no puede tener menos de 380 caracteres'),
    Array('characteristic', 'bibref_characteristic', 10, 'longitud > 200', 'ADD', 'bibref_characteristic_length_max_KO', 'La bibref de la característica no puede tener más de 5000 caracteres'),
    Array('characteristic', 'bibref_characteristic', 11, 'no alfabético/espacios/ñ/espacios/signos', 'ADD', 'bibref_characteristic_format_KO', 'La bibref solo puede contener letras y espacios, con acentos y ñ'),
    Array('characteristic', 'bibref_characteristic', 12, 'alfabético/espacios/ñ/espacios/signos', 'ADD', true, 'Válido'),

    // SEARCH

    Array('characteristic', 'id_characteristic', 13, 'longitud > 11', 'SEARCH', 'id_characteristic_length_max_KO', 'El ID de la característica no puede tener más de 11 caracteres'),
    Array('characteristic', 'id_characteristic', 14, 'no digitos', 'SEARCH', 'id_characteristic_format_KO', 'El ID de la característica solo puede contener digitos'),
    Array('characteristic', 'id_characteristic', 15, 'alfabético/espacios', 'SEARCH', true, 'Válido'),

    Array('characteristic', 'name_characteristic', 16, 'longitud > 100', 'SEARCH', 'name_characteristic_length_max_KO', 'El nombre de la característica no puede tener más de 100 caracteres'),
    Array('characteristic', 'name_characteristic', 17, 'no alfabético/espacios o acentos/ñ', 'SEARCH', 'name_characteristic_format_KO', 'El nombre de la característica solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('characteristic', 'name_characteristic', 18, 'alfabético/espacios', 'SEARCH', true, 'Válido'),

    Array('characteristic', 'description_characteristic', 19, 'longitud > 5000', 'SEARCH', 'description_characteristic_length_max_KO', 'La descripción de la característica no puede tener más de 5000 caracteres'),
    Array('characteristic', 'description_characteristic', 20, 'no alfabético/espacios o acentos/ñ', 'SEARCH', 'description_characteristic_format_KO', 'La descripción solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('characteristic', 'description_characteristic', 21, 'alfabético/espacios', 'SEARCH', true, 'Válido'),

    Array('characteristic', 'bibref_characteristic', 22, 'longitud > 200', 'SEARCH', 'bibref_characteristic_length_max_KO', 'La bibref de la característica no puede tener más de 5000 caracteres'),
    Array('characteristic', 'bibref_characteristic', 23, 'no alfabético/espacios/ñ/espacios/signos', 'SEARCH', 'bibref_characteristic_format_KO', 'La bibref solo puede contener letras y espacios, con acentos y ñ'),
    Array('characteristic', 'bibref_characteristic', 24, 'alfabético/espacios/ñ/espacios/signos', 'SEARCH', true, 'Válido'),

    // EDIT

    Array('characteristic', 'name_characteristic', 25, 'longitud < 8', 'EDIT', 'name_characteristic_length_min_KO', 'El nombre de la característica no puede tener menos de 15 caracteres'),
    Array('characteristic', 'name_characteristic', 26, 'longitud > 100', 'EDIT', 'name_characteristic_length_max_KO', 'El nombre de la característica no puede tener más de 100 caracteres'),
    Array('characteristic', 'name_characteristic', 27, 'no alfabético/espacios o acentos/ñ', 'EDIT', 'name_characteristic_format_KO', 'El nombre de la característica solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('characteristic', 'name_characteristic', 28, 'alfabético/espacios', 'EDIT', true, 'Válido'),

    Array('characteristic', 'description_characteristic', 29, 'longitud < 80', 'EDIT', 'description_characteristic_length_min_KO', 'La descripción de la característica no puede tener menos de 380 caracteres'),
    Array('characteristic', 'description_characteristic', 30, 'longitud > 5000', 'EDIT', 'description_characteristic_length_max_KO', 'La descripción de la característica no puede tener más de 5000 caracteres'),
    Array('characteristic', 'description_characteristic', 31, 'no alfabético/espacios o acentos/ñ', 'EDIT', 'description_characteristic_format_KO', 'La descripción solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('characteristic', 'description_characteristic', 32, 'alfabético/espacios', 'EDIT', true, 'Válido'),

    Array('characteristic', 'bibref_characteristic', 33, 'longitud < 16', 'EDIT', 'bibref_characteristic_length_min_KO', 'La bibref de la característica no puede tener menos de 380 caracteres'),
    Array('characteristic', 'bibref_characteristic', 34, 'longitud > 200', 'EDIT', 'bibref_characteristic_length_max_KO', 'La bibref de la característica no puede tener más de 5000 caracteres'),
    Array('characteristic', 'bibref_characteristic', 35, 'no alfabético/espacios/ñ/espacios/signos', 'EDIT', 'bibref_characteristic_format_KO', 'La bibref solo puede contener letras y espacios, con acentos y ñ'),
    Array('characteristic', 'bibref_characteristic', 36, 'alfabético/espacios/ñ/espacios/signos', 'EDIT', true, 'Válido'),

    // ficheros

    // ADD

    Array('characteristic', 'nuevo_file_characteristic', 37, 'no existe', 'ADD', 'nuevo_file_characteristic_empty_KO', 'Debes seleccionar un archivo'),
    Array('characteristic', 'nuevo_file_characteristic', 38, 'longitud < 7', 'ADD', 'nuevo_file_characteristic_length_min_KO', 'El archivo no puede tener menos de 7 caracteres'),
    Array('characteristic', 'nuevo_file_characteristic', 39, 'longitud > 100', 'ADD', 'nuevo_file_characteristic_length_max_KO', 'El archivo no puede tener más de 100 caracteres'),
    Array('characteristic', 'nuevo_file_characteristic', 40, 'no alfabético/. o acentos/ñ/espacios', 'ADD', 'nuevo_file_characteristic_format_KO', 'El nombre del archivo sólo puede tener letras y punto'),
    Array('characteristic', 'nuevo_file_characteristic', 41, 'no pdf/doc/docx', 'ADD', 'nuevo_file_characteristic_type_KO', 'El archivo sólo puede ser de tipo pdf, doc o docx'),
    Array('characteristic', 'nuevo_file_characteristic', 42, 'archivo > 2MB', 'ADD', 'nuevo_file_characteristic_size_KO', 'El archivo debe ocupar 2MB o menos'),
    Array('characteristic', 'nuevo_file_characteristic', 43, 'correcto', 'ADD', true, 'Válido'),

    // EDIT

    Array('characteristic', 'nuevo_file_characteristic', 44, 'longitud < 7', 'EDIT', 'nuevo_file_characteristic_length_min_KO', 'El archivo no puede tener menos de 7 caracteres'),
    Array('characteristic', 'nuevo_file_characteristic', 45, 'longitud > 100', 'EDIT', 'nuevo_file_characteristic_length_max_KO', 'El archivo no puede tener más de 100 caracteres'),
    Array('characteristic', 'nuevo_file_characteristic', 46, 'no alfabético/. o acentos/ñ/espacios', 'EDIT', 'nuevo_file_characteristic_format_KO', 'El nombre del archivo sólo puede tener letras y punto'),
    Array('characteristic', 'nuevo_file_characteristic', 47, 'no pdf/doc/docx', 'EDIT', 'nuevo_file_characteristic_type_KO', 'El archivo sólo puede ser de tipo pdf, doc o docx'),
    Array('characteristic', 'nuevo_file_characteristic', 48, 'archivo > 2MB', 'EDIT', 'nuevo_file_characteristic_size_KO', 'El archivo debe ocupar 2MB o menos'),
    Array('characteristic', 'nuevo_file_characteristic', 49, 'correcto', 'EDIT', true, 'Válido'),

    // SEARCH

    Array('characteristic', 'file_characteristic', 50, 'longitud > 100', 'SEARCH', 'file_characteristic_length_max_KO', 'El nombre del archivo no puede tener más de 100 caracteres'),
    Array('characteristic', 'file_characteristic', 51, 'no alfabético o acentos/ñ/espacios', 'SEARCH', 'file_characteristic_format_KO', 'El nombre del archivo solo puede contener letras sin acentos ni ñ, y no puede tener espacios'),
    Array('characteristic', 'file_characteristic', 52, 'alfabético y válido', 'SEARCH', true, 'Válido'),

);
let pruebas_characteristic = Array(

    // ADD
    Array('characteristic', 'name_characteristic', 1, 1, 'ADD', 'x'.repeat(7), 'name_characteristic_length_min_KO'),
    Array('characteristic', 'name_characteristic', 1, 2, 'ADD', 'x'.repeat(8), true),
    Array('characteristic', 'name_characteristic', 2, 3, 'ADD', 'x'.repeat(101), 'name_characteristic_length_max_KO'),
    Array('characteristic', 'name_characteristic', 2, 4, 'ADD', 'x'.repeat(100), true),
    Array('characteristic', 'name_characteristic', 3, 5, 'ADD', 'ñ'.repeat(8), 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 3, 6, 'ADD', 'CaracteristicaValida', true),
    Array('characteristic', 'name_characteristic', 4, 7, 'ADD', 'ñ'.repeat(8), 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 4, 8, 'ADD', 'Caracteristica Correcta', true),

    Array('characteristic', 'description_characteristic', 5, 9, 'ADD', 'x'.repeat(79), 'description_characteristic_length_min_KO'),
    Array('characteristic', 'description_characteristic', 5, 10, 'ADD', 'x'.repeat(80), true),
    Array('characteristic', 'description_characteristic', 6, 11, 'ADD', 'x'.repeat(5001), 'description_characteristic_length_max_KO'),
    Array('characteristic', 'description_characteristic', 6, 12, 'ADD', 'x'.repeat(5000), true),
    Array('characteristic', 'description_characteristic', 7, 13, 'ADD', 'ñ'.repeat(80), 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 7, 14, 'ADD', 'DescripcionCorrecta', true),
    Array('characteristic', 'description_characteristic', 8, 15, 'ADD', 'ñ'.repeat(80), 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 8, 16, 'ADD', 'Descripcion Correcta', true),

    Array('characteristic', 'bibref_characteristic', 9, 17, 'ADD', 'x'.repeat(15), 'bibref_characteristic_length_min_KO'),
    Array('characteristic', 'bibref_characteristic', 9, 18, 'ADD', 'x'.repeat(16), true),
    Array('characteristic', 'bibref_characteristic', 10, 19, 'ADD', 'x'.repeat(201), 'bibref_characteristic_length_max_KO'),
    Array('characteristic', 'bibref_characteristic', 10, 20, 'ADD', 'x'.repeat(200), true),
    Array('characteristic', 'bibref_characteristic', 11, 21, 'ADD', 'Referencia$', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 11, 22, 'ADD', 'Referencia Correcta', true),
    Array('characteristic', 'bibref_characteristic', 12, 23, 'ADD', 'Referencia$', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 12, 24, 'ADD', 'Referencia Correcta', true),

    // SEARCH
    Array('characteristic', 'id_characteristic', 13, 25, 'SEARCH', '123456789012', 'id_characteristic_length_max_KO'),
    Array('characteristic', 'id_characteristic', 13, 26, 'SEARCH', '12345678901', true),
    Array('characteristic', 'id_characteristic', 14, 27, 'SEARCH', 'abc123', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 14, 28, 'SEARCH', '12345', true),
    Array('characteristic', 'id_characteristic', 15, 29, 'SEARCH', 'abc123', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 15, 30, 'SEARCH', '12345', true),

    Array('characteristic', 'name_characteristic', 16, 31, 'SEARCH', 'x'.repeat(101), 'name_characteristic_length_max_KO'),
    Array('characteristic', 'name_characteristic', 16, 32, 'SEARCH', 'x'.repeat(100), true),
    Array('characteristic', 'name_characteristic', 17, 33, 'SEARCH', 'ñ'.repeat(8), 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 17, 34, 'SEARCH', 'Nombre Valido', true),
    Array('characteristic', 'name_characteristic', 18, 35, 'SEARCH', 'ñ'.repeat(8), 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 18, 36, 'SEARCH', 'Nombre Valido', true),

    Array('characteristic', 'description_characteristic', 19, 37, 'SEARCH', 'x'.repeat(5001), 'description_characteristic_length_max_KO'),
    Array('characteristic', 'description_characteristic', 19, 38, 'SEARCH', 'x'.repeat(5000), true),
    Array('characteristic', 'description_characteristic', 20, 39, 'SEARCH', 'ñ'.repeat(80), 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 20, 40, 'SEARCH', 'Descripcion Valida', true),
    Array('characteristic', 'description_characteristic', 21, 41, 'SEARCH', 'ñ'.repeat(80), 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 21, 42, 'SEARCH', 'Descripcion Valida', true),

    Array('characteristic', 'bibref_characteristic', 22, 43, 'SEARCH', 'x'.repeat(201), 'bibref_characteristic_length_max_KO'),
    Array('characteristic', 'bibref_characteristic', 22, 44, 'SEARCH', 'x'.repeat(200), true),
    Array('characteristic', 'bibref_characteristic', 23, 45, 'SEARCH', 'Invalida123$', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 23, 46, 'SEARCH', 'Referencia válida con ñ y acentos', true),
    Array('characteristic', 'bibref_characteristic', 24, 47, 'SEARCH', 'Invalido*%^$', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 24, 48, 'SEARCH', 'Solo espacios y ñ válidos', true),

    Array('characteristic', 'file_characteristic', 50, 49, 'SEARCH', 'x'.repeat(101), 'file_characteristic_length_max_KO'),
    Array('characteristic', 'file_characteristic', 50, 50, 'SEARCH', 'archivo.pdf', true),
    Array('characteristic', 'file_characteristic', 51, 51, 'SEARCH', 'archivo invalido$', 'file_characteristic_format_KO'),
    Array('characteristic', 'file_characteristic', 51, 52, 'SEARCH', 'archivo', true),
    Array('characteristic', 'file_characteristic', 52, 53, 'SEARCH', 'archivo123$', 'file_characteristic_format_KO'),
    Array('characteristic', 'file_characteristic', 52, 54, 'SEARCH', 'archivo.pdf', true),


    // EDIT
    Array('characteristic', 'name_characteristic', 25, 55, 'EDIT', 'x'.repeat(7), 'name_characteristic_length_min_KO'),
    Array('characteristic', 'name_characteristic', 25, 56, 'EDIT', 'x'.repeat(8), true),
    Array('characteristic', 'name_characteristic', 26, 57, 'EDIT', 'x'.repeat(101), 'name_characteristic_length_max_KO'),
    Array('characteristic', 'name_characteristic', 26, 58, 'EDIT', 'x'.repeat(100), true),
    Array('characteristic', 'name_characteristic', 27, 59, 'EDIT', 'ñ'.repeat(8), 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 27, 60, 'EDIT', 'NombreEditadoCorrecto', true),
    Array('characteristic', 'name_characteristic', 28, 61, 'EDIT', 'Invalida123$', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 28, 62, 'EDIT', 'Nombre Valido', true),

    Array('characteristic', 'description_characteristic', 29, 63, 'EDIT', 'x'.repeat(79), 'description_characteristic_length_min_KO'),
    Array('characteristic', 'description_characteristic', 29, 64, 'EDIT', 'x'.repeat(80), true),
    Array('characteristic', 'description_characteristic', 30, 65, 'EDIT', 'x'.repeat(5001), 'description_characteristic_length_max_KO'),
    Array('characteristic', 'description_characteristic', 30, 66, 'EDIT', 'x'.repeat(5000), true),
    Array('characteristic', 'description_characteristic', 31, 67, 'EDIT', 'ñ'.repeat(80), 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 31, 68, 'EDIT', 'Descripcion Correcta', true),
    Array('characteristic', 'description_characteristic', 32, 69, 'EDIT', 'ñ'.repeat(80), 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 32, 70, 'EDIT', 'Descripcion Correcta', true),

    Array('characteristic', 'bibref_characteristic', 33, 71, 'EDIT', 'x'.repeat(15), 'bibref_characteristic_length_min_KO'),
    Array('characteristic', 'bibref_characteristic', 33, 72, 'EDIT', 'x'.repeat(16), true),
    Array('characteristic', 'bibref_characteristic', 34, 73, 'EDIT', 'x'.repeat(201), 'bibref_characteristic_length_max_KO'),
    Array('characteristic', 'bibref_characteristic', 34, 74, 'EDIT', 'x'.repeat(200), true),
    Array('characteristic', 'bibref_characteristic', 35, 75, 'EDIT', 'Invalido123$', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 35, 76, 'EDIT', 'Referencia válida con ñ y acentos', true),
    Array('characteristic', 'bibref_characteristic', 36, 77, 'EDIT', 'Invalido@%^$', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 36, 78, 'EDIT', 'Solo espacios y ñ válidos', true)


);
let pruebas_file_characteristic = Array(

    // ADD
    Array('characteristic', 'nuevo_file_characteristic', 37, 1, 'ADD', 'empty_file', Array(), 'nuevo_file_characteristic_empty_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 37, 2, 'ADD', 'empty_file', Array('archivo.pdf', Array('application/pdf'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 38, 3, 'ADD', 'length_min', Array('arc', Array('application/pdf'), 5000), 'nuevo_file_characteristic_length_min_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 38, 4, 'ADD', 'length_min', Array('archivo.pdf', Array('application/pdf'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 39, 5, 'ADD', 'length_max', Array('x'.repeat(101), Array('application/pdf'), 5000), 'nuevo_file_characteristic_length_max_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 39, 6, 'ADD', 'length_max', Array('archivo.pdf', Array('application/pdf'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 40, 7, 'ADD', 'format_name', Array('archivo_invalido$', Array('application/pdf'), 5000), 'nuevo_file_characteristic_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 40, 8, 'ADD', 'format_name', Array('archivo.pdf', Array('application/pdf'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 41, 9, 'ADD', 'type_file', Array('archivo.jpeg', Array('image/jpeg'), 5000), 'nuevo_file_characteristic_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 41, 10, 'ADD', 'type_file', Array('archivo.docx', Array('application/vnd.openxmlformats-officedocument.wordprocessingml.document'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 42, 11, 'ADD', 'max_size', Array('archivo.pdf', Array('application/pdf'), 2000001), 'nuevo_file_characteristic_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 42, 12, 'ADD', 'max_size', Array('archivo.pdf', Array('application/pdf'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 43, 13, 'ADD', 'max_size', Array('archivo.pdf', Array('application/pdf'), 2000001), 'nuevo_file_characteristic_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 43, 14, 'ADD', 'max_size', Array('archivo.pdf', Array('application/pdf'), 5000), true),

    // EDIT
    Array('characteristic', 'nuevo_file_characteristic', 44, 15, 'EDIT', 'length_min', Array('arc', Array('application/pdf'), 5000), 'nuevo_file_characteristic_length_min_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 44, 16, 'EDIT', 'length_min', Array('archivo.pdf', Array('application/pdf'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 45, 17, 'EDIT', 'length_max', Array('x'.repeat(101), Array('application/pdf'), 5000), 'nuevo_file_characteristic_length_max_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 45, 18, 'EDIT', 'length_max', Array('archivo.pdf', Array('application/pdf'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 46, 19, 'EDIT', 'format_name', Array('archivo_invalido$', Array('application/pdf'), 5000), 'nuevo_file_characteristic_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 46, 20, 'EDIT', 'format_name', Array('archivo.pdf', Array('application/pdf'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 47, 21, 'EDIT', 'type_file', Array('archivo.jpeg', Array('image/jpeg'), 5000), 'nuevo_file_characteristic_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 47, 22, 'EDIT', 'type_file', Array('archivo.docx', Array('application/vnd.openxmlformats-officedocument.wordprocessingml.document'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 48, 23, 'EDIT', 'max_size', Array('archivo.pdf', Array('application/pdf'), 2000001), 'nuevo_file_characteristic_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 48, 24, 'EDIT', 'max_size', Array('archivo.pdf', Array('application/pdf'), 5000), true),
    Array('characteristic', 'nuevo_file_characteristic', 49, 25, 'EDIT', 'max_size', Array('archivo.pdf', Array('application/pdf'), 2000001), 'nuevo_file_characteristic_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 49, 26, 'EDIT', 'max_size', Array('archivo.pdf', Array('application/pdf'), 5000), true),
);



let def_tests_project = Array(

    // ADD

    Array('project', 'name_project', 1, 'longitud < 15', 'ADD', 'name_project_length_min_KO', 'El nombre del proyecto no puede tener menos de 15 caracteres'),
    Array('project', 'name_project', 2, 'longitud > 100', 'ADD', 'name_project_length_max_KO', 'El nombre del proyecto no puede tener más de 100 caracteres'),
    Array('project', 'name_project', 3, 'no alfabético/espacios o acentos/ñ', 'ADD', 'name_project_format_KO', 'El nombre del proyecto solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('project', 'name_project', 4, 'alfabético/epacios', 'ADD', true, 'Válido'),

    Array('project', 'start_date_project', 5, 'no DD/MM/YYYY (numérico)', 'ADD', 'start_date_project_format_KO', 'La fecha de inicio del proyecto debe tener la forma: DD/MM/YYYY'),
    Array('project', 'start_date_project', 6, '0 > DD < 32', 'ADD', 'start_date_project_day_KO', 'El día de inicio del proyecto debe ser un día válido (1-31)'),
    Array('project', 'start_date_project', 7, '0 > MM < 13', 'ADD', 'start_date_project_month_KO', 'El mes de inicio del proyecto debe ser un día válido (1-12)'),
    Array('project', 'start_date_project', 8, 'DD/MM/YYYY (numérico)', 'ADD', true, 'Válido'),

    Array('project', 'end_date_project', 9, 'no DD/MM/YYYY (numérico)', 'ADD', 'end_date_project_format_KO', 'La fecha de fin del proyecto debe tener la forma: DD/MM/YYYY'),
    Array('project', 'end_date_project', 10, 'DD < 32', 'ADD', 'end_date_project_day_KO', 'El día de fin del proyecto debe ser un día válido (1-31)'),
    Array('project', 'end_date_project', 11, 'MM < 13', 'ADD', 'end_date_project_month_KO', 'El mes de fin del proyecto debe ser un día válido (1-12)'),
    Array('project', 'end_date_project', 12, 'DD/MM/YYYY (numérico)', 'ADD', true, 'Válido'),

    Array('project', 'responsable_project', 13, 'longitud < 6', 'ADD', 'responsable_project_length_min_KO', 'El nombre del responsable no puede tener menos de 6 caracteres'),
    Array('project', 'responsable_project', 14, 'longitud > 60', 'ADD', 'responsable_project_length_max_KO', 'El nombre del responsable no puede tener más de 60 caracteres'),
    Array('project', 'responsable_project', 15, 'no alfabético', 'ADD', 'responsable_project_format_KO', 'El nombre del responsable solo puede contener letras, acentos, ñ y espacios'),
    Array('project', 'responsable_project', 16, 'alfabético', 'ADD', true, 'Válido'),

    Array('project', 'organization_project', 17, 'longitud < 6', 'ADD', 'organization_project_length_min_KO', 'El nombre de la organización no puede tener menos de 6 caracteres'),
    Array('project', 'organization_project', 18, 'longitud > 100', 'ADD', 'organization_project_length_max_KO', 'El nombre de la organización no puede tener más de 100 caracteres'),
    Array('project', 'organization_project', 19, 'no alfabético', 'ADD', 'organization_project_format_KO', 'El nombre de la organización solo puede contener letras, acentos, ñ y espacios'),
    Array('project', 'organization_project', 20, 'alfabético', 'ADD', true, 'Válido'),

    Array('project', 'description_project', 21, 'longitud < 30', 'ADD', 'description_project_length_min_KO', 'La descripción del proyecto no puede tener menos de 30 caracteres'),
    Array('project', 'description_project', 22, 'longitud > 500', 'ADD', 'description_project_length_max_KO', 'La descripción del proyecto no puede tener más de 500 caracteres'),
    Array('project', 'description_project', 23, 'no ascii', 'ADD', 'description_project_format_KO', 'La descripción del proyecto no puede tener caracteres no ASCII'),
    Array('project', 'description_project', 24, 'ascii', 'ADD', true, 'Válido'),

    Array('project', 'code_project', 25, 'longitud < 6', 'ADD', 'code_project_length_min_KO', 'El código del proyecto no puede tener menos de 6 caracteres'),
    Array('project', 'code_project', 26, 'longitud > 50', 'ADD', 'code_project_length_max_KO', 'El código del proyecto no puede tener más de 50 caracteres'),
    Array('project', 'code_project', 27, 'no alfabéticos/espacios/signos o acentos', 'ADD', 'code_project_format_KO', 'El código del proyecto no puede tener acentos o caracteres no alfabéticos/espacios/signos de puntuación'),
    Array('project', 'code_project', 28, 'alfabéticos/espacios/signos', 'ADD', true, 'Válido'),

    Array('project', 'acronym_project', 29, 'longitud < 6', 'ADD', 'acronym_project_length_min_KO', 'El acrónimo del proyecto no puede tener menos de 6 caracteres'),
    Array('project', 'acronym_project', 30, 'longitud > 15', 'ADD', 'acronym_project_length_max_KO', 'El acrónimo del proyecto no puede tener más de 15 caracteres'),
    Array('project', 'acronym_project', 31, 'no alfabéticos/signos o acentos/espacios', 'ADD', 'acronym_project_format_KO', 'El acrónimo del proyecto solo puede contener letras y signos de puntuación, no acentos ni espacios'),
    Array('project', 'acronym_project', 32, 'alfabéticos/signos', 'ADD', true, 'Válido'),

    Array('project', 'id_sampling_methodology', 33, 'longitud < 1', 'ADD', 'id_sampling_methodology_length_min_KO', 'El ID de la metodología de muestreo no puede tener menos de 1 carácter'),
    Array('project', 'id_sampling_methodology', 34, 'longitud > 11', 'ADD', 'id_sampling_methodology_length_max_KO', 'El ID de la metodología de muestreo no puede tener más de 11 caracteres'),
    Array('project', 'id_sampling_methodology', 35, 'no numérico', 'ADD', 'id_sampling_methodology_format_KO', 'El ID de la metodología de muestreo solo permite números'),
    Array('project', 'id_sampling_methodology', 36, 'numérico', 'ADD', true, 'Válido'),

    // EDIT

    Array('project', 'name_project', 37, 'longitud < 15', 'EDIT', 'name_project_length_min_KO', 'El nombre del proyecto no puede tener menos de 15 caracteres'),
    Array('project', 'name_project', 38, 'longitud > 100', 'EDIT', 'name_project_length_max_KO', 'El nombre del proyecto no puede tener más de 100 caracteres'),
    Array('project', 'name_project', 39, 'no alfabético/espacios o acentos/ñ', 'EDIT', 'name_project_format_KO', 'El nombre del proyecto solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('project', 'name_project', 40, 'alfabético/epacios', 'EDIT', true, 'Válido'),

    Array('project', 'start_date_project', 41, 'no DD/MM/YYYY (numérico)', 'EDIT', 'start_date_project_format_KO', 'La fecha de inicio del proyecto debe tener la forma: DD/MM/YYYY'),
    Array('project', 'start_date_project', 42, '0 > DD < 32', 'EDIT', 'start_date_project_day_KO', 'El día de inicio del proyecto debe ser un día válido (1-31)'),
    Array('project', 'start_date_project', 43, '0 > MM < 13', 'EDIT', 'start_date_project_month_KO', 'El mes de inicio del proyecto debe ser un día válido (1-12)'),
    Array('project', 'start_date_project', 44, 'DD/MM/YYYY (numérico)', 'EDIT', true, 'Válido'),

    Array('project', 'end_date_project', 45, 'no DD/MM/YYYY (numérico)', 'EDIT', 'end_date_project_format_KO', 'La fecha de fin del proyecto debe tener la forma: DD/MM/YYYY'),
    Array('project', 'end_date_project', 46, 'DD < 32', 'EDIT', 'end_date_project_day_KO', 'El día de fin del proyecto debe ser un día válido (1-31)'),
    Array('project', 'end_date_project', 47, 'MM < 13', 'EDIT', 'end_date_project_month_KO', 'El mes de fin del proyecto debe ser un día válido (1-12)'),
    Array('project', 'end_date_project', 48, 'DD/MM/YYYY (numérico)', 'EDIT', true, 'Válido'),

    Array('project', 'responsable_project', 49, 'longitud < 6', 'EDIT', 'responsable_project_length_min_KO', 'El nombre del responsable no puede tener menos de 6 caracteres'),
    Array('project', 'responsable_project', 50, 'longitud > 60', 'EDIT', 'responsable_project_length_max_KO', 'El nombre del responsable no puede tener más de 60 caracteres'),
    Array('project', 'responsable_project', 51, 'no alfabético', 'EDIT', 'responsable_project_format_KO', 'El nombre del responsable solo puede contener letras, acentos, ñ y espacios'),
    Array('project', 'responsable_project', 52, 'alfabético', 'EDIT', true, 'Válido'),

    Array('project', 'organization_project', 53, 'longitud < 6', 'EDIT', 'organization_project_length_min_KO', 'El nombre de la organización no puede tener menos de 6 caracteres'),
    Array('project', 'organization_project', 54, 'longitud > 100', 'EDIT', 'organization_project_length_max_KO', 'El nombre de la organización no puede tener más de 100 caracteres'),
    Array('project', 'organization_project', 55, 'no alfabético', 'EDIT', 'organization_project_format_KO', 'El nombre de la organización solo puede contener letras, acentos, ñ y espacios'),
    Array('project', 'organization_project', 56, 'alfabético', 'EDIT', true, 'Válido'),

    Array('project', 'description_project', 57, 'longitud < 30', 'EDIT', 'description_project_length_min_KO', 'La descripción del proyecto no puede tener menos de 30 caracteres'),
    Array('project', 'description_project', 58, 'longitud > 500', 'EDIT', 'description_project_length_max_KO', 'La descripción del proyecto no puede tener más de 500 caracteres'),
    Array('project', 'description_project', 59, 'no ascii', 'EDIT', 'description_project_format_KO', 'La descripción del proyecto no puede tener caracteres no ASCII'),
    Array('project', 'description_project', 60, 'ascii', 'EDIT', true, 'Válido'),

    Array('project', 'code_project', 61, 'longitud < 6', 'EDIT', 'code_project_length_min_KO', 'El código del proyecto no puede tener menos de 6 caracteres'),
    Array('project', 'code_project', 62, 'longitud > 50', 'EDIT', 'code_project_length_max_KO', 'El código del proyecto no puede tener más de 50 caracteres'),
    Array('project', 'code_project', 63, 'no alfabéticos/espacios/signos o acentos', 'EDIT', 'code_project_format_KO', 'El código del proyecto no puede tener acentos o caracteres no alfabéticos/espacios/signos de puntuación'),
    Array('project', 'code_project', 64, 'alfabéticos/espacios/signos', 'EDIT', true, 'Válido'),

    Array('project', 'acronym_project', 65, 'longitud < 6', 'EDIT', 'acronym_project_length_min_KO', 'El acrónimo del proyecto no puede tener menos de 6 caracteres'),
    Array('project', 'acronym_project', 66, 'longitud > 15', 'EDIT', 'acronym_project_length_max_KO', 'El acrónimo del proyecto no puede tener más de 15 caracteres'),
    Array('project', 'acronym_project', 67, 'no alfabéticos/signos o acentos/espacios', 'EDIT', 'acronym_project_format_KO', 'El acrónimo del proyecto solo puede contener letras y signos de puntuación, no acentos ni espacios'),
    Array('project', 'acronym_project', 68, 'alfabéticos/signos', 'EDIT', true, 'Válido'),

    Array('project', 'id_sampling_methodology', 69, 'longitud < 1', 'EDIT', 'id_sampling_methodology_length_min_KO', 'El ID de la metodología de muestreo no puede tener menos de 1 carácter'),
    Array('project', 'id_sampling_methodology', 70, 'longitud > 11', 'EDIT', 'id_sampling_methodology_length_max_KO', 'El ID de la metodología de muestreo no puede tener más de 11 caracteres'),
    Array('project', 'id_sampling_methodology', 71, 'no numérico', 'EDIT', 'id_sampling_methodology_format_KO', 'El ID de la metodología de muestreo solo permite números'),
    Array('project', 'id_sampling_methodology', 72, 'numérico', 'EDIT', true, 'Válido'),

    // SEARCH

    Array('project', 'id_project', 73, 'longitud > 11', 'SEARCH', 'id_project_length_max_KO', 'El ID del proyecto no puede tener más de 11 caracteres'),
    Array('project', 'id_project', 74, 'no numérico', 'SEARCH', 'id_project_format_KO', 'El ID del proyecto solo permite caracteres numéricos'),
    Array('project', 'id_project', 75, 'numérico', 'SEARCH', true, 'Válido'),

    Array('project', 'name_project', 76, 'longitud > 100', 'SEARCH', 'name_project_length_max_KO', 'El nombre del proyecto no puede tener más de 100 caracteres'),
    Array('project', 'name_project', 77, 'no alfabético/espacios o acentos/ñ', 'SEARCH', 'name_project_format_KO', 'El nombre del proyecto solo puede contener letras y espacios, sin acentos ni ñ'),
    Array('project', 'name_project', 78, 'alfabético/epacios', 'SEARCH', true, 'Válido'),

    Array('project', 'start_date_project', 79, 'no DD/MM/YYYY (numérico)', 'SEARCH', 'start_date_project_format_KO', 'La fecha de inicio del proyecto debe tener la forma: DD/MM/YYYY'),
    Array('project', 'start_date_project', 80, '0 > DD < 32', 'SEARCH', 'start_date_project_day_KO', 'El día de inicio del proyecto debe ser un día válido (1-31)'),
    Array('project', 'start_date_project', 81, '0 > MM < 13', 'SEARCH', 'start_date_project_month_KO', 'El mes de inicio del proyecto debe ser un día válido (1-12)'),
    Array('project', 'start_date_project', 82, 'DD/MM/YYYY (numérico)', 'SEARCH', true, 'Válido'),

    Array('project', 'end_date_project', 83, 'no DD/MM/YYYY (numérico)', 'SEARCH', 'end_date_project_format_KO', 'La fecha de fin del proyecto debe tener la forma: DD/MM/YYYY'),
    Array('project', 'end_date_project', 84, 'DD < 32', 'SEARCH', 'end_date_project_day_KO', 'El día de fin del proyecto debe ser un día válido (1-31)'),
    Array('project', 'end_date_project', 85, 'MM < 13', 'SEARCH', 'end_date_project_month_KO', 'El mes de fin del proyecto debe ser un día válido (1-12)'),
    Array('project', 'end_date_project', 86, 'DD/MM/YYYY (numérico)', 'SEARCH', true, 'Válido'),

    Array('project', 'responsable_project', 87, 'longitud > 60', 'SEARCH', 'responsable_project_length_max_KO', 'El nombre del responsable no puede tener más de 60 caracteres'),
    Array('project', 'responsable_project', 88, 'no alfabético', 'SEARCH', 'responsable_project_format_KO', 'El nombre del responsable solo puede contener letras, acentos, ñ y espacios'),
    Array('project', 'responsable_project', 89, 'alfabético', 'SEARCH', true, 'Válido'),

    Array('project', 'organization_project', 90, 'longitud > 100', 'SEARCH', 'organization_project_length_max_KO', 'El nombre de la organización no puede tener más de 100 caracteres'),
    Array('project', 'organization_project', 91, 'no alfabético', 'SEARCH', 'organization_project_format_KO', 'El nombre de la organización solo puede contener letras, acentos, ñ y espacios'),
    Array('project', 'organization_project', 92, 'alfabético', 'SEARCH', true, 'Válido'),

    Array('project', 'description_project', 93, 'longitud > 500', 'SEARCH', 'description_project_length_max_KO', 'La descripción del proyecto no puede tener más de 500 caracteres'),
    Array('project', 'description_project', 94, 'no ascii', 'SEARCH', 'description_project_format_KO', 'La descripción del proyecto no puede tener caracteres no ASCII'),
    Array('project', 'description_project', 95, 'ascii', 'SEARCH', true, 'Válido'),

    Array('project', 'code_project', 96, 'longitud > 50', 'SEARCH', 'code_project_length_max_KO', 'El código del proyecto no puede tener más de 50 caracteres'),
    Array('project', 'code_project', 97, 'no alfabéticos/espacios/signos o acentos', 'SEARCH', 'code_project_format_KO', 'El código del proyecto no puede tener acentos o caracteres no alfabéticos/espacios/signos de puntuación'),
    Array('project', 'code_project', 98, 'alfabéticos/espacios/signos', 'SEARCH', true, 'Válido'),

    Array('project', 'acronym_project', 99, 'longitud > 15', 'SEARCH', 'acronym_project_length_max_KO', 'El acrónimo del proyecto no puede tener más de 15 caracteres'),
    Array('project', 'acronym_project', 100, 'no alfabéticos/signos o acentos/espacios', 'SEARCH', 'acronym_project_format_KO', 'El acrónimo del proyecto solo puede contener letras y signos de puntuación, no acentos ni espacios'),
    Array('project', 'acronym_project', 101, 'alfabéticos/signos', 'SEARCH', true, 'Válido'),

    Array('project', 'id_sampling_methodology', 102, 'longitud > 11', 'SEARCH', 'id_sampling_methodology_length_max_KO', 'El ID de la metodología de muestreo no puede tener más de 11 caracteres'),
    Array('project', 'id_sampling_methodology', 103, 'no numérico', 'SEARCH', 'id_sampling_methodology_format_KO', 'El ID de la metodología de muestreo solo permite números'),
    Array('project', 'id_sampling_methodology', 104, 'numérico', 'SEARCH', true, 'Válido'),

    // ficheros

    // ADD

    Array('project', 'nuevo_file_project', 105, 'no existe', 'ADD', 'nuevo_file_project_empty_KO', 'Debes seleccionar un archivo'),
    Array('project', 'nuevo_file_project', 106, 'longitud < 7', 'ADD', 'nuevo_file_project_length_min_KO', 'El archivo no puede tener menos de 7 caracteres'),
    Array('project', 'nuevo_file_project', 107, 'longitud > 100', 'ADD', 'nuevo_file_project_length_max_KO', 'El archivo no puede tener más de 100 caracteres'),
    Array('project', 'nuevo_file_project', 108, 'no alfabético/. o acentos/ñ/espacios', 'ADD', 'nuevo_file_project_format_KO', 'El nombre del archivo sólo puede tener letras y punto'),
    Array('project', 'nuevo_file_project', 109, 'no pdf/doc/docx', 'ADD', 'nuevo_file_project_type_KO', 'El archivo sólo puede ser de tipo pdf, doc o docx'),
    Array('project', 'nuevo_file_project', 110, 'archivo > 2MB', 'ADD', 'nuevo_file_project_size_KO', 'El archivo debe ocupar 2MB o menos'),
    Array('project', 'nuevo_file_project', 111, 'correcto', 'ADD', true, 'Válido'),

    // EDIT

    Array('project', 'nuevo_file_project', 112, 'longitud < 7', 'EDIT', 'nuevo_file_project_length_min_KO', 'El archivo no puede tener menos de 7 caracteres'),
    Array('project', 'nuevo_file_project', 113, 'longitud > 100', 'EDIT', 'nuevo_file_project_length_max_KO', 'El archivo no puede tener más de 100 caracteres'),
    Array('project', 'nuevo_file_project', 114, 'no alfabético/. o acentos/ñ/espacios', 'EDIT', 'nuevo_file_project_format_KO', 'El nombre del archivo sólo puede tener letras y punto'),
    Array('project', 'nuevo_file_project', 115, 'no pdf/doc/docx', 'EDIT', 'nuevo_file_project_type_KO', 'El archivo sólo puede ser de tipo pdf, doc o docx'),
    Array('project', 'nuevo_file_project', 116, 'archivo > 2MB', 'EDIT', 'nuevo_file_project_size_KO', 'El archivo debe ocupar 2MB o menos'),
    Array('project', 'nuevo_file_project', 117, 'correcto', 'EDIT', true, 'Válido'),

    // SEARCH

    Array('project', 'file_project', 118, 'longitud > 100', 'SEARCH', 'file_project_length_max_KO', 'El nombre del archivo no puede tener más de 100 caracteres'),
    Array('project', 'file_project', 119, 'no alfabético o acentos/ñ/espacios', 'SEARCH', 'file_project_format_KO', 'El nombre del archivo solo puede contener letras sin acentos ni ñ, y no puede tener espacios'),
    Array('project', 'file_project', 120, 'alfabético y válido', 'SEARCH', true, 'Válido'),

);
let pruebas_project = Array(

    // ADD

    Array('project', 'name_project', 1, 1, 'ADD', 'x'.repeat(14), 'name_project_length_min_KO'),
    Array('project', 'name_project', 1, 2, 'ADD', 'x'.repeat(15), true),
    Array('project', 'name_project', 2, 3, 'ADD', 'x'.repeat(101), 'name_project_length_max_KO'),
    Array('project', 'name_project', 2, 4, 'ADD', 'x'.repeat(100), true),
    Array('project', 'name_project', 3, 5, 'ADD', 'ñ'.repeat(15), 'name_project_format_KO'),
    Array('project', 'name_project', 3, 6, 'ADD', 'x'.repeat(15), true),
    Array('project', 'name_project', 4, 7, 'ADD', 'ñ'.repeat(15), 'name_project_format_KO'),
    Array('project', 'name_project', 4, 8, 'ADD', 'x'.repeat(15), true),

    Array('project', 'start_date_project', 5, 9, 'ADD', 'x', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 5, 10, 'ADD', '30/12/2003', true),
    Array('project', 'start_date_project', 6, 11, 'ADD', '32/12/2003', 'start_date_project_day_KO'),
    Array('project', 'start_date_project', 6, 12, 'ADD', '30/12/2003', true),
    Array('project', 'start_date_project', 7, 13, 'ADD', '30/13/2003', 'start_date_project_month_KO'),
    Array('project', 'start_date_project', 7, 14, 'ADD', '30/12/2003', true),
    Array('project', 'start_date_project', 8, 15, 'ADD', '30/13/2003', 'start_date_project_month_KO'),
    Array('project', 'start_date_project', 8, 16, 'ADD', '30/12/2003', true),

    Array('project', 'end_date_project', 9, 17, 'ADD', 'x', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 9, 18, 'ADD', '30/12/2003', true),
    Array('project', 'end_date_project', 10, 19, 'ADD', '32/12/2003', 'end_date_project_day_KO'),
    Array('project', 'end_date_project', 10, 20, 'ADD', '30/12/2003', true),
    Array('project', 'end_date_project', 11, 21, 'ADD', '30/13/2003', 'end_date_project_month_KO'),
    Array('project', 'end_date_project', 11, 22, 'ADD', '30/12/2003', true),
    Array('project', 'end_date_project', 12, 23, 'ADD', '30/13/2003', 'end_date_project_month_KO'),
    Array('project', 'end_date_project', 12, 24, 'ADD', '30/12/2003', true),

    Array('project', 'responsable_project', 13, 25, 'ADD', 'x'.repeat(5), 'responsable_project_length_min_KO'),
    Array('project', 'responsable_project', 13, 26, 'ADD', 'x'.repeat(6), true),
    Array('project', 'responsable_project', 14, 27, 'ADD', 'x'.repeat(61), 'responsable_project_length_max_KO'),
    Array('project', 'responsable_project', 14, 28, 'ADD', 'x'.repeat(60), true),
    Array('project', 'responsable_project', 15, 29, 'ADD', '0'.repeat(6), 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 15, 30, 'ADD', 'x'.repeat(6), true),
    Array('project', 'responsable_project', 16, 31, 'ADD', '0'.repeat(6), 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 16, 32, 'ADD', 'x'.repeat(6), true),

    Array('project', 'organization_project', 17, 33, 'ADD', 'x'.repeat(5), 'organization_project_length_min_KO'),
    Array('project', 'organization_project', 17, 34, 'ADD', 'x'.repeat(6), true),
    Array('project', 'organization_project', 18, 35, 'ADD', 'x'.repeat(101), 'organization_project_length_max_KO'),
    Array('project', 'organization_project', 18, 36, 'ADD', 'x'.repeat(100), true),
    Array('project', 'organization_project', 19, 37, 'ADD', '0'.repeat(6), 'organization_project_format_KO'),
    Array('project', 'organization_project', 19, 38, 'ADD', 'x'.repeat(6), true),
    Array('project', 'organization_project', 20, 39, 'ADD', '0'.repeat(6), 'organization_project_format_KO'),
    Array('project', 'organization_project', 20, 40, 'ADD', 'x'.repeat(6), true),

    Array('project', 'description_project', 21, 41, 'ADD', 'x'.repeat(29), 'description_project_length_min_KO'),
    Array('project', 'description_project', 21, 42, 'ADD', 'x'.repeat(30), true),
    Array('project', 'description_project', 22, 43, 'ADD', 'x'.repeat(501), 'description_project_length_max_KO'),
    Array('project', 'description_project', 22, 44, 'ADD', 'x'.repeat(500), true),
    Array('project', 'description_project', 23, 45, 'ADD', '人'.repeat(30), 'description_project_format_KO'),
    Array('project', 'description_project', 23, 46, 'ADD', 'x'.repeat(30), true),
    Array('project', 'description_project', 24, 47, 'ADD', '人'.repeat(30), 'description_project_format_KO'),
    Array('project', 'description_project', 24, 48, 'ADD', 'x'.repeat(30), true),

    Array('project', 'code_project', 25, 49, 'ADD', 'x'.repeat(5), 'code_project_length_min_KO'),
    Array('project', 'code_project', 25, 50, 'ADD', 'x'.repeat(6), true),
    Array('project', 'code_project', 26, 51, 'ADD', 'x'.repeat(51), 'code_project_length_max_KO'),
    Array('project', 'code_project', 26, 52, 'ADD', 'x'.repeat(50), true),
    Array('project', 'code_project', 27, 53, 'ADD', '0'.repeat(6), 'code_project_format_KO'),
    Array('project', 'code_project', 27, 54, 'ADD', 'x'.repeat(6), true),
    Array('project', 'code_project', 28, 55, 'ADD', '0'.repeat(6), 'code_project_format_KO'),
    Array('project', 'code_project', 28, 56, 'ADD', 'x'.repeat(6), true),

    Array('project', 'acronym_project', 29, 57, 'ADD', 'x'.repeat(5), 'acronym_project_length_min_KO'),
    Array('project', 'acronym_project', 29, 58, 'ADD', 'x'.repeat(6), true),
    Array('project', 'acronym_project', 30, 59, 'ADD', 'x'.repeat(16), 'acronym_project_length_max_KO'),
    Array('project', 'acronym_project', 30, 60, 'ADD', 'x'.repeat(15), true),
    Array('project', 'acronym_project', 31, 61, 'ADD', '0'.repeat(6), 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 31, 62, 'ADD', 'x'.repeat(6), true),
    Array('project', 'acronym_project', 32, 63, 'ADD', '0'.repeat(6), 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 32, 64, 'ADD', 'x'.repeat(6), true),

    Array('project', 'id_sampling_methodology', 33, 65, 'ADD', '', 'id_sampling_methodology_length_min_KO'),
    Array('project', 'id_sampling_methodology', 33, 66, 'ADD', '0', true),
    Array('project', 'id_sampling_methodology', 34, 67, 'ADD', '0'.repeat(12), 'id_sampling_methodology_length_max_KO'),
    Array('project', 'id_sampling_methodology', 34, 68, 'ADD', '0'.repeat(11), true),
    Array('project', 'id_sampling_methodology', 35, 69, 'ADD', 'x', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 35, 70, 'ADD', '0', true),
    Array('project', 'id_sampling_methodology', 36, 71, 'ADD', 'x', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 36, 72, 'ADD', '0', true),

    // EDIT 

    Array('project', 'name_project', 37, 73, 'EDIT', 'x'.repeat(14), 'name_project_length_min_KO'),
    Array('project', 'name_project', 37, 74, 'EDIT', 'x'.repeat(15), true),
    Array('project', 'name_project', 38, 75, 'EDIT', 'x'.repeat(101), 'name_project_length_max_KO'),
    Array('project', 'name_project', 38, 76, 'EDIT', 'x'.repeat(100), true),
    Array('project', 'name_project', 39, 77, 'EDIT', 'ñ'.repeat(15), 'name_project_format_KO'),
    Array('project', 'name_project', 39, 78, 'EDIT', 'x'.repeat(15), true),
    Array('project', 'name_project', 40, 79, 'EDIT', 'ñ'.repeat(15), 'name_project_format_KO'),
    Array('project', 'name_project', 40, 80, 'EDIT', 'x'.repeat(15), true),

    Array('project', 'start_date_project', 41, 81, 'EDIT', 'x', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 41, 82, 'EDIT', '30/12/2003', true),
    Array('project', 'start_date_project', 42, 83, 'EDIT', '32/12/2003', 'start_date_project_day_KO'),
    Array('project', 'start_date_project', 42, 84, 'EDIT', '30/12/2003', true),
    Array('project', 'start_date_project', 43, 85, 'EDIT', '30/13/2003', 'start_date_project_month_KO'),
    Array('project', 'start_date_project', 43, 86, 'EDIT', '30/12/2003', true),
    Array('project', 'start_date_project', 44, 87, 'EDIT', '30/13/2003', 'start_date_project_month_KO'),
    Array('project', 'start_date_project', 44, 88, 'EDIT', '30/12/2003', true),

    Array('project', 'end_date_project', 45, 89, 'EDIT', 'x', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 45, 90, 'EDIT', '30/12/2003', true),
    Array('project', 'end_date_project', 46, 91, 'EDIT', '32/12/2003', 'end_date_project_day_KO'),
    Array('project', 'end_date_project', 46, 92, 'EDIT', '30/12/2003', true),
    Array('project', 'end_date_project', 47, 93, 'EDIT', '30/13/2003', 'end_date_project_month_KO'),
    Array('project', 'end_date_project', 47, 94, 'EDIT', '30/12/2003', true),
    Array('project', 'end_date_project', 48, 95, 'EDIT', '30/13/2003', 'end_date_project_month_KO'),
    Array('project', 'end_date_project', 48, 96, 'EDIT', '30/12/2003', true),

    Array('project', 'responsable_project', 49, 97, 'EDIT', 'x'.repeat(5), 'responsable_project_length_min_KO'),
    Array('project', 'responsable_project', 49, 98, 'EDIT', 'x'.repeat(6), true),
    Array('project', 'responsable_project', 50, 99, 'EDIT', 'x'.repeat(61), 'responsable_project_length_max_KO'),
    Array('project', 'responsable_project', 50, 100, 'EDIT', 'x'.repeat(60), true),
    Array('project', 'responsable_project', 51, 101, 'EDIT', '0'.repeat(6), 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 51, 102, 'EDIT', 'x'.repeat(6), true),
    Array('project', 'responsable_project', 52, 103, 'EDIT', '0'.repeat(6), 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 52, 104, 'EDIT', 'x'.repeat(6), true),

    Array('project', 'organization_project', 53, 105, 'EDIT', 'x'.repeat(5), 'organization_project_length_min_KO'),
    Array('project', 'organization_project', 53, 106, 'EDIT', 'x'.repeat(6), true),
    Array('project', 'organization_project', 54, 107, 'EDIT', 'x'.repeat(101), 'organization_project_length_max_KO'),
    Array('project', 'organization_project', 54, 108, 'EDIT', 'x'.repeat(100), true),
    Array('project', 'organization_project', 55, 109, 'EDIT', '0'.repeat(6), 'organization_project_format_KO'),
    Array('project', 'organization_project', 55, 110, 'EDIT', 'x'.repeat(6), true),
    Array('project', 'organization_project', 56, 111, 'EDIT', '0'.repeat(6), 'organization_project_format_KO'),
    Array('project', 'organization_project', 56, 112, 'EDIT', 'x'.repeat(6), true),

    Array('project', 'description_project', 57, 113, 'EDIT', 'x'.repeat(29), 'description_project_length_min_KO'),
    Array('project', 'description_project', 57, 114, 'EDIT', 'x'.repeat(30), true),
    Array('project', 'description_project', 58, 115, 'EDIT', 'x'.repeat(501), 'description_project_length_max_KO'),
    Array('project', 'description_project', 58, 116, 'EDIT', 'x'.repeat(500), true),
    Array('project', 'description_project', 59, 117, 'EDIT', '人'.repeat(30), 'description_project_format_KO'),
    Array('project', 'description_project', 59, 118, 'EDIT', 'x'.repeat(30), true),
    Array('project', 'description_project', 60, 119, 'EDIT', '人'.repeat(30), 'description_project_format_KO'),
    Array('project', 'description_project', 60, 120, 'EDIT', 'x'.repeat(30), true),

    Array('project', 'code_project', 61, 121, 'EDIT', 'x'.repeat(5), 'code_project_length_min_KO'),
    Array('project', 'code_project', 61, 122, 'EDIT', 'x'.repeat(6), true),
    Array('project', 'code_project', 62, 123, 'EDIT', 'x'.repeat(51), 'code_project_length_max_KO'),
    Array('project', 'code_project', 62, 124, 'EDIT', 'x'.repeat(50), true),
    Array('project', 'code_project', 63, 125, 'EDIT', '0'.repeat(6), 'code_project_format_KO'),
    Array('project', 'code_project', 63, 126, 'EDIT', 'x'.repeat(6), true),
    Array('project', 'code_project', 64, 127, 'EDIT', '0'.repeat(6), 'code_project_format_KO'),
    Array('project', 'code_project', 64, 128, 'EDIT', 'x'.repeat(6), true),

    Array('project', 'acronym_project', 65, 129, 'EDIT', 'x'.repeat(5), 'acronym_project_length_min_KO'),
    Array('project', 'acronym_project', 65, 130, 'EDIT', 'x'.repeat(6), true),
    Array('project', 'acronym_project', 66, 131, 'EDIT', 'x'.repeat(16), 'acronym_project_length_max_KO'),
    Array('project', 'acronym_project', 66, 132, 'EDIT', 'x'.repeat(15), true),
    Array('project', 'acronym_project', 67, 133, 'EDIT', '0'.repeat(6), 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 67, 134, 'EDIT', 'x'.repeat(6), true),
    Array('project', 'acronym_project', 68, 135, 'EDIT', '0'.repeat(6), 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 68, 136, 'EDIT', 'x'.repeat(6), true),

    Array('project', 'id_sampling_methodology', 69, 137, 'EDIT', '', 'id_sampling_methodology_length_min_KO'),
    Array('project', 'id_sampling_methodology', 69, 138, 'EDIT', '0', true),
    Array('project', 'id_sampling_methodology', 70, 139, 'EDIT', '0'.repeat(12), 'id_sampling_methodology_length_max_KO'),
    Array('project', 'id_sampling_methodology', 70, 140, 'EDIT', '0'.repeat(11), true),
    Array('project', 'id_sampling_methodology', 71, 141, 'EDIT', 'x', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 71, 142, 'EDIT', '0', true),
    Array('project', 'id_sampling_methodology', 72, 143, 'EDIT', 'x', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 72, 144, 'EDIT', '0', true),

    // SEARCH

    Array('project', 'id_project', 73, 146, 'SEARCH', '0'.repeat(12), 'id_project_length_max_KO'),
    Array('project', 'id_project', 73, 147, 'SEARCH', '0'.repeat(11), true),
    Array('project', 'id_project', 74, 148, 'SEARCH', 'x'.repeat(11), 'id_project_format_KO'),
    Array('project', 'id_project', 74, 149, 'SEARCH', '0'.repeat(11), true),
    Array('project', 'id_project', 75, 150, 'SEARCH', 'x'.repeat(11), 'id_project_format_KO'),
    Array('project', 'id_project', 75, 151, 'SEARCH', '0'.repeat(11), true),

    Array('project', 'name_project', 76, 152, 'SEARCH', 'x'.repeat(101), 'name_project_length_max_KO'),
    Array('project', 'name_project', 76, 152, 'SEARCH', 'x'.repeat(100), true),
    Array('project', 'name_project', 77, 153, 'SEARCH', 'ñ'.repeat(15), 'name_project_format_KO'),
    Array('project', 'name_project', 77, 154, 'SEARCH', 'x'.repeat(15), true),
    Array('project', 'name_project', 78, 155, 'SEARCH', 'ñ'.repeat(15), 'name_project_format_KO'),
    Array('project', 'name_project', 78, 156, 'SEARCH', 'x'.repeat(15), true),

    Array('project', 'start_date_project', 79, 157, 'SEARCH', 'x', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 79, 158, 'SEARCH', '30/12/2003', true),
    Array('project', 'start_date_project', 80, 159, 'SEARCH', '32/12/2003', 'start_date_project_day_KO'),
    Array('project', 'start_date_project', 80, 160, 'SEARCH', '30/12/2003', true),
    Array('project', 'start_date_project', 81, 161, 'SEARCH', '30/13/2003', 'start_date_project_month_KO'),
    Array('project', 'start_date_project', 81, 162, 'SEARCH', '30/12/2003', true),
    Array('project', 'start_date_project', 82, 163, 'SEARCH', '30/13/2003', 'start_date_project_month_KO'),
    Array('project', 'start_date_project', 82, 164, 'SEARCH', '30/12/2003', true),

    Array('project', 'end_date_project', 83, 165, 'SEARCH', 'x', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 83, 166, 'SEARCH', '30/12/2003', true),
    Array('project', 'end_date_project', 84, 167, 'SEARCH', '32/12/2003', 'end_date_project_day_KO'),
    Array('project', 'end_date_project', 84, 168, 'SEARCH', '30/12/2003', true),
    Array('project', 'end_date_project', 85, 169, 'SEARCH', '30/13/2003', 'end_date_project_month_KO'),
    Array('project', 'end_date_project', 85, 160, 'SEARCH', '30/12/2003', true),
    Array('project', 'end_date_project', 86, 171, 'SEARCH', '30/13/2003', 'end_date_project_month_KO'),
    Array('project', 'end_date_project', 86, 172, 'SEARCH', '30/12/2003', true),

    Array('project', 'responsable_project', 87, 173, 'SEARCH', 'x'.repeat(61), 'responsable_project_length_max_KO'),
    Array('project', 'responsable_project', 87, 174, 'SEARCH', 'x'.repeat(60), true),
    Array('project', 'responsable_project', 88, 175, 'SEARCH', '0'.repeat(6), 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 88, 176, 'SEARCH', 'x'.repeat(6), true),
    Array('project', 'responsable_project', 89, 177, 'SEARCH', '0'.repeat(6), 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 89, 178, 'SEARCH', 'x'.repeat(6), true),

    Array('project', 'organization_project', 90, 179, 'SEARCH', 'x'.repeat(101), 'organization_project_length_max_KO'),
    Array('project', 'organization_project', 90, 180, 'SEARCH', 'x'.repeat(100), true),
    Array('project', 'organization_project', 91, 181, 'SEARCH', '0'.repeat(6), 'organization_project_format_KO'),
    Array('project', 'organization_project', 91, 182, 'SEARCH', 'x'.repeat(6), true),
    Array('project', 'organization_project', 92, 183, 'SEARCH', '0'.repeat(6), 'organization_project_format_KO'),
    Array('project', 'organization_project', 92, 184, 'SEARCH', 'x'.repeat(6), true),

    Array('project', 'description_project', 93, 185, 'SEARCH', 'x'.repeat(501), 'description_project_length_max_KO'),
    Array('project', 'description_project', 93, 186, 'SEARCH', 'x'.repeat(500), true),
    Array('project', 'description_project', 94, 187, 'SEARCH', '人'.repeat(30), 'description_project_format_KO'),
    Array('project', 'description_project', 94, 188, 'SEARCH', 'x'.repeat(30), true),
    Array('project', 'description_project', 95, 189, 'SEARCH', '人'.repeat(30), 'description_project_format_KO'),
    Array('project', 'description_project', 95, 190, 'SEARCH', 'x'.repeat(30), true),

    Array('project', 'code_project', 96, 191, 'SEARCH', 'x'.repeat(51), 'code_project_length_max_KO'),
    Array('project', 'code_project', 96, 192, 'SEARCH', 'x'.repeat(50), true),
    Array('project', 'code_project', 97, 193, 'SEARCH', '0'.repeat(6), 'code_project_format_KO'),
    Array('project', 'code_project', 97, 194, 'SEARCH', 'x'.repeat(6), true),
    Array('project', 'code_project', 98, 195, 'SEARCH', '0'.repeat(6), 'code_project_format_KO'),
    Array('project', 'code_project', 98, 196, 'SEARCH', 'x'.repeat(6), true),

    Array('project', 'acronym_project', 99, 197, 'SEARCH', 'x'.repeat(16), 'acronym_project_length_max_KO'),
    Array('project', 'acronym_project', 99, 198, 'SEARCH', 'x'.repeat(15), true),
    Array('project', 'acronym_project', 100, 199, 'SEARCH', '0'.repeat(6), 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 100, 200, 'SEARCH', 'x'.repeat(6), true),
    Array('project', 'acronym_project', 101, 201, 'SEARCH', '0'.repeat(6), 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 101, 202, 'SEARCH', 'x'.repeat(6), true),

    Array('project', 'id_sampling_methodology', 102, 203, 'SEARCH', '0'.repeat(12), 'id_sampling_methodology_length_max_KO'),
    Array('project', 'id_sampling_methodology', 102, 204, 'SEARCH', '0'.repeat(11), true),
    Array('project', 'id_sampling_methodology', 103, 205, 'SEARCH', 'x', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 103, 206, 'SEARCH', '0', true),
    Array('project', 'id_sampling_methodology', 104, 207, 'SEARCH', 'x', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 104, 208, 'SEARCH', '0', true),

    Array('project', 'file_project', 118, 209, 'SEARCH', 'x'.repeat(101), 'file_project_length_max_KO'),
    Array('project', 'file_project', 118, 210, 'SEARCH', 'nombreDeArchivo', true),
    Array('project', 'file_project', 119, 211, 'SEARCH', 'n o m b r e D e A r c h i v o', 'file_project_format_KO'),
    Array('project', 'file_project', 119, 212, 'SEARCH', 'nombreDeArchivo', true),
    Array('project', 'file_project', 120, 213, 'SEARCH', 'n o m b r e D e A r c h i v o', 'file_project_format_KO'),
    Array('project', 'file_project', 120, 214, 'SEARCH', 'nombreDeArchivo', true),

);
let pruebas_file_project = Array(

    // ADD

    Array('project', 'nuevo_file_project', 105, 1, 'ADD', 'empty_file', Array(), 'nuevo_file_project_empty_KO'),
    Array('project', 'nuevo_file_project', 105, 2, 'ADD', 'empty_file', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 106, 3, 'ADD', 'length_min', Array('nombre', Array('application/pdf'), 5000), 'nuevo_file_project_length_min_KO'),
    Array('project', 'nuevo_file_project', 106, 4, 'ADD', 'length_min', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 107, 5, 'ADD', 'length_max', Array('x'.repeat(101), Array('application/pdf'), 5000), 'nuevo_file_project_length_max_KO'),
    Array('project', 'nuevo_file_project', 107, 6, 'ADD', 'length_max', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 108, 7, 'ADD', 'format_name', Array('n o m b r e D e A r c h i v o', Array('application/pdf'), 5000), 'nuevo_file_project_format_KO'),
    Array('project', 'nuevo_file_project', 108, 8, 'ADD', 'format_name', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 109, 9, 'ADD', 'type_file', Array('nombreDeArchivo', Array('image/jpeg'), 5000), 'nuevo_file_project_type_KO'),
    Array('project', 'nuevo_file_project', 109, 10, 'ADD', 'type_file', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 110, 11, 'ADD', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 2000001), 'nuevo_file_project_size_KO'),
    Array('project', 'nuevo_file_project', 110, 12, 'ADD', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 111, 13, 'ADD', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 2000001), 'nuevo_file_project_size_KO'),
    Array('project', 'nuevo_file_project', 111, 14, 'ADD', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),

    // EDIT

    Array('project', 'nuevo_file_project', 112, 15, 'EDIT', 'length_min', Array('nombre', Array('application/pdf'), 5000), 'nuevo_file_project_length_min_KO'),
    Array('project', 'nuevo_file_project', 112, 16, 'EDIT', 'length_min', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 113, 17, 'EDIT', 'length_max', Array('x'.repeat(101), Array('application/pdf'), 5000), 'nuevo_file_project_length_max_KO'),
    Array('project', 'nuevo_file_project', 113, 18, 'EDIT', 'length_max', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 114, 19, 'EDIT', 'format_name', Array('n o m b r e D e A r c h i v o', Array('application/pdf'), 5000), 'nuevo_file_project_format_KO'),
    Array('project', 'nuevo_file_project', 114, 20, 'EDIT', 'format_name', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 115, 21, 'EDIT', 'type_file', Array('nombreDeArchivo', Array('image/jpeg'), 5000), 'nuevo_file_project_type_KO'),
    Array('project', 'nuevo_file_project', 115, 22, 'EDIT', 'type_file', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 116, 23, 'EDIT', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 2000001), 'nuevo_file_project_size_KO'),
    Array('project', 'nuevo_file_project', 116, 24, 'EDIT', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),
    Array('project', 'nuevo_file_project', 117, 25, 'EDIT', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 2000001), 'nuevo_file_project_size_KO'),
    Array('project', 'nuevo_file_project', 117, 26, 'EDIT', 'max_size', Array('nombreDeArchivo', Array('application/pdf'), 5000), true),

);

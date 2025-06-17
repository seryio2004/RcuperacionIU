let textos_ES = {
    text_analysis_prep: "Preparación de Análisis",
    text_project: "Proyecto",
    text_characteristic: "Característica",

    text_titulo_page_analysis_prep: "Preparación de Análisis",
    text_titulo_page_project: "Proyecto",
    text_titulo_page_characteristic: "Característica",

    text_contenido_titulo_form_project_ADD: "Añade un nuevo registro:   ",
    text_contenido_titulo_form_project_EDIT: "Edita el registro:",
    text_contenido_titulo_form_project_SEARCH: "Busca un registro:",
    text_contenido_titulo_form_project_DELETE: "Elimina el registro:",
    text_contenido_titulo_form_project_SHOWCURRENT: "Visualiza el registro:",

    text_contenido_titulo_form_analysis_preparation_ADD: "Añade un nuevo registro:",
    text_contenido_titulo_form_analysis_preparation_EDIT: "Edita el registro:",
    text_contenido_titulo_form_analysis_preparation_SEARCH: "Busca un registro:",
    text_contenido_titulo_form_analysis_preparation_DELETE: "Elimina el registro:",
    text_contenido_titulo_form_analysis_preparation_SHOWCURRENT: "Visualiza el registro:",

    text_contenido_titulo_form_characteristic_ADD: "Añade un nuevo registro:",
    text_contenido_titulo_form_characteristic_EDIT: "Edita el registro:",
    text_contenido_titulo_form_characteristic_SEARCH: "Busca un registro:",
    text_contenido_titulo_form_characteristic_DELETE: "Elimina el registro:",
    text_contenido_titulo_form_characteristic_SHOWCURRENT: "Visualiza el registro:",

    label_id_analysis_preparation: "ID de Preparación de Análisis:",
    label_name_analysis_preparation: "Nombre:",
    label_description_analysis_preparation: "Descripción:",
    label_bib_analysis_preparation: "Bibliografía:",
    label_file_analysis_preparation: "Archivo:",

    label_id_project: "ID del Proyecto:",
    label_name_project: "Nombre del Proyecto:",
    label_start_date_project: "Fecha de Inicio:",
    label_end_date_project: "Fecha de Fin:",
    label_responsable_project: "Responsable:",
    label_organization_project: "Organización:",
    label_description_project: "Descripción:",
    label_file_project: "Archivo:",
    label_code_project: "Código:",
    label_acronym_project: "Acrónimo:",
    label_id_sampling_methodology: "ID de Metodología de Muestreo:",

    label_id_characteristic: "ID:",
    label_name_characteristic: "Nombre:",
    label_description_characteristic: "Descripción:",
    label_data_type_characteristic: "Tipo de Dato:",
    label_category_characteristic: "Categoría:",
    label_bibref_characteristic: "Referencia Bibliográfica:",
    label_file_characteristic: "Archivo:",

    // Preparación de Análisis
    id_analysis_preparation_length_min_KO: "El ID debe tener al menos 1 carácter.",
    id_analysis_preparation_length_max_KO: "El ID debe tener menos de 11 caracteres.",
    id_analysis_preparation_format_KO: "El ID solo puede contener números.",

    name_analysis_preparation_length_min_KO: "El nombre debe tener al menos 8 caracteres.",
    name_analysis_preparation_length_max_KO: "El nombre debe tener menos de 100 caracteres.",
    name_analysis_preparation_format_KO: "El nombre solo puede contener letras y espacios, sin acentos ni ñ.",

    description_analysis_preparation_length_min_KO: "La descripción debe tener al menos 80 caracteres.",
    description_analysis_preparation_length_max_KO: "La descripción debe tener menos de 5000 caracteres.",
    description_analysis_preparation_format_KO: "La descripción solo puede contener letras y espacios, sin acentos ni ñ.",

    bib_analysis_preparation_length_min_KO: "La bibliografía debe tener al menos 6 caracteres.",
    bib_analysis_preparation_length_max_KO: "La bibliografía debe tener menos de 200 caracteres.",
    bib_analysis_preparation_format_KO: "La bibliografía solo puede contener letras, signos de puntuación, acentos y ñ.",

    file_analysis_preparation_length_min_KO: "El nombre del archivo debe tener al menos 7 caracteres.",
    file_analysis_preparation_length_max_KO: "El nombre del archivo debe tener menos de 100 caracteres.",
    file_analysis_preparation_format_KO: "El nombre del archivo solo puede contener letras y puntos, sin acentos, ñ ni espacios.",
    file_analysis_preparation_type_KO: "El archivo debe ser de tipo PDF, DOC o DOCX.",
    file_analysis_preparation_size_KO: "El archivo no puede superar los 2 MB.",

    // Proyecto
    // id_project
    'id_project_length_min_KO': 'El ID del proyecto no puede tener menos de 1 caracter',
    'id_project_length_max_KO': 'El ID del proyecto no puede tener mas de 11 caracteres',
    'id_project_format_KO': 'El ID del proyecto solo permite caracteres numéricos',
    // name_project
    'name_project_length_min_KO': 'El nombre del proyecto no puede tener menos de 15 caracteres',
    'name_project_length_max_KO': 'El nombre del proyecto no puede tener mas de 100 caracteres',
    'name_project_format_KO': 'El nombre del proyecto solo puede contener letras y espacios, sin acentos ni ñ',
    // start_date_project
    'start_date_project_format_KO': 'La fecha de inicio del proyecto debe tener la forma: DD/MM/YYYY',
    'start_date_project_day_KO': 'El día de inicio del proyecto debe ser un día valido (1-31)',
    'start_date_project_month_KO': 'El mes de inicio del proyecto debe ser un día valido (1-12)',
    // end_date_project
    'end_date_project_format_KO': 'La fecha de fin del proyecto debe tener la forma: DD/MM/YYYY',
    'end_date_project_day_KO': 'El día de fin del proyecto debe ser un día valido (1-31)',
    'end_date_project_month_KO': 'El mes de fin del proyecto debe ser un día valido (1-12)',
    'end_date_project_before_start_KO': 'La fecha de fin del proyecto debe ser posterior a la fecha de inicio',
    // responsable_project
    'responsable_project_length_min_KO': 'El nombre del responsable no puede tener menos de 6 caracteres',
    'responsable_project_length_max_KO': 'El nombre del responsable no puede tener mas de 60 caracteres',
    'responsable_project_format_KO': 'El nombre del responsable solo puede contener letras, acentos, ñ y espacios',
    // organization_project
    'organization_project_length_min_KO': 'El nombre de la organizacion no puede tener menos de 6 caracteres',
    'organization_project_length_max_KO': 'El nombre de la organizacion no puede tener mas de 100 caracteres',
    'organization_project_format_KO': 'El nombre de la organizacion solo puede contener letras, acentos, ñ y espacios',
    // description_project
    'description_project_length_min_KO': 'La descripcion del proyecto no puede tener menos de 30 caracteres',
    'description_project_length_max_KO': 'La descripcion del proyecto no puede tener mas de 500 caracteres',
    'description_project_format_KO': 'La descripcion del proyecto no puede tener caracteres no ASCII',
    // file_project
    'file_project_length_max_KO': 'El nombre del archivo no puede tener mas de 100 caracteres',
    'file_project_format_KO': 'El nombre del archivo solo puede contener letras sin acentos ni ñ, y no puede tener espacios',
    // nuevo_file_project
    'nuevo_file_project_empty_KO': 'Debes seleccionar un archivo.',
    'nuevo_file_project_length_min_KO': 'El archivo no puede tener menos de 7 caracteres',
    'nuevo_file_project_length_max_KO': 'El archivo no puede tener mas de 100 caracteres',
    'nuevo_file_project_empty_KO': 'El nombre del archivo solo puede tener letras y punto',
    'nuevo_file_project_type_KO': 'El archivo solo puede ser de tipo pdf, doc o docx',
    'nuevo_file_project_size_KO': 'El archivo debe ocupar 2MB o menos',
    'nuevo_file_project_format_KO': 'El nombre del archivo solo puede tener letras y punto',
    // code_project
    'code_project_length_min_KO': 'El codigo del proyecto no puede tener menos de 6 caracteres',
    'code_project_length_max_KO': 'El codigo del proyecto no puede tener mas de 50 caracteres',
    'code_project_format_KO': 'El codigo del proyecto no puede tener acentos o caracteres no alfabéticos/espacios/signos de puntuacion',
    // acronym_project
    'acronym_project_length_min_KO': 'El acronimo del proyecto no puede tener menos de 6 caracteres',
    'acronym_project_length_max_KO': 'El acronimo del proyecto no puede tener mas de 15 caracteres',
    'acronym_project_format_KO': 'El acronimo del proyecto solo puede contener letras y signos de puntuacion, no acentos ni espacios',
    // id_sampling_methodology
    'id_sampling_methodology_length_min_KO': 'El ID de la metodología de muestreo no puede tener menos de 1 caracter',
    'id_sampling_methodology_length_max_KO': 'El ID de la metodología de muestreo no puede tener mas de 11 caracteres',
    'id_sampling_methodology_format_KO': 'El ID de la metodología de muestreo solo permite números',

    // Característica
    id_characteristic_length_max_KO: "El ID debe tener menos de 11 caracteres.",
    id_characteristic_format_KO: "El ID solo puede contener números.",

    name_characteristic_length_min_KO: "El nombre debe tener al menos 8 caracteres.",
    name_characteristic_length_max_KO: "El nombre debe tener menos de 100 caracteres.",
    name_characteristic_format_KO: "El nombre solo puede contener letras y espacios, sin acentos ni ñ.",

    description_characteristic_length_min_KO: "La descripción debe tener al menos 80 caracteres.",
    description_characteristic_length_max_KO: "La descripción debe tener menos de 5000 caracteres.",
    description_characteristic_format_KO: "La descripción solo puede contener letras y espacios, sin acentos ni ñ.",

    bibref_characteristic_length_min_KO: "La referencia debe tener al menos 16 caracteres.",
    bibref_characteristic_length_max_KO: "La referencia debe tener menos de 200 caracteres.",
    bibref_characteristic_format_KO: "La referencia solo puede contener letras, acentos, ñ, espacios y signos de puntuación.",

    file_characteristic_length_min_KO: "El nombre del archivo debe tener al menos 7 caracteres.",
    file_characteristic_length_max_KO: "El nombre del archivo debe tener menos de 100 caracteres.",
    file_characteristic_format_KO: "El nombre del archivo solo puede contener letras y puntos, sin acentos, ñ ni espacios.",
    file_characteristic_type_KO: "El archivo debe ser de tipo PDF, DOC o DOCX.",
    file_characteristic_size_KO: "El archivo no puede superar los 2 MB."
};

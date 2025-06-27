class DOM_class extends test {

    constructor() {
        super();
    }

    

    mostrar_exito_campo(id) {
        const errorSpan = document.getElementById('div_error_' + id);
        const input = document.getElementById(id);
        if (errorSpan) {
            errorSpan.style.display = 'none';
            errorSpan.innerHTML = '';
        }
        if (input) input.className = 'exitocampo';
    }

    modificarcolumnasamostrar(atributo) {


        let nuevascolumnas = Array();
        if (this.columnasamostrar.includes(atributo)) {
            // borrar ese atributo
            for (let i = 0; i < this.columnasamostrar.length; i++) {
                if (this.columnasamostrar[i] == atributo) { }
                else {
                    nuevascolumnas.push(this.columnasamostrar[i]);
                }
            }
            this.columnasamostrar = nuevascolumnas;
        }
        else {
            // añadir
            this.columnasamostrar.push(atributo);
        }


        this.crearTablaDatos();
    }

    mostrarocultarcolumnas() {

        for (let columna of this.atributos) {
            if (this.columnasamostrar.includes(columna)) { }
            else {
                //document.querySelector("th[class='"+columna+" tabla-th-"+columna+"']").style.display = 'none';
                document.querySelector("th[class='" + columna + "']").style.display = 'none';
                let arraytds = document.querySelectorAll("td[class='tabla-td-" + columna + "']");
                for (let i = 0; i < arraytds.length; i++) {
                    arraytds[i].style.display = 'none';
                }
            }
        }
    }

    construirSelect() {

        document.getElementById("seleccioncolumnas").innerHTML = '';

        let optionselect = '';
        for (let atributo of this.atributos) {
            optionselect = document.createElement('option');
            optionselect.className = atributo;
            optionselect.innerHTML = atributo;
            optionselect.setAttribute("onclick", "validar.modificarcolumnasamostrar('" + atributo + "');");
            if (this.columnasamostrar.includes(atributo)) {
                optionselect.selected = true;
            }
            document.getElementById("seleccioncolumnas").append(optionselect);
        }
        setLang();
    }

    hacertabla() {

        // titulos

        document.getElementById("text_title_page").className = "text_titulo_page_" + this.entidad;
        document.getElementById('title_page').style.display = 'block';

        this.atributos = Object.keys(this.datos[0]);

        var textolineatitulos = '<tr>';

        for (let atributo of this.atributos) {

            textolineatitulos += '<th class="' + atributo + '">' + atributo + '</th>';

        }

        textolineatitulos += '<th colspan="3"></th>';

        textolineatitulos += '</tr>';

        let cabecera = document.getElementById("titulostablacabecera");
        cabecera.innerHTML = textolineatitulos;

        // filas

        var textolineadatos = '';

        for (let i = 0; i < this.datos.length; i++) {

            textolineadatos += '<tr style="background-color:grey;">';

            for (let clave in this.datos[i]) {

                if (this.datosespecialestabla.includes(clave)) {
                    let valorcolumna = this.cambiardatosespecialestabla(clave, this.datos[i][clave]);
                    textolineadatos += '<td class="tabla-td-' + clave + '">' + valorcolumna + '</td>';
                }
                else {
                    textolineadatos += '<td class="tabla-td-' + clave + '">' + this.datos[i][clave] + '</td>';
                }

            }

            // crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)

            let lineaedit = this.crearboton(this.entidad, 'EDIT', JSON.stringify(this.datos[i]));
            let lineadelete = this.crearboton(this.entidad, 'DELETE', JSON.stringify(this.datos[i]));
            let lineashowcurrent = this.crearboton(this.entidad, 'SHOWCURRENT', JSON.stringify(this.datos[i]));

            textolineadatos += lineaedit + lineadelete + lineashowcurrent;

            textolineadatos += '</tr>';

        }

        let cuerpo = document.getElementById('muestradatostabla');
        cuerpo.innerHTML = textolineadatos;

        setLang();

    }



    mostrarTitulos(columnasamostrar) {

        let textolineatitulos = '<tr>';

        for (let atributo in columnasamostrar) {

            textolineatitulos += '<th class="' + columnasamostrar[atributo] + '">' + columnasamostrar[atributo] + '</th>';

        }

        textolineatitulos += '<th colspan="3"></th>';

        textolineatitulos += '</tr>';

        let cabecera = document.getElementById("titulostablacabecera");
        cabecera.innerHTML = textolineatitulos;

        return cabecera;

    }



    crearboton(entidad, accion, parametros) {
        let columna = document.createElement('td');
        let opcion = document.createElement('img');
        opcion.src = "./iconos/" + accion + '.png';
        let textoonclick = "validar.createForm_" + accion + "(" + parametros + ");"
        opcion.setAttribute('onclick', textoonclick);
        columna.appendChild(opcion);
        return columna.outerHTML;

    }

    /*  
      
      mostrarDatos(entidad, datosfilas, columnasamostrar){
      
                  let textolineadatos = '';
      
                  for (let i=0;i<datosfilas.length;i++){
              
                      textolineadatos += '<tr style="background-color:grey;">';
          
                      for (let j=0;j<columnasamostrar.length;j++){
          
                          let clave = columnasamostrar[j];
              
                              if (this.datosespecialestabla.includes(clave)){
                                  let valorcolumna = this.cambiardatosespecialestabla(clave,datosfilas[i][clave]);
                                  textolineadatos += '<td>'+valorcolumna+'</td>';
                              }
                              else{
                                  textolineadatos += '<td>'+datosfilas[i][clave]+'</td>';
                              }
              
                      }
              
                      // crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)
              
                      let lineaedit = this.crearboton(entidad, 'EDIT', JSON.stringify(datosfilas[i]));
                      let lineadelete = this.crearboton(entidad, 'DELETE', JSON.stringify(datosfilas[i]));
                      let lineashowcurrent = this.crearboton(entidad, 'SHOWCURRENT', JSON.stringify(datosfilas[i]));
              
                      textolineadatos += lineaedit+lineadelete+lineashowcurrent;
              
                      textolineadatos += '</tr>';  star_date_project :{
                  html:{
                      tag:'input',
                      type:'date',
                  },
                  is_not_null: true,
                  component_visible_size: 10,
                  validation_rules:{
                      ADD: {
                        
                          format: ['^[A-Za-z ]+$', "name_project_format_KO"]
                          //falta cambiar la expresion regular para los date 
                      },
                      EDIT: {
                         
                          format: ['^[A-Za-z ]+$', "name_project_format_KO"]
                      },
                      SEARCH: 
                          format: ['^[A-Za-z ]+$', "name_project_format_KO"]
                      },
                  },
              
                  }
                  
                  let cuerpo = document.getElementById('muestradatostabla');
                  cuerpo.innerHTML = textolineadatos;
              
              }
          
          */

    cerrar_formulario() {

        document.getElementById("IU_form").innerHTML = '';
        document.getElementById("IU_form").setAttribute('onsubmit', "");
        document.getElementById("IU_form").setAttribute('action', "");
        document.getElementById("div_IU_form").style.display = 'none';

    }

    cerrar_test() {
        document.getElementById("div_IU_test").style.display = 'none';
    }


    cerrar_tabla() {

        document.getElementById("titulostablacabecera").innerHTML = '';
        document.getElementById("muestradatostabla").innerHTML = '';
        document.getElementById("id_tabla_datos").style.display = 'none';

    }

    mostrar_boton_test() {
        document.getElementById('botonTEST').style.display = 'inline';
    }

    abrirModalError(errorMsg) {
        document.getElementById('error_action_modal').style.display = 'block';
        document.getElementById('modal_action_overlay').style.display = 'block';
        document.getElementById('error_action_msg').className = errorMsg;
        setLang();
    }

    cerrarModalError() {
        document.getElementById('error_action_modal').style.display = 'none';
        document.getElementById('modal_action_overlay').style.display = 'none';
        //document.getElementById('error_action_msg').removeAttribute('class');
    }


    createForm() {
        document.getElementById('IU_form').innerHTML = '';

        if (typeof this.cargar_formulario_html === 'function') {
            this.cargar_formulario_html();
            return;
        }

        let formulario = '';
        this.obtenerEstructura1().forEach(campo => {
            if ((this.tipo_accion === 'ADD' || this.tipo_accion === 'EDIT') && campo.autoincrement) return;

            if (campo.tipo === 'select') {
                formulario += `\n        <label id="label_${campo.nombre}" class="label_${campo.nombre}"></label>`;
                formulario += `\n        <select id="${campo.nombre}" name="${campo.nombre}">`;
                formulario += campo.opciones.map(o => `<option value="${o}">${o}</option>`).join('');
                formulario += `</select>`;
                formulario += `\n        <span id="div_error_${campo.nombre}"><a id="error_${campo.nombre}"></a></span><br>`;
                return;
            }

            if (campo.tipo === 'file') {
                formulario += `\n        <label id="label_${campo.nombre}" class="label_${campo.nombre}"></label>`;
                formulario += `\n        <input type="text" id="${campo.nombre}" name="${campo.nombre}">`;
                formulario += `\n        <span id="div_error_${campo.nombre}"><a id="error_${campo.nombre}"></a></span>`;
                formulario += `\n        <a id="link_${campo.nombre}" href="http://193.147.87.202/ET2/filesuploaded/files_${campo.nombre}/">`;
                formulario += `\n          <img src="/CODIGO/iconos/FILE.png">`;
                formulario += `\n        </a>`;
                formulario += `\n        <label id="label_nuevo_${campo.nombre}" class="label_nuevo_${campo.nombre}"></label>`;
                formulario += `\n        <input type="file" id="nuevo_${campo.nombre}" name="nuevo_${campo.nombre}">`;
                formulario += `\n        <span id="div_error_nuevo_${campo.nombre}"><a id="error_nuevo_${campo.nombre}"></a></span><br>`;
                return;
            }

            if (campo.tipo === 'textarea') {
                formulario += `\n        <label id="label_${campo.nombre}" class="label_${campo.nombre}"></label>`;
                formulario += `\n        <textarea id="${campo.nombre}" name="${campo.nombre}" rows="${campo.filas || 5}" cols="${campo.columnas || 40}"></textarea>`;
                formulario += `\n        <span id="div_error_${campo.nombre}"><a id="error_${campo.nombre}"></a></span><br>`;
                return;
            }

            formulario += `\n      <label id="label_${campo.nombre}" class="label_${campo.nombre}"></label>`;
            formulario += `\n      <input type="${campo.tipo}" id="${campo.nombre}" name="${campo.nombre}">`;
            formulario += `\n      <span id="div_error_${campo.nombre}"><a id="error_${campo.nombre}"></a></span><br>`;
        });

        document.getElementById('IU_form').innerHTML = formulario;
    }

    obtenerEstructura1() {
        const nombreVariable = `estructura_${this.entidad}`;
        const estructura = window[nombreVariable];
        if (!estructura) return [];

        return estructura.attributes_list.map(nombre => {
            const def = estructura.attributes[nombre] || {};
            const html = def.html || {};

            let tipo = 'text';
            if (html.tag === 'select') tipo = 'select';
            else if (html.tag === 'textarea') tipo = 'textarea';
            else if (html.tag === 'input') tipo = html.type || 'text';

            return {
                nombre,
                tipo,
                autoincrement: !!def.is_autoincrement,
                opciones: html.options || [],
                filas: html.rows || null,
                columnas: html.columns || null,
                validation_rules: def.validation_rules || {}
            };
        });
    }

    obtenerEstructura2() {
        const nombreVariable = `estructura_${this.entidad}`;
        const estructura = window[nombreVariable];
        if (!estructura) return {};

        const res = {};
        const atributos = estructura.attributes || {};
        for (const [attr, conf] of Object.entries(atributos)) {
            if (!conf.validation_rules) continue;
            for (const [accion, reglas] of Object.entries(conf.validation_rules)) {
                if (!res[accion]) res[accion] = {};
                res[accion][attr] = {};
                for (const [regla, valor] of Object.entries(reglas)) {
                    if (Array.isArray(valor)) {
                        res[accion][attr][regla] = { valor: valor[0], code: valor[1] };
                    } else {
                        res[accion][attr][regla] = { valor: valor, code: valor };
                    }
                }
            }
        }
        return res;
    }

    comprobarCampo(accion, campo) {
        const campoReal = campo.startsWith('nuevo_') ? campo.slice(6) : campo;
        const tests = this.obtenerEstructura2()?.[accion]?.[campoReal] || {};
        for (const tipo in tests) {
            const { valor, code } = tests[tipo];
            switch (tipo) {
                case 'min_size':
                    if (!this.validaciones.min_size(campo, valor)) return this.mostrar_error_campo(campo, code);
                    break;
                case 'max_size':
                    if (!this.validaciones.max_size(campo, valor)) return this.mostrar_error_campo(campo, code);
                    break;
                case 'format':
                    if (!this.validaciones.format(campo, valor)) return this.mostrar_error_campo(campo, code);
                    break;
                case 'no_file':
                    if (!this.validaciones.no_file(document.getElementById(`nuevo_${campoReal}`).files[0]))
                        return this.mostrar_error_campo(campo, code);
                    break;
                case 'file_type':
                    if (!this.validaciones.type_file(document.getElementById(`nuevo_${campoReal}`).files[0], valor))
                        return this.mostrar_error_campo(campo, code);
                    break;
                case 'max_size_file':
                    if (!this.validaciones.max_size_file(document.getElementById(`nuevo_${campoReal}`).files[0], valor))
                        return this.mostrar_error_campo(campo, code);
                    break;
                case 'format_name_file':
                    if (!this.validaciones.format_name_file(document.getElementById(`nuevo_${campoReal}`).files[0], valor))
                        return this.mostrar_error_campo(campo, code);
                    break;
                case 'personalize':
                    const vals = Array.from(document.forms['IU_form'].elements)
                        .reduce((o, el) => { o[el.id] = el.value; return o; }, {});
                    const fn = window[valor];
                    if (typeof fn === 'function' && !fn(vals))
                        return this.mostrar_error_campo(campo, code);
                    break;
            }
        }
        this.mostrar_exito_campo(campo);
        return true;
    }

    cargar_formulario_dinamico() {
        /*
        const estructura = this.estructura;
        let formulario = '';
        const accion = this.tipo_accion || 'ADD';

        for (const atributo of estructura.attributes_list) {
            const config = estructura.attributes[atributo];
            const html = config.html || {};

            if (config.validation_rules && !config.validation_rules[accion]) {
                continue;
            }

            let campo = '';
            if (html.tag === 'textarea') {
                campo = `<textarea id="${atributo}" name="${atributo}" rows="${html.rows || ''}" cols="${html.columns || ''}"></textarea>`;
            } else if (html.tag === 'select') {
                campo = `<select id="${atributo}" name="${atributo}"${html.multiple ? ' multiple' : ''}>`;
                if (Array.isArray(html.options)) {
                    for (const opt of html.options) {
                        campo += `<option value="${opt}">${opt}</option>`;
                    }
                }
                campo += '</select>';
            } else {
                campo = `<input id="${atributo}" name="${atributo}" type="${html.type || 'text'}"${html.multiple ? ' multiple' : ''}${html.component_visible_size ? ` size="${html.component_visible_size}"` : ''}>`;
            }

            formulario += `<label for="${atributo}">${atributo}</label>${campo}<div id="div_error_${atributo}"></div>`;
        }

        document.getElementById('IU_form').innerHTML = formulario;
        */
        const attributes = this.estructura.attributes_list || [];
        let contenido = '';
        // Recorremos los atributos de la estructura
        for (let attribute of attributes) {

            const type = this.estructura?.attributes?.[attribute]?.html?.type || "";
            const tag = this.estructura?.attributes?.[attribute]?.html?.tag || "";

            switch (tag) {
                case "input":
                    switch (type) {
                        case "text":

                            contenido += `<label for="${attribute}">${attribute}</label>` +
                                `<input type="text" id="${attribute}" name="${attribute}">` +
                                `<span id="div_error_${attribute}"></span>`;
                            break;
                        case "number":
                            contenido += `<label for="${attribute}">${attribute}</label>` +
                                `<input type="number" id="${attribute}" name="${attribute}">` +
                                `<span id="div_error_${attribute}"></span>`;
                            break;
                        case "file":
                            contenido += `<label for="${attribute}">${attribute}</label>` +
                                `<input type="file" id="${attribute}" name="${attribute}">` +
                                `<span id="div_error_${attribute}"></span>` +
                                `<a id="link_${attribute}" href="http://193.147.87.202/c12/files_uploaded/files_${attribute}/">` +
                                `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">...</svg></a>`;
                            break;

                    }
                    break;

                case "textarea":
                    const cols = this.estructura?.attributes?.[attribute]?.html?.cols || 50;
                    const rows = this.estructura?.attributes?.[attribute]?.html?.rows || 10;
                    contenido += `<label for="${attribute}">${attribute}</label>` +
                        `<textarea id="${attribute}" name="${attribute}" rows="${rows}" cols="${cols}"></textarea>` +
                        `<span id="div_error_${attribute}"></span>`;
                    break;

                case "select":
                    const options = this.estructura?.attributes?.[attribute]?.html?.options || [];
                    contenido += `<label for="${attribute}">${attribute}</label>` +
                        `<select name="${attribute}" id="${attribute}">`;
                    for (const option of options) {
                        contenido += `<option value="${option}" class="option_slot">${option}</option>`;
                    }
                    contenido += `</select>` +
                        `<span id="div_error_${attribute}"></span>`;
                    break;
            }
        }
        document.getElementById('IU_form').innerHTML = contenido;
        document.getElementById('div_IU_form').style.display = 'block';
    }

    load_data(values) {
        for (const campo in values) {
            const elemento = document.getElementById(campo);
            if (!elemento) continue;
            if (elemento.type === 'checkbox') {
                elemento.checked = values[campo];
            } else {
                elemento.value = values[campo];
            }
        }
    }

    createForm_ADD() {
        this.tipo_accion = 'ADD';
        this.form_values = null;
        this.createForm();
    }

    createForm_SEARCH() {
        this.tipo_accion = 'SEARCH';
        this.form_values = null;
        this.createForm();
    }

    createForm_EDIT(values) {
        this.tipo_accion = 'EDIT';
        this.form_values = values;
        this.createForm();
    }

    createForm_DELETE(values) {
        this.tipo_accion = 'DELETE';
        this.form_values = values;
        this.createForm();
    }

    createForm_SHOWCURRENT(values) {
        this.tipo_accion = 'SHOWCURRENT';
        this.form_values = values;
        this.createForm();
    }

} 

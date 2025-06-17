class DOM_class extends test {

    constructor() {
        super();
    }

    mostrar_error_campo(id, codigoerror) {
        const errorSpan = document.getElementById('div_error_' + id);
        const input = document.getElementById(id);
        if (errorSpan) {
            errorSpan.style.display = 'inline';
            errorSpan.innerHTML = codigoerror;
            errorSpan.className = codigoerror;
        }
        if (input) input.className = 'errorcampo';
        const submitBtn = document.getElementById('submit_button');
        if (submitBtn) submitBtn.focus();
        setLang();
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


    createForm(action) {
        document.getElementById('IU_form').innerHTML = '';

        if (typeof this.cargar_formulario_html === 'function') {
            this.cargar_formulario_html();
        } else {
            this.cargar_formulario_dinamico();
        }
        console.log(document.getElementById('IU_form').querySelectorAll('input, textarea'));
        for (let input of document.getElementById('IU_form').querySelectorAll('input, textarea')) {
            
            const atributo = input.id;
            //autoincrementales
            if (action === 'ADD' || action === 'EDIT') {
                const autoIn = this.estructura?.attributes?.[atributo]?.is_autoincrement || false;
                if (autoIn) {
                    input.style.display = "none";
                    const labelEl = document.querySelector(`label[for="${atributo}"]`);
                    if (labelEl) labelEl.style.display = "none";
                    const errorEl = document.getElementById(`div_error_${atributo}`);
                    if (errorEl) errorEl.classList.add('hidden');
                }
            }
            //ficheros
            if (action === 'ADD' || action === 'SEARCH') {
                const esfichero = (this.estructura?.attributes?.[atributo]?.html?.type) === 'file';
                if (esfichero) {
                    const linkEl = document.getElementById(`link_${atributo}`);
                    if (linkEl) linkEl.classList.add('hidden');
                }
            }

            if (action === 'ADD') {
                const esfichero = (this.estructura?.attributes?.[atributo]?.html?.type) === 'file';
                if (esfichero) {
                    input.classList.add('hidden');
                    const labelEl = document.querySelector(`label[for="${atributo}"]`);
                    if (labelEl) labelEl.classList.add('hidden');
                    const errorEl = document.getElementById(`div_error_${atributo}`);
                    if (errorEl) errorEl.classList.add('hidden');
                }
            }

            if (action === 'SEARCH' || action === 'SHOWCURRENT' || action === 'DELETE') {
                if (atributo.startsWith('nuevo_') || atributo.startsWith('foto_')) {
                    input.classList.add('hidden');
                    const labelEl = document.querySelector(`label[for="${atributo}"]`);
                    if (labelEl) labelEl.classList.add('hidden');
                    const errorEl = document.getElementById(`div_error_${atributo}`);
                    if (errorEl) errorEl.classList.add('hidden');
                }
            }
        }
        //colocar botones 

        switch (action) {
            case 'ADD':
                document.getElementById('IU_form').innerHTML += `<button type="button" id="submit_button" onclick="validar.submit_test('ADD')">niger</button>`;
                break;
                /*
            case 'SEARCH':
                document.getElementById('IU_form').innerHTML += `<button type="submit" id="submit_button" class="btn btn-primary">${this.textos['text_contenido_boton_submit_SEARCH']}</button>`;
                break;
            case 'EDIT':
                document.getElementById('IU_form').innerHTML += `<button type="submit" id="submit_button" class="btn btn-primary">${this.textos['text_contenido_boton_submit_EDIT']}</button>`;
                break;
            case 'DELETE':
                document.getElementById('IU_form').innerHTML += `<button type="submit" id="submit_button" class="btn btn-primary">${this.textos['text_contenido_boton_submit_DELETE']}</button>`;
                break;
*/

        }






    }

    cargar_formulario_dinamico() {
        /*
        const estructura = this.estructura;
        let formulario = '';
        const accion = this.tipo_formulario || 'ADD';

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
              const cols = this.structure?.attributes?.[attribute]?.html?.cols || 50;
              const rows = this.structure?.attributes?.[attribute]?.html?.rows || 10;
              contenido += `<label for="${attribute}">${attribute}</label>` +
                             `<textarea id="${attribute}" name="${attribute}" rows="${rows}" cols="${cols}"></textarea>` +
                             `<span id="div_error_${attribute}"></span>`;
              break;
    
            case "select":
              const options = this.structure?.attributes?.[attribute]?.html?.options || [];
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
        this.tipo_formulario = 'ADD';
        this.form_values = null;
        this.createForm();
    }

    createForm_SEARCH() {
        this.tipo_formulario = 'SEARCH';
        this.form_values = null;
        this.createForm();
    }

    createForm_EDIT(values) {
        this.tipo_formulario = 'EDIT';
        this.form_values = values;
        this.createForm();
    }

    createForm_DELETE(values) {
        this.tipo_formulario = 'DELETE';
        this.form_values = values;
        this.createForm();
    }

    createForm_SHOWCURRENT(values) {
        this.tipo_formulario = 'SHOWCURRENT';
        this.form_values = values;
        this.createForm();
    }

} 

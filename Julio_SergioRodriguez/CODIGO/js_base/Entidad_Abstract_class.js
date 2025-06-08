class EntidadAbstracta extends DOM_class{

	constructor(){
		super();
	}

	inicializar(){

		if (eval(this.datosespecialestabla)){}
		else{
			this.datosespecialestabla = Array();
		}

		this.access_functions = new ExternalAccess();
		this.validaciones = new validacionesatomicas();

		
		this.SEARCH();


	}

	

	crearTablaDatos(){

		document.getElementById("id_tabla_datos").style.display = 'block';

		//construir tabla
		this.hacertabla();
		//construir select
		this.construirSelect();
		
		//ocultar segun columnasamostrar
		this.mostrarocultarcolumnas();

	}

	cargar_formulario(){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}
		else{
			if (eval(this.cargar_formulario_dinamico)){
				this.cargar_formulario_dinamico();
			}
			else{
				
				// alert('no existe formulario');
				// Usando modal
				this.abrirModalError('no existe formulario');
			}
		}

	}


	async SEARCH(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'SEARCH')
        .then((respuesta) => {
            
            //limpiar el formulario
        	this.cargar_formulario_html();
			//quito los class de la muestra de filas
			document.getElementById('muestradatostabla').removeAttribute('class');

            //poner el div del formulario no visible
            document.getElementById("div_IU_form").style.display = 'none';

            this.datos = respuesta['resource'];

            if (respuesta['code'] == 'RECORDSET_DATOS'){
            	this.crearTablaDatos();
            }
            else{
				document.getElementById("id_tabla_datos").style.display = 'block';
				document.getElementById('muestradatostabla').innerHTML = '';
                document.getElementById('muestradatostabla').className = 'RECORDSET_VACIO';
            }

			setLang();

        });
    
    }

    async ADD(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'ADD')
        .then((respuesta) => {

        	if (respuesta['ok']){
            
	            //limpiar el formulario
	            this.cargar_formulario();

	            //poner el div del formulario no visible
	            document.getElementById("div_IU_form").style.display = 'none';

	            this.SEARCH();

	        }
	        else{

	        	// mostrar mensaje error accion
	        	// alert('error : '+respuesta['code']);

				// Usando modal
				this.abrirModalError(respuesta['code']);
	        }

        });
    
    }

    async DELETE(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'DELETE')
        .then((respuesta) => {

        	if (respuesta['ok']){
            
	            //limpiar el formulario
	            this.cargar_formulario();

	            //poner el div del formulario no visible
	            document.getElementById("div_IU_form").style.display = 'none';

	            this.SEARCH();
	        }
	        else{

	        	// mostrar mensaje error accion
	        	// alert('error : '+respuesta['code']);
				// Usando modal
				this.abrirModalError(respuesta['code']);
	        }

        });
    
    }

    async EDIT(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'EDIT')
        .then((respuesta) => {

        	if (respuesta['ok']){
            
	            //limpiar el formulario
	            this.cargar_formulario();

	            //poner el div del formulario no visible
	            document.getElementById("div_IU_form").style.display = 'none';

	            this.SEARCH();

	        }
	        else{

	        	// mostrar mensaje error accion
	        	// alert('error : '+respuesta['code']);
				// Usando modal
				this.abrirModalError(respuesta['code']);
	        }

        });
    
    }

	cambiacolumnastabla(atributo){

		document.querySelector("th[class='"+atributo+"']").style.display = 'none';

	}

}

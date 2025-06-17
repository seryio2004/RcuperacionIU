class project extends EntidadAbstracta {
    constructor(){
        super();
        this.entidad = 'project';
        this.estructura = estructura_project;
        this.columnasamostrar = this.estructura.columnas_visibles_tabla;
        this.datosespecialestabla = this.estructura.columnas_modificadas_tabla;
    }
}

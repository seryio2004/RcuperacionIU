class analysis_preparation extends EntidadAbstracta {
    constructor() {
        super();
        this.entidad = 'analysis_preparation';
        this.estructura = estructura_analysis_preparation;
        this.columnasamostrar = this.estructura.columnas_visibles_tabla;
        this.datosespecialestabla = this.estructura.columnas_modificadas_tabla;
    }
}

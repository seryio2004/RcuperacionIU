class characteristic extends EntidadAbstracta {
    constructor() {
        super();
        this.entidad = 'characteristic';
        this.estructura = estructura_characteristic;
        this.columnasamostrar = this.estructura.columnas_visibles_tabla;
        this.datosespecialestabla = this.estructura.columnas_modificadas_tabla;
    }
}

class Dom_validations extends DOM_class {
    constructor(){
        super();
    }

    load_validations(action){
        let ok = true;
        const attrs = this.estructura.attributes;
        for(const nombre of this.estructura.attributes_list){
            const config = attrs[nombre];
            const rules = config.validation_rules ? config.validation_rules[action] : null;
            if(!rules) continue;
            const valor = document.getElementById(nombre).value;
            if(rules.min_size && !this.validaciones.min_size(valor, rules.min_size[0])){
                this.mostrar_error_campo(nombre, rules.min_size[1]);
                ok = false; continue;
            }
            if(rules.max_size && !this.validaciones.max_size(valor, rules.max_size[0])){
                this.mostrar_error_campo(nombre, rules.max_size[1]);
                ok = false; continue;
            }
            if(rules.format && !this.validaciones.format(valor, new RegExp(rules.format[0]))){
                this.mostrar_error_campo(nombre, rules.format[1]);
                ok = false; continue;
            }
            this.mostrar_exito_campo(nombre);
        }
        if(this.check_special_tests){
            ok = this.check_special_tests(action) && ok;
        }
        return ok;
    }

    submit_test(action){
        if(this.load_validations(action)){
            return this.access_functions.back_request('IU_form', this.entidad, action);
        }
        return Promise.resolve({ok:false});
    }

    check_special_tests(){
        // extension hook
        return true;
    }
}

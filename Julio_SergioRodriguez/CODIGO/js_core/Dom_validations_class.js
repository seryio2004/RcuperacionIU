class Dom_validations extends DOM_class {
    constructor(){
        super();
    }
load_validations(formId,action,structure,atomicValidations){
        const formulario=document.getElementById(formId);
        const inputs=Array.from(formulario.querySelector('input','textArea')).filter(el =>!el.classList.contains('hidden'));
        for(const input of inputs){
            const esValido=this.load_field_validations(input.id,action,structure,atomicValidations);
            if(!esValido){
                return false;
            }
        }
        return true;
}
    
}

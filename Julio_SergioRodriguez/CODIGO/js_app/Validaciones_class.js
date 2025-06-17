class validacionesatomicas {
    constructor() {}

    min_size(value, size){
        return value.length >= size;
    }

    max_size(value, size){
        return value.length <= size;
    }

    format(value, regex){
        return regex.test(value);
    }
}


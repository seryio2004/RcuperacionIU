class validacionesatomicas {
    constructor() {}

    min_size(value, size) {
        return value.length >= size;
    }

    max_size(value, size) {
        return value.length <= size;
    }

    format(value, regex) {
        const re = new RegExp(regex);
        return re.test(value);
    }

    no_file(files) {
        return files && files.length > 0;
    }

    file_type(files, type) {
        if (!files || files.length === 0) return false;
        return files[0].type === type;
    }

    max_size_file(files, size) {
        if (!files || files.length === 0) return false;
        return files[0].size <= size;
    }

    format_name_file(files, regex) {
        if (!files || files.length === 0) return false;
        const re = new RegExp(regex);
        return re.test(files[0].name);
    }
}



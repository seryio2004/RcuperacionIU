class test {
    test_run() {
        if(typeof test_definitions === 'undefined'){ console.warn('No test definitions'); return; }
        console.log('Running tests');
        for(const def of test_definitions){
            console.log('Test', def.descripcion);
        }
    }
}


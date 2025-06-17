class test {
    test_run() {
        if (!window.validar || !validar.entidad) {
            console.warn('No entity loaded');
            return;
        }
        const defs = window[`${validar.entidad}_def_tests`] || [];
        let output = [];
        for (const d of defs) {
            output.push(d.join(' | '));
        }
        document.getElementById('div_IU_test').style.display = 'block';
        document.getElementById('tablaresultadostest').innerHTML = output.map(o => `<tr><td>${o}</td></tr>`).join('');
    }
}



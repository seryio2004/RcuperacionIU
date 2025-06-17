class test {
    constructor() {
    }

    show_test_div() {
        document.getElementById('div_IU_test').style.display = 'block';
    }

    hide_test_div() {
        document.getElementById('div_IU_test').style.display = 'none';
    }

    resultado(msg) {
        const out = document.getElementById('resultadotest');
        if (out) out.innerHTML = msg;
    }

    comprobar_estructura(defs, campos) {
        if (!Array.isArray(defs)) return false;
        for (const def of defs) {
            for (const campo of campos) {
                if (!def.hasOwnProperty(campo)) return false;
            }
        }
        return true;
    }

    ejecutar_pruebas(pruebas, callback) {
        const resultados = [];
        if (!Array.isArray(pruebas)) return resultados;
        for (const prueba of pruebas) {
            let ok = false;
            try {
                if (typeof callback === 'function') {
                    ok = callback(prueba);
                }
            } catch (e) {
                ok = false;
            }
            resultados.push({ prueba, ok });
        }
        return resultados;
    }

    test_run() {
        this.show_test_div();
        this.resultado('');
        if (typeof this.tests_def === 'undefined') {
            this.resultado('No tests defined');
            return;
        }
        const estructura_ok = this.comprobar_estructura(
            this.tests_def,
            ['entidad','campo','num_def','descripcion','accion','esperado','mensaje']
        );
        if (!estructura_ok) {
            this.resultado('Formato de definiciones incorrecto');
            return;
        }
        if (typeof this.tests === 'undefined') {
            this.resultado('No hay pruebas');
            return;
        }
        const res = this.ejecutar_pruebas(this.tests);
        const tbody = document.getElementById('tablaresultadostest');
        if (tbody) tbody.innerHTML = '';
        for (const r of res) {
            if (tbody) {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                td1.textContent = r.prueba.campo;
                const td2 = document.createElement('td');
                td2.textContent = r.ok ? 'OK' : 'KO';
                tr.appendChild(td1);
                tr.appendChild(td2);
                tbody.appendChild(tr);
            }
        }
        this.resultado('Total pruebas: ' + res.length);
    }
}
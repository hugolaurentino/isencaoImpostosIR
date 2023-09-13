const aposentada = false;
const portadoraDeDoenca = true;
const totalDeRendimentos = (3000000 / 100).toFixed(2);

console.log(`
${totalDeRendimentos >= (2855970 / 100).toFixed(2) ?
        aposentada ? 'ISENTA Aposentado' :
            portadoraDeDoenca ? 'ISENTA Portador de Doença' :
                'R$ ' + totalDeRendimentos + ' PEGA LEÃO' : 'R$ ' + totalDeRendimentos + ' VAZA LEÃO! JÁ TA DIFÍCIL SEM VOCÊ'
    }
`);
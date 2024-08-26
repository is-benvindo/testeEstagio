const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }
];

function relatorioVendas(listaVendas, periodo){
    let relatorio = {
        totalPorSku : {},
        valorTotal: 0
    }

    let [dataMin, dataMax] = periodo.split(',');
    dataMin = new Date(dataMin);
    dataMax = new Date(dataMax);

    for(let i = 0; i < listaVendas.length; i++){
        let dataVenda = listaVendas[i].data;
        dataVenda = new Date(dataVenda);
        if (dataVenda >= dataMin && dataVenda <= dataMax){
            let sku = listaVendas[i].sku;
            let quantidade = listaVendas[i].quantidade;
            let valorTotal = listaVendas[i].valorTotal;

            if(!relatorio.totalPorSku[sku]){
                relatorio.totalPorSku[sku] = {quantidade: 0, valorTotal: 0};

            }
            relatorio.totalPorSku[sku].quantidade += quantidade;
            relatorio.totalPorSku[sku].valorTotal += valorTotal;
            
            relatorio.valorTotal += valorTotal;

        } else {
            console.log('Não há vendas registradas para o período especificado.')
        }
    }
    return relatorio
};

relatorio = relatorioVendas(vendas, '2021-01-01, 2021-01-02');
console.log(relatorio);
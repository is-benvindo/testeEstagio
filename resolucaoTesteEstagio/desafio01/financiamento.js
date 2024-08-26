function financiamento(valor_produto, qntd_parcelas, juros_mensal) {
    let juros_decimal = juros_mensal / 100;
    let parcela = (valor_produto * juros_decimal * ((1 + juros_decimal) ** qntd_parcelas)) /
        (((1 + juros_decimal) ** qntd_parcelas) - 1);
    console.log(`Valor das parcelas: R$ ${parcela.toFixed(2)}`);

    let valor_financiamento = parcela * qntd_parcelas;
    return valor_financiamento
}

let total_a_pagar = financiamento(88000, 25, 1.5);
console.log(`Valor total: R$ ${total_a_pagar.toFixed(2)}`);
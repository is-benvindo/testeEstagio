// Tabela de preços
const tabelaPrecos = {
    '0-1,0-5': 10.0,    // Até 1 kg e até 5 km: R$ 10.00
    '0-1,6-10': 15.0,   // Até 1 kg e 6-10 km: R$ 15.00
    '1-5,0-5': 20.0,    // 1-5 kg e até 5 km: R$ 20.00
    '1-5,6-10': 25.0,   // 1-5 kg e 6-10 km: R$ 25.00
    '5-10,0-5': 30.0,   // 5-10 kg e até 5 km: R$ 30.00
    '5-10,6-10': 35.0   // 5-10 kg e 6-10 km: R$ 35.00
};

function frete(peso_produto, distancia, tabela) {
    const entries = Object.entries(tabela);
    for (let [chave, valor] of entries) {
        let [pesoIntervalo, distanciaIntervalo] = chave.split(',');
        let [pesoMin, pesoMax] = pesoIntervalo.split('-').map(Number);
        let [distanciaMin, distanciaMax] = distanciaIntervalo.split('-').map(Number);

        if (peso_produto >= pesoMin && peso_produto <= pesoMax &&
            distancia >= distanciaMin && distancia <= distanciaMax) {
            return valor; 
        }
    }

    return "Intervalo não encontrado";
}

calcular_frete = frete(10, 8, tabelaPrecos);
console.log(calcular_frete); 
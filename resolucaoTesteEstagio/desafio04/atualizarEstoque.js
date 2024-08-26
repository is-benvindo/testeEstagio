const itensVendidos = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
];

const estoque = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
];

function atualizarEstoque(lista_venda, lista_estoque){
    for (let i = 0; i < lista_venda.length; i++) {
        for (let j = 0; j < lista_estoque.length; j++) {
            if (lista_venda[i].sku == lista_estoque[j].sku) {
                lista_estoque[j].quantidade = lista_estoque[j].quantidade - lista_venda[i].quantidade;
                break; 
            }
        }
    }
    return lista_estoque;
}

const estoque_atualizado = atualizarEstoque(itensVendidos, estoque);
console.log(estoque_atualizado);
const produtos = [
    { sku: 1001, nome: 'Camiseta', quantidade: 5 },
    { sku: 1002, nome: 'Calça', quantidade: 10 },
    { sku: 1003, nome: 'Vestido', quantidade: 3 }
];

function controleEstoque(id_produto, lista_produtos) {
    for (let i = 0; i < lista_produtos.length; i++) {
        if (lista_produtos[i].sku == id_produto) {
            if (lista_produtos[i].quantidade > 0) {
                return true
            }
            else {
                return false
            }
        }
    }
    console.log('Produto não encontrado.')
}
let estoque = controleEstoque(1001, produtos);
console.log(estoque);
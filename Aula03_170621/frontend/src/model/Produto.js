export default class Produto {
    // Construção do produto.
    constructor(obj) {
        obj = obj || {}; //Tratamento para não deixar da um erro quando o ojt vir null, vazio. 
        
        this.id = obj.id;
        this.nome = obj.nome;
        this.quantidade = obj.quantidade;
        this.valor = obj.valor;
        this.urlImagem = obj.urlImagem;
    }

    // Exemplo de um metodo que sabe validar se o produto é valido ou não. 
    modeloValido() {
        return !! (this.id && this.nome);
    }
}
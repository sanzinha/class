class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preço = preco;
    this.quantidade = quantidade;
  }
  mostraDados() {
    console.log(
      `Produto ${this.nome},preço ${this.preco}, quantidade ${this.quantidade}`
    );
  }
  vender(qtd) {
    if (qntd <= this.quantidade) {
      this.quantidade -= qtd;
      console.log(`venda realizada. Quantidade atual ${this.quantidade}`);
    } else {
      console.log("estoque insuficiente para venda");
    }
  }
  repor(qtd) {
    this.quantidade += qtd;
    console.log(`reposicao feita. quantidade atual: ${this.quantidade}`);
  }
}
let produto = new Produto("caneta", 2.5, 100);
//produto.mostraDados();
//produto.venda(15);
produto.repor(20);

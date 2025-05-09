class contaBancaria {
  constructor(deposito, sacar, verSaldo) {
    this.deposito = deposito;
    this.sacar = sacar;
    this.verSaldo = verSaldo;
  }
  mostraDados() {
    console.log(
      `Produto ${this.deposito},Saque ${this.sacar}, saldo ${this.verSaldo}`
    );
  }
  deposito(valor) {
    if (valr <= this.verSaldo) {
      this.verSaldo += valor;
      console.log(`saque realizada. Quantidade atual ${this.verSaldo}`);
    } else {
      console.log("saldo insuficiente para saque");
    }
  }
  depositar(valor) {
    this.verSaldo += valor;
    console.log(`reposicao feita. quantidade atual: ${this.quantidade}`);
  }
}
let produto = new Produto("caneta", 2.5, 100);
//produto.mostraDados();
//produto.venda(15);
produto.repor(20);

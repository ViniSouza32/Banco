import PromptSync from "prompt-sync";
const prompt = PromptSync();
let numeroConta = 1;

export class Conta {
  private numeroDaConta: number
  public listarTransacoes: string[] = [];

  constructor (public saldo: number) {
    this.numeroDaConta = numeroConta++;
  }

  Adicionar(valorAdicionar: number) {
    let confirmacao: string = prompt(`Tem certeza que é este o valor que quer adicionar R$ ${valorAdicionar} ? (sim / nao)`);
    if (confirmacao == 'sim') {
      this.saldo = this.saldo + valorAdicionar;
      this.listarTransacoes.push(`Adição de dinheiro a conta: R$ ${valorAdicionar}, Saldo atual: R$ ${this.saldo}`)
    } else {
      console.log('Ação cancelada!');
    }
  }

  Subtrair(valorSubtrair: number) {
    if (this.saldo >= 0) {
      let confirmacao: string = prompt(`Tem certeza que é este o valor que quer tirar R$ ${valorSubtrair} ? (sim / nao)`);
      if (confirmacao == 'sim') {
        this.saldo = this.saldo - valorSubtrair;
        this.listarTransacoes.push(`Remoção de dinheiro da conta: R$ ${valorSubtrair}, Saldo restante: R$ ${this.saldo}`);
      } else {
        console.log('Ação cancelada!');
      }
    } else {
      console.log(`Saldo da conta está zerado: ${this.saldo}`);
    }
  }

}
export enum TiposDeConta {
  SALARIO = 'Salário',
  PUPANCA = 'Poupança',
  CORRENTE = 'Corrente',
}

export enum Produtos {
  GELADEIRA = 5000,
  FOGAO = 4000,
  SMARTPHONE = 3000,
  NOTEBOOK = 1200,
}

export type TipoDeConta = TiposDeConta.CORRENTE | TiposDeConta.PUPANCA | TiposDeConta.SALARIO;
export type Prod = Produtos.FOGAO | Produtos.GELADEIRA | Produtos.NOTEBOOK | Produtos.SMARTPHONE;

export class Transacao {

  constructor(public tipo: TipoDeConta) {

  }

  public Valor() {
  
  }

  public DataHora() {
    const dataHora = new Date(Date.now()).toLocaleString();

    console.log(dataHora);
  }
}
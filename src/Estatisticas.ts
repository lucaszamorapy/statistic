import countBy from "./countBy.js";

type TransacaoValor = Transacao & { valor: number } //Uma cópia da interface Transacao porém com valor sendo somente number

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}


export default class Estatiscas {
  private transacoes;
  total;
  pagamento;
  status;
  semana;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes
    this.total = this.setTotal()
    this.pagamento = this.setPagamento()
    this.status = this.setStatus()
    this.semana = this.setSemana()
  }
  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((inicial, item) => {
      return inicial + item.valor
    }, 0)
  }
  private setPagamento() {
    return countBy(this.transacoes.map((item) => item.pagamento))
  }
  private setStatus() {
    return countBy(this.transacoes.map((item) => item.status))
  }
  private setSemana() {

  }
}
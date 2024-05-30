type TransacaoValor = Transacao & { valor: number } //Uma cópia da interface Transacao porém com valor sendo somente number

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}


export default class Estatiscas {
  private transacoes;
  total;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes
    this.total = this.setTotal()
  }
  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((inicial, item) => {
      return inicial + item.valor
    }, 0)
  }
}
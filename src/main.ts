import './style.css'
import fetchData from './fetchData.js'
import normalTransition from './normalTransition.js'
import Estatiscas from './Estatisticas.js'

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?")
  if (!data) return
  const transacoes = data.map(normalTransition)
  preencherTabela(transacoes)
  preencherEstatisticas(transacoes)
}

function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatiscas(transacoes)
  const totalElement = document.querySelector<HTMLElement>("#total span")
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  }
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes")
  if (!tabela) return
  transacoes.map((item) => (
    tabela.innerHTML += `<tr>
      <td>${item.nome}</td>
      <td>${item.email}</td>
      <td>R$ ${item.moeda}</td>
      <td>${item.pagamento}</td>
      <td>${item.status}</td>
    </tr>`
  ))
}


handleData()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h2>Estatísticas</h2>
  <p id="total">Total: <span></span></p>
  <h2>Dados</h2>
   <table id="transacoes">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Compra</th>
        <th>Pagamento</th>
        <th>Status</th>
      </tr>
    </thead>
   </table>
  
`



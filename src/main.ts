import './style.css'
import fetchData from './fetchData.js'

type TransacaoPagamento = "Boleto" | "Cartão de Crédito"
type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornado"

interface TransacaoAPI {
  Nome: string;
  ID: number;
  Data: string;
  Status: TransacaoStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento"]: TransacaoPagamento;
  ["Cliente Novo"]: number
}

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json")
  if (data) {
    let nomes = ''
    data.map((item) => nomes += `<p>${item.Nome}</p>`)
    document.querySelector<HTMLDivElement>('#teste')!.innerHTML = nomes
  }
}

handleData()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="teste">
   
  </div>
`



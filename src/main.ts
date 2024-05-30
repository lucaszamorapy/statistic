import './style.css'
import fetchData from './fetchData.js'
import normalizarTransacao from './normalizarTransacao.js'

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?")
  if (!data) return
  let transacao = ''
  const newData = data.map(normalizarTransacao)
  transacao += newData.map((item) => item.moeda)
  document.querySelector<HTMLDivElement>('#teste')!.innerHTML = transacao
}

handleData()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="teste">
   
  </div>
`



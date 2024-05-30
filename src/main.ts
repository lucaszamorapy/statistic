import './style.css'
import fetchData from './fetchData.js'
import normalTransition from './normalTransition.js'

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?")
  if (!data) return
  const transacao = data.map(normalTransition)
  console.log(transacao)
}


handleData()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="teste">
   
  </div>
`



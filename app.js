/**
 * <label class="item-lista">
        <input type="checkbox">
        <div>teste de item 2</div>
        <input type="button" value="x">
      </label>
 */

let banco = [
  
]

const criarItem = (tarefa, status, indice) => {
  const item = document.createElement( "label")
  item.classList.add( 'item-lista')
  item.innerHTML = ` 
    <label class="item-lista">
      <input type="checkbox" ${status}  data-indice =${indice}>
      <div>${tarefa}</div>
      <input type="button" data-indice =${indice}>
    </label>
  `
  document.getElementById( 'lista' ).appendChild( item )

}

const limparLista = () => {
  const limpar = document.getElementById('lista')
  while (limpar.firstChild) {
    limpar.removeChild(lista.lastChild)
  }
}

const atualizarTela = () => {
  limparLista()
  banco.forEach( (item, indice) => criarItem(item.tarefa, item.status, indice) )

}

const adicionarItem = (e) => {
  const tecla = e.key
  const texto = e.target.value
  if( tecla == 'Enter'){
    banco.push({'tarefa': texto, 'status': ''})
    atualizarTela()
    e.target.value = ''
  }
}

const removerItem = (indice) => {
  banco.splice(indice,1)
  atualizarTela()
}

const atualizarItem = (indice) => {
  banco[indice].status = banco[indice].status == '' ? 'checked' : ''
  atualizarTela()
 }

const clickItem = (evento) => {
  const element = evento.target
  if(element.type == 'button') {
    const indice = element.dataset.indice
    removerItem(indice)
  }else if( element.type == 'checkbox') {
    const indice = element.dataset.indice
    atualizarItem(indice)
  }
}

document.getElementById('texto-lista').addEventListener('keypress', adicionarItem)
document.getElementById('lista').addEventListener('click', clickItem)

atualizarTela()
import { clienteService } from "./cliente-service.js"

(async() => {
    const pegaurl = new     URL(window.location)

const id = pegaurl.searchParams.get('id')

const imnome = document.querySelector('[data-nome]')
const imemail = document.querySelector('[data-email]')
try{
    const dados = await clienteService.detalhaCliente(id)
    imnome.value = dados.nome 
    imemail.value = dados.email
}
catch(error){
    console.error(error)
    window.location.href = '../telas/erro.html'
    }




const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    await clienteService.atualizaCliente(id, imnome.value, imemail.value)
    window.location.href = "../telas/edicao_concluida.html"

})
})


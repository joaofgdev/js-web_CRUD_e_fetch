import { clienteService } from "../service/cliente-service.js";


const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', async (evento ) => {
    let botaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if(botaoDeletar){
        try{
        const linhaNovoCliente = evento.target.closest('[data-id]')
        let id = linhaNovoCliente.dataset.id
        await clienteService.removeCliente(id)
        linhaNovoCliente.remove()
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    }

})

const criaNovalinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement("tr");
    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `;
    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente;
};

const render = async( ) => {
    try {
    const listadosClientes = await clienteService.listaClientes()
    listadosClientes.forEach(elemento => {
        tabela.appendChild(criaNovalinha(elemento.nome, elemento.email, elemento.id));
    });
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()
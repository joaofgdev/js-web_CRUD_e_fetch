// Função para listar clientes
const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possivel listar os clientes ')
        
    });
};

// Função para criar cliente
const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, { // Corrigido o fechamento do fetch
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok){
             return resposta.body;  // Aqui você pode retornar o body da resposta em JSON
        }
        throw new Error('Não foi possivel criar os clientes ')
       
    });
};

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method : "DELETE",

    }).then( resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possivel listar os clientes ')
}})
}
const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            if(resposta.ok){
                return resposta.json()
            }
            throw new Error('Não foi possivel detalhar os clientes ')
        })
}

const atualizaCliente = (id, nome , email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
            },
            body:   JSON.stringify ({
                nome : nome,
                email : email
            })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel atualizar os clientes ')
    })
}

export const clienteService = {
    listaClientes,
    criaCliente, // Corrigido: faltava incluir a função criaCliente no objeto exportado
    removeCliente,
    detalhaCliente,
    atualizaCliente
};

// browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html
// npx json-server --watch db.json
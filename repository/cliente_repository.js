let listaClientes = [];
let geradorId = 1;

function listar(){
  return listaClientes;
}

function geraId() {
  return geradorId++;
}

function inserir(cliente){
  cliente.id = geraId();
  listaClientes.push(cliente);

}

function buscarPorId(id){
  return listaClientes.find(function(cliente){
    return (cliente.id === id);
  }) 
}

function atualizar(id, cliente) {
  for(let ind in listaClientes) {
      if(listaClientes[ind].id === id) {
          listaClientes[ind] = cliente;
          listaClientes[ind].id = id;
          return;
      }
  }
}


function pesquisarPorLikeNome(nome) {
  return listaClientes.filter(
      (cliente) => {
          return cliente.nome.toUpperCase().includes(nome.toUpperCase());
      }
  )
}


function deletar(id){
  for(let ind in listaClientescliente){
    if(listaClientes[ind].id ===id)
    return listaClientes.splice[ind,1][0];
  }
}

function pegarLivro(clienteId, livroId) {
  const cliente = listaClientes.find((cliente) => cliente.id === clienteId);

  if (cliente) {
    if (!cliente.livrosRetirados) {
      cliente.livrosRetirados = [];
    }
    if (cliente.livrosRetirados.length < 3) {
      if (!cliente.livrosRetirados.includes(livroId)) {
        cliente.livrosRetirados.push(livroId);
        return "Livro retirado com sucesso";
      } else {
        throw { id: 400, message: "Este livro já foi retirado pelo cliente." };
      }
    } else {
      throw { id: 400, message: "Limite de retirada de livros excedido." };
    }
  } else {
    throw { id: 404, message: "Cliente não encontrado." };
  }
}

module.exports = {
  listar,
  inserir,
  buscarPorId,
  atualizar,
  deletar,
  pesquisarPorLikeNome,
  pegarLivro
}
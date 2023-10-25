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


module.exports = {
  listar,
  inserir,
  buscarPorId,
  atualizar,
  deletar,
  pesquisarPorLikeNome
}
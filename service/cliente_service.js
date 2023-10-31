const clienteRepository = require('../repository/cliente_repository');

function listar(){
  return clienteRepository.listar();
}


function inserir(cliente){
  if(cliente && cliente.nome && cliente.matricula && cliente.telefone)
    clienteRepository.inserir(cliente)
  else {
    throw {id:400, message:"Cliente nao possui um dos campos"};
}
}


function buscarPorId(id){
  const cliente = clienteRepository.buscarPorId(id);
  if (cliente){
    return cliente;
  }
  else {
    throw{id:400,message:"cliente não encontrado"};
  }
}

function atualizar(id, clienteAtualizado) {
  const cliente = clienteRepository.buscarPorId(id);
  if(!cliente) {
      throw {id: 404, message: "cliente nao encontrado"};
  }
  
  if(clienteAtualizado && clienteAtualizado.nome && clienteAtualizado.ano && clienteAtualizado.editora && 
    clienteAtualizado.autor){
    clienteRepository.atualizar(id, clienteAtualizado);
  }
  else {
      throw {id: 400, message: "cliente nao possui um dos campos obrigatorios"};
  }
}

function deletar(id){
  const cliente = clienteRepository.deletar(id);
  if(cliente){
    return cliente;
  }
  else{
    throw {id: 404, message: "livro nao encontrado"};
  }
}




module.exports = {
  listar,
  inserir,
  buscarPorId,
  atualizar,
  deletar
}
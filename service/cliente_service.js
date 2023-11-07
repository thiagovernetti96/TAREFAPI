const clienteRepository = require('../repository/cliente_repository');


const clientes = [];
const livroRepository = require('../repository/livro_repository')

function listar(){
  return clienteRepository.listar();
}






function inserir(cliente) {
  if (cliente && cliente.nome && cliente.matricula && cliente.telefone) {
    clienteRepository.inserir(cliente);
    clientes.push(cliente);
  } else {
    throw { id: 400, message: "Cliente não possui um dos campos" };
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


function pegarLivro (clienteId, livroId) {
  const cliente = clienteRepository.buscarPorId(clienteId);
  const livro = livroRepository.buscarPorId(livroId);

  if (cliente && livro) {
    if (!cliente.livrosRetirados) {
      cliente.livrosRetirados = [];
    }
    if (cliente.livrosRetirados.length < 3) {
      if (!cliente.livrosRetirados.includes(livro.id)) {
        cliente.livrosRetirados.push(livro.id);
        livroRepository.retirarLivro(livro.id);
        return `Livro ${livro.titulo} foi retirado com sucesso.`;
      } else {
        throw { id: 400, message: "Este livro já foi retirado pelo cliente." };
      }
    } else {
      throw { id: 400, message: "Limite de retirada de livros excedido." };
    }
  } else {
    throw { id: 404, message: "Cliente ou livro não encontrado." };
  }
}



module.exports = {
  listar,
  inserir,
  buscarPorId,
  atualizar,
  deletar,
  pegarLivro
}
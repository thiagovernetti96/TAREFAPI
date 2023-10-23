const livroRepository = require('../repository/produto_repository')


function listar() {
    return livroRepository.listar();
}

function inserir(livro) {
    if(livro && livro.nome && livro.ano && livro.editora && livro.autor) {// produto != undefined
        livroRepository.inserir(livro);
    }
    else {
        throw {id:400, message:"Livro nao possui um dos campos"};
    }
}

function buscarPorId(id) {
    const livro = livroRepository.buscarPorId(id);
    if(livro) {
        return livro;
    }
    else {
        throw {id:404, message:"livro nao encontrado"};
    }
}

function atualizar(id, livroAtualizado) {
    const livro = livroRepository.buscarPorId(id);
    if(!livro) {
        throw {id: 404, message: "livro nao encontrado"};
    }
    
    if(livroAtualizado && livroAtualizado.nome && livroAtualizado.ano && livroAtualizado.editora && 
      livroAtualizado.autor){
      livroRepository.atualizar(id, livroAtualizado);
    }
    else {
        throw {id: 400, message: "livro nao possui um dos campos obrigatorios"};
    }
}

function deletar(id) {
    const livroDeletado = livroRepository.deletar(id);
    if(livroDeletado){
        return livroDeletado;
    }
    else {
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
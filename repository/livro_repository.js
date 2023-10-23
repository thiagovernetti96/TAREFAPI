let listaLivros = [];
let geradorId = 1;

function listar() {
  return listaLivros;
}

function geraId() {
  return geradorId++;
}

function inserir(livro) {
  livro.id = geraId();
  listaLivros.push(livro);
}

function buscarPorId(id){
  return listaLivros.find(function(livro) {
      return(livro.id === id);        
  })   
}


function atualizar(id, livro) {
  for(let ind in listaLivros) {
      if(listaLivros[ind].id === id) {
          listaLivros[ind] = livro;
          listaLivros[ind].id = id;
          return;
      }
  }
}

function deletar(id) {
  for(let ind in listaLivros) {
      if(listaLivros[ind].id === id) {
          return listaLivros.splice(ind,1)[0];
      }
  }
}

function pesquisarPorEditora(editora) {
  return listaLivros.filter(
      (livro) => {
          return livro.editora === editora;
      }
  );
}

function pesquisarPorLikeNome(nome) {
  return listaLivros.filter(
      (livro) => {
          return livro.nome.toUpperCase().includes(nome.toUpperCase());
      }
  )
}

module.exports = {
  listar,
  inserir,
  buscarPorId,
  atualizar,
  deletar,
  pesquisarPorEditora,
  pesquisarPorLikeNome
}
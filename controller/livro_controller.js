const livroService = require ('../service/livro_service')



function listar(req, res) {
    const listalivros = livroService.listar();
    res.json(listalivros);
}

function inserir(req, res) {
    let livro = req.body;
    try {
      livroService.inserir(livro);
      res.status(201).json({msg:'Inserido com sucesso!'})
    }
    catch(err) {
      //id-> 400 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
}

function buscarPorId(req, res) {
    const id = +req.params.id;
    try {
      const livro = livroService.buscarPorId(id);
      res.json(livro);
    }
    catch(err) {
      //id-> 404 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
}

function atualizar (req, res) {
    const id = +req.params.id;
    let livro = req.body;
  
    try{ 
      livroService.atualizar(id, livro);
      res.json({msg:'livro atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}

function deletar(req, res) {
    const id = +req.params.id;
    try{ 
      const livroDeletado = livroService.deletar(id);
      res.json(livroDeletado);
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }   
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}
const { tarefasPendentes } = require('./classeLista.js');

const  remover = (nome) => {
  for(let i = 0; i < tarefasPendentes.getMostrar().length; i++){
    if (tarefasPendentes.getMostrar()[i].getNome().toLowerCase() == nome.toLowerCase()) /* A condição testa se o elemento existe no código.*/ 
      tarefasPendentes.setRemoverDaLista(nome);
    else 
      return false;
  }
}

module.exports = remover;
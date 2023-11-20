const remover = require("./funcRemover.js");

const { tarefasPendentes, tarefasConcluidas} = require("./classeLista.js");

const concluida = (nome, data) => {
  for(let i = 0; i < tarefasPendentes.getMostrar().length; i++) { // Procura o elemento que será editado
    if(tarefasPendentes.getMostrar()[i].getNome().toLowerCase() === nome.toLowerCase()) /** Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função. */ {
      tarefasPendentes.getMostrar()[i]['Concuida em'] = data;
      tarefasConcluidas.setAdicionar(tarefasPendentes.getMostrar()[i]);

      remover(nome) // Chama a função remover() para retirar a tarefa da lista de tarefas pendentes do site, já que agora ela faz parte da lista de tarefas concluídas.
    }else
      return false;
  }
}

module.exports = concluida;
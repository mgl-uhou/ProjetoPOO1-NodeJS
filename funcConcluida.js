import remover from "./funcRemover.js";

import { tarefasPendentes, tarefasConcluidas} from "./classeLista.js";

const listaConcluidos = document.getElementById('tarefasConcluidas'); // Aqui uma variável está sendo criada e a ela está sendo atribuído a lista de tarefas concluídas que existe no HTML, para que possa ser manipulada pela function concluida().
const concluida = (x) => {

  // O x do parâmetro da função é o nome da tarefa que será marcada como concluída que vem de um input do HTML

  for(let i = 0; i < tarefasPendentes.getMostrar().length; i++) { // Procura o elemento que será editado
    if(tarefasPendentes.getMostrar()[i].getNome() === x) /** Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função. */ {

      const novoItem = document.createElement('li'); // É criado um novo item na lista de Tarefas Concluídas do HTML do site. 
      //novoItem.innerHTML = `A tarefa <strong>${x.toUpperCase()}</strong> foi concluida em <strong>${document.getElementById('dataConclusao').value}</strong>.`;
      novoItem.innerHTML = tarefasPendentes.getMostrar()[i].getConcluida();
      listaConcluidos.appendChild(novoItem); // Aqui as informações que aparecerão no site são organizadas.

      /* Os campos de input são limpos */
      document.getElementById('nomeConcluida').value = '';
      document.getElementById('dataConclusao').value = '';

      //tarefa.listaDeTarefas[i].concluido();

      tarefasConcluidas.setAdicionar(tarefasPendentes.getMostrar()[i]);
      console.log("Lista de Concluídos do Objeto:");
      console.table(tarefasConcluidas.getMostrar());

      remover(x) // Chama a função remover() para retirar a tarefa da lista de tarefas pendentes do site, já que agora ela faz parte da lista de tarefas concluídas.
    }else
      console.log('Digite o nome da tarefa.')
  }
}

export default concluida;
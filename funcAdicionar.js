import tarefa from "./classeTarefa.js";
import tarefasComEtiqueta from "./classeTarefaComEtiqueta.js";
import tarefasPrioridade from "./classeTarefaPrioritaria.js";
import tarefaRepetitiva from "./classeTarefaRepetitiva.js";

import { tarefasPendentes } from "./classeLista.js";

const listaPendentes = document.getElementById('tarefasPendentes'); // Aqui uma variável está sendo criada e a ela está sendo atribuído a lista de tarefas pendentes que existe no HTML, para que possa ser manipulada pela function adicionar().
const add = (obj) => {

  tarefasPendentes.setAdicionar(obj);
  console.log("Lista de Tarefas do Objeto:");
  console.table(tarefasPendentes.getMostrar());

  const novoItem = document.createElement('li'); // É criado um novo item na lista de Tarefas Pendentes do HTML do site. 
  novoItem.id = obj.getNome(); // Aqui o item recebe como identificador o próprio nome, para facilitar sua busca.

  novoItem.innerHTML = obj.getInformation();

  listaPendentes.appendChild(novoItem); // Aqui a tarefa com suas informações é posta no site.

  // Os campos de input e text area são limpos
  document.getElementById('nomeTarefa').value = '';
  document.getElementById('descricao').value = '';

  document.getElementById('nomeTarefaComEtiqueta').value = '';
  document.getElementById('descricaoNovaTarefaComEtiqueta').value = "";
  document.getElementById("etiqueta").value = "";

  document.getElementById('nomeTarefaPrioritaria').value = "";
  document.getElementById('descricaoPrioritaria').value = "";
  document.getElementById("prioridade").value = "";
  document.getElementById("dataLimite").value = "";

  document.getElementById('nomeTarefaRepetitiva').value = "";
  document.getElementById('descricaoRepetitiva').value = "";
  document.getElementById("frequencia").value = "";
  document.getElementById("dataInicio").value = "";
}

const adicionarComum = () => { // Arrow Fuction responsável por adicionar tarefas é criada.

  if(document.getElementById('nomeTarefa').value != '') { // Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função.

    let obj = new tarefa() // O objeto é criado e recebe as propriedades da classe.

    obj.setInformation(document.getElementById('nomeTarefa').value.toUpperCase(), document.getElementById('descricao').value);

    add(obj);
  }
  else
    console.log('Defina um nome para a tarefa.')
}

const adicionarComEtiqueta = () => {

  if(document.getElementById('nomeTarefaComEtiqueta').value != '') { // Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função.

    let obj = new tarefasComEtiqueta() // O objeto é criado e recebe as propriedades da classe.

    obj.setInformation(
      document.getElementById('nomeTarefaComEtiqueta').value.toUpperCase(), 
      document.getElementById('descricaoNovaTarefaComEtiqueta').value, 
      document.getElementById("etiqueta").value
      );

    add(obj);
  }
  else
    console.log('Defina um nome para a tarefa.')

}

const adicionarPrioritaria = () => {

  if(document.getElementById('nomeTarefaPrioritaria').value != '') { // Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função.

    let obj = new tarefasPrioridade() // O objeto é criado e recebe as propriedades da classe.

    obj.setInformation(
      document.getElementById('nomeTarefaPrioritaria').value.toUpperCase(),
      document.getElementById('descricaoPrioritaria').value, 
      document.getElementById("prioridade").value, 
      document.getElementById("dataLimite").value
      );

    add(obj);
  }
  else
    console.log('Defina um nome para a tarefa.')

}

const adicionarRepetitiva = () => {

  if(document.getElementById('nomeTarefaRepetitiva').value != '') { // Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função.

    let obj = new tarefaRepetitiva() // O objeto é criado e recebe as propriedades da classe.

    obj.setInformation(document.getElementById('nomeTarefaRepetitiva').value.toUpperCase(), document.getElementById('descricaoRepetitiva').value, document.getElementById("frequencia").value, document.getElementById("dataInicio").value);

    add(obj);
  }
  else
    console.log('Defina um nome para a tarefa.')

}

export { adicionarComum, adicionarComEtiqueta, adicionarPrioritaria, adicionarRepetitiva };

/* console.log('Tarefas Pendentes:');
    console.table(tarefa.listaDeTarefas); // A lista com as tarefas é mostrada no console.

    const novoItem = document.createElement('li'); // É criado um novo item na lista de Tarefas Pendentes do HTML do site. 
    novoItem.id = obj.getNome(); // Aqui o item recebe como identificador o próprio nome, para facilitar sua busca.

    novoItem.innerHTML = obj.getInformation();

    listaPendentes.appendChild(novoItem); // Aqui a tarefa com suas informações é posta no site.

    // Os campos de input e text area são limpos
    document.getElementById('nomeTarefa').value = '';
    document.getElementById('descricao').value = ''; */
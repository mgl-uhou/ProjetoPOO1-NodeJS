import tarefa from "./classeTarefa.js";

const listaPendentes = document.getElementById('tarefasPendentes'); // Aqui uma variável está sendo criada e a ela está sendo atribuído a lista de tarefas pendentes que existe no HTML, para que possa ser manipulada pela function adicionar().
const adicionar = () => { // Arrow Fuction responsável por adicionar tarefas é criada.

  if(document.getElementById('nomeTarefa').value != '') { // Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função.

    let obj = new tarefa() // O objeto é criado e recebe as propriedades da classe.

    obj.setInformation(document.getElementById('nomeTarefa').value.toUpperCase(), document.getElementById('data').value, document.getElementById('grau').value, document.getElementById('descricao').value);

    console.log('Tarefas Pendentes:');
    console.table(tarefa.listaDeTarefas); // A lista com as tarefas é mostrada no console.

    const novoItem = document.createElement('li'); // É criado um novo item na lista de Tarefas Pendentes do HTML do site. 
    novoItem.id = obj.getNome(); // Aqui o item recebe como identificador o próprio nome, para facilitar sua busca.

    novoItem.innerHTML = obj.getInformation();

    listaPendentes.appendChild(novoItem); // Aqui a tarefa com suas informações é posta no site.

    // Os campos de input e text area são limpos
    document.getElementById('nomeTarefa').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';

  }else
    console.log('Defina um nome para a tarefa.')
}

export default adicionar;
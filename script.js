import tarefa from "./tarefas.js";
// import { tarefa } from "./tarefas.js";

let listaTarefas = [];
/* class tarefa{ // Aqui a classe que tem as propriedades dos objetos e o método é criada.
  constructor(){
    this.nome = '';
    this.data = '';
    this.grau = '';
    this.descricao = '';
  }

  alterar(data, grau, des) { //Método que edita o valor das propriedades da terefa
    this.data = data;
    this.grau = grau;
    this.descricao = des;
  }
} */

const listaPendentes = document.getElementById('tarefasPendentes'); // Aqui uma variável está sendo criada e a ela está sendo atribuído a lista de tarefas pendentes que existe no HTML, para que possa ser manipulada pela function adicionar().
const adicionar = () => { // Arrow Fuction responsável por adicionar tarefas é criada.

  if(document.getElementById('nomeTarefa').value != '') { // Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função.

    let obj = new tarefa() // O objeto é criado e recebe as propriedades da classe.
    obj.nome = document.getElementById('nomeTarefa').value.toUpperCase(); // Seu nome é definido.
    obj.data = document.getElementById('data').value;
    obj.grau = document.getElementById('grau').value; // Seu grau de importância é definido.
    obj.descricao = document.getElementById('descricao').value; // Sua descrição é definida. 

    listaTarefas.push(obj)
    console.log(listaTarefas) // A lista com as tarefas é mostrada no console.

    const novoItem = document.createElement('li'); // É criado um novo item na lista de Tarefas Pendentes do HTML do site. 
  novoItem.id = obj.nome // Aqui o item recebe como identificador o próprio nome, para facilitar sua busca.
  novoItem.innerHTML = `<strong>Tarefa:</strong> ${obj.nome.toUpperCase()}. <strong>Dia a ser concluída:</strong> ${obj.data}. <strong>Grau de importância:</strong> ${obj.grau.toUpperCase()} <br /> <strong>Descrição:</strong> ${obj.descricao}`; // Aqui as informações que aparecerão no site são organizadas.
  listaPendentes.appendChild(novoItem); // Aqui a tarefa com suas informações é posta no site.

  // As duas linhas abaixo limpam o campo de input e o textarea
  document.getElementById('nomeTarefa').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('data').value = '';

  }else
    console.log('Defina um nome para a tarefa.')
}
window.adicionar = adicionar; // Aqui eu defino a função como Global, para  que o HTML possa chamá-la.

const  remover = (x) => {

  // O x do parâmetro da função é o nome da tarefa que será removida que vem de um input do HTML

  let elementoId = x; // A variável recebe como valor o nome da tarefa.
  let elementoParaRemover = document.getElementById(elementoId); // A variável recebe o elemento que será removido.

  if (elementoParaRemover) /* A condição testa se o elemento existe no código.*/ {
    listaPendentes.removeChild(elementoParaRemover); // Lista pendendentes é o elemento pai que é criado mais acima, pois .removeChild() só remove o elemento filho de um elemento pai
  } else 
    console.log(`Elemento com ID "${elementoId}" não encontrado.`); // Caso o elemento não exista e o if não rode, uma mensagem no console é impressa.

  document.getElementById('remover').value = ''; // Limpa o campo de texto.
}
window.remover = remover; // Aqui eu defino a função como Global, para  que o HTML possa chamá-la.

const editarTarefa = () => { // Arrow Function que edita a tarefa escolhida
  const x = document.getElementById('editarNome').value.toUpperCase(); // Refenrenciando a tarefa que será editada.

  for(let i = 0; i < listaTarefas.length; i++) /** Procura o elemento que será editado  */ {
    if(listaTarefas[i].nome == x) /** SE o elemento for encontrado, será editado */{

      listaTarefas[i].alterar(document.getElementById('editarData').value, document.getElementById('editarGrau').value, document.getElementById('editarDescricao').value); // Chama o método que altera o valor das propriedades da tarefa.

      const novoItem = document.createElement('li'); // É criado um novo item na lista de Tarefas Pendentes do HTML do site. 
      novoItem.id = x // Aqui o item recebe como identificador o próprio nome, para facilitar sua busca.

      novoItem.innerHTML = `<strong>Tarefa:</strong> ${x.toUpperCase()}. <strong>Dia a ser concluída:</strong> ${listaTarefas[i].data}. <strong>Grau de importância:</strong> ${listaTarefas[i].grau.toUpperCase()} <br /> <strong>Descrição:</strong> ${listaTarefas[i].descricao}`; // Aqui as informações que aparecerão no site são organizadas.

      // Encontrando o elemento <li> correspondente ao nome da tarefa
      const elementoParaEditar = document.getElementById(x); //Referenciando o elemento que será editado
      if (elementoParaEditar) /* A condição testa se o elemento existe no código.*/ {
        elementoParaEditar.innerHTML = novoItem.innerHTML; // Editando o elemento.
      } else 
        console.log(`Elemento com ID "${x}" não encontrado.`); // Informando caso o elemento que devia ser editado não existe.
    }
  }

  // As duas linhas abaixo limpam o campo de input e o textarea
  document.getElementById('editarNome').value = '';
  document.getElementById('editarDescricao').value = '';
}
window.editarTarefa = editarTarefa; // Aqui eu defino a função como Global, para  que o HTML possa chamá-la.

const listaConcluidos = document.getElementById('tarefasConcluidas'); // Aqui uma variável está sendo criada e a ela está sendo atribuído a lista de tarefas concluídas que existe no HTML, para que possa ser manipulada pela function concluida().
const concluida = (x) => {

  // O x do parâmetro da função é o nome da tarefa que será marcada como concluída que vem de um input do HTML

  for(let i = 0; i < listaTarefas.length; i++) /** Procura o elemento que será editado  */{
    if(listaTarefas[i].nome === x) /** Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função. */ {

      const novoItem = document.createElement('li'); // É criado um novo item na lista de Tarefas Concluídas do HTML do site. 
      novoItem.innerHTML = document.getElementById(x).innerHTML + `<br /> <strong>Foi concluida em:</strong> ${document.getElementById('dataConclusao').value}`;
      listaConcluidos.appendChild(novoItem); // Aqui as informações que aparecerão no site são organizadas.

      document.getElementById('nomeConcluida').value = '';
      document.getElementById(`dataConclusao`).value = ''; // Limpa o campo de input

      remover(x) // Chama a função remover() para retirar a tarefa da lista de tarefas pendentes do site, já que agora ela faz parte da lista de tarefas concluídas.
    }else
      console.log('Digite o nome da tarefa.')
  }
}
window.concluida = concluida; // Aqui eu defino a função como Global, para  que o HTML possa chamá-la.
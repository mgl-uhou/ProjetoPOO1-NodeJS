import { tarefasPendentes } from './classeLista.js'

const listaPendentes = document.getElementById('tarefasPendentes'); // Aqui uma variável está sendo criada e a ela está sendo atribuído a lista de tarefas pendentes que existe no HTML, para que possa ser manipulada pela function.

const  remover = (x) => {

    // O x do parâmetro da função é o nome da tarefa que será removida que vem de um input do HTML
  
    let elementoId = x; // A variável recebe como valor o nome da tarefa.
    let elementoParaRemover = document.getElementById(elementoId); // A variável recebe o elemento que será removido.
  
    if (elementoParaRemover) /* A condição testa se o elemento existe no código.*/ {
      listaPendentes.removeChild(elementoParaRemover); // Lista pendendentes é o elemento pai que é criado mais acima, pois .removeChild() só remove o elemento filho de um elemento pai
      tarefasPendentes.setRemoverDaLista(x);
    } else 
      console.log(`Elemento com ID "${elementoId}" não encontrado.`); // Caso o elemento não exista e o if não rode, uma mensagem no console é impressa.
  
    document.getElementById('remover').value = ''; // Limpa o campo de texto.
}

export default remover;
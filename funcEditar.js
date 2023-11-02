import tarefa from "./classeTarefa.js";

const editarTarefaComum = () => { // Arrow Function que edita a tarefa escolhida
    const x = document.getElementById('editarNome').value.toUpperCase(); // Refenrenciando a tarefa que será editada.
  
    for(let i = 0; i < tarefa.listaDeTarefas.length; i++) /** Procura o elemento que será editado  */ {
      if(tarefa.listaDeTarefas[i].getNome() == x) /** SE o elemento for encontrado, será editado */{
  
        tarefa.listaDeTarefas[i].setAlterar(document.getElementById('editarData').value, document.getElementById('editarGrau').value, document.getElementById('editarDescricao').value); // Chama o método que altera o valor das propriedades da tarefa.
  
        const novoItem = document.createElement('li'); // É criado um novo item na lista de Tarefas Pendentes do HTML do site. 
        novoItem.id = x // Aqui o item recebe como identificador o próprio nome, para facilitar sua busca.
  
        novoItem.innerHTML = tarefa.listaDeTarefas[i].getInformation();
  
        // Encontrando o elemento <li> correspondente ao nome da tarefa
        const elementoParaEditar = document.getElementById(x); //Referenciando o elemento que será editado
        //if (elementoParaEditar) /* A condição testa se o elemento existe no código.*/ {
        elementoParaEditar.innerHTML = novoItem.innerHTML; // Editando o elemento.
        //} 
      } else 
        console.log(`Elemento com ID "${x}" não encontrado.`); // Informando caso o elemento que devia ser editado não existe.
    }

    // As duas linhas abaixo limpam o campo de input e o textarea
    document.getElementById('editarNome').value = '';
    document.getElementById('editarDescricao').value = '';
    document.getElementById('editarData').value = '';
} 

export default editarTarefaComum;
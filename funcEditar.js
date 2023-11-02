import tarefa from "./classeTarefa.js";

const editar = (objeto, x, i) => {
  const novoItem = document.createElement('li'); // É criado um novo item na lista de Tarefas Pendentes do HTML do site. 
  novoItem.id = x // Aqui o item recebe como identificador o próprio nome, para facilitar sua busca.
  
  novoItem.innerHTML = tarefa.listaDeTarefas[i].getInformation();

  // Encontrando o elemento <li> correspondente ao nome da tarefa
  const elementoParaEditar = document.getElementById(x); //Referenciando o elemento que será editado
  //if (elementoParaEditar) /* A condição testa se o elemento existe no código.*/ {
  elementoParaEditar.innerHTML = novoItem.innerHTML; // Editando o elemento.
  //}
}

const editarTarefaComum = () => { // Arrow Function que edita a tarefa escolhida
    const x = document.getElementById('editarNome').value.toUpperCase(); // Refenrenciando a tarefa que será editada.
  
    for(let i = 0; i < tarefa.listaDeTarefas.length; i++) /** Procura o elemento que será editado  */ {
      if(tarefa.listaDeTarefas[i].getNome() == x) /** SE o elemento for encontrado, será editado */{
  
        tarefa.listaDeTarefas[i].setAlterar(document.getElementById('editarDescricao').value); // Chama o setter que altera o valor das propriedades da tarefa.

        editar(tarefa.listaDeTarefas[i], x, i);
  
        /* const novoItem = document.createElement('li'); // É criado um novo item na lista de Tarefas Pendentes do HTML do site. 
        novoItem.id = x // Aqui o item recebe como identificador o próprio nome, para facilitar sua busca.
  
        novoItem.innerHTML = tarefa.listaDeTarefas[i].getInformation();
  
        // Encontrando o elemento <li> correspondente ao nome da tarefa
        const elementoParaEditar = document.getElementById(x); //Referenciando o elemento que será editado
        //if (elementoParaEditar) /* A condição testa se o elemento existe no código. {
        elementoParaEditar.innerHTML = novoItem.innerHTML; // Editando o elemento.
        //}  */
      } else  
        console.log(`Elemento com ID "${x}" não encontrado.`); // Informando caso o elemento que devia ser editado não existe.
    }

    // As duas linhas abaixo limpam o campo de input e o textarea
    document.getElementById('editarNome').value = '';
    document.getElementById('editarDescricao').value = '';
}

const editarTarefaComEtiqueta = () => { // Arrow Function que edita a tarefa escolhida
  const x = document.getElementById('nomeEditarTarefaComEtiqueta').value.toUpperCase(); // Refenrenciando a tarefa que será editada.

  for(let i = 0; i < tarefa.listaDeTarefas.length; i++) /** Procura o elemento que será editado  */ {
    if(tarefa.listaDeTarefas[i].getNome() == x) /** SE o elemento for encontrado, será editado */{

      tarefa.listaDeTarefas[i].setAlterar(document.getElementById('descricaoEditarTarefaComEtiqueta').value, document.getElementById("novaEtiqueta").value); // Chama o setter que altera o valor das propriedades da tarefa.

      editar(tarefa.listaDeTarefas[i], x, i);

    } else  
      console.log(`Elemento com ID "${x}" não encontrado.`); // Informando caso o elemento que devia ser editado não existe.
  }

  // As duas linhas abaixo limpam o campo de input e o textarea
  document.getElementById('nomeEditarTarefaComEtiqueta').value = '';
  document.getElementById('descricaoEditarTarefaComEtiqueta').value = '';
  document.getElementById('novaEtiqueta').value = '#';
} 

const editarTarefaPrioritaria = () => { // Arrow Function que edita a tarefa escolhida
  const x = document.getElementById('nomeEditarTarefaPrioritaria').value.toUpperCase(); // Refenrenciando a tarefa que será editada.

  for(let i = 0; i < tarefa.listaDeTarefas.length; i++) /** Procura o elemento que será editado  */ {
    if(tarefa.listaDeTarefas[i].getNome() == x) /** SE o elemento for encontrado, será editado */{

      tarefa.listaDeTarefas[i].setAlterar(document.getElementById('descricaoEditarTarefaPrioritaria').value, document.getElementById("novaPrioridade").value, document.getElementById('novaDataLimite').value); // Chama o setter que altera o valor das propriedades da tarefa.

      editar(tarefa.listaDeTarefas[i], x, i);

    } else  
      console.log(`Elemento com ID "${x}" não encontrado.`); // Informando caso o elemento que devia ser editado não existe.
  }

  // As duas linhas abaixo limpam o campo de input e o textarea
  document.getElementById('nomeEditarTarefaPrioritaria').value = '';
  document.getElementById('descricaoEditarTarefaPrioritaria').value = '';
  document.getElementById('novaPrioridade').value = '';
  document.getElementById('novaDataLimite').value = '';
}

const editarTarefaRepetitiva = () => { // Arrow Function que edita a tarefa escolhida
  const x = document.getElementById('nomeEditarTarefaRepetitiva').value.toUpperCase(); // Refenrenciando a tarefa que será editada.

  for(let i = 0; i < tarefa.listaDeTarefas.length; i++) /** Procura o elemento que será editado  */ {
    if(tarefa.listaDeTarefas[i].getNome() == x) /** SE o elemento for encontrado, será editado */{

      tarefa.listaDeTarefas[i].setAlterar(document.getElementById('descricaoEditarTarefaRepetitiva').value, document.getElementById("novaFrequencia").value, document.getElementById('novaDataInicio').value); // Chama o setter que altera o valor das propriedades da tarefa.

      editar(tarefa.listaDeTarefas[i], x, i);

    } else  
      console.log(`Elemento com ID "${x}" não encontrado.`); // Informando caso o elemento que devia ser editado não existe.
  }

  // As duas linhas abaixo limpam o campo de input e o textarea
  document.getElementById('nomeEditarTarefaRepetitiva').value = '';
  document.getElementById('descricaoEditarTarefaRepetitiva').value = '';
  document.getElementById('novaFrequencia').value = '';
  document.getElementById('novaDataInicio').value = '';
}

export { editarTarefaComum, editarTarefaComEtiqueta, editarTarefaPrioritaria, editarTarefaRepetitiva };
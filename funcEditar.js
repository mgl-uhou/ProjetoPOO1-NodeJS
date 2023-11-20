const { tarefasPendentes } = require("./classeLista.js");

const editarTarefaComum = (nome, descricao) => { // Arrow Function que edita a tarefa escolhida
    for(let i = 0; i < tarefasPendentes.getMostrar().length; i++) /** Procura o elemento que será editado  */ {
      if(tarefasPendentes.getMostrar()[i].getNome() == nome) /** SE o elemento for encontrado, será editado */
        tarefasPendentes.getMostrar()[i].setAlterar(descricao); // Chama o setter que altera o valor das propriedades da tarefa.
      else  
        return false; 
    }
}

const editarTarefaComEtiqueta = (nome, descricao, etiqueta) => { // Arrow Function que edita a tarefa escolhida
  for(let i = 0; i < tarefasPendentes.getMostrar().length; i++) /** Procura o elemento que será editado  */ {
    if(tarefasPendentes.getMostrar()[i].getNome() == nome) /** SE o elemento for encontrado, será editado */
      tarefasPendentes.getMostrar()[i].setAlterar(descricao, etiqueta); // Chama o setter que altera o valor das propriedades da tarefa.
    else  
      return false; 
  }
} 

const editarTarefaPrioritaria = (nome, descricao, prioridade, dataLimite) => { // Arrow Function que edita a tarefa escolhida
  for(let i = 0; i < tarefasPendentes.getMostrar().length; i++) /** Procura o elemento que será editado  */ {
    if(tarefasPendentes.getMostrar()[i].getNome() == nome) /** SE o elemento for encontrado, será editado */
      tarefasPendentes.getMostrar()[i].setAlterar(descricao, prioridade, dataLimite); // Chama o setter que altera o valor das propriedades da tarefa.
    else  
      return false; 
  }
}

const editarTarefaRepetitiva = (nome, descricao, frequencia, dataInicio) => { // Arrow Function que edita a tarefa escolhida
  for(let i = 0; i < tarefasPendentes.getMostrar().length; i++) /** Procura o elemento que será editado  */ {
    if(tarefasPendentes.getMostrar()[i].getNome() == nome) /** SE o elemento for encontrado, será editado */
      tarefasPendentes.getMostrar()[i].setAlterar(descricao, frequencia, dataInicio); // Chama o setter que altera o valor das propriedades da tarefa.
    else  
      return false; 
  }
}

module.exports = { editarTarefaComum, editarTarefaComEtiqueta, editarTarefaPrioritaria, editarTarefaRepetitiva };
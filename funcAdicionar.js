const tarefa = require("./classeTarefa.js");
const tarefasComEtiqueta = require("./classeTarefaComEtiqueta.js");
const tarefasPrioridade = require("./classeTarefaPrioritaria.js");
const tarefaRepetitiva = require("./classeTarefaRepetitiva.js");

const { tarefasPendentes } = require("./classeLista.js");

const adicionarComum = (nome, descricao) => { // Arrow Fuction responsável por adicionar tarefas é criada.

  if(nome != '') { // Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função.

    let obj = new tarefa() // O objeto é criado e recebe as propriedades da classe.

    obj.setInformation(nome, descricao);

    tarefasPendentes.setAdicionar(obj);
  }
  else
    console.log('Defina um nome para a tarefa.')
}

const adicionarComEtiqueta = (nome, descricao, etiqueta) => {

  if(nome != '') { // Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função.

    let obj = new tarefasComEtiqueta() // O objeto é criado e recebe as propriedades da classe.

    obj.setInformation(
      nome, 
      descricao, 
      etiqueta
      );

    tarefasPendentes.setAdicionar(obj);
  }
  else
    console.log('Defina um nome para a tarefa.')

}

const adicionarPrioritaria = (nome, descricao, prioridade, dataLimite) => {

  if(nome != '') { // Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função.

    let obj = new tarefasPrioridade() // O objeto é criado e recebe as propriedades da classe.

    obj.setInformation(
      nome,
      descricao,
      prioridade, 
      dataLimite
    );

    tarefasPendentes.setAdicionar(obj);
  }
  else
    console.log('Defina um nome para a tarefa.')

}

const adicionarRepetitiva = (nome, descricao, frequencia, dataInicio) => {

  if(nome != '') { // Esse if testa se o campo de texto foi preenchido para só então executar as funcionalidades da função.

    let obj = new tarefaRepetitiva() // O objeto é criado e recebe as propriedades da classe.

    obj.setInformation(
      nome, 
      descricao, 
      frequencia, 
      dataInicio
    );

    tarefasPendentes.setAdicionar(obj);
  }
  else
    console.log('Defina um nome para a tarefa.')

}

module.exports = { adicionarComum, adicionarComEtiqueta, adicionarPrioritaria, adicionarRepetitiva };
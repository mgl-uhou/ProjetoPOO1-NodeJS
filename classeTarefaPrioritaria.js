const tarefa = require("./classeTarefa.js");

class tarefasPrioridade extends tarefa {
  constructor(){
    super();
    this._prioridade = '';
    this._dataLimite = ''; 
  }

  setAlterar(des, prioridade, data) /** Método que edita o valor das propriedades da terefa */ {
    super.setAlterar(des);
    this._prioridade = prioridade;
    this._dataLimite = data;
  }

  setInformation(nome, descricao, prioridade, data){
    super.setInformation(nome, descricao);
    this._prioridade = prioridade;
    this._dataLimite = data;
  }

  getInformation(){
    return `\nTipo da Tarefa: Tarefa Prioritária. \nTarefa: ${this._nome}. Prioridade: ${this._prioridade}. Data Limite: ${this._dataLimite} \nDescrição: ${this._descricao}`; // Aqui as informações que aparecerão no site são organizadas.
  }
}

module.exports = tarefasPrioridade;
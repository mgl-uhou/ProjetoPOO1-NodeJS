const tarefa = require("./classeTarefa.js");

class tarefaRepetitiva extends tarefa{
  constructor(){
    super();
    this._frequencia = "";
    this._dataInicio = "";
  }

  setAlterar(des, frequencia, data) {
    super.setAlterar(des);
    this._frequencia = frequencia;
    this._dataInicio = data;
  }

  setInformation(nome, descricao, frequencia, data){
    super.setInformation(nome, descricao);
    this._frequencia = frequencia;
    this._dataInicio = data;
  }

  getInformation(){
    return `\nTipo da Tarefa: Tarefa Repetitiva.  \nTarefa: ${this._nome.toUpperCase()}. Frequência: ${this._frequencia}. Data de Início: ${this._dataInicio}.  \nDescrição: ${this._descricao}`; // Aqui as informações que aparecerão no site são organizadas.
  }

}

module.exports = tarefaRepetitiva;
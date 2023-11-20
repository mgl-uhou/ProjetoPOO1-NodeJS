const tarefa = require("./classeTarefa.js");

class tarefasComEtiqueta extends tarefa {
  constructor(){
    super();
    this._etiqueta = '';
  }

  setAlterar(descricao, etiqueta){
    super.setAlterar(descricao);
    this._etiqueta = etiqueta;
  }

  setInformation(nome, descricao, etiqueta){
    super.setInformation(nome, descricao);
    this._etiqueta = '#' + etiqueta;
  }

  getInformation(){
    return `\nTipo da Tarefa: Tarefa com Etiqueta. \nTarefa: ${this._nome.toUpperCase()}. Etiqueta: ${this._etiqueta}. \nDescrição: ${this._descricao}`;
  }
}

module.exports = tarefasComEtiqueta;
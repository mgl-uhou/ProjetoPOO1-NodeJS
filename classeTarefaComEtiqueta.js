import tarefa from "./classeTarefa.js";

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
    this._etiqueta = etiqueta;
  }

  getInformation(){
    return `<strong>Tipo da Tarefa:</strong> Tarefa com Etiqueta. <br/>  <strong>Tarefa:</strong> ${this._nome.toUpperCase()}. <strong>Etiqueta:</strong> ${this._etiqueta}. <br/> <strong>Descrição:</strong> ${this._descricao}`;
  }

  getConcluida(){
    return `A tarefa <strong>${this._nome.toUpperCase()}</strong> foi concluida em <strong>${document.getElementById('dataConclusao').value}</strong>. <br /> <strong>${this._etiqueta}</strong>`;
}
}

export default tarefasComEtiqueta;
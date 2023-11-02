import tarefa from "./classeTarefa.js";

class tarefasComEtiqueta extends tarefa {
  constructor(){
    super();
    this._etiqueta = '';
  }

  setAlterar(descricao, etiqueta){
    super.alterar(descricao);
    this._etiqueta = etiqueta;
  }

  setInformation(nome, descricao, etiqueta){
    super.setInformation(nome, descricao);
    this._etiqueta = etiqueta;
  }

  getInformation(){
    return `<strong>Tarefa:</strong> ${this._nome.toUpperCase()}. <strong>Etiqueta:</strong> ${etiqueta}. <br /> <strong>Descrição:</strong> ${this._descricao}`;
  }

  getConcluida(){
    return `A tarefa <strong>${this._nome.toUpperCase()}</strong> foi concluida em <strong>${document.getElementById('dataConclusao').value}</strong>. <br /> <strong>${etiqueta}</strong>`;
}
}

export default tarefasComEtiqueta;
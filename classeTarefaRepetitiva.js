import tarefa from "./classeTarefa.js";

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
    return `<strong>Tarefa:</strong> ${this._nome.toUpperCase()}. <strong>Frequência:</strong> ${this._frequencia}. <strong>Data de Início:</strong> ${this._dataInicio}. <br /> <strong>Descrição:</strong> ${this._descricao}`; // Aqui as informações que aparecerão no site são organizadas.
  }

}

export default tarefaRepetitiva;
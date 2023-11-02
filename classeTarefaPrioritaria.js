import tarefa from "./classeTarefa.js";

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
    return `<strong>Tarefa:</strong> ${this._nome}. <strong>Prioridade:</strong> ${this._prioridade}. <strong>Data Limite:</strong> ${this._dataLimite} <br /> <strong>Descrição:</strong> ${this._descricao}`; // Aqui as informações que aparecerão no site são organizadas.
  }
}

export default tarefasPrioridade;
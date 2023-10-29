import tarefa from "./tarefas.js";

class tarefasPrioridade extends tarefa {
  constructor(prioridade){
    super();
    this.prioridade = prioridade;
    this.dataLimite = ""; 
  }
}
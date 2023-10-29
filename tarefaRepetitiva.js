import tarefa from "./tarefas.js";
//crie uma subclasse de tarefas
//crie uma lista de tarefas repetitivas
class TarefaRepetitiva extends Tarefa{
  constructor(){
    super();
    this.frequencia = "";
    this.dataInicio = "";
  }
}
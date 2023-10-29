import tarefa from "./tarefas.js";

class tarefasComEtiqueta extends tarefa {
  constructor(etiqueta){
    super();
    this.etiqueta = "#" + etiqueta;
  }

  alterar(data, grau, descricao, etiqueta){
    super.alterar(data, grau, descricao);
    this.etiqueta = etiqueta;
  }
}

export default tarefasComEtiqueta;
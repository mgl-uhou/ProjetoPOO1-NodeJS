class tarefa{ // Aqui a classe que tem as propriedades dos objetos e o método é criada.
    //static listaDeTarefas = [];
    constructor(){
        this.nome = '';
        this.data = '';
        this.grau = '';
        this.descricao = '';
        //tarefa.listaDeTarefas.split(this);

    }

    alterar(data, grau, des) /** Método que edita o valor das propriedades da terefa */ {
        this.data = data;
        this.grau = grau;
        this.descricao = des;
    }
}

export default tarefa;
// export {tarefa};
class tarefa{ // Aqui a classe que tem as propriedades dos objetos e o método é criada.
    static listaDeTarefas = [];
    static listaDeConcluidos = [];
    constructor(){
        this._nome = '';
        this._data = '';
        this._grau = '';
        this._descricao = '';
        tarefa.listaDeTarefas.push(this);

    }

    setAlterar(data, grau, des) /** Método que edita o valor das propriedades da terefa */ {
        this._data = data;
        this._grau = grau;
        this._descricao = des;
    }

    setInformation(nome, data, grau, descricao){
        this._nome = nome;
        this._data = data;
        this._grau = grau;
        this._descricao = descricao;
    }

    getInformation(){
        return `<strong>Tarefa:</strong> ${this._nome.toUpperCase()}. <strong>Dia a ser concluída:</strong> ${this._data}. <strong>Importância:</strong> ${this._grau.toUpperCase()} <br /> <strong>Descrição:</strong> ${this._descricao}`; // Aqui as informações que aparecerão no site são organizadas.
    }

    getNome(){
        return this._nome;
    }

    getConcluida(){
        return `A tarefa <strong>${this._nome.toUpperCase()}</strong> foi concluida em <strong>${document.getElementById('dataConclusao').value}</strong>.`;
    }

    static removerDaLista(elemento){
        let i = 0
        for(let indice of tarefa.listaDeTarefas){
            if( indice.getNome() == elemento ){
                tarefa.listaDeTarefas.splice(i, 1);
            }else
                i++
        }
    }

    concluido(){
        tarefa.listaDeConcluidos.push(this);
    }
}

export default tarefa;
// export {tarefa};
class tarefa{ // Aqui a classe que tem as propriedades dos objetos e o método é criada.
    constructor(){
        this._nome = '';
        this._descricao = '';
    }

    setAlterar(des) /** Método que edita o valor das propriedades da terefa */ {
        this._descricao = des;
    }

    setInformation(nome, descricao){
        this._nome = nome;
        this._descricao = descricao;
    }

    getInformation(){
        return `\nTipo da Tarefa: Tarefa Comum. \nTarefa: ${this._nome.toUpperCase()}. \nDescrição: ${this._descricao}`; // Aqui as informações que aparecerão no site são organizadas.
    }

    getNome(){
        return this._nome;
    }
}

module.exports = tarefa;
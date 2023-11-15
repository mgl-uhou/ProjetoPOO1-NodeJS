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
        return `<strong>Tipo da Tarefa:</strong> Tarefa Comum. <br/> <strong>Tarefa:</strong> ${this._nome.toUpperCase()}. <br /> <strong>Descrição:</strong> ${this._descricao}`; // Aqui as informações que aparecerão no site são organizadas.
    }

    getNome(){
        return this._nome;
    }

    getConcluida(){
        return `A tarefa <strong>${this._nome.toUpperCase()}</strong> foi concluída em <strong>${document.getElementById('dataConclusao').value}</strong>.`;
    }
}

export default tarefa;
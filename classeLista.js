class Lista {
    constructor(){
        this._quantidadeItens = 0;
        this._listaItens = [];
    }

    setAdicionar(elemento){
        this._quantidadeItens++;
        this._listaItens.push(elemento);
    }

    setRemoverDaLista(elemento){
        let i = 0
        for(let indice of this._listaItens){
            if( indice.getNome().toLowerCase() == elemento ){
                this._listaItens.splice(i, 1);
            }else
                i++
        }
    }

    getMostrar(){
        return this._listaItens;
    }
}

let tarefasPendentes = new Lista();
let tarefasConcluidas = new Lista();

module.exports =  { tarefasPendentes, tarefasConcluidas };
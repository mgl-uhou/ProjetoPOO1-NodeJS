const { tarefasPendentes, tarefasConcluidas } = require('./classeLista.js');

const mostrarPendentes = () => {
    console.log('Tabela das Tarefas Pendentes:');
    console.table(tarefasPendentes.getMostrar());
};

const mostrarConcluidas = () => {
    console.log('Tabela das Tarefas Concluídas:');
    console.table(tarefasConcluidas.getMostrar());
};

const mostrar = (nome) => {
    for(let i = 0; i < tarefasPendentes.getMostrar().length; i++) /** Procura o elemento que será editado  */ {
        if(tarefasPendentes.getMostrar()[i].getNome().toLowerCase() == nome.toLowerCase()) /** SE o elemento for encontrado, será editado */
          console.log(tarefasPendentes.getMostrar()[i].getInformation());
        else  
          return false; 
      }
};

module.exports = {mostrarPendentes, mostrarConcluidas, mostrar};
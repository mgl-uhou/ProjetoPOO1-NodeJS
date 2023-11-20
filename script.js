const { adicionarComum, adicionarComEtiqueta, adicionarPrioritaria, adicionarRepetitiva } = require("./funcAdicionar.js"); // Usando desestruturação
//const add = require("./funcAdicionar.js");
const remover = require("./funcRemover.js");
const { editarTarefaComum, editarTarefaComEtiqueta, editarTarefaPrioritaria, editarTarefaRepetitiva } = require("./funcEditar.js");
const concluida = require("./funcConcluida.js");
const {mostrarPendentes, mostrarConcluidas, mostrar} = require("./mostrar.js");

const prompt = require('prompt-sync')();

let listaDeComandos = {
    'Parar programa': 'Parar',
    'Adicionar tarefa comum': 'Add Comum',
    'Adicionar tarefa com etiqueta': 'Add com Etiqueta',
    'Adicionar tarefa prioritária': 'Add Prioritária',
    'Adicionar tarefa repetitiva': 'Add Repetitiva',
    'Remover tarefa': 'Remover',
    'Editar tarefa comum': 'Editar Comum',
    'Editar tarefa com etiqueta': 'Editar com Etiqueta',
    'Editar tarefa prioritária': 'Editar Prioritária',
    'Editar tarefa repetitiva': 'Editar Repetitiva',
    'Marcar tarefa como concluída': "Marcar",
    'Mostrar lista de tarefas pendentes': "Mostrar Pendentes",
    'Mostrar lista de tarefas concluidas': 'Mostrar Concluídas',
    'Mostrar tarefa expecífica': 'Mostrar'
}

let comando = '', nome = '', descricao = '', etiqueta = '', prioridade = '', dataLimite = '', frequencia = '', dataInicio = '', data = '';

console.log('Tabela com os comandos do programa:')
console.table(listaDeComandos);

do {

    console.log('');
    comando = prompt("Digite um dos comandos: ")

    switch(comando.toLowerCase()){
        case 'add comum':
            nome = prompt('Digite o nome da tarefa: ');
            descricao = prompt('Digite a descricao da tarefa: ');
            adicionarComum(nome, descricao);
            //add.adicionarComum(nome, descricao);
            break;
        case 'add com etiqueta':
            nome = prompt('Digite o nome da tarefa: ');
            descricao = prompt('Digite a descricao da tarefa: ');
            etiqueta = prompt('Digite a etiqueta da tarefa: ');
            adicionarComEtiqueta(nome, descricao, etiqueta);
            break;
        case 'add prioritária':
            nome = prompt('Digite o nome da tarefa: ');
            descricao = prompt('Digite a descricao da tarefa: ');
            prioridade = prompt("Digite a prioridade da tarefa: ");
            dataLimite = prompt('Digita a data limite de realização da tarefa: ');
            adicionarPrioritaria(nome, descricao, prioridade, dataLimite);
            break;
        case 'add prioritaria': //caso o usuário escreva a palavra sem acento
            nome = prompt('Digite o nome da tarefa: ');
            descricao = prompt('Digite a descricao da tarefa: ');
            prioridade = prompt("Digite a prioridade da tarefa: ");
            dataLimite = prompt('Digita a data limite de realização da tarefa: ');
            adicionarPrioritaria(nome, descricao, prioridade, dataLimite);
            break;
        case 'add repetitiva':
            nome = prompt('Digite o nome da tarefa: ');
            descricao = prompt('Digite a descricao da tarefa: ');
            frequencia = prompt('Digite a frequência da tarefa: ');
            dataInicio = prompt('Digite a data de início da tarefa: ');
            adicionarRepetitiva(nome, descricao, frequencia, dataInicio);
            break;
        case 'remover':
            nome = prompt('Digite o nome da tarefa que você quer remover: ');
            remover(nome);
            break;
        case 'editar comum':
            nome = prompt('Digite o nome da tarefa a ser editada: ');
            descricao = prompt('Digite a nova descricao da tarefa: ');
            editarTarefaComum(nome, descricao);
            break;
        case 'editar com etiqueta':
            nome = prompt('Digite o nome da tarefa a ser editada: ');
            descricao = prompt('Digite a nova descricao da tarefa: ');
            etiqueta = prompt('Digite a nova etiqueta da tarefa:');
            editarTarefaComEtiqueta(nome, descricao, etiqueta);
            break;
        case 'editar prioritária':
            nome = prompt('Digite o nome da tarefa a ser editada: ');
            descricao = prompt('Digite a nova descricao da tarefa: ');
            prioridade = prompt("Digite a nova prioridade da tarefa: ");
            dataLimite = prompt('Digita a nova data limite de realização da tarefa: ');
            editarTarefaPrioritaria(nome, descricao, prioridade, dataLimite);
            break;
        case 'editar prioritaria': //caso o usuário escreva a palavra sem acento
            nome = prompt('Digite o nome da tarefa a ser editada: ');
            descricao = prompt('Digite a nova descricao da tarefa: ');
            prioridade = prompt("Digite a nova prioridade da tarefa: ");
            dataLimite = prompt('Digita a nova data limite de realização da tarefa: ');
            editarTarefaPrioritaria(nome, descricao, prioridade, dataLimite);
            break;
        case 'editar repetitiva':
            nome = prompt('Digite o nome da tarefa a ser editada: ');
            descricao = prompt('Digite a nova descricao da tarefa: ');
            frequencia = prompt('Digite a nova frequência da tarefa: ');
            dataInicio = prompt('Digite a nova data de início da tarefa: ');
            editarTarefaRepetitiva(nome, descricao, frequencia, dataInicio);
            break;
        case 'marcar':
            nome = prompt('Digite o nome da tarefa concluída: ');
            data = prompt('Digite a data em que foi concluída: ')
            concluida(nome, data);
            break;
        case 'mostrar pendentes':
            mostrarPendentes();
            break;
        case 'mostrar concluídas':
            mostrarConcluidas();
            break;
        case 'mostrar concluidas': //caso o usuário escreva a palavra sem acento
            mostrarConcluidas();
            break;
        case 'mostrar':
            nome = prompt('Digite o nome da tarafa que você quer ver: ');
            mostrar(nome);
            break; 
        case 'parar':
            return true;
        default:
            console.log('Digite um comando válido.');
    }
} while(comando !== 'parar');
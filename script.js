import { mostrarNova, mostrarRemover, mostrarEditar, mostrarConcluida } from "./mostrar.js";
import adicionar from "./funcAdicionar.js";
import remover from "./funcRemover.js";
import editarTarefa from "./funcEditarTarefa.js";
import concluida from "./funcConcluida.js";

/* window.[nome da função] serve para trazê-la para o escopo global do código, tornando possível usá-la pelo index.html */

window.adicionar = adicionar; 
window.remover = remover; 
window.editarTarefa = editarTarefa; 
window.concluida = concluida; 

window.mostrarNova = mostrarNova;
window.mostrarRemover = mostrarRemover;
window.mostrarEditar = mostrarEditar;
window.mostrarConcluida = mostrarConcluida;
import { mostrarNova, mostrarRemover, mostrarEditar, mostrarConcluida } from "./mostrar.js";
import adicionar from "./funcAdicionar.js";
import remover from "./funcRemover.js";
import editarTarefa from "./funcEditarTarefa.js";
import concluida from "./funcConcluida.js";

window.adicionar = adicionar; // Aqui eu defino a função como Global, para  que o HTML possa chamá-la.
window.remover = remover; // Aqui eu defino a função como Global, para  que o HTML possa chamá-la.
window.editarTarefa = editarTarefa; // Aqui eu defino a função como Global, para  que o HTML possa chamá-la.
window.concluida = concluida; // Aqui eu defino a função como Global, para  que o HTML possa chamá-la.

window.mostrarNova = mostrarNova;
window.mostrarRemover = mostrarRemover;
window.mostrarEditar = mostrarEditar;
window.mostrarConcluida = mostrarConcluida;
import { mostrarNovaComum, mostrarNovaComEtiqueta, mostrarNovaPrioritaria, mostrarNovaRepetitiva, mostrarRemover, mostrarEditarComum, mostrarEditarComEtiqueta, mostrarEditarPrioritaria, mostrarEditarRepetitiva, mostrarConcluida } from "./mostrar.js";
import { adicionarComum, adicionarComEtiqueta, adicionarPrioritaria, adicionarRepetitiva } from "./funcAdicionar.js";
import remover from "./funcRemover.js";
import { editarTarefaComum, editarTarefaComEtiqueta, editarTarefaPrioritaria, editarTarefaRepetitiva } from "./funcEditar.js";
import concluida from "./funcConcluida.js";

/* window.[nome da função] serve para trazê-la para o escopo global do código, tornando possível usá-la pelo index.html */

window.adicionarComum = adicionarComum; 
window.adicionarComEtiqueta = adicionarComEtiqueta; 
window.adicionarPrioritaria = adicionarPrioritaria; 
window.adicionarRepetitiva = adicionarRepetitiva; 

window.remover = remover; 

window.editarTarefaComum = editarTarefaComum; 
window.editarTarefaComEtiqueta = editarTarefaComEtiqueta; 
window.editarTarefaPrioritaria = editarTarefaPrioritaria; 
window.editarTarefaRepetitiva = editarTarefaRepetitiva; 

window.concluida = concluida; 

window.mostrarNovaComum = mostrarNovaComum;
window.mostrarNovaComEtiqueta = mostrarNovaComEtiqueta;
window.mostrarNovaPrioritaria = mostrarNovaPrioritaria;
window.mostrarNovaRepetitiva = mostrarNovaRepetitiva; 

window.mostrarRemover = mostrarRemover;

window.mostrarEditarComum = mostrarEditarComum;
window.mostrarEditarComEtiqueta = mostrarEditarComEtiqueta;
window.mostrarEditarPrioritaria = mostrarEditarPrioritaria;
window.mostrarEditarRepetitiva = mostrarEditarRepetitiva;

window.mostrarConcluida = mostrarConcluida;
const esconder = () => {
    const novaTarefaComum = document.getElementById('novaTarefa');
    const novaTarefaComEtiqueta = document.getElementById('novaTarefaComEtiqueta');
    const novaTarefaPrioritaria = document.getElementById('novaTarefaPrioritária');
    const novaTarefaRepetitiva = document.getElementById('novaTarefaRepetitiva');
    
    const removerTarefa = document.getElementById('removerTarefa');

    const editarTarefaComum = document.getElementById('editarTarefaComum');
    const editarTarefaComEtiqueta = document.getElementById('editarTarefaComEtiqueta');
    const editarTarefaPrioritaria = document.getElementById('editarTarefaPrioritaria');
    const editarTarefaRepetitiva = document.getElementById('editarTarefaRepetitiva');

    const marcarTarefa = document.getElementById('marcarTarefa');
  
    novaTarefaComum.style.display = 'none';
    novaTarefaComEtiqueta.style.display = 'none';
    novaTarefaPrioritaria.style.display = 'none';
    novaTarefaRepetitiva.style.display = 'none';

    removerTarefa.style.display = 'none';

    editarTarefaComum.style.display = 'none';
    editarTarefaComEtiqueta.style.display = 'none';
    editarTarefaPrioritaria.style.display = 'none';
    editarTarefaRepetitiva.style.display = 'none';

    marcarTarefa.style.display = 'none';
}

const mostrarNovaComum = () => {
    esconder();
  
    const novaTarefa = document.getElementById('novaTarefa');
    novaTarefa.style.display = 'block';
}

const mostrarNovaComEtiqueta = () => {
    esconder();
  
    const novaTarefa = document.getElementById('novaTarefaComEtiqueta');
    novaTarefa.style.display = 'block';
}

const mostrarNovaPrioritaria = () => {
    esconder();
  
    const novaTarefa = document.getElementById('novaTarefaPrioritária');
    novaTarefa.style.display = 'block';
}

const mostrarNovaRepetitiva = () => {
    esconder();
  
    const novaTarefa = document.getElementById('novaTarefaRepetitiva');
    novaTarefa.style.display = 'block';
}

const mostrarRemover = () => {
    esconder();
  
    const removerTarefa = document.getElementById('removerTarefa');
    removerTarefa.style.display = 'block';
}

const mostrarEditarComum = () => {
    esconder();
  
    const editarTarefa = document.getElementById('editarTarefaComum');
    editarTarefa.style.display = 'block';
}

const mostrarEditarComEtiqueta = () => {
    esconder();
  
    const editarTarefa = document.getElementById('editarTarefaComEtiqueta'); 
    editarTarefa.style.display = 'block';
}

const mostrarEditarPrioritaria = () => {
    esconder();
  
    const editarTarefa = document.getElementById('editarTarefaPrioritaria');
    editarTarefa.style.display = 'block';
}

const mostrarEditarRepetitiva = () => {
    esconder();
  
    const editarTarefa = document.getElementById('editarTarefaRepetitiva');
    editarTarefa.style.display = 'block';
}
  
const mostrarConcluida = () => {
    esconder();

    const marcarTarefa = document.getElementById('marcarTarefa');
    marcarTarefa.style.display = 'block';
}

export {mostrarNovaComum, mostrarNovaComEtiqueta, mostrarNovaPrioritaria, mostrarNovaRepetitiva, mostrarRemover, mostrarEditarComum, mostrarEditarComEtiqueta, mostrarEditarPrioritaria, mostrarEditarRepetitiva, mostrarConcluida};
const esconder = () => {
    const novaTarefa = document.getElementById('novaTarefa');
    const removerTarefa = document.getElementById('removerTarefa');
    const editarTarefa = document.getElementById('editarTarefa');
    const marcarTarefa = document.getElementById('marcarTarefa');
  
    novaTarefa.style.display = 'none';
    removerTarefa.style.display = 'none';
    editarTarefa.style.display = 'none';
    marcarTarefa.style.display = 'none';
}

const mostrarNova = () => {
    esconder();
  
    const novaTarefa = document.getElementById('novaTarefa');
    novaTarefa.style.display = 'block';
}

const mostrarRemover = () => {
    esconder();
  
    const removerTarefa = document.getElementById('removerTarefa');
    removerTarefa.style.display = 'block';
}

const mostrarEditar = () => {
    esconder();
  
    const editarTarefa = document.getElementById('editarTarefa');
    editarTarefa.style.display = 'block';
}
  
const mostrarConcluida = () => {
    esconder();

    const marcarTarefa = document.getElementById('marcarTarefa');
    marcarTarefa.style.display = 'block';
}

export {mostrarNova, mostrarRemover, mostrarEditar, mostrarConcluida};
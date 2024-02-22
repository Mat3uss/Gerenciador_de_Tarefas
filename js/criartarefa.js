document.addEventListener('DOMContentLoaded', function() {
    const botaoAdicionarTarefa = document.getElementById('botaoAdicionarTarefa');
    const nomeTarefa = document.getElementById('nomeTarefa');
    const dataExpiracao = document.getElementById('dataExpiracao');
    const listaTarefas = document.getElementById('listaTarefas');

    botaoAdicionarTarefa.addEventListener('click', function() {
        if (nomeTarefa.value && dataExpiracao.value) {
            const tarefa = {
                nome: nomeTarefa.value,
                dataExpiracao: dataExpiracao.value
            };

            adicionarTarefa(tarefa);

            nomeTarefa.value = '';
            dataExpiracao.value = '';
        }
    });

    function adicionarTarefa(tarefa) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${tarefa.nome}</strong> - Expira em ${tarefa.dataExpiracao}`;
        listaTarefas.appendChild(li);
    }
});
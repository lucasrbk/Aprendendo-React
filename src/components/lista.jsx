import React, { useState, useEffect } from 'react';

const Lista = () => {
    // Estado para armazenar as tarefas, inicializando com os dados do localStorage
    const [tarefas, setTarefas] = useState(() => {
        const savedTarefas = localStorage.getItem('tarefas');
        return savedTarefas ? JSON.parse(savedTarefas) : [];
    });
    // Estado para armazenar o texto da nova tarefa
    const [novaTarefa, setNovaTarefa] = useState('');
    // Estado para armazenar o filtro atual (todas, pendentes, concluídas)
    const [filtro, setFiltro] = useState('todas');

    // Efeito para salvar as tarefas no localStorage sempre que elas mudarem
    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

    // Função para adicionar uma nova tarefa
    const adicionarTarefa = () => {
        if (novaTarefa.trim()) {
            setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
            setNovaTarefa(''); // Limpa o campo de entrada
        }
    };

    // Função para remover uma tarefa pelo índice
    const removerTarefa = (index) => {
        const novasTarefas = tarefas.filter((_, i) => i !== index);
        setTarefas(novasTarefas);
    };

    // Função para marcar uma tarefa como concluída ou não concluída
    const marcarConcluida = (index) => {
        const novasTarefas = tarefas.map((tarefa, i) => 
            i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        );
        setTarefas(novasTarefas);
    };

    // Filtra as tarefas com base no filtro selecionado
    const tarefasFiltradas = tarefas.filter(tarefa => 
        filtro === 'todas' ? true : filtro === 'pendentes' ? !tarefa.concluida : tarefa.concluida
    );

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input 
                type="text" 
                value={novaTarefa} 
                onChange={(e) => setNovaTarefa(e.target.value)} 
                placeholder="Adicionar nova tarefa" 
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <div>
                <button onClick={() => setFiltro('todas')}>Todas</button>
                <button onClick={() => setFiltro('pendentes')}>Pendentes</button>
                <button onClick={() => setFiltro('concluidas')}>Concluídas</button>
            </div>
            <ul>
                {tarefasFiltradas.map((tarefa, index) => (
                    <li key={index} style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
                        {tarefa.texto}
                        <button onClick={() => marcarConcluida(index)}>
                            {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
                        </button>
                        <button onClick={() => removerTarefa(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lista;
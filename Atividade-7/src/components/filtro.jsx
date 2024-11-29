import React, { useState } from 'react';

const Filtro = () => {
    // Estado para armazenar o valor do filtro
    const [filtro, setFiltro] = useState('');
    // Lista de nomes a serem filtrados
    const nomes = ['Lucas', 'Maria', 'João', 'Ana', 'Pedro', 'Mariana', 'Carlos', 'Fernanda', 'Gabriel', 'Juliana', 'Ricardo', 'Sofia'];

    // Função para atualizar o estado do filtro quando o valor do input mudar
    const handleChange = (e) => {
        setFiltro(e.target.value);
    };

    // Filtra os nomes com base no valor do filtro, ignorando maiúsculas e minúsculas
    const nomesFiltrados = nomes.filter((nome) =>
        nome.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div>
            {/* Input para digitar o filtro */}
            <input
                type="text"
                placeholder="Filtrar nomes"
                value={filtro}
                onChange={handleChange}
            />
            {/* Lista de nomes filtrados */}
            <ul>
                {nomesFiltrados.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default Filtro;
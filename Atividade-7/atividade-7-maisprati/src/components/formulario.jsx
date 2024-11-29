import React, { useState } from 'react';

const Formulario = () => {
    // Estados para armazenar os valores dos campos do formulário
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Verifica se todos os campos foram preenchidos
        if (name && email && password) {
            setSubmitted(true); // Marca o formulário como enviado
        } else {
            alert('Por favor, preencha todos os campos.'); // Alerta caso algum campo esteja vazio
        }
    };

    return (
        <div>
            {submitted ? (
                // Exibe a mensagem de boas-vindas se o formulário foi enviado
                <WelcomeMessage name={name} />
            ) : (
                // Exibe o formulário se ainda não foi enviado
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} // Atualiza o estado do nome
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                        />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
                        />
                    </div>
                    <button type="submit">Registrar</button>
                </form>
            )}
        </div>
    );
};

// Componente para exibir a mensagem de boas-vindas
const WelcomeMessage = ({ name }) => {
    return <h1>Bem-vindo, {name}!</h1>;
};

export default Formulario;
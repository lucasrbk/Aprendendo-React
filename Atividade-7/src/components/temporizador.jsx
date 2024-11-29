import React, { useState, useEffect } from 'react';

const Temporizador = () => {
    // Estado para armazenar os segundos, inicializando com o valor salvo no localStorage ou 0
    const [seconds, setSeconds] = useState(() => {
        const savedSeconds = localStorage.getItem('seconds');
        return savedSeconds ? parseInt(savedSeconds, 10) : 0;
    });
    // Estado para controlar se o temporizador está ativo ou não
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            // Se o temporizador estiver ativo, inicia um intervalo que incrementa os segundos a cada segundo
            interval = setInterval(() => {
                setSeconds(seconds => {
                    const newSeconds = seconds + 1;
                    localStorage.setItem('seconds', newSeconds); // Salva o novo valor no localStorage
                    return newSeconds;
                });
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            // Se o temporizador não estiver ativo e os segundos não forem 0, limpa o intervalo
            clearInterval(interval);
        }
        // Limpa o intervalo quando o componente é desmontado ou quando isActive/seconds mudam
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    // Função para iniciar o temporizador
    const handleStart = () => {
        setIsActive(true);
    };

    // Função para pausar o temporizador
    const handlePause = () => {
        setIsActive(false);
    };

    // Função para reiniciar o temporizador
    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
        localStorage.removeItem('seconds'); // Remove o valor salvo no localStorage
    };

    return (
        <div>
            <h1>Temporizador: {seconds}s</h1>
            <button onClick={handleStart}>Iniciar</button>
            <button onClick={handlePause}>Pausar</button>
            <button onClick={handleReset}>Reiniciar</button>
        </div>
    );
};

export default Temporizador;
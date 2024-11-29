import React, { useState, useEffect } from 'react';

const Timer = () => {
    // Estado para armazenar os segundos, inicializando com o valor salvo no localStorage ou 0
    const [seconds, setSeconds] = useState(() => {
        const savedSeconds = localStorage.getItem('seconds');
        return savedSeconds !== null ? Number(savedSeconds) : 0;
    });

    // Estado para armazenar se o timer está ativo, inicializando com o valor salvo no localStorage
    const [isActive, setIsActive] = useState(() => {
        const savedIsActive = localStorage.getItem('isActive');
        return savedIsActive === 'true';
    });

    // Efeito para salvar os estados no localStorage sempre que eles mudarem
    useEffect(() => {
        localStorage.setItem('seconds', seconds);
        localStorage.setItem('isActive', isActive);
    }, [seconds, isActive]);

    // Efeito para controlar o intervalo do timer
    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            // Se o timer estiver ativo e os segundos forem maiores que 0, inicia o intervalo
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (seconds === 0 && isActive) {
            // Se os segundos chegarem a 0 e o timer estiver ativo, exibe um alerta e pausa o timer
            alert('O tempo acabou!');
            setIsActive(false);
        }
        // Limpa o intervalo quando o componente é desmontado ou quando o efeito é reexecutado
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    // Função para iniciar o timer
    const handleStart = () => {
        setIsActive(true);
    };

    // Função para pausar o timer
    const handlePause = () => {
        setIsActive(false);
    };

    // Função para reiniciar o timer
    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <div>
            <h1>Timer: {seconds > 0 ? `${seconds}s` : '0s'}</h1>
            <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
                disabled={isActive} // Desabilita o input se o timer estiver ativo
            />
            <button onClick={handleStart} disabled={isActive}>
                Iniciar
            </button>
            <button onClick={handlePause} disabled={!isActive}>
                Pausar
            </button>
            <button onClick={handleReset}>
                Reiniciar
            </button>
        </div>
    );
};

export default Timer;
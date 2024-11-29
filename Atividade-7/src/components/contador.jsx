import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Contador = () => {
    // Estado inicial do contador, recuperando o valor salvo no localStorage
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem("count");
        return savedCount !== null ? parseInt(savedCount, 10) : 0;
    });

    // Efeito colateral que salva o valor do contador no localStorage sempre que ele muda
    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    // Função para incrementar o contador
    const increment = () => setCount(count + 1);
    // Função para decrementar o contador, garantindo que ele não fique abaixo de zero
    const decrement = () => setCount(Math.max(0, count - 1));

    return (
        <div className="container text-center mt-5">
            <h1>Contador com useState</h1>
            <div className="mt-3">
                <button className="btn btn-danger mx-2" onClick={decrement}>-</button>
                <span className="mx-3">{count}</span>
                <button className="btn btn-success mx-2" onClick={increment}>+</button>
            </div>
        </div>
    );
};


    
export default Contador;
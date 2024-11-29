import React, { useState, useEffect } from "react";

const AltColor = () => {
    // Estado para armazenar a cor atual, inicializando com a cor salva no localStorage ou branco
    const [color, setColor] = useState(() => {
        return localStorage.getItem("backgroundColor") || "white";
    });

    // Função para gerar uma cor aleatória em formato hexadecimal
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Função para mudar a cor de fundo e salvar a nova cor no localStorage
    const changeColor = () => {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem("backgroundColor", newColor);
    };

    // useEffect para atualizar a cor de fundo do body sempre que a cor mudar
    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <div>
            <button onClick={changeColor}>
                Change Background Color
            </button>
            <h1>Hex da cor atual: {color}</h1>
        </div>
    );
};

export default AltColor;
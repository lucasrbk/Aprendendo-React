import React, { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Importação das imagens
import img00003 from '../assets/images/00003.jpg';
import img00004 from '../assets/images/00004.jpg';
import img00005 from '../assets/images/00005.jpg';
import img00006 from '../assets/images/00006.jpg';
import img00007 from '../assets/images/00007.jpg';
import img00008 from '../assets/images/00008.jpg';
import img00009 from '../assets/images/00009.jpg';
import img00010 from '../assets/images/00010.jpg';
import img00011 from '../assets/images/00011.jpg';
import img00012 from '../assets/images/00012.jpg';
import img00013 from '../assets/images/00013.jpg';
import img00015 from '../assets/images/00015.jpg';

// Array com todas as imagens importadas
const imagens = [
    img00003,
    img00004,
    img00005,
    img00006,
    img00007,
    img00008,
    img00009,
    img00010,
    img00011,
    img00012,
    img00013,
    img00015,
];

const GaleriaDeImagens = () => {
    // Estados para controlar a imagem selecionada e seu índice
    const [imagemSelecionada, setImagemSelecionada] = useState(null);
    const [indiceImagem, setIndiceImagem] = useState(null);

    // Função para abrir o modal com a imagem selecionada
    const abrirModal = (indice) => {
        setImagemSelecionada(imagens[indice]);
        setIndiceImagem(indice);
    };

    // Função para fechar o modal
    const fecharModal = () => {
        setImagemSelecionada(null);
        setIndiceImagem(null);
    };

    // Função para mostrar a imagem anterior no modal
    const imagemAnterior = () => {
        const novoIndice = (indiceImagem - 1 + imagens.length) % imagens.length;
        setImagemSelecionada(imagens[novoIndice]);
        setIndiceImagem(novoIndice);
    };

    // Função para mostrar a próxima imagem no modal
    const proximaImagem = () => {
        const novoIndice = (indiceImagem + 1) % imagens.length;
        setImagemSelecionada(imagens[novoIndice]);
        setIndiceImagem(novoIndice);
    };

    // Configurações do slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: indiceImagem,
        afterChange: (current) => setIndiceImagem(current),
    };

    return (
        <div>
            {/* Slider para exibir as imagens */}
            <Slider {...settings}>
                {imagens.map((src, index) => (
                    <div key={index}>
                        <img 
                            src={src} 
                            alt={`Imagem ${index + 1}`} 
                            onClick={() => abrirModal(index)} 
                            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                        />
                    </div>
                ))}
            </Slider>

            {/* Modal para exibir a imagem selecionada */}
            {imagemSelecionada && (
                <div className="modal">
                    <button onClick={imagemAnterior}>Anterior</button>
                    <button onClick={proximaImagem}>Próxima</button>
                </div>
            )}
        </div>
    );
};

export default GaleriaDeImagens;
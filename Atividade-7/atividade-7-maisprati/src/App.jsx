import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import Contador from './components/contador'
import AltColor from './components/altColor'
import Lista from './components/lista';
import Temporizador from './components/temporizador';
import Filtro from './components/filtro';
import Formulario from './components/formulario';
import Requisicao from './components/requisicao';
import GaleriaDeImagens from './components/imagens';
import Timer from './components/timer';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Mini apps atividade-7</h1>
        <div className='menu'>
          <div className='menu-item'>
            <Link to='/contador' className='menu-button'>Contador</Link>
          </div>
          <div className='menu-item'>
            <Link to='/altColor' className='menu-button'>AltColor</Link>
          </div>
          <div className='menu-item'>
            <Link to='/lista' className='menu-button'>Lista</Link>
          </div>
          <div className='menu-item'>
            <Link to='/temporizador' className='menu-button'>Temporizador</Link>
          </div>
          <div className='menu-item'>
            <Link to='/filtro' className='menu-button'>Filtro</Link>
          </div>
          <div className='menu-item'>
            <Link to='/formulario' className='menu-button'>Formulario</Link>
          </div>
          <div className='menu-item'>
            <Link to='/requisicao' className='menu-button'>Requisicao</Link>
          </div>
          <div className='menu-item'>
            <Link to='/galeria' className='menu-button'>Galeria</Link>
          </div>
          <div className='menu-item'>
            <Link to='/timer' className='menu-button'>Timer</Link>
          </div>
        </div>
      
        <Routes>
          <Route path='/contador' element={<Contador />} />
          <Route path='/altColor' element={<AltColor />} />
          <Route path='/lista' element={<Lista />} />
          <Route path='/temporizador' element={<Temporizador />} />
          <Route path='/filtro' element={<Filtro />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/requisicao' element={<Requisicao />} />
          <Route path='/galeria' element={<GaleriaDeImagens />} />
          <Route path='/timer' element={<Timer />} />
        </Routes>
      </div>
    </Router>
  )
};

export default App

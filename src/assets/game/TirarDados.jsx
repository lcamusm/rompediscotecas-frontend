import React, { useState } from 'react';
import Dado from './Dado';
import './TirarDados.css'

function TirarDados() {
  const [dado1, setDado1] = useState(1);
  const [dado2, setDado2] = useState(1);

  function tirarDado() {
    const value1 = Math.floor(Math.random() * 6) + 1;
    const value2 = Math.floor(Math.random() * 6) + 1;
    setDado1(value1);
    setDado2(value2);
  }

  return (
    <div className='boton-dados'>
      <h3>Ahora que sabes jugar...</h3>
      <h4>¡Prueba como te va atacando!</h4>
      <div className='dados-container'>
        <div className='dado'>
          <Dado value={dado1} />
          <h6>Dado Atacante</h6>
        </div>
        <div className='dado'>
          <Dado value={dado2} />
          <h6>Dado Defensor</h6>
        </div>
      </div>
      <button onClick={tirarDado}>Tirar dados</button>
    </div>
  );
}

export default TirarDados;

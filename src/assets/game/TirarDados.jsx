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
    <div className='dados'>
      <Dado value={dado1} />
      <Dado value={dado2} />
      <button onClick={tirarDado}>Tirar dados</button>
    </div>
  );
}

export default TirarDados;

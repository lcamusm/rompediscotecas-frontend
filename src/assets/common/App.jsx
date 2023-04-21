import { useState } from 'react'
import imagenPrincipal from '../img/imagen-principal.jpg'
import './App.css'

function App() {

  return (
    <div className="page-container App">
      <div>
        <img src={imagenPrincipal} className='imagen-principal'/>
      </div>
      <h1>DCConquistador</h1>
      <h2>La odisea de conquistar la región Metropolitana</h2>
    </div>
  )
}

export default App

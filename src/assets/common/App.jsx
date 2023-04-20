import { useState } from 'react'
import imagenPrincipal from '../img/imagen-principal.jpg'
import './App.css'
import Header from './Header'

function App() {

  return (
    <div className="App">
      <Header />
      <div>
        <img src={imagenPrincipal} className='imagen-principal'/>
      </div>
      <h1>Ataque</h1>
      <h2>La odisea de conquistar la región Metropolitana</h2>
    </div>
  )
}

export default App

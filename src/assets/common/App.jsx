import React from 'react';
import AuthProvider from '../auth/AuthProvider';
import imagenPrincipal from '../img/imagen-principal.jpg';
import './App.css';

function App() {

  return (
    <AuthProvider>
      <div className="page-container App">
        <div>
          <img src={imagenPrincipal} className='imagen-principal'/>
        </div>
        <h1>DCConquistador</h1>
        <h2>La odisea de conquistar la Región Metropolitana</h2>
      </div>
    </AuthProvider>
  )
}

export default App

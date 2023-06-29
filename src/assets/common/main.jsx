import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './routing'
import Header from './Header'
import AuthProvider from '../auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Header/>
      <div className='container'>
        <Routing />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)

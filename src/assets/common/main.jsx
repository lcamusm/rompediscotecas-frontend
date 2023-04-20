import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './routing'
import Header from './Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <div className='container'>
      <Routing />
    </div>
  </React.StrictMode>,
)

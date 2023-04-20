import './Equipo.css'
import Header from "./Header"
import Erri from '../img/erri.jpg'
import Luki from '../img/luki.jpg'

function Equipo() {
    return (
        <main className='Equipo'>
            <Header/>
            <div className='titulo'>
                <h1>Equipo</h1>
                <h2>Un poco acerca de nosotros :)</h2>
            </div>
            <div className='nosotros'>
                <div className='contenedor'>
                    <img src={Erri}/>
                </div>
                <div className='texto'>
                    <h3>Vicente Errázuriz</h3>
                    <p>Descripción</p>
                </div>
            </div>
            <div className='nosotros'>
                <div className='contenedor'>
                    <img src={Luki}/>
                </div>
                <div className='texto'>
                    <h3>Lucas Camus</h3>
                    <p>Descripción</p>
                </div>
            </div>
        </main>
    )
}

export default Equipo


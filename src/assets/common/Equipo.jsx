import './Equipo.css'
import Header from "./Header"
import Erri from '../img/erri.jpg'
import Luki from '../img/luki.jpg'

function Equipo() {
    return (
        <div className='page-container Equipo'>
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
                    <p>Nombre: Vicente Errázuriz Labbé</p>
                    <p>Fecha de nacimiento: 6 de julio de 2001</p>
                    <p>Lugar de nacimiento: Rancagua, Chile</p>
                    <p>Estudios: Estudiante de Ingeniería Civil en la Universidad Católica de Chile</p>
                    <p>Major: Ingeniería de Software</p>
                    <p>Minor: Industrial</p>
                </div>
            </div>
            <div className='nosotros'>
                <div className='contenedor'>
                    <img src={Luki}/>
                </div>
                <div className='texto'>
                    <p>Nombre: Lucas Camus Márquez</p>
                    <p>Fecha de nacimiento: 18 de agosto de 2001</p>
                    <p>Lugar de nacimiento: Santiago, Chile</p>
                    <p>Estudios: Estudiante de Ingeniería Civil en la Universidad Católica de Chile</p>
                    <p>Major: Ingeniería de Software</p>
                    <p>Minor: Industrial</p>
                </div>
            </div>
        </div>
    )
}

export default Equipo


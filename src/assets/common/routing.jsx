import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PaginaPrincipal from '../game/PaginaPrincipal';
import Equipo from './Equipo';
import Instructions from '../game/Instructions';
import Board from '../game/Board';

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/el-juego" element={<PaginaPrincipal/>}/>
                <Route path="/nosotros" element={<Equipo/>}/>
                <Route path="/instrucciones" element={<Instructions/>}/>
                <Route path="/board" element={<Board/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing
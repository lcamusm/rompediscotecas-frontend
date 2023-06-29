import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PaginaPrincipal from '../game/PaginaPrincipal';
import Equipo from './Equipo';
import Instructions from '../game/Instructions';
import Board from '../game/Board';
import Login from '../profile/Login';
import UserCheck from '../protected/UserCheck';
import AdminCheck from '../protected/AdminCheck';
import LogoutButton from '../profile/Logout';
import Signup from '../profile/Signup';

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/el-juego" element={<PaginaPrincipal/>}/>
                <Route path="/nosotros" element={<Equipo/>}/>
                <Route path="/instrucciones" element={<Instructions/>}/>
<<<<<<< HEAD
                <Route path="/board" element={<Board/>}/>
=======
                <Route path="/login" element = {<Login/>}/>
                <Route path="/logout" element = {<LogoutButton/>}/>
                <Route path="/usercheck" element = {<UserCheck/>}/>
                <Route path="/admincheck" element = {<AdminCheck/>}/>
                <Route path="/signup" element = {<Signup/>}/>
>>>>>>> 9fdb87cabc0a7b1736d924717ad75c3c806362af
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing
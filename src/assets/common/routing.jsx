import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PaginaPrincipal from "../game/PaginaPrincipal";
import Equipo from "./Equipo";
import Instructions from "../game/Instructions";
import Board from "../game/Board";
import Login from "../profile/Login";
import UserCheck from "../protected/UserCheck";
import AdminCheck from "../protected/AdminCheck";
import LogoutButton from "../profile/Logout";
import Signup from "../profile/Signup";
import Play from "../game/Play";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/el-juego" element={<PaginaPrincipal />} />
            <Route path="/nosotros" element={<Equipo />} />
            <Route path="/instrucciones" element={<Instructions />} />
            <Route path="/board" element={<Board />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogoutButton />} />
            <Route path="/usercheck" element={<UserCheck />} />
            <Route path="/admincheck" element={<AdminCheck />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;

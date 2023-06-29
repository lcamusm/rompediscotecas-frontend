import React, { useContext, useState } from "react";
import './Login.css';
import { AuthContext } from "../auth/AuthContext";

const LogoutButton = () => {
    const { token, logout } = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    const handleLogout = () => {
        logout();
        setMsg("Sesión cerrada correctamente");
    }
    if (!token || token === null) {
        return null;
    } else {
        return (
            <button onClick={handleLogout}>Cerrar sesión</button>
        );
    }

}

export default LogoutButton;
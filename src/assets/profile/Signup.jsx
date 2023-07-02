import React, { useState } from "react";
import axios from "axios";
import './Login.css';
import VITE_BACKEND_URL from "../config";

function Signup() {
    const [username, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post(`${VITE_BACKEND_URL}/auth/signup`, {
            username: username,
            mail: mail,
            password: password
        }) .then((response) => {
            console.log("Usuario registrado correctamente");
            setError(false);
            setMsg("Usuario registrado correctamente");
        }) .catch((error) => {
            console.error("Error al registrar usuario: ", error);
            setError(true);
        });
    }

    return (
        <div className="Login">
            {msg.length > 0 && <div className="successMsg">{msg}</div>}

            {error && <div className="error">Error al registrar usuario</div>}

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Mail:
                    <input
                        type="email"
                        name="mail"
                        value={mail}
                        onChange={e => setMail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Signup;
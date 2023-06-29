import React, { useContext, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';

function Login() {
    const { token, setToken } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
            username: username,
            password: password
        }) .then((response) => {
            console.log("Sesión iniciada correctamente");
            setError(false);
            setMsg("Sesión iniciada correctamente");
            const access_token = response.data.access_token;
            localStorage.setItem('token', access_token);
            setToken(access_token);
            console.log("Token almacenado en localStorage: ", token);
        }) .catch((error) => {
            console.error("Error al iniciar sesión: ", error);
            setError(true);
        })
    };

    return (
        <div className="Login">
            {msg.length > 0 && <div className="successMsg">{msg}</div>}

            {error && <div className="error">Error al iniciar sesión</div>}
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

export default Login;
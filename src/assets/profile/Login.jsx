import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("apretaste el form")
        axios.post()
    };

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="username"    
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
    )
}

export default Login;
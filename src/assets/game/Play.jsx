import React, { useState } from 'react';
import './Play.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Play() {

    const [error, setError] = useState(false);
    const navigate = useNavigate(); 

    const handleCreateGame = async(event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');  
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const userId = payload.sub;
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/players/create-game/${userId}`, 
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Partida creada");
            console.log(response);
            setError(false);
            navigate('/waiting-room');
        } catch (error) {     
            console.error("Debes iniciar sesión primero: ", error);
            console.log(error)
            setError(true);
        }
    };

    const handleJoinGame = async(event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');  
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const userId = payload.sub;
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/players/join-game/${userId}`, 
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Unión exitosa");
            console.log(response);
            setError(false); 
            navigate('/waiting-room');
        } catch (error) {     
            console.error("Debes iniciar sesión primero: ", error);
            setError(true);
        }
    };

    return (
        <div className="Play">
            <div className="error-container">
            {error && <div className="error">Debes iniciar sesión primero</div>}
            </div>
            <div className="container">
                <button className="button" onClick={handleCreateGame}>
                    Crear nueva partida
                </button>
                <button className="button" onClick={handleJoinGame}>
                    Unirse a partida existente
                </button>
            </div>
        </div>
    );
}

export default Play;
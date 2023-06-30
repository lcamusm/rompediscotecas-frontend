import React, { useContext, useState } from 'react';
import './Play.css';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Play() {

    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleCreateGame = async(event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');  
        if (!token) {
            console.log(token);
            setError('No se puede crear una partida sin iniciar sesión');
            console.error(error);
            return;
        }
        const payload = JSON.parse(atob(token.split('.')[1]));
        const userId = payload.sub;
        try {
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
            setError(''); 
            navigate('/board');
        } catch (error) {     
            setError(error.message);
            console.error(error);
        }
    };

    const handleJoinGame = async(event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');  
        if (!token) {
            console.log(token);
            setError('No se puede unir a una partida sin iniciar sesión');
            console.error(error);
            return;
        }
        const payload = JSON.parse(atob(token.split('.')[1]));
        const userId = payload.sub;
        try {
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
            setError(''); 
            navigate('/board');
        } catch (error) {     
            setError(error.message);
            console.error(error);
        }
    };

    return (
        <div className="Play">
            <div className="error-container">
                {error && <div className="error">{error}</div>}
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
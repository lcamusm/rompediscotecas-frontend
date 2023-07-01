import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function WaitingRoom() {
    const { gameId } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isCreator, setIsCreator] = useState(false);
    const [playerCount, setPlayerCount] = useState(0);
    const [hasJoined, setHasJoined] = useState(false);

    useEffect(() => {
        const fetchGameInfo = async () => {
            const token = localStorage.getItem('token');  
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                const userId = payload.sub;
                const response1 = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/players/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const playerId = response1.data.id;
                console.log("Player ID: ", playerId);
                const response2 = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/game/${playerId}`, 
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const creatorId = response2.data.createdBy;
                console.log("Creator ID: ", creatorId);
                setIsCreator(playerId === creatorId);
                setPlayerCount(response2.data.players.length);
                setIsLoading(false);
                setHasJoined(false);
            } catch (error) {
                console.error("Error al obtener información de la partida: ", error);
                setHasJoined(true);
                setIsLoading(false);
            }
        };
        fetchGameInfo();
    }, [gameId]);

    const handleStartGame = async() => {
        try {
            navigate('/board');
        } catch (error) {
            console.error("Error al iniciar la partida: ", error);
        }
    };

    return (
        <div className="WaitingRoom">
            {isLoading ? (
                <div>Esperando jugadores...</div>
            ) : (
                <div>
                    {isCreator ? (
                        <div>
                            <p>Jugadores en la partida: {playerCount}</p>
                            <button onClick={handleStartGame}>Iniciar partida</button>
                        </div>
                    ) : (
                        <div>
                            {hasJoined && (
                                <p>Esperando a que el host inicie la partida...</p>
                            )}
                        </div>
                )}
                </div>
            )}
        </div>
    );
}

export default WaitingRoom;
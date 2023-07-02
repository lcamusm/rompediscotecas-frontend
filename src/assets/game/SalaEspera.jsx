import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import VITE_BACKEND_URL from '../config';

function WaitingRoom() {
    const { gameId } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isCreator, setIsCreator] = useState(false);
    const [playerCount, setPlayerCount] = useState(0);
    const [hasJoined, setHasJoined] = useState(false);
    const [gameData, setGameData] = useState(null);

    useEffect(() => {
        const fetchGameInfo = async () => {
            const token = localStorage.getItem('token');  
            try {
                const response1 = await axios.get(
                    `${VITE_BACKEND_URL}/players/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const playerId = response1.data.id;
                console.log("Player ID: ", playerId);
                const response2 = await axios.get(
                    `${VITE_BACKEND_URL}/game/${playerId}`, 
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
                setGameData(response2.data);
            } catch (error) {
                console.error("Error al obtener información de la partida: ", error);
                setHasJoined(true);
                setIsLoading(false);
            }
        };
        fetchGameInfo();
    }, [gameId]);

    const handleStartGame = async() => {
        const token = localStorage.getItem('token');
        try {
            console.log(gameData.players);
            const response1 = await axios.post(
                `${VITE_BACKEND_URL}/cards/objetivo`,
                {
                    "numberPlayers": gameData.players.length,
                    "playersID": gameData.players
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Objetivos asignados: ", response1.data);
            const response2 = await axios.post(
                `${VITE_BACKEND_URL}/boards/create-board`,
                {
                    "numberPlayers": gameData.players.length,
                    "playersID": gameData.players,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Tablero creado: ", response2.data);
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
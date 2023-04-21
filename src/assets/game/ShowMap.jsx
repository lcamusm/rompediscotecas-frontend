import { useState } from "react";
import mapa from '../img/mapa.png'
import './ShowMap.css';

function ShowMap() {
    const [map, setMap] = useState(false);
  return (
    <>
        <h3>¡Aprieta acá para ver el mapa!</h3>
        <div className="mapa">
            <button className="button" onClick={() => setMap(!map)}>
                {map ? "Ocultar mapa" : "Mostrar mapa"}
            </button>
            <div className="imagen">
                {map && <img className="imagen" src={mapa} alt="mapa" />}
            </div>
        </div>
    </>
  );
}

export default ShowMap;


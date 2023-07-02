import { useState } from "react";
import mapa from '../../../public/img/mapa.png'
import './ShowMap.css';

function ShowMap() {
    const [map, setMap] = useState(false);
  return (
    <>
        <h6>¡Aprieta acá para ver el mapa!</h6>
        <div className="mapa">
            <div className="imagen">
                {map && <img className="imagen" src={mapa} alt="mapa" />}
            </div>
            <button className="button" onClick={() => setMap(!map)}>
                {map ? "Ocultar mapa" : "Mostrar mapa"}
            </button>
        </div>
    </>
  );
}

export default ShowMap;


import './PaginaPrincipal.css'


function PaginaPrincipal() {
  return (
    <>
        <div className="contenido">
            <h1>DCConquistador</h1>
            <p className="parrafo">DCConquistador es un juego de estrategia y habilidad, en el que cada jugador debe cumplir un objetivo distinto
                para ganar, asignado de forma aleatoria al comenzar la partida. El juego se desarrolla en un tablero que
                representa la ciudad de Santiago, Chile. La cantidad máxima de jugadores por partida son 4, donde cada uno de
                ellos tendrá un ejercito específico y contará con una cierta cantidad de comunas, donde desplegará sus tropas.
                Algunos de los objetivos que se pueden cumplir son:
            </p>
            <ul className="tabla">
                <li>Agrupar 50 ejercitos en Pudahuel</li>
                <li>Eliminar al ejercito rojo</li>
                <li>Conquistar todo el sector oriente</li>
            </ul>
            <p className="parrafo">El juego se desarrolla en turnos, donde cada jugador tendrá la oportunidad de mover sus tropas o atacar a otros,
                con el fin de conquistar nuevos territorios y poder cumplir con su objetivo. Gana la partida el jugador que
                cumpla con su objetivo antes que los demás o que logre conquistar toda la ciudad.
            </p>
        </div>
    </>
  )
}

export default PaginaPrincipal
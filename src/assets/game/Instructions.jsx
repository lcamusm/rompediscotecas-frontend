import './Instructions.css'

function Instructions() {
  return (
    <>
      <div className="page-container instructions">
          <h1>Instrucciones</h1>
          <h3>Flujo del juego</h3>
          <p className='parrafo-instructions'>DCConquistador es un juego de estrategia y habilidad, en el que cada jugador
            debe cumplir un objetivo distinto para ganar, asignado de forma aleatoria al comenzar la partida. El juego se
            desarrolla en un tablero que representa la ciudad de Santiago, Chile. La cantidad máxima de jugadores por
            partida son 4, donde cada uno de ellos tendrá un ejército específico y contará con una cierta cantidad de
            comunas, donde desplegará sus tropas.
          </p>
          <p className='parrafo-instructions'>El juego comienza con la entrega del objetivo a cada uno de los
            participantes de la partida, carta que es única para cada jugador. Una vez que todos los jugadores han
            recibido su objetivo, se procede a repartir los territorios con los que comenzará cada participante. Se
            repartirán todos los territorios de forma aleatoria, hasta que no queden más comunas por repartir. En cada uno
            de estos territorios se colocará un ejército, llamado ejercito de ocupación. Todas las comunas deben tener al
            menos un ejército de ocupación durante toda la partida.
          </p>
          <p className='parrafo-instructions'>Comenzará la partida alguno de los jugadores a los que se les haya repartido
            menos comunas, y en caso de que todos tenga la misma cantidad de comunas, se elegirá al azar. Desde entonces,
            el turno de ese jugador será el que marque el comienzo de cada ronda.<strong> Al comienzo de cada ronda
            </strong>, todos los jugadores recibirán una cantidad de ejércitos, que dependerá de la cantidad de comunas
            que posean. Recibirán la cantidad de territorios que tienen dividido por 2, redondeando hacia abajo. Por
            ejemplo, si un jugador tiene 5 comunas, recibirá 2 ejércitos al comienzo de cada ronda. Si tiene 6, recibirá 3.
            Si tiene 7, recibirá 3. Si tiene 8, recibirá 4. Y así sucesivamente.
          </p>
          <p className='parrafo-instructions'>Al comenzar la partida, habrá una primera ronda que será exclusivamente para
            poner los tropas disponibles en cada territorio, es decir, no se podrá atacar a ningún territorio. En las
            siguientes rondas, los jugadores podrán mover sus tropas o atacar a otros, con el fin de conquistar nuevos
            territorios y poder cumplir con su objetivo. Gana la partida el jugador que cumpla con su objetivo antes que
            los demás o que logre conquistar toda la ciudad.
          </p>
          <h3>Conquistar</h3>
          <p className='parrafo-instructions'>Para conquistar nuevos territorios, se debe atacar a alguna comuna vecina.
            Para poder atacar, desde el territorio del que se quiere atacar, debe contar con al menos 2 ejércitos. Si se
            tiene 2 ejércitos, se puede atacar con un ejercito exclusivamente, si se tiene 3, se puede atacar con 2
            ejércitos. Por último, si se tiene 4 o más ejércitos, se puede atacar con 3 ejércitos. Para atacar, primero
            lanzará un los dados el jugador que ataca, y luego los dados el jugador que defiende. El jugador que ataca
            debe lanzar tantos dados como ejércitos con los que decida atacar, pero no puede atacar con más de 3 tropas.
            El jugador que defiende debe lanzar tantos dedos como ejércitos tenga en el territorio, pero no puede lanzar
            más de 3 dados. Luego de lanzar los dados, se compararán los resultados, de forma que el dado más alto del
            jugador que ataca se comparará con el dado más alto del jugador que defiende, el segundo más alto con el
            segundo y el tercero con el tercero. Si el dado del jugador que ataca es mayor, el jugador que defiende pierde
            un ejército. Si el dado del jugador que defiende es mayor, el jugador que ataca pierde un ejército. Si los
            dados son iguales, gana la defensa. Si el jugador que defiende pierde todos sus ejércitos, el territorio pasa
            a ser propiedad del jugador que ataca, quien debe dejar exclusivamente un ejército en el territorio conquistado.
          </p>
          <h3>Fin del turno</h3>
          <p className='parrafo-instructions'>Una vez que el jugador ha hecho todos los ataques que quiera, puede terminar su turno, teniendo la opción de
            reagruparse. Para reagruparse, el jugador debe mover al menos 1 ejército de un territorio a otro, con la 
            condición de que ambos territorios sean vecinos. El jugador puede mover todos los ejércitos que quiera, siempre
            y cuando no se exceda de la cantidad de ejércitos que tenga en el territorio de origen. Por ejemplo, si un
            jugador tiene 5 ejércitos en un territorio, puede mover 1, 2, 3 0 4 ejércitos a otros territorios vecinos. Si
            tiene 3 ejércitos, puede mover 1 o 2 ejércitos a otro territorio vecino.
          </p>
          <p className='parrafo-instructions'>Finalmente, si durante su turno el jugador logró conquistar alguna comuna, recibirá una DCCarta, la que
            podrá usar en su siguiente turno, si lo estima conveniente. Estas cartas traen distintos beneficios, pero
            también pueden traer maldiciones, las que perjudicarán al jugador que le salgan.
          </p>
          <h3>Fin del juego</h3>
          <p className='parrafo-instructions'>Como ya deben saber a esta altura, el juego termina cuando algún jugador cumple su objetivo o conquista toda
            la ciudad. El jugador ganador obtendrá una cantidad de puntos que dependerá de su desempeño durante la partida,
            además de la admiración y respeto de sus compañeros de juego, quienes deberán vivir el resto de sus días con la
            vergüenza de haber sido derrotados inapelablemente. Estos puntos de partida se acumularán en el perfil del
            jugador, y su único fin será poder alumbrase con la gloria de sus victorias.
          </p>
      </div>
    </>
  )
}

export default Instructions;
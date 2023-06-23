import React from 'react';
import dado1 from '../img/dados/dado1.png';
import dado2 from '../img/dados/dado2.png';
import dado3 from '../img/dados/dado3.png';
import dado4 from '../img/dados/dado4.png';
import dado5 from '../img/dados/dado5.png';
import dado6 from '../img/dados/dado6.png';
import './Dado.css'

const diceImages = [
  dado1,
  dado2,
  dado3,
  dado4,
  dado5,
  dado6,
];

function Dice(props) {
  return (
    <img className='dado-img'
      src={diceImages[props.value - 1]}
      alt={`Dado con valor ${props.value}`}
    />
  );
}

export default Dice;


import Card from './components/Card'
import './App.css'
import { useState } from 'react'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min +1)+min);

const playerCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name:'Cuteness', value: getRandomInt(1, 999)},
          {name:'Speed', value: 50}
                                    ]
}

const opponentCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name:'Cuteness', value: 15},
          {name:'Speed', value: 30}
                                    ]
}

export default function App(){

  const[result, setResult] = useState('');

  function compareCards(){
    const playerStat = playerCard.stats[0];
    const opponentStat = opponentCard.stats[0];

    if( playerStat.value === opponentStat.value){
     setResult("Draw");
    }
    else if(playerStat.value > opponentStat.value){
      setResult("Win");
    }else{
      setResult("Loss");
    }

  }

  return(
    <>
      <h1>Hello world!</h1>
      <div className='game'>
        <Card card={playerCard}/>
        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          <button onClick={compareCards} type="button">Play</button>
        </div>
        <Card card={opponentCard}/>
      </div>
    </>
  );
}
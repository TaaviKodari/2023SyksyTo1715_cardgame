import Card from './components/Card'
import './App.css'
import { useState } from 'react'
import PlayButton from './components/PlayButton';

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

const createCard = index =>({
  image: 'http://placekitten.com/120/100?image=' + index,
  stats: [{name:'Cuteness', value: getRandomInt(1, 999)},
          {name:'Speed', value: getRandomInt(1, 999)},
          {name:'Weight', value: getRandomInt(1, 999)}],
  id:crypto.randomUUID()
});

const deck = Array(16).fill(null).map((_,index) => createCard(index));
const half = Math.ceil(deck.length / 2);
const dealCards =()=>{
  shuffle(deck);
  return{
    player: deck.slice(0,half),
    opponent: deck.slice(half)
  };
};

function shuffle(array){
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function App(){

  const [result, setResult] = useState('');
  const [cards, setCards] = useState(dealCards);
  const [gameState, setGameState] = useState('play');

  function compareCards(){
    const playerStat = cards.player[0].stats[0];
    const opponentStat = cards.opponent[0].stats[0];

    if( playerStat.value === opponentStat.value){
     setResult("Draw");
    }
    else if(playerStat.value > opponentStat.value){
      setResult("Win");
    }else{
      setResult("Loss");
    }
    setGameState("result");
  }

  function nextRound(){
    setCards(cards =>{
      const playedCards = [{...cards.player[0]}, {...cards.opponent[0]}];
      const player = cards.player.slice(1);
      const opponent = cards.opponent.slice(1);
      if(result === "Draw"){
        return{
          player,
          opponent
        };
      }
    });
    setGameState('play');
    setResult('');
  }

  return(
    <>
      <h1>Hello world!</h1>
      <div className='game'>
        
        <ul className='card-list'>
          {cards.player.map((pCard, index) =>(
            <li className='card-list-item player' key={pCard.id}>
              <Card card={index === 0 ? pCard : null}/>
            </li>
          ))}
        </ul>
        
        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          {
            gameState === 'play' ?
            ( <PlayButton text={'Play'} handleClick={compareCards} />)
            :
            ( <PlayButton text={"Next"} handleClick={nextRound} />)
          }
         
        </div>

        <ul className='card-list opponent'>
          {cards.opponent.map(oCard =>(
            <li className='card-list-item opponent' key={oCard.id}>
              <Card card={oCard}/>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}
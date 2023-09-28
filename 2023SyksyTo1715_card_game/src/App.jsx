import Card from './components/Card'
import './App.css'

const playerCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name:'Cuteness', value: 9},
          {name:'Speed', value: 50}
                                    ]
}

export default function App(){
  return(
    <>
      <h1>Hello world!</h1>
      <Card card={playerCard}/>
    </>
  );
}
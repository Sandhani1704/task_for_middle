import './App.css';
import React from 'react';
import { getInitialDatas } from '../utils/Api';
import BASE_URL from '../entities.json'
// const entities = require('../entities.json');

function App() {
  const [cards, setCards] = React.useState({});
  const [preloader, setPreloader] = React.useState(false);
  console.log(BASE_URL)

  React.useEffect(() => {
    setPreloader(true);

    // setTimeout(() => {
      getInitialDatas({BASE_URL}).then((res) => {
        if (res) {

          setCards(JSON.parse(res))
          console.log(cards)

          setPreloader(false);

        }

      })
    // }, 500)
  }, []);

  return (
    <div className="App">
      <header className="App-header">

      </header>

    </div>
  );
}

export default App;

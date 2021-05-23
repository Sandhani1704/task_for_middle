import './App.css';
import React from 'react';
import { getInitialDatas } from '../utils/Api';
import ApartmentsList from './ApartmentsList'

function App() {
  const [apartments, setApartments] = React.useState({});
  const [preloader, setPreloader] = React.useState(false);


  React.useEffect(() => {
    setPreloader(true);

    getInitialDatas().then((res) => {
      return res;
      // console.log(res)
    }).then((parsedReviews) => {
      if (parsedReviews) {
      // we're formatting the data and using setData() to update our state
      console.log(parsedReviews)
      const reviews = Object.values(parsedReviews);
      setApartments(reviews);
    }
    })

  }, []);

  

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <ApartmentsList apartments={apartments}/>

    </div>
  );
}

export default App;

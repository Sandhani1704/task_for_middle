import './App.css';
import React from 'react';
import { ApartmentsContext } from '../contexts/ApartmentsContext';
import { getInitialDatas } from '../utils/Api';
import ApartmentsList from './ApartmentsList'
import Header from './Header'

function App() {
  const [apartments, setApartments] = React.useState([]);
  const [preloader, setPreloader] = React.useState(false);

  React.useEffect(() => {
    setPreloader(true);

    getInitialDatas().then((res) => {
      return res;

    }).then((parsedReviews) => {
      if (parsedReviews) {

        const reviews = Object.values(parsedReviews);
        const favourites = JSON.parse(localStorage.getItem('favourites'))
        const result = reviews.map(el => {
          return {...el, favourite: favourites.includes(el.id) ? true : false}
        })
        
        setApartments(result)
        
      }
    })

  }, []);

  console.log(apartments)

  React.useEffect(() => {
    // проверка на наличие данных в стейте, чтобы не отрабатывал лишний раз
    if (apartments.length) {
      localStorage.setItem('favourites', JSON.stringify(apartments.map(el => (el.id))))
    }
  }, [apartments])


  // React.useEffect(() => {
  //   JSON.parse(localStorage.getItem('favourites'));
  // }, [localStorage])



  return (
    <ApartmentsContext.Provider value={{ apartments, setApartments }}>
      <div className="App">
        
        <Header />
        <ApartmentsList />

      </div>
    </ApartmentsContext.Provider>
  );
}

export default App;

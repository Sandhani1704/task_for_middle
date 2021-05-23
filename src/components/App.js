import './App.css';
import React from 'react';
import { ApartmentsContext } from '../contexts/ApartmentsContext';
import { getInitialDatas } from '../utils/Api';
import ApartmentsList from './ApartmentsList'
import FavouriteApartments from './FavouriteApartments'
import Header from './Header'
import Preloader from './Preloader';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [apartments, setApartments] = React.useState([]);
  const [preloader, setPreloader] = React.useState(false);

  React.useEffect(() => {
    setPreloader(true);

    getInitialDatas()
      .then((res) => {
        if (res) {
          const initialDatas = Object.values(res);

          let favourites

          try {
            favourites = localStorage.getItem('favourites')
          } catch (err) {
            console.error(err)
          }

          const result = initialDatas.map(el => {
            return { ...el, favourite: favourites?.includes(el.id) ? true : false }
          })
          setPreloader(false);
          setApartments(result)
        }
      })

  }, []);

  React.useEffect(() => {
    // проверка на наличие данных в стейте, чтобы не отрабатывал лишний раз
    if (apartments.length) {
      const favouriteItems = apartments.filter(el => el.favourite)
      localStorage.setItem('favourites', JSON.stringify(favouriteItems.map(el => (el.id))))
    }
  }, [apartments])

  return (
    <ApartmentsContext.Provider value={{ apartments, setApartments }}>
      <div className="app">

        <Header />
        <Switch>
          <Route exact path="/">
            {!preloader ? <ApartmentsList /> : <Preloader />}
          </Route>
          <Route exact path="/favorites">
            <FavouriteApartments />
          </Route>
        </Switch>
      </div>
    </ApartmentsContext.Provider>
  );
}

export default App;

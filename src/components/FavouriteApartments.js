import './ApartmentsList.css';
import React from 'react';
import { ApartmentsContext } from '../contexts/ApartmentsContext';

function FavouriteApartments() {
    const { apartments } = React.useContext(ApartmentsContext);

    const favourites = apartments.filter(el => el.favourite)

    return (
        <div className="apartments">
            {favourites.map((home) => (
                <div className="apartment__card" key={home.id}>
                    <div className="apartment__card-pictures">
                        {home.attributes.pictures.slice(0, 1).map((homePic, key) => (
                            <img className="apartment__card-image" src={homePic} alt="apartments view" key={key}/>
                        ))}
                    </div>
                    <h2 className="apartment__title">{home.attributes.title}</h2>
                    <div className="apartment__card-address">
                        <p>{home.attributes.address.city}</p>
                        <p>, {home.attributes.address.street}</p>
                        <p>, {home.attributes.address.house}</p>
                        <p>, {home.attributes.address.room}</p>
                    </div>
                    
                </div>


            ))}
        </div>
    )
}

export default FavouriteApartments;
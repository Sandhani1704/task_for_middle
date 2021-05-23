import './ApartmentsList.css';
import React from 'react';
import { ApartmentsContext } from '../contexts/ApartmentsContext';

function ApartmentsList() {

    const { apartments, setApartments } = React.useContext(ApartmentsContext);

    const handleLikeClick = (cardId) => {

        setApartments(apartments.map(el => el.id === cardId ? { ...el, favourite: !el.favourite } : { ...el }))
    }

    return (
        <>
            <div className="apartments">
                {apartments.map((home) => (
                    <div className="apartment__card">
                        <div className="apartment__card-pictures">
                            {home.attributes.pictures.slice(0, 1).map((homePic) => (
                                <img className="apartment__card-image" src={homePic} alt="apartments view" />
                            ))}
                        </div>
                        <h2 className="apartment__title">{home.attributes.title}</h2>
                        <div className="apartment__card-address">
                            <p>{home.attributes.address.city}</p>
                            <p>, {home.attributes.address.street}</p>
                            <p>, {home.attributes.address.house}</p>
                            <p>, {home.attributes.address.room}</p>
                        </div>
                        <div className="apartment__like-container">
                            <button type="button" className={`apartment-like-button ${home.favourite && 'apartment-like-button_active'}`}
                                onClick={() => { handleLikeClick(home.id) }}></button>
                            <p className="apartment__like-count"></p>
                        </div>

                    </div>


                ))}
            </div>
        </>
    );

}

export default ApartmentsList;
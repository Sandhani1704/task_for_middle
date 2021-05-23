import './ApartmentsList.css';
import React from 'react';
import { ApartmentsContext } from '../contexts/ApartmentsContext';
import { NextIcon } from '../assets/icons/NextIcon';
import { BackIcon } from '../assets/icons/BackIcon';

function ApartmentsList() {
    
    const { apartments, setApartments } = React.useContext(ApartmentsContext);

    const handleLikeClick = (cardId) => {
        setApartments(apartments.map(el => el.id === cardId ? { ...el, favourite: !el.favourite } : { ...el }))
    }

    return (
        <>
            <div className="apartments">
                {apartments.map((homeItem) => (
                    <div className="apartment__card" key={homeItem.id}>
                        <div className="apartment__card-pictures">
                            {homeItem.attributes.pictures.slice(0, 1).map((homeImg, key) => (
                                <img className="apartment__card-image" src={homeImg} alt="apartments view" key={key}/>

                            ))}

                            <button className="apartment__button-next">
                                <span className='apartment__button-controll-image'>
                                    <NextIcon />
                                </span>
                            </button>
                            <button className="apartment__button-back">
                            <span className='apartment__button-controll-image'>
                                    <BackIcon />
                                </span>
                            </button>
                        </div>
                        <h2 className="apartment__title">{homeItem.attributes.title}</h2>
                        <div className="apartment__card-address">
                            <p>{homeItem.attributes.address.city}</p>
                            <p>, {homeItem.attributes.address.street}</p>
                            <p>, {homeItem.attributes.address.house}</p>
                            <p>, {homeItem.attributes.address.room}</p>
                        </div>
                        <div className="apartment__like-container">
                            <button type="button" className={`apartment-like-button ${homeItem.favourite && 'apartment-like-button_active'}`}
                                onClick={() => { handleLikeClick(homeItem.id) }}></button>
                        </div>

                    </div>


                ))}
            </div>
        </>
    );

}

export default ApartmentsList;
import './App.css';
import React from 'react';

function ApartmentsList({apartments}) {
    return (
        <>
           {apartments.map((home) => (

           
           <div className="apartments">
                <div className="apartment__card"><img className="apartment__card-image"
                    src="#"
                    alt="apartments view" />
                    <div className="ApartmentCard_rating__1MPks">Rating: <span>⭐</span><span>⭐</span><span>⭐</span></div>
                    <h2>{home.title}</h2>
                    <p>Debitis similique unde et eligendi sapiente in iure blanditiis distinctio.
                    Cum nihil temporibus qui quam aut. Nesciunt qui eveniet eum quam voluptate numquam.
              </p>
                    <button type="button" className="button">Like apartment</button>
                </div>

            </div> 
            ))}
        </>
    );

}

export default ApartmentsList;
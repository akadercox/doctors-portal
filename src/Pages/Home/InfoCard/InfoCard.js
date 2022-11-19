import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    console.log(card)
    return (
        <div className={`card card-side bg-base-100 shadow-xl h-48 rounded-lg text-white p-6 ${bgClass}`} >
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description} </p>

            </div>
        </div>
    );
};

export default InfoCard;
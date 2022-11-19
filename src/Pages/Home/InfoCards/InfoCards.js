import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 AM to 5.00 PM everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '0123456789',
            icon: phone,
            bgClass: 'bg-primary'
        }
    ]
    return (
        <div className='grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 '>
            {
                cardData.map(card => <InfoCard
                    key={card.id} card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;
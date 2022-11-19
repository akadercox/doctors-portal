import React from 'react';

const ReviewCard = ({ review }) => {
    const { description, name, img, address } = review
    return (
        <div className="card w-96  shadow-xl">
            <div className="card-body">

                <p>{description} </p>
                <div className="card-actions flex mt-4">
                    <div className="w-26 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='' src={img} alt="" />
                    </div>

                    <div className='ml-2 mt-2'>
                        <p>{name} </p>
                        <p>{address} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
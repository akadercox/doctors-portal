import React from 'react';
import img1 from '../../assets/images/people1.png'
import img2 from '../../assets/images/people2.png'
import img3 from '../../assets/images/people3.png'
import icon from '../../assets/icons/quote.svg'
import ReviewCard from './ReviewCard';

const Review = () => {
    const reviews = [
        {
            id: 1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            name: 'Winson Herry',
            address: 'California',
            img: img1

        },
        {
            id: 2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            name: 'Winson Herry',
            address: 'California',
            img: img2

        },
        {
            id: 3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            name: 'Winson Herry',
            address: 'California',
            img: img3

        }
    ]
    return (
        <section >
            <div className='flex justify-between'>
                <div>
                    <p className='text-secondary text-2xl'>Testimonial</p>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <img className='flex justify-end w-24 lg:w-48 h-20 lg:h-40' src={icon} alt="" />
            </div>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <ReviewCard
                        key={review.id} review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Review;
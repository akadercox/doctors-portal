import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';
import treatment from '../../../assets/images/treatment.png'

const Services = () => {
    const servicesInfo = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indus Ipsum has been the',
            icon: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indus Ipsum has been the',
            icon: cavity
        },
        {
            id: 1,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indus Ipsum has been the',
            icon: whitening
        }
    ]
    return (
        <div className='text-center my-12' >
            <h1 className='text-secondary text-2xl font-bold'>OUR SERVICES</h1>
            <p className='text-4xl'>Services We Provide</p>
            <div className='grid gap-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-6 '>
                {
                    servicesInfo.map(serviceInfo => <Service
                        key={serviceInfo.id} serviceInfo={serviceInfo}
                    ></Service>)
                }

            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl text-start mt-6">
                <figure><img src={treatment} alt="Album" className='w-1/2 rounded-md' /></figure>
                <div className="card-body w-1/2 mt-6">
                    <h2 className="card-title text-5xl font-bold ">Exceptional Dental Care, <br /> on Your Terms</h2>
                    <p className='mt-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="">
                        <button type="button" className=" btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
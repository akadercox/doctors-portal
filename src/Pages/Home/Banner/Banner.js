import React from 'react';
import img from '../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
    return (
        <div id='banner' className="hero my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={img} className=" rounded-lg shadow-2xl w-1/2" />
                <div className=' pr-6'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button type="button" className=" btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
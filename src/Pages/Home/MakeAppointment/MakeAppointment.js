import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='mt-48 mb-16'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" -mt-28 -mb-4 hidden lg:block md:block lg:w-1/2 rounded-lg " alt='' />
                    <div>
                        <h1 className="text-2xl font-bold text-secondary mb-4">Appointment</h1>
                        <h1 className="text-4xl font-bold text-white ">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsus's that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button type="button" className=" btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
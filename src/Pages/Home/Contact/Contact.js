import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import ButtonPrimary from '../../../Components/ButtonPrimary';

const Contact = () => {
    return (
        <section className='text-center py-12' style={{
            background: `url(${appointment})`
        }}>
            <form>
                <p className='text-secondary font-bold'>Contact Us</p>
                <h1 className='text-3xl text-white'>Stay connected with us</h1>
                <div className='mt-3 mb-3'>
                    <input type="text" placeholder="Email Address" className="input input-bordered input-accent w-full max-w-xs" /><br />
                    <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full max-w-xs my-3" /> <br />
                    <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Your message"></textarea>
                </div>
                <ButtonPrimary>   Submit   </ButtonPrimary>
            </form>
        </section>
    );
};

export default Contact;
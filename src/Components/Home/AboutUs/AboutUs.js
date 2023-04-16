import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero my-32">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>

    <img src={person} alt="" className="rounded-lg shadow-2xl w-4/5" />
    <img src={parts} alt="" className="rounded-lg shadow-2xl absolute w-3/5 right-5 top-1/2 border-8" />
    </div>
    <div className='w-1/2'>
        <p className='text-lg font-bold text-orange-600'>About Us</p>
      <h1 className="text-6xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="pt-6 w-3/4 text-base text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-6 w-3/4 text-base text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-secondary">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default AboutUs;
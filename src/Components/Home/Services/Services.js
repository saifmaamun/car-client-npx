import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }
    ,[])
    return (
        <div className='my-32'>
            <div className="heading text-center">
                <p className="text-lg py-2 font-bold text-orange-600">Service</p>
                <h1 className="text-6xl py-2 font-bold">Our Service Area</h1>
                <p className="w-1/2 mx-auto py-2 text-base text-gray-600">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service=><ServiceCard
                    key= {service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
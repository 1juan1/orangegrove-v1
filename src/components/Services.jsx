import React from 'react';
import { motion } from 'motion/react';
import { div } from 'motion/react-client';


const services = [
    {
        title: "Graphic Design",
        description: "Logos, flyers, brand identity, and more.Highly proficient in using Adobe Illustrator and Photoshop. Open to commision for any logo or graphic that you may need"
    },
    {
        title: "Photography",
        description: "Custom apparel with your unique designs."
    },
    {
        title: "Videography",
        description: "Professional content for your brand or event."
    }
];


export default function Services() {
    return (
        <div className=" grid grid-cols-3 ">
            {services.map(service => (
                <div className=" p-5 m-8 rounded-md text-center"
                    key={service.id} >
                    <h2 className='text-xl font-bold underline decoration-orange-400 decoration-2'>{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
}


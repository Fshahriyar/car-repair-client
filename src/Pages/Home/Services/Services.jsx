import { useEffect, useState } from "react";
 
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices]=useState([]);

   useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setServices(data));
   })

    return (
        <div>
            <div className="text-center space-y-6">
                <h1 className='text-red-600 text-2xl'>Service</h1>
                <p className="text-5xl font-bold">Our Service Area</p>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
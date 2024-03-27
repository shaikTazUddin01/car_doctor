import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="pt-10 pb-20">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-orange-500 ">Our Services</h3>
                <h2 className="text-5xl font-semibold ">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                {
                    services?.map(service=><ServiceCard key={service?._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
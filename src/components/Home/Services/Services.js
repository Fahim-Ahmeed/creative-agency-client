import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    const history= useHistory()
    const handleService=()=>{
        console.log('service check')
        history.push('/order')

    }
    return (
        <div className="mt-t pt-5  mb-5">
            <h2 className="text-center mb-5">Provide awsome <span style={{color:'#7AB259'}}>services</span> </h2>
        <div className="d-flex justify-content-center  mt-t pt-5">
            <section className="row w-75">
                {
                    services.map(service => <div onClick={handleService} className="col-md-4 service p-5" key={service._id}>
                        <img src={service.image} className="img-fluid d-flex justify-content-center service-image " alt="" />
                       <div style={{margin:'auto',textAlign:'center'}}>
                       <h5 >{service.name}</h5>
                        <p >{service.description}</p>
                       </div>
                    </div>)
                }
            </section>
        </div>
        </div>
    );
};

export default Services;
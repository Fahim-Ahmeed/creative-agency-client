import React, { useEffect } from 'react';
import './Companies.css';
import airbnb from'../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import { useState } from 'react';

const Companies = () => {
    const[companies,setCompanies]=useState([])
   useEffect(()=>{
       fetch('http://localhost:5000/allcompanies')
       .then(response => response.json())
       .then(data=>setCompanies(data))
   },[])
    return (
      
         
            <div className="d-flex justify-content-center mt-5 pt-5 mb-5">
            <section className="row w-75 offset-md-1">
            {
                companies.map(company=>
                    <div key={company._id} className="col-md-2 col-sm-4">
                <img  src={company.image} className="img-fluid companies-image" alt=""/>
            </div>)
            }
            </section>
        </div>
      
    );
};

export default Companies;
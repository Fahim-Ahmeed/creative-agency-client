import React, { useEffect } from 'react';
import './Companies.css';
import { useState } from 'react';

const Companies = () => {
    const[companies,setCompanies]=useState([])
   useEffect(()=>{
       fetch('https://protected-stream-26581.herokuapp.com/allcompanies')
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
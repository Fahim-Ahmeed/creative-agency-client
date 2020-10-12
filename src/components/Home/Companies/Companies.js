import React from 'react';
import './Companies.css';
import airbnb from'../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const Companies = () => {
    return (
        <div className="d-flex justify-content-center mt-t pt-5 mb-5">
            <section className="row w-75">
            <div className="col-md-2">
                <img  src={airbnb} className="img-fluid companies-image" alt=""/>
            </div>
            <div className="col-md-2">
            <img src={google} className="img-fluid companies-image" alt=""/>
            </div>
            <div className="col-md-2">
            <img src={uber} className="img-fluid companies-image" alt=""/>
            </div>
            <div className="col-md-2">
            <img src={netflix} className="img-fluid companies-image" alt=""/>
            </div>
            <div className="col-md-2">
            <img src={slack} className="img-fluid companies-image" alt=""/>
            </div>
            </section>
        </div>
    );
};

export default Companies;
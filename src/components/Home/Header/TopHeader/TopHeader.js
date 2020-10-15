import React from 'react';
import { Link } from 'react-router-dom';
import topImage from '../../../../images/logos/Frame.png';
import './TopHeader.css';
const TopHeader = () => {
    return (
        <section className="row  mt-5 pt-5">
            <div className="col-md-5 col-sm-10 offset-md-1">
                <h1>
                    Lets's Grow Your <br />
                    Brand To The <br />
                    Next Level
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur  <br />  adipisicing elit Excepturi pariatur voluptates animi.<br /> officia nihil incidunt</p>
                <Link to="/login">
                <button className="btn btn-dark">Hire Us</button>
                </Link>
               
            </div>
            <div className="col-md-5 col-sm-10 ">
                
                <img src={topImage} className="img-fluid" alt="" />
            </div>

        </section>
    );
};

export default TopHeader;
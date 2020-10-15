import React from 'react';
import ClientFeedback from './ClientFeedback/ClientFeedback';
import Companies from './Companies/Companies';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import SomeWorks from './SomeWorks/SomeWorks'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Companies></Companies>
            <Services></Services>
           <SomeWorks></SomeWorks>
           <ClientFeedback></ClientFeedback>
           <Footer></Footer>
        </div>
    );
};

export default Home;
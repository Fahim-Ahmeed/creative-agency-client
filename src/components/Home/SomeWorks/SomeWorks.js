import React from 'react';
import './SomeWorks.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'

const SomeWorks = () => {
 


  return (
    <section className='some-works text-center py-5 mb-5'>
      <h1 className='someWorks-title py-5'>Here are some of <span>our works</span></h1>
      <OwlCarousel className='owl-theme mt-5'
        loop
        autoplay
        autoplayTimeout={2000}
        margin={20}
        dots
      >
        
        <div><img src={carousel1} alt="" /></div>
        <div><img src={carousel5} alt="" /></div>
        <div><img src={carousel2} alt="" /></div>
        <div><img src={carousel4} alt="" /></div>
        <div><img src={carousel2} alt="" /></div>
        <div><img src={carousel5} alt="" /></div>
        <div><img src={carousel4} alt="" /></div>

      </OwlCarousel>
    </section>
  );
};


export default SomeWorks;
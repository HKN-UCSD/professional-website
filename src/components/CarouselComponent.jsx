import React from 'react';
import Carousel from './Carousel';
import './styles/Carousel.css';

// update these companies as we gather more infinity stones -ryunzz
import apple from '../assets/apple.png';
// import google from '../assets/google.png';
// import janestreet from '../assets/janestreet.png';
// import meta from '../assets/meta.png';
// import amazon from '../assets/amazon.png';
// import microsoft from '../assets/microsoft.png';
// import tesla from '../assets/tesla.png';
// import nvidia from '../assets/nvidia.png';
// import intel from '../assets/intel.png';
// import amd from '../assets/amd.png';

// what ever llm u use here u can js auto match the list -ryunzz
// also idk if we have all these comapnies in hkn -ryunzz
const companyLogos =[
    apple,
    // google, 
    // apple, 
    // janestreet, 
    // meta, 
    // amazon, 
    // microsoft, 
    // tesla, 
    // nvidia, 
    // intel, 
    // amd,
];

const CarouselSection = () => (
    <div className="carousel-container">
        <Carousel images={
            companyLogos
        } />
    </div>
);

export default CarouselSection;
       
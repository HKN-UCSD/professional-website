import React, { useState, useRef, useEffect } from 'react';
import './Acknowledgements.css';
import NavBar from '../../components/NavBar';
import CarouselCard from './CarouselCard';
import heroImage from '../../media/images/acknowledgements/acknowledgements_title.png';
import eceLogo from '../../media/images/acknowledgements/logos/ece_logo.png';
import digikeyLogo from '../../media/images/acknowledgements/logos/digi_key_logo.png';
import monsterLogo from '../../media/images/acknowledgements/logos/monster.png';
import qualcommLogo from '../../media/images/acknowledgements/logos/qualcomm.png';
import ngcLogo from '../../media/images/acknowledgements/logos/ngc_logo.png';
import morrisImage from '../../media/images/acknowledgements/portraits/morris.jpeg';
import rubinImage from '../../media/images/acknowledgements/portraits/rubin.jpg';
/**
 
 */

function Acknowledgements() {
    const slides = [
        { text: "Faculty", content: <div><CarouselCard img={morrisImage} title="Karcher Morris" content="Assistant Teaching Professor, Electrical and Computer Engineering" />
        <CarouselCard img={rubinImage} title="Noah Rubin" content="Assistant Professor, Electrical and Computer Engineering" /></div>},
        { text: "Organizations", content: <div><CarouselCard img={eceLogo} title="UCSD ECE Department" content="Supporting student innovation, technical excellence, and professional development within engineering." />
        <CarouselCard img={digikeyLogo} title="Digi-Key Electronics" content="Empowering engineers with components, tools, and resources for rapid prototyping and learning." />
        <CarouselCard img={qualcommLogo} title="Qualcomm" content="Driving innovation in wireless technologies and microcontroller development supporting future engineers through education initiatives." />
        <CarouselCard img={monsterLogo} title="Monster Energy" content="Fueling creativity, collaboration, and late-night builds." />
        <CarouselCard img={ngcLogo} title="Northrop Grumman" content="Words." /></div>}
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };
    
  return (
    <>
        <NavBar /> 
        <div className="min-h-screen" style={{ backgroundColor: '#071A2F', color: '#60A5FA' }}>
            <header className="relative h-screen w-full overflow-hidden">
                <div className="relative h-full w-full">
                    {/* Background Image */}
                    <div 
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ 
                            backgroundImage: `url(${heroImage})`,
                            filter: 'blur(0.5px)',
                            zIndex: 1
                        }}
                    />
                    {/* Overlay */}
                    <div 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ 
                        background: 'rgba(7, 26, 47, 0.7)',
                        zIndex: 2
                    }}
                    />
                    {/* Content */}
                    <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-11/12 max-w-6xl"
                    style={{ zIndex: 3 }}
                    >
                    <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white mb-6 break-words"
                        style={{
                            textShadow: `-1px -1px 0 #1E3A8A, 1px -1px 0 #1E3A8A, -1px 1px 0 #1E3A8A, 1px 1px 0 #1E3A8A, -1px 0 0 #1E3A8A, 1px 0 0 #1E3A8A, 0 -1px 0 #1E3A8A, 0 1px 0 #1E3A8A`,
                        }}>
                        Acknowledgements
                    </h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto pt-8 pb-16">
                <div className="container overflow-hidden">
                    <div className="container justify-center pointer-events-none">
                        <div className="grid grid-cols-3 grid-rows-1">
                            <button className="justify-self-end text-2xl pointer-events-auto" onClick={prevSlide}>《</button>
                            {slides.map((slide, index) => (
                                <h2
                                key={index}
                                className={`carousel-item text-xl md:text-3xl font-bold text-center mb-8 pt-8 col-start-2 row-start-1 ${index === currentIndex ? 'active' : ''}`}
                                >
                                {slide.text}
                                </h2>
                            ))}
                            <button className="justify-self-start text-2xl pointer-events-auto" onClick={nextSlide}>》</button>
                        </div>
                    </div>

                    <div className="container pointer-events-none">
                        <div className="grid grid-cols-1 grid-rows-1">
                            {slides.map((slide, index) => (
                                <div
                                key={index}
                                className={`carousel-item justify-center col-start-1 row-start-1 self-start mt-6 flex ${index === currentIndex ? 'active' : ''}`}
                                >
                                {slide.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
  );
}

export default Acknowledgements;
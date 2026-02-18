import React, { useState, useRef, useEffect } from 'react';
import './Acknowledgements.css';
import NavBar from '../../components/NavBar';
import CarouselCard from './CarouselCard';
import heroImage from '../../media/images/landing/socials.jpg';
//^ Placeholder image

/**
 
 */

function Acknowledgements() {
    const slides = [
        <CarouselCard img={heroImage} title="Card 1" content="This is the content for Card 1." />,
        <CarouselCard img={heroImage} title="Card 2" content="This is the content for Card 2." />,
        <div><CarouselCard img={heroImage} title="Card 3" content="This is the content for Card 3." />
        <CarouselCard img={heroImage} title="Card 4" content="This is the content for Card 4." /></div>,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
     if (slides.length > 1) {
       const interval = setInterval(() => {
         setCurrentIndex(
           (prevIndex) => (prevIndex + 1) % slides.length
         );
       }, 5000);
 
       return () => clearInterval(interval);
     }
   }, [slides.length]);
    
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
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-11/12 max-w-4xl"
                    style={{ zIndex: 3 }}
                    >
                    <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white mb-6"
                        style={{
                            textShadow: `-1px -1px 0 #1E3A8A, 1px -1px 0 #1E3A8A, -1px 1px 0 #1E3A8A, 1px 1px 0 #1E3A8A, -1px 0 0 #1E3A8A, 1px 0 0 #1E3A8A, 0 -1px 0 #1E3A8A, 0 1px 0 #1E3A8A`
                        }}>
                        Acknowledgements
                    </h1>
                    <p className="text-2xl md:text-3xl text-white"
                        style={{
                        textShadow: `-0.5px -0.5px 0 #1E3A8A, 0.5px -0.5px 0 #1E3A8A, -0.5px 0.5px 0 #1E3A8A, 0.5px 0.5px 0 #1E3A8A, -0.5px 0 0 #1E3A8A, 0.5px 0 0 #1E3A8A, 0 -0.5px 0 #1E3A8A, 0 0.5px 0 #1E3A8A`
                        }}>
                        Me when I words
                    </p>
                    </div>
                </div>
            </header>

            <main className="container mx-auto pt-8 pb-16">
                <div className="carousel-container overflow-hidden">
                    <div className="flex justify-between w-full h-full pointer-events-none">
                        <button className="pointer-events-auto" onClick={prevSlide}>《</button>
                        <h2 className="text-2xl font-bold text-center mb-8 pt-8">Wow I need to make this change too</h2>
                        <button className="pointer-events-auto" onClick={nextSlide}>》</button>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-1">
                        {slides.map((slide, index) => (
                            <div
                            key={index}
                            className={`carousel-item pointer-events-none flex items-center justify-center col-start-1 row-start-1 ${index === currentIndex ? 'active' : ''}`}
                            >
                            {slide}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    </>
  );
}

export default Acknowledgements;
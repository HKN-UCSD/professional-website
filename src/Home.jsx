import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import './Home.css';
import socialImg from './media/images/landing/socials.jpg';
import technicalImg from './media/images/landing/technical.jpg';
import professionalImg from './media/images/landing/professional.jpg'

function Home() {
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Dynamically import all images from the carousel directory
    const loadCarouselImages = async () => {
      try {
        // Use Vite's glob import to get all jpg files
        const imageModules = import.meta.glob('/src/media/images/landing/carousel/*.{jpg,jpeg,png,webp}', { 
          eager: true, 
          as: 'url' 
        });
        
        const imagePaths = Object.keys(imageModules).map(path => imageModules[path]);
        setCarouselImages(imagePaths);
      } catch (error) {
        console.log('No carousel images found, using fallback');
        setCarouselImages([]);
      }
    };

    loadCarouselImages();
  }, []);

  useEffect(() => {
    // Only start the carousel if there are images
    if (carouselImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % carouselImages.length
        );
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [carouselImages.length]);

  return (
    <>
    <NavBar />
    <div className="page-container">
      
      {/* Full-screen Carousel Header */}
      <header className="carousel-header">
        <div className="carousel-container">
          {carouselImages.length > 0 ? (
            carouselImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))
          ) : (
            <div className="carousel-slide active carousel-fallback" />
          )}
          <div className="carousel-overlay" />
          <div className="carousel-content">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight title">
              Eta Kappa Nu
            </h1>
            <p className="mt-6 text-3xl md:text-4xl subtitle">
              Engineering honors society at UCSD
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-10 pt-8 pb-16">
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-0.5 bg-blue-400"></div>
            <h2 className="text-4xl font-bold text-blue-400 mx-8">About Us</h2>
            <div className="flex-1 h-0.5 bg-blue-400"></div>
          </div>
          <div className="max-w-4xl text-center mx-auto">
            <p className="text-lg text-blue-200/90">
            Eta Kappa Nu (IEEE-HKN) is the official engineering honor society of IEEE, dedicated to 
            helping engineers become better engineers—both in and beyond the classroom. At UC San Diego, 
            the Kappa Psi chapter brings together top students in ECE, CSE, MAE, BENG, MATH-CS, COGS-ML, 
            and DSC who demonstrate academic excellence, leadership, and strong character. Through our social, 
            technical, professional, outreach, and project-based events, we empower members to grow as innovators, 
            collaborators, and leaders. HKN provides a community where engineers can connect, learn, and make a 
            lasting impact in their fields.
          </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mt-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-0.5 bg-blue-400"></div>
            <h2 className="text-4xl font-bold text-blue-400 mx-8">Events</h2>
            <div className="flex-1 h-0.5 bg-blue-400">
              
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
  onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}
  className="relative w-[22rem] h-[25rem] mx-auto cursor-pointer perspective"
>
  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d rounded-2xl">
    {/* Front Side */}
    <div className="absolute inset-0 flex flex-col items-center justify-start bg-slate-800 text-center rounded-2xl shadow-xl backface-hidden p-6">
      <h3 className="text-2xl font-bold text-blue-400 mb-4">Professional</h3>
      <div className="gradient-bar mx-auto mb-4" />
      <img
        src={professionalImg}
        alt="HKN Professional Event"
        className="w-[20rem] h-[30rem] object-cover rounded-md mb-4"
      />
    </div>

    {/* Back Side */}
    <div className="absolute inset-0 flex flex-col items-center justify-start bg-slate-800 text-white text-center rounded-2xl shadow-xl rotate-y-180 backface-hidden p-6">
      <h3 className="text-2xl font-bold text-blue-400 mb-4">Professional</h3>
      <div className="gradient-bar mx-auto mb-4" />
      <p className="text-blue-200/90">
        HKN’s professional workshops help you level up your career through engaging, hands-on events 
        like professor talks, DEAPTHS seminars, career fairs, networking events, and mock interview workshops. 
        Learn how to stand out with your resume, interview with confidence, and connect directly with industry 
        professionals and researchers who share real-world insights to help you reach your goals.
      </p>
    </div>
  </div>
</div>

            
                <div
                  onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}
                  className="relative w-[22rem] h-[25rem] mx-auto cursor-pointer perspective"
                >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d rounded-2xl">
                  {/* Front Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-start bg-slate-800 text-center rounded-2xl shadow-xl backface-hidden p-6">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Social</h3>
                    <div className="gradient-bar mx-auto mb-4" />                   
                    <img
                      src={socialImg}
                      alt="HKN Social Event"
                      className="w-[20rem] h-[25rem] object-cover rounded-md mb-4"
                    />
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-start bg-slate-800 text-white text-center rounded-2xl shadow-xl rotate-y-180 backface-hidden p-6">
    
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">Social</h3>

                        <div className="gradient-bar mx-auto mb-4" />

                        <p className="text-blue-200/90">
                            HKN socials bring engineers together to relax, connect, and have fun. From ice skating and boba socials to trivia 
                            nights, these events are the perfect mix of friendship and networking. Whether you’re meeting new people or 
                            unwinding after a long week, HKN socials create lasting memories and genuine connections with peers who share 
                            your passion for work and play.
                        </p>
                      
                </div>
                </div>
            </div>
            
            <div
  onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}
  className="relative w-[22rem] h-[25rem] mx-auto cursor-pointer perspective"
>
  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d rounded-2xl">
    {/* Front Side */}
    <div className="absolute inset-0 flex flex-col items-center justify-start bg-slate-800 text-center rounded-2xl shadow-xl backface-hidden p-6">
      <h3 className="text-2xl font-bold text-blue-400 mb-4">Technical</h3>
      <div className="gradient-bar mx-auto mb-4" />
      <img
        src={professionalImg}
        alt="HKN Technical Workshop"
        className="w-[20rem] h-[25rem] object-cover rounded-md mb-4"
      />
    </div>

    {/* Back Side */}
    <div className="absolute inset-0 flex flex-col items-center justify-start bg-slate-800 text-white text-center rounded-2xl shadow-xl rotate-y-180 backface-hidden p-6">
      <h3 className="text-2xl font-bold text-blue-400 mb-4">Technical</h3>
      <div className="gradient-bar mx-auto mb-4" />
      <p className="text-blue-200/90">
        HKN Technical Events offer hands-on workshops that teach you new skills from the ground up with 
        no prior experience needed. Whether you’re curious about computer vision, health sensors, or 3D 
        printing, our events are open to all majors and designed to help you explore new engineering fields. 
        Learn practical skills, build projects, and gain real experience in a supportive environment where 
        curiosity meets innovation.
      </p>
    </div>
  </div>
</div>

          </div>
          <div className="w-full h-0.5 bg-blue-400 mt-8"></div>
        </section>
          
      </main>

    </div>
    </>
  );
}

export default Home;
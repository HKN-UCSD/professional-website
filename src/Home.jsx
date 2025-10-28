import React from 'react';
import NavBar from './components/NavBar';
import './Home.css';

function Home() {
  return (
    <>
    <NavBar />
    <div className="page-container">
      
      <header className="header">
        <div className="container mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight title">
                Eta Kappa Nu
              </h1>
              <p className="mt-6 text-xl md:text-2xl subtitle">
                Engineering honors society at UCSD
              </p>

              <div className="mt-10 gradient-bar gradient-bar-md"></div>
            </div>

            <div className="md:justify-self-end">
              <img
                src="/src/media/images/group.jpg"
                alt="HKN group"
                className="image"
              />
            </div>
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
            <div className="flex-1 h-0.5 bg-blue-400"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Professional</h3>
              <div className="gradient-bar mx-auto mb-4"></div>
              <p className="text-blue-200/90">
                HKN’s professional workshops help you level up your career through engaging, hands-on events 
                like professor talks, DEAPTHS seminars, career fairs, networking events, and mock interview workshops. 
                Learn how to stand out with your resume, interview with confidence, and connect directly with industry 
                professionals and researchers who share real-world insights to help you reach your goals.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Social</h3>
              <div className="gradient-bar mx-auto mb-4"></div>
              <p className="text-blue-200/90">
                HKN socials bring engineers together to relax, connect, and have fun. From ice skating and boba 
                socials to trivia nights, these events are the perfect mix of friendship and networking. Whether 
                you’re meeting new people or unwinding after a long week, HKN socials create lasting memories and 
                genuine connections with peers who share your passion for both work and play.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Technical</h3>
              <div className="gradient-bar mx-auto mb-4"></div>
              <p className="text-blue-200/90">
                HKN Technical Events offer hands-on workshops that teach you new skills from the ground up with 
                no prior experience needed. Whether you’re curious about computer vision, health sensors, or 3D 
                printing, our events are open to all majors and designed to help you explore new engineering fields. 
                Learn practical skills, build projects, and gain real experience in a supportive environment where 
                curiosity meets innovation.
              </p>
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
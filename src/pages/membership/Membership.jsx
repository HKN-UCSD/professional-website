import React from 'react';
import NavBar from '../../components/NavBar';
import heroImage from '../../media/images/membership/group1.jpg';

function Membership() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen" style={{ backgroundColor: '#071A2F', color: '#60A5FA' }}>
        
        {/* Hero Section with Static Image */}
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
                Membership
              </h1>
              <p className="text-2xl md:text-3xl text-white"
                 style={{
                   textShadow: `-0.5px -0.5px 0 #1E3A8A, 0.5px -0.5px 0 #1E3A8A, -0.5px 0.5px 0 #1E3A8A, 0.5px 0.5px 0 #1E3A8A, -0.5px 0 0 #1E3A8A, 0.5px 0 0 #1E3A8A, 0 -0.5px 0 #1E3A8A, 0 0.5px 0 #1E3A8A`
                 }}>
                Become part of UCSD's premier engineering honor society
              </p>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 md:px-10 pt-8 pb-16">
          <section className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-0.5 bg-blue-400"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mx-8">Overview</h2>
              <div className="flex-1 h-0.5 bg-blue-400"></div>
            </div>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg text-blue-200/90 mb-6 text-left">
                To officially induct into Eta Kappa Nu (Kappa Psi) as a University Student, one must:
              </p>
              <ol className="text-lg text-blue-200/90 space-y-3 max-w-5xl pl-12">
                <li className="flex items-start text-left">
                  <span className="text-blue-400 font-bold mr-3 mt-0.5">1.</span>
                  <span>Receive an Email Invitation distinguishing student above the GPA Cutoff of Eligible Major (depending on GPA)</span>
                </li>
                <li className="flex items-start text-left">
                  <span className="text-blue-400 font-bold mr-3 mt-0.5">2.</span>
                  <span>Begin your induction process by attending an Info Session and filling the Induction Start form (information in Email Invitation).</span>
                </li>
                <li className="flex items-start text-left">
                  <span className="text-blue-400 font-bold mr-3 mt-0.5">3.</span>
                  <span>Accumulate 10 HKN points, following the guidelines listed on this page.</span>
                </li>
                <li className="flex items-start text-left">
                  <span className="text-blue-400 font-bold mr-3 mt-0.5">4.</span>
                  <span>Pass a ~45 minute long Formal Interview near the end of the induction cycle.</span>
                </li>
                <li className="flex items-start text-left">
                  <span className="text-blue-400 font-bold mr-3 mt-0.5">5.</span>
                  <span>Attend the mandatory HKN Induction Ceremony, and pay the one-time $110 membership fee.</span>
                </li>
              </ol>
              <p className="text-lg text-blue-200/90 mt-6 font-semibold text-center">
                Steps 1-4 of these must be completed by the Friday night prior to the HKN Induction Ceremony, in order for the student to be officially invited to participate in the HKN Induction Ceremony.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Excellence</h3>
                <div className="gradient-bar mx-auto mb-4" style={{
                  height: '0.25rem',
                  width: '9rem',
                  background: 'linear-gradient(to right, #3B82F6, #6366F1)',
                  borderRadius: '9999px'
                }}></div>
                <p className="text-blue-200/90">
                  Join a community of high-achieving students who are committed to academic excellence 
                  and professional growth in engineering and computer science.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Network</h3>
                <div className="gradient-bar mx-auto mb-4" style={{
                  height: '0.25rem',
                  width: '9rem',
                  background: 'linear-gradient(to right, #3B82F6, #6366F1)',
                  borderRadius: '9999px'
                }}></div>
                <p className="text-blue-200/90">
                  Build meaningful connections with peers, alumni, and industry professionals 
                  that will support your career throughout your engineering journey.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Growth</h3>
                <div className="gradient-bar mx-auto mb-4" style={{
                  height: '0.25rem',
                  width: '9rem',
                  background: 'linear-gradient(to right, #3B82F6, #6366F1)',
                  borderRadius: '9999px'
                }}></div>
                <p className="text-blue-200/90">
                  Develop leadership skills, gain hands-on experience, and participate in 
                  exclusive workshops and events designed to advance your technical abilities.
                </p>
              </div>
            </div>
            <div className="w-full h-0.5 bg-blue-400 mt-8"></div>
          </section>

          <section className="max-w-6xl mx-auto mt-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-0.5 bg-blue-400"></div>
              <h2 className="text-3xl font-bold text-blue-400 mx-8">How to Apply</h2>
              <div className="flex-1 h-0.5 bg-blue-400"></div>
            </div>
            <div className="max-w-4xl text-center mx-auto">
              <p className="text-lg text-blue-200/90">
                Membership applications open each quarter. Stay tuned for application details 
                and requirements. Visit our portal or contact us for more information about 
                the application process and upcoming recruitment events.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Membership;
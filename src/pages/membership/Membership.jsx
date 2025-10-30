import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import heroImage from '../../media/images/membership/group1.jpg';

function Membership() {
  const [activeTab, setActiveTab] = useState(null);
  const [disableAnimation, setDisableAnimation] = useState(false);

  const handleTabClick = (tabName) => {
    if (activeTab === tabName) {
      // If clicking the same tab, just close it
      setActiveTab(null);
    } else if (activeTab === null) {
      // If no tab is open, open the clicked tab immediately
      setActiveTab(tabName);
    } else {
      // If switching between tabs, disable animation and cut directly to new tab
      setDisableAnimation(true);
      setActiveTab(tabName);
      // Re-enable animation after a brief moment
      setTimeout(() => {
        setDisableAnimation(false);
      }, 50);
    }
  };
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

            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-0.5 bg-blue-400"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mx-8">Point Requirements</h2>
              <div className="flex-1 h-0.5 bg-blue-400"></div>
            </div>
            
            {/* Interactive Progress Bar */}
            <div className="flex w-full h-12 rounded-t-lg overflow-hidden shadow-lg">
              <div 
                className={`cursor-pointer transition-all duration-200 flex items-center justify-center text-white font-semibold ${activeTab !== 'general' ? 'hover:brightness-110' : ''} flex-1 sm:flex-[3]`}
                style={{ backgroundColor: '#033f63' }}
                onClick={() => handleTabClick('general')}
              >
                <span className="hidden sm:inline">General</span>
                <span className="sm:hidden">Gen.</span>
              </div>
              <div 
                className={`cursor-pointer transition-all duration-200 flex items-center justify-center text-white font-semibold ${activeTab !== 'professional' ? 'hover:brightness-110' : ''} flex-1 sm:flex-[1]`}
                style={{ backgroundColor: '#1a4f66' }}
                onClick={() => handleTabClick('professional')}
              >
                <span className="hidden sm:inline">Professional</span>
                <span className="sm:hidden">Prof.</span>
              </div>
              <div 
                className={`cursor-pointer transition-all duration-200 flex items-center justify-center text-white font-semibold ${activeTab !== 'technical' ? 'hover:brightness-110' : ''} flex-1 sm:flex-[1]`}
                style={{ backgroundColor: '#3a7078' }}
                onClick={() => handleTabClick('technical')}
              >
                <span className="hidden sm:inline">Technical</span>
                <span className="sm:hidden">Tech.</span>
              </div>
              <div 
                className={`cursor-pointer transition-all duration-200 flex items-center justify-center text-white font-semibold ${activeTab !== 'mentorship' ? 'hover:brightness-110' : ''} flex-1 sm:flex-[1]`}
                style={{ backgroundColor: '#7c9885' }}
                onClick={() => handleTabClick('mentorship')}
              >
                <span className="hidden sm:inline">Mentorship</span>
                <span className="sm:hidden">Ment.</span>
              </div>
              <div 
                className={`cursor-pointer transition-all duration-200 flex items-center justify-center text-gray-800 font-semibold ${activeTab !== 'social' ? 'hover:brightness-110' : ''} flex-1 sm:flex-[2]`}
                style={{ backgroundColor: '#b5b682' }}
                onClick={() => handleTabClick('social')}
              >
                <span className="hidden sm:inline">Social</span>
                <span className="sm:hidden">Social</span>
              </div>
              <div 
                className={`cursor-pointer transition-all duration-200 flex items-center justify-center text-gray-800 font-semibold ${activeTab !== 'outreach' ? 'hover:brightness-110' : ''} flex-1 sm:flex-[2]`}
                style={{ backgroundColor: '#fedc97' }}
                onClick={() => handleTabClick('outreach')}
              >
                <span className="hidden sm:inline">Outreach</span>
                <span className="sm:hidden">Outr.</span>
              </div>
            </div>
            
            {/* Single Expandable Content Section - Seamlessly connected */}
            <div className="relative">
              {/* General Tab Content */}
              <div className={`${!disableAnimation ? 'transition-all duration-300 ease-in-out' : ''} ${
                activeTab === 'general' ? 'max-h-40 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform translate-y-0'
              } overflow-hidden`}>
                <div className="rounded-b-lg p-6 border border-blue-400/20 border-t-0 shadow-lg" style={{ backgroundColor: '#033f63' }}>
                  <h3 className="text-2xl font-bold text-white mb-4">General (3)</h3>
                  <p className="text-white text-lg">
                    General Points can be fulfilled with an event of any category!
                  </p>
                </div>
              </div>

              {/* Professional Tab Content */}
              <div className={`${!disableAnimation ? 'transition-all duration-300 ease-in-out' : ''} ${
                activeTab === 'professional' ? 'max-h-40 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform translate-y-0'
              } overflow-hidden`}>
                <div className="rounded-b-lg p-6 border border-blue-400/20 border-t-0 shadow-lg" style={{ backgroundColor: '#1a4f66' }}>
                  <h3 className="text-2xl font-bold text-white mb-4">Professional Development Workshop (1)</h3>
                  <p className="text-white text-lg">
                    Example Professional Development Workshops include Resume Workshops, Interview Workshops, Elevator Pitch Workshops, and Problem Solving Sessions.
                  </p>
                </div>
              </div>

              {/* Technical Tab Content */}
              <div className={`${!disableAnimation ? 'transition-all duration-300 ease-in-out' : ''} ${
                activeTab === 'technical' ? 'max-h-40 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform translate-y-0'
              } overflow-hidden`}>
                <div className="rounded-b-lg p-6 border border-blue-400/20 border-t-0 shadow-lg" style={{ backgroundColor: '#3a7078' }}>
                  <h3 className="text-2xl font-bold text-white mb-4">Technical Event (1)</h3>
                  <p className="text-white text-lg">
                    Example Technical Events include hands-on workshops, intros to programming languages, and tech talks.
                  </p>
                </div>
              </div>

              {/* Mentorship Tab Content */}
              <div className={`${!disableAnimation ? 'transition-all duration-300 ease-in-out' : ''} ${
                activeTab === 'mentorship' ? 'max-h-52 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform translate-y-0'
              } overflow-hidden`}>
                <div className="rounded-b-lg p-6 border border-blue-400/20 border-t-0 shadow-lg" style={{ backgroundColor: '#7c9885' }}>
                  <h3 className="text-2xl font-bold text-white mb-4">Mentorship (1)</h3>
                  <p className="text-white text-lg mb-3">
                    Get to know a current HKN officer to discuss the student leader experience and ask for academic or professional advice.
                  </p>
                  <p className="text-white text-base">
                    Two chats are required to get this point (0.5 points each)
                  </p>
                </div>
              </div>

              {/* Social Tab Content */}
              <div className={`${!disableAnimation ? 'transition-all duration-300 ease-in-out' : ''} ${
                activeTab === 'social' ? 'max-h-40 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform translate-y-0'
              } overflow-hidden`}>
                <div className="rounded-b-lg p-6 border border-blue-400/20 border-t-0 shadow-lg" style={{ backgroundColor: '#b5b682' }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Social Events (2)</h3>
                  <p className="text-gray-800 text-lg">
                    Enjoy yourself with food/activities and meet current members, officers, and fellow inductees!
                  </p>
                </div>
              </div>

              {/* Outreach Tab Content */}
              <div className={`${!disableAnimation ? 'transition-all duration-300 ease-in-out' : ''} ${
                activeTab === 'outreach' ? 'max-h-80 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform translate-y-0'
              } overflow-hidden`}>
                <div className="rounded-b-lg p-6 border border-blue-400/20 border-t-0 shadow-lg" style={{ backgroundColor: '#fedc97' }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Outreach Event (2)</h3>
                  <p className="text-gray-800 text-lg mb-3">
                    Assist our Outreach team in either instructing K-12 students or helping out during our on campus Outreach events.
                  </p>
                  <p className="text-gray-800 text-base mb-2">
                    To participate in outreach events, you are required to attend one of the Outreach Skill Development Workshops (see calendar or ask VP Outreach)
                  </p>
                  <p className="text-gray-800 text-base">
                    If you cannot attend any of our outreach events but have completed all other induction requirements prior to the induction ceremony, you may attend a future induction ceremony after fulfilling the outreach requirement.
                  </p>
                </div>
              </div>
            </div>
            
          </section>

          <section className="max-w-6xl mx-auto mt-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-0.5 bg-blue-400"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mx-8">Interviews and Induction</h2>
              <div className="flex-1 h-0.5 bg-blue-400"></div>
            </div>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg text-blue-200/90 mb-6 text-left">
                The formal interview is a 40-45 minute interview. It is composed of two parts, the Behavioral portion and the Technical portion.
              </p>
              <ul className="text-lg text-blue-200/90 space-y-4 max-w-5xl pl-8 mb-8">
                <li className="flex items-start text-left">
                  <span className="text-blue-400 font-bold mr-3 mt-1">•</span>
                  <span>For the behavioral portion, be prepared to conduct yourself professionally (attire counts!) and answer some questions. Your resume will be required.</span>
                </li>
                <li className="flex items-start text-left">
                  <span className="text-blue-400 font-bold mr-3 mt-1">•</span>
                  <span>For the technical portion, we test on material up through what is expected to be completed by Fall quarter of the inductee's second year. Refer to your sample four-year plan to view the minimum coursework we expect.</span>
                </li>
              </ul>
              <p className="text-lg text-blue-200/90 mb-6 text-left">
                The HKN (Kappa Psi) Induction Ceremony is a ceremony declaring and celebrating your membership into Eta Kappa Nu, held during one evening at the UC San Diego Campus. This ceremony is mandatory to officially induct into HKN.
              </p>
              <p className="text-lg text-blue-200/90 font-semibold text-center bg-blue-900/20 rounded-lg p-4 border border-blue-400/20">
                A one-time membership fee of $110 is required to induct into HKN Kappa Psi. This fee must be paid by the night of the Induction Ceremony, and covers the costs of the ceremony, HKN and IEEE membership, and T-shirt.
              </p>
            </div>
            <div className="w-full h-0.5 bg-blue-400"></div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Membership;
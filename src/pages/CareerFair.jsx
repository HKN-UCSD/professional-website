import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import './CareerFair.css';
import hcfBanner from '../media/images/hcf/hcf-banner-backgroundless.png';
import hcfBackground from '../media/images/hcf/hcf-background.png';
import hknLogo from '../media/images/hcf/hkn-logo.png';
import tbpLogo from '../media/images/hcf/tbp-logo.png';
import scholarsLogo from '../media/images/hcf/scholars-logo.png';
import llnlLogo from '../media/images/hcf/llnl-logo.png';
import viasatLogo from '../media/images/hcf/viasat-logo.png';
import interlinkLogo from '../media/images/hcf/interlink-logo.webp';
import arkusLogo from '../media/images/hcf/arkus-logo.webp';

function CareerFair() {
  useEffect(() => {
    // Typewriter effect for about text on scroll
    const aboutText = document.querySelector('.about-text');
    
    if (!aboutText) return;
    
    // Store original text and create flag to prevent re-triggering
    const originalText = aboutText.textContent;
    let hasTriggered = false;
    
    // Create intersection observer for about text
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true; // Set flag to prevent re-triggering
          startTypewriter(entry.target, originalText);
          aboutObserver.unobserve(entry.target); // Stop observing after first trigger
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of element is visible
    });
    
    // Start observing the about text
    aboutObserver.observe(aboutText);
    
    // Organization logos twinkling (starts immediately)
    const orgLogos = document.querySelectorAll('.logo');
    orgLogos.forEach((logo, index) => {
      setTimeout(() => {
        logo.classList.add('idle');
      }, 500 + (index * 200)); // Staggered start for organization logos
    });
    
    // Sponsor logos - just add idle twinkling immediately 
    const sponsorLogos = document.querySelectorAll('.sponsor-logo');
    const featuredLogo = document.querySelector('.featured-sponsor-logo');
    
    // Add idle twinkling to all sponsor logos immediately
    sponsorLogos.forEach((logo, index) => {
      setTimeout(() => {
        logo.classList.add('idle');
      }, 500 + (index * 100)); // Small staggered delay for twinkling start
    });
    
    if (featuredLogo) {
      setTimeout(() => {
        featuredLogo.classList.add('idle');
      }, 300); // Featured logo starts twinkling slightly earlier
    }

    // FAQ cards animation
    const faqObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = document.querySelectorAll('.faq-card');
          
          // Animate FAQ cards with staggered delay
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate');
            }, index * 150); // 150ms delay between each card
          });
          
          // Unobserve after animation triggers
          faqObserver.disconnect();
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element fully enters viewport
    });
    
    // Observe FAQ section
    const faqSection = document.querySelector('#faq-page');
    if (faqSection) {
      faqObserver.observe(faqSection);
    }
    
    function startTypewriter(element, text) {
      // Split text into words and identify the last few impactful words
      const words = text.split(' ');
      const wordsToType = 6; // Number of words to animate
      const staticWords = words.slice(0, -wordsToType).join(' ');
      const animatedWords = words.slice(-wordsToType).join(' ');
      
      // Set up the static text immediately
      element.innerHTML = staticWords + ' <span class="typewriter-text"></span>';
      const typewriterSpan = element.querySelector('.typewriter-text');
      
      element.classList.add('typing');
      
      // Type out only the last few words character by character
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < animatedWords.length) {
          typewriterSpan.textContent += animatedWords.charAt(i);
          i++;
        } else {
          // Animation complete
          clearInterval(typeInterval);
          element.classList.remove('typing');
          element.classList.add('typing-complete');
          // Replace with normal text
          element.textContent = text;
        }
      }, 10); // 10ms per character for very fast typing
    }
    
    // Cleanup function
    return () => {
      aboutObserver.disconnect();
    };
  }, []);

  return (
    <div className="career-fair-container">
      <div className="transparent-nav">
        <NavBar />
      </div>
      
      <div id="cover-page" className="content-section">
        <div id="cover-flex">
          <div>
            <div className="banner-container">
              <img
                className="center banner-image"
                src={hcfBanner}
                alt="HCF Banner"
              />
              <p id="eventdate" className="event-info">
                November 10th, 2024, 1-5pm
              </p>
              <p id="eventlocation" className="event-info">
                Qualcomm Room, Jacobs Hall
              </p>
            </div>
          </div>
        </div>
        <a
          id="apply-link"
          href="https://forms.gle/JQUWEiCAMw28Bu8m6"
          className="rsvp-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button big-button center main-font">
            RSVP Now
          </button>
        </a>
      </div>

      <div id="about-page" className="content-section boxed-section">
        <p className="section-header">About</p>
        <hr className="section-divider" />
        <p className="about-text">
          The Honors Career Fair (HCF) at UC San Diego is an annual, student-organized event for top honors engineering students with high GPAs and excellent academic records. This event is hosted by Eta Kappa Nu (HKN), inviting members of Tau Beta Pi, and UCSD Scholar's Society. This exclusive career fair allows recruiters to connect with a select group of high-achieving students in an intimate setting.
        </p>
        <div className="logo-container">
          <img
            src={scholarsLogo}
            className="logo logo-base"
            alt="Scholars Logo"
          />
          <img
            src={hknLogo}
            className="logo logo-base"
            alt="HKN Logo"
          />
          <img
            src={tbpLogo}
            className="logo logo-base"
            alt="TBP Logo"
          />
        </div>
      </div>

      {/* Sponsors Section */}
      <div id="sponsors" className="content-section boxed-section">
        <div className="sponsor-section">
          <p className="section-header">Sponsors</p>
          <hr className="section-divider" />
          
          {/* Featured Money Sponsor */}
          <div className="featured-sponsor">
            <img
              src={viasatLogo}
              className="featured-sponsor-logo logo-base"
              alt="Viasat Logo"
            />
          </div>
          
          {/* Other Sponsors */}
          <div className="sponsor-grid">
            <img
              src={llnlLogo}
              className="sponsor-logo logo-base"
              alt="Lawrence Livermore National Laboratory Logo"
            />
            <img
              src={interlinkLogo}
              className="sponsor-logo logo-base"
              alt="Interlink Logo"
            />
            <img
              src={arkusLogo}
              className="sponsor-logo logo-base"
              alt="Arkus Logo"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq-page" className="content-section boxed-section">
        <p className="section-header">FAQ</p>
        <hr className="section-divider" />
        <div className="faq-grid">
          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>Why should I attend HCF?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>HCF gives honors students a private space to connect with companies, increasing their visibility in the job market. Recruiters also recognize their honors status, adding credibility to attendees.</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>Do I have to stay for the entire event?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>No! Since the event will run from 1 to 5pm, you can join in at any time to participate in the event.</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>Which companies will be attending?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>This year the companies attending include: Lawrence Livermore National Laboratory (LLNL), Viasat, Interlink, and Arkus.</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>What is the dress code?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>This is a business-casual event, so make sure to dress as you would to an interview.</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>What should I bring?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>Make sure to bring multiple hard copies of your resume to hand out to company representatives.</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>I have a question, who do I contact?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>Contact Nian Nian Wang at <a href="mailto:niw002@ucsd.edu">niw002@ucsd.edu</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerFair;
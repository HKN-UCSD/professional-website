import React from 'react';
import NavBar from '../components/NavBar';

function Sponsor() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <header className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Become a Sponsor</h1>
          <p className="text-xl">
            Partner with HKN to connect with exceptional engineering talent
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {/* Add sponsor content here */}
      </main>
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          {/* Add contact information here */}
        </div>
      </footer>
    </div>
  );
}

export default Sponsor;
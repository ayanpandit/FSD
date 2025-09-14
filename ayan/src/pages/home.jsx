import React, { useState } from 'react';

// Import all images
import logo from '../assets/sample.png';
import heroMountain from '../assets/sample.jpg';
import heroBeach from '../assets/sample.jpg';
import calendarIcon from '../assets/sample.png';
import planeIcon from '../assets/sample.png';
import calendarWhite from '../assets/sample.png';
import globeIcon from '../assets/sample.png';
import peopleIcon from '../assets/sample.png';
import houseIcon from '../assets/sample.png';
import userTaylor from '../assets/sample.jpg';
import planeWhite from '../assets/sample.png';
import mountainsOutline from '../assets/sample.png';
import joinBackground from '../assets/sample.jpg';
import emailIcon from '../assets/sample.png';
import linkedinIcon from '../assets/sample.png';
import twitterIcon from '../assets/sample.png';
import instagramIcon from '../assets/sample.png';
import youtubeIcon from '../assets/sample.png';

const Home = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-300 via-teal-400 to-cyan-300 relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
        <div className="grid grid-cols-10 gap-2 p-6">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-8 relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="Sync & Explore" className="h-12 w-auto" />
        </div>
        <div className="bg-teal-600 rounded-full px-3 py-3">
          <div className="flex items-center space-x-2">
            <button className="text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-colors text-sm font-medium">
              Home
            </button>
            <button className="text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-colors text-sm font-medium">
              Features
            </button>
            <button className="text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-colors text-sm font-medium">
              Testimonials
            </button>
            <button className="text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-colors text-sm font-medium">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden min-h-[500px]">
            {/* Decorative dots */}
            <div className="absolute top-6 right-6 opacity-5">
              <div className="grid grid-cols-8 gap-1.5">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center h-full">
              <div className="lg:w-1/2 lg:pr-12 flex flex-col justify-center">
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                  We Sync, AI Plans.
                  <br />
                  You Explore
                </h1>
                <p className="text-gray-600 text-xl mb-10 leading-relaxed max-w-lg">
                  AI-powered travel buddy matching and itinerary planning — so you travel smart, not hard.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-full font-medium transition-colors text-lg">
                    Join waitlist
                  </button>
                  <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-10 py-4 rounded-full font-medium transition-colors text-lg">
                    See how it works
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center items-center">
                <div className="relative w-full max-w-lg">
                  {/* Main hero image */}
                  <div className="relative z-20">
                    <img 
                      src={heroMountain}
                      alt="Mountain landscape" 
                      className="w-96 h-64 object-cover rounded-3xl shadow-2xl"
                    />
                  </div>
                  
                  {/* Overlapping second image */}
                  <div className="absolute -bottom-6 -right-6 z-10">
                    <img 
                      src={heroBeach}
                      alt="Beach coastline" 
                      className="w-80 h-52 object-cover rounded-3xl shadow-2xl"
                    />
                  </div>
                  
                  {/* Calendar icon */}
                  <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-30">
                    <div className="bg-white p-5 rounded-full shadow-xl border-4 border-teal-200">
                      <img src={calendarIcon} alt="Calendar" className="w-10 h-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sync & Explore Section */}
      <section className="px-8 py-20 relative">
        {/* Decorative plane */}
        <div className="absolute top-12 left-1/4 z-0">
          <img src={planeIcon} alt="Plane" className="w-10 h-10 opacity-30" />
          <div className="ml-6 mt-2 border-t-2 border-dotted border-teal-800 w-40 opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-20">
            Why Sync & Explore?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-teal-600 rounded-3xl p-10 text-white text-center min-h-[200px] flex flex-col justify-center">
              <div className="mb-6">
                <img src={calendarWhite} alt="Calendar" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="font-bold text-xl">Sync<br />Travel Dates</h3>
            </div>
            
            <div className="bg-teal-600 rounded-3xl p-10 text-white text-center min-h-[200px] flex flex-col justify-center">
              <div className="mb-6">
                <img src={globeIcon} alt="Globe" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="font-bold text-xl">Explore<br />Destinations</h3>
            </div>
            
            <div className="bg-teal-600 rounded-3xl p-10 text-white text-center min-h-[200px] flex flex-col justify-center">
              <div className="mb-6">
                <img src={peopleIcon} alt="People" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="font-bold text-xl">Find Travel<br />Buddies</h3>
            </div>
            
            <div className="bg-teal-600 rounded-3xl p-10 text-white text-center min-h-[200px] flex flex-col justify-center">
              <div className="mb-6">
                <img src={houseIcon} alt="House" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="font-bold text-xl">Affordable<br />Stays</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-20">
            What Our Early Users Say?
          </h2>
          
          <div className="bg-white rounded-3xl p-12 shadow-2xl relative min-h-[300px]">
            <div className="flex items-center justify-between h-full">
              <button className="p-4 rounded-full border-2 border-gray-200 hover:bg-gray-50 transition-colors flex-shrink-0">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex-1 max-w-4xl mx-12">
                <div className="flex items-center mb-8">
                  <img 
                    src={userTaylor}
                    alt="Taylor" 
                    className="w-24 h-24 rounded-full object-cover mr-8 flex-shrink-0"
                  />
                  <div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-bold text-2xl text-gray-900">Taylor</h4>
                  </div>
                </div>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Our experience with Sync & Explore has been exceptional. The platform's ability to seamlessly connect travelers and plan AI-powered itineraries made trip planning effortless. This smart and innovative approach brought exceptional value to our travel journey, making exploration more exciting and stress-free.
                </p>
              </div>
              
              <button className="p-4 rounded-full border-2 border-gray-200 hover:bg-gray-50 transition-colors flex-shrink-0">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Waitlist Section */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl min-h-[600px]">
            <div className="lg:w-1/2 bg-gradient-to-br from-teal-600 to-teal-700 p-16 relative flex flex-col justify-center">
              {/* Decorative plane */}
              <div className="absolute top-12 right-12">
                <img src={planeWhite} alt="Plane" className="w-10 h-10 opacity-40" />
                <div className="mr-6 mt-2 border-t-2 border-dotted border-white w-32 opacity-40"></div>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Be Part of the Future of Travel
              </h2>
              <p className="text-teal-100 text-xl mb-12 leading-relaxed">
                Get early access to exclusive AI-powered features.
              </p>
              
              {/* Mountain illustration */}
              <div className="mt-auto">
                <img src={mountainsOutline} alt="Mountains" className="w-60 h-40 opacity-30 mb-6" />
                <div className="text-center">
                  <span className="text-white font-bold text-xl">Sync & Explore</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <img 
                src={joinBackground}
                alt="Travel background" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="relative z-10 p-16 h-full flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-white mb-12 text-center">
                  Join Waitlist
                </h3>
                <div className="space-y-6 max-w-md mx-auto w-full">
                  <input
                    type="email"
                    placeholder="Your Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-8 py-4 rounded-full border-2 border-gray-300 focus:border-teal-500 focus:outline-none text-gray-900 text-lg"
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-8 py-4 rounded-full border-2 border-gray-300 focus:border-teal-500 focus:outline-none text-gray-900 text-lg"
                  />
                  <button className="w-full bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium transition-colors text-lg">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-600 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex space-x-10 mb-6 md:mb-0">
              <a href="#" className="text-white hover:text-teal-200 transition-colors text-lg font-medium">Service</a>
              <a href="#" className="text-white hover:text-teal-200 transition-colors text-lg font-medium">Support</a>
              <a href="#" className="text-white hover:text-teal-200 transition-colors text-lg font-medium">Company</a>
              <a href="#" className="text-white hover:text-teal-200 transition-colors text-lg font-medium">Legal</a>
              <a href="#" className="text-white hover:text-teal-200 transition-colors text-lg font-medium">Join Us</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="bg-teal-700 p-3 rounded-lg hover:bg-teal-800 transition-colors">
                <img src={emailIcon} alt="Email" className="w-6 h-6" />
              </a>
              <a href="#" className="bg-teal-700 p-3 rounded-lg hover:bg-teal-800 transition-colors">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="bg-teal-700 p-3 rounded-lg hover:bg-teal-800 transition-colors">
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="bg-teal-700 p-3 rounded-lg hover:bg-teal-800 transition-colors">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="bg-teal-700 p-3 rounded-lg hover:bg-teal-800 transition-colors">
                <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="text-center text-teal-200 text-base border-t border-teal-500 pt-8">
            Copyright © Sync&Explore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
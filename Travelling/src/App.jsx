import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const travelTips = [
    {
      title: "Planning Your Trip",
      items: [
        "Research Destinations: Look into different places you want to visit, their attractions, and what makes them unique.",
        "Budget: Set a budget for your trip, including flights, accommodation, food, and activities.",
        "Travel Dates: Choose the best time to visit based on weather, crowds, and prices.",
        "Travel Documents: Ensure you have a valid passport, visa (if required), and travel insurance."
      ]
    },
    {
      title: "Packing Essentials",
      items: [
        "Clothing: Pack versatile clothing that can be mixed and matched.",
        "Toiletries: Travel-sized toiletries, medications, and personal care items.",
        "Electronics: Phone, charger, adapter, and other devices.",
        "Travel Accessories: Passport holder, reusable water bottle, travel pillow."
      ]
    },
    {
      title: "Accommodation Options",
      items: [
        "Hotels: Book in advance for better prices and availability.",
        "Hostels: Great for budget travelers with social atmospheres.",
        "Airbnb/Vacation Rentals: Enjoy the comfort of home while traveling.",
        "Resorts: Perfect for relaxation and luxury experiences.",
        "Camping: For an adventurous and budget-friendly option.",
        "Homestays: Stay with locals to experience authentic culture."
      ]
    },
    {
      title: "Transportation",
      items: [
        "Flights: Book tickets early for the best deals.",
        "Trains: Scenic and comfortable, especially for long distances.",
        "Buses: Affordable and convenient for short trips.",
        "Taxis/Ride-Sharing: Useful for getting around in new places.",
        "Rental Cars: Great for flexibility, but be aware of local driving rules."
      ]
    },
    {
      title: "Activities and Attractions",
      items: [
        "Sightseeing: Visit famous landmarks and historical sites.",
        "Museums and Galleries: Explore art and culture.",
        "Outdoor Activities: Hiking, cycling, snorkeling, or skiing.",
        "Local Cuisine: Try traditional foods and street food.",
        "Nightlife: Enjoy bars, clubs, and live music."
      ]
    }
  ];

  const popularDestinations = [
    { name: "Paris, France", description: "City of Lights, famous for the Eiffel Tower and Louvre Museum", imgColor: "#4A90E2" },
    { name: "Tokyo, Japan", description: "A blend of traditional culture and cutting-edge technology", imgColor: "#FF6B6B" },
    { name: "Bali, Indonesia", description: "Tropical paradise with beautiful beaches and temples", imgColor: "#45B7D1" },
    { name: "New York, USA", description: "The city that never sleeps with iconic skyscrapers", imgColor: "#96CEB4" },
    { name: "Mount Kenya, Kenya", description: "Stunning natural scenery with Snow Mountain", imgColor: "#FECA57" },
    { name: "Sydney, Australia", description: "Harbor city with the iconic Opera House", imgColor: "#FF9FF3" }
  ];

  return (
    <div className="app">
      
      <header className="header">
        <div className="container">
          <h1 className="logo">🌍 Travel Explorer</h1>
          <nav className="nav">
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${activeSection === 'tips' ? 'active' : ''}`}
              onClick={() => setActiveSection('tips')}
            >
              Travel Tips
            </button>
            <button 
              className={`nav-link ${activeSection === 'destinations' ? 'active' : ''}`}
              onClick={() => setActiveSection('destinations')}
            >
              Destinations
            </button>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              About
            </button>
          </nav>
        </div>
      </header>

      
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">Discover the World</h2>
            <p className="hero-subtitle">
              Traveling is a great way to explore new places, cultures, and experiences. 
              Whether you're looking for adventure, relaxation, or a mix of both, there are endless destinations to choose from.
            </p>
            <button className="cta-button" onClick={() => setActiveSection('tips')}>
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          
          {activeSection === 'tips' || activeSection === 'home' ? (
            <section className="travel-tips">
              <h2 className="section-title">Travel Tips & Guides</h2>
              <p className="section-description">
                Here are some tips to make the most of your travels:
              </p>
              
              <div className="tips-grid">
                {travelTips.map((tip, index) => (
                  <div className="tip-card" key={index}>
                    <div className="tip-card-header">
                      <h3>{tip.title}</h3>
                    </div>
                    <div className="tip-card-body">
                      <ul>
                        {tip.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          
          {activeSection = 'destinations' || activeSection == 'home' ? (
            <section className="destinations">
              <h2 className="section-title">Popular Destinations</h2>
              <p className="section-description">
                Explore these amazing places around the world
              </p>
              
              <div className="destinations-grid">
                {popularDestinations.map((destination, index) => (
                  <div className="destination-card" key={index}>
                    <div 
                      className="destination-image" 
                      style={{ backgroundColor: destination.imgColor }}
                    >
                      <div className="destination-overlay">
                        <span className="destination-icon">📍</span>
                      </div>
                    </div>
                    <div className="destination-info">
                      <h3>{destination.name}</h3>
                      <p>{destination.description}</p>
                      <button className="destination-button">Learn More</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          
          {activeSection === 'about' ? (
            <section className="about">
              <h2 className="section-title">About Traveling</h2>
              <div className="about-content">
                <div className="about-text">
                  <p>
                    Traveling opens up a world of possibilities. It allows us to break out of our daily routines, 
                    experience new cultures, taste different cuisines, and meet people from all walks of life.
                  </p>
                  <p>
                    Whether you're an adventurous backpacker, a luxury seeker, or a cultural explorer, 
                    traveling has something to offer everyone. The memories created during travels often 
                    become the most cherished moments of our lives.
                  </p>
                  <h3>Why Travel?</h3>
                  <ul>
                    <li>Broaden your perspective and understanding of the world</li>
                    <li>Create unforgettable memories with loved ones</li>
                    <li>Learn about different cultures and histories</li>
                    <li>Take a break from the daily grind and rejuvenate</li>
                    <li>Challenge yourself and step out of your comfort zone</li>
                  </ul>
                </div>
                <div className="about-stats">
                  <div className="stat-card">
                    <h4>195</h4>
                    <p>Countries to Explore</p>
                  </div>
                  <div className="stat-card">
                    <h4>7,000+</h4>
                    <p>Languages Spoken</p>
                  </div>
                  <div className="stat-card">
                    <h4>∞</h4>
                    <p>Experiences Awaiting</p>
                  </div>
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </main>

      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Travel Explorer</h3>
              <p>Your guide to exploring the world, one destination at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => setActiveSection('home')}>Home</button></li>
                <li><button onClick={() => setActiveSection('tips')}>Travel Tips</button></li>
                <li><button onClick={() => setActiveSection('destinations')}>Destinations</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>kevinmwas007@gmail.com</p>
              <p>+2540703752254</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
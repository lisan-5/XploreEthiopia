import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Calendar, DollarSign, Users, Shield, Award, Heart, Globe, Camera, Coffee } from 'lucide-react';

function Home() {
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeSuccess(true);
    setTimeout(() => setSubscribeSuccess(false), 3000);
  };

  const featuredTours = [
    {
      title: "Lalibela Rock Churches",
      image: "https://images.unsplash.com/photo-1635326444005-76055acaa8b8?auto=format&fit=crop&w=1000&q=80",
      duration: "4 Days",
      price: "ETB 1,288",
      description: "Explore the magnificent rock-hewn churches of Lalibela, a UNESCO World Heritage site and spiritual center of Ethiopian Orthodox Christianity."
    },
    {
      title: "Simien Mountains Trek",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603a9eda?auto=format&fit=crop&w=1000&q=80",
      duration: "6 Days",
      price: "ETB 1,788",
      description: "Trek through the breathtaking Simien Mountains, home to endemic wildlife and stunning landscapes that will leave you in awe."
    },
    {
      title: "Omo Valley Cultural Tour",
      image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1000&q=80",
      duration: "7 Days",
      price: "ETB 1,988",
      description: "Immerse yourself in the rich cultural heritage of Ethiopia's indigenous tribes in the fascinating Omo Valley."
    }
  ];

  const experiences = [
    {
      icon: <Globe className="w-16 h-16 text-primary-500" />,
      title: "Cultural Immersion",
      description: "Experience authentic Ethiopian traditions, ceremonies, and ways of life."
    },
    {
      icon: <Camera className="w-16 h-16 text-primary-500" />,
      title: "Photography Paradise",
      description: "Capture stunning landscapes and cultural moments in Africa's most diverse country."
    },
    {
      icon: <Coffee className="w-16 h-16 text-primary-500" />,
      title: "Coffee Origins",
      description: "Discover the birthplace of coffee and participate in traditional ceremonies."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1635326446432-c9e4eab5e1bd?auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display animate-fade-in">
              Discover Ethiopia's Ancient Wonders
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
              Journey through 3,000 years of history, culture, and natural beauty
            </p>
            <Link
              to="/tours"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 animate-scale-in"
            >
              Start Your Adventure
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-display">
              Unforgettable Experiences
            </h2>
            <p className="text-xl text-secondary-600">
              Create memories that will last a lifetime
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-secondary-50 hover:bg-secondary-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">{exp.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{exp.title}</h3>
                <p className="text-secondary-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-display">
              Popular Tours
            </h2>
            <p className="text-xl text-secondary-600">
              Expertly crafted itineraries for unforgettable adventures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full">
                    {tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{tour.title}</h3>
                  <p className="text-secondary-600 mb-4">{tour.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-secondary-500">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                  <Link
                    to="/payment"
                    className="block text-center bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">
              Stay Updated with Ethiopian Adventures
            </h2>
            <p className="text-xl text-primary-100">
              Subscribe to receive exclusive travel tips, special offers, and cultural insights
            </p>
          </div>
          {subscribeSuccess ? (
            <div className="max-w-md mx-auto bg-green-500 text-white p-6 rounded-xl text-center text-lg">
              Successfully subscribed to the newsletter!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer Copyright */}
      <div className="bg-secondary-900 text-center py-4">
        <a 
          href="mailto:lisan5abay@gmail.com"
          className="text-secondary-400 hover:text-white transition-colors duration-300"
        >
          ©2025 Lisanegebriel Abay Kebedew
        </a>
        <span className="text-secondary-400"> • All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Home;
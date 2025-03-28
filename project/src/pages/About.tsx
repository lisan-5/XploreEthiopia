import React from 'react';
import { Globe, Heart, Users, Star } from 'lucide-react';

function About() {
  const values = [
    {
      icon: <Globe className="w-12 h-12 text-primary-600" />,
      title: "Authentic Experiences",
      description: "We craft genuine Ethiopian experiences that go beyond typical tourism, connecting you with the heart of our culture."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-600" />,
      title: "Passionate Service",
      description: "Our dedicated team brings unmatched enthusiasm and deep local knowledge to every journey we create."
    },
    {
      icon: <Users className="w-12 h-12 text-primary-600" />,
      title: "Community Impact",
      description: "We actively engage with local communities, ensuring tourism benefits both visitors and residents."
    },
    {
      icon: <Star className="w-12 h-12 text-primary-600" />,
      title: "Excellence",
      description: "We maintain the highest standards in service, safety, and sustainability across all our operations."
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-display">
            Discover Ethiopia with Us
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Your trusted partner in exploring the ancient wonders and vibrant culture of Ethiopia
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary-800 mb-6 font-display">Our Story</h2>
            <p className="text-lg text-secondary-600 mb-6">
              Founded with a passion for sharing Ethiopia's rich heritage, XploreEthi🔍pia has grown from a dream into the country's leading adventure tourism company. Our journey began with a simple mission: to showcase the authentic beauty, culture, and warmth of Ethiopia to the world.
            </p>
            <p className="text-lg text-secondary-600 mb-6">
              With over a decade of experience, we've crafted thousands of memorable journeys, combining our deep local knowledge with world-class service standards. Our team of expert guides and travel specialists work tirelessly to create experiences that go beyond typical tourism, offering genuine connections with Ethiopia's diverse cultures and landscapes.
            </p>
            <p className="text-lg text-secondary-600">
              Today, we continue to innovate and expand our offerings while maintaining our commitment to sustainable tourism and community development. Every journey with us supports local communities and helps preserve Ethiopia's unique cultural heritage for future generations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">{value.title}</h3>
              <p className="text-secondary-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-secondary-600">
          <p>©2025 Lisanegebriel Abay Kebedew. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default About;
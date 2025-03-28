import React from 'react';
import { MapPin, Sun, Cloud, ThermometerSun } from 'lucide-react';

function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Lalibela",
      image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Home to 11 medieval monolithic cave churches, this UNESCO World Heritage site represents the epitome of Ethiopian Orthodox Christian architecture.",
      bestTime: "October to May",
      climate: "Temperate highland",
      altitude: "2,500m",
      highlights: [
        "Rock-hewn churches",
        "Ethiopian Orthodox ceremonies",
        "Traditional village life",
        "Mountain hiking",
        "Local markets"
      ]
    },
    {
      id: 2,
      name: "Axum",
      image: "https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Ancient capital of the Axumite Empire, featuring remarkable obelisks and archaeological treasures that tell the story of Ethiopia's ancient civilization.",
      bestTime: "October to March",
      climate: "Semi-arid",
      altitude: "2,131m",
      highlights: [
        "Obelisks of Axum",
        "Church of St. Mary of Zion",
        "Queen of Sheba's Palace",
        "Archaeological Museum",
        "Ancient tombs"
      ]
    },
    {
      id: 3,
      name: "Simien Mountains",
      image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Dramatic mountain landscape and home to endemic wildlife including the Gelada baboon, Walia ibex, and Ethiopian wolf.",
      bestTime: "October to April",
      climate: "Alpine",
      altitude: "4,550m",
      highlights: [
        "Trek to Ras Dashen",
        "Wildlife viewing",
        "Spectacular viewpoints",
        "Indigenous flora",
        "Traditional villages"
      ]
    },
    {
      id: 4,
      name: "Harar",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "UNESCO World Heritage site known for its ancient walled city, vibrant Islamic culture, and unique tradition of feeding wild hyenas.",
      bestTime: "November to February",
      climate: "Semi-arid",
      altitude: "1,885m",
      highlights: [
        "Old Town walls",
        "Traditional houses",
        "Hyena feeding",
        "Coffee ceremonies",
        "Local markets"
      ]
    },
    {
      id: 5,
      name: "Omo Valley",
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "A living museum of tribal cultures, where ancient traditions and ways of life continue unchanged for centuries.",
      bestTime: "September to April",
      climate: "Semi-arid",
      altitude: "1,000m",
      highlights: [
        "Tribal villages",
        "Cultural ceremonies",
        "Traditional markets",
        "Body art",
        "River landscapes"
      ]
    },
    {
      id: 6,
      name: "Danakil Depression",
      image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "One of Earth's most extreme environments, featuring colorful mineral formations, salt flats, and active volcanoes.",
      bestTime: "November to March",
      climate: "Desert",
      altitude: "-125m",
      highlights: [
        "Sulfur springs",
        "Salt mining",
        "Volcanic activity",
        "Desert camping",
        "Unique landscapes"
      ]
    },
    {
      id: 7,
      name: "Gondar",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "The 'Camelot of Africa', featuring medieval castles and elaborate churches from Ethiopia's imperial past.",
      bestTime: "October to March",
      climate: "Temperate",
      altitude: "2,200m",
      highlights: [
        "Royal Enclosure",
        "Debre Berhan Selassie Church",
        "Timkat Festival",
        "Historical baths",
        "Local cuisine"
      ]
    },
    {
      id: 8,
      name: "Bale Mountains",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "A biodiversity hotspot home to numerous endemic species including the Ethiopian Wolf and Mountain Nyala.",
      bestTime: "November to April",
      climate: "Alpine",
      altitude: "4,377m",
      highlights: [
        "Wildlife viewing",
        "Endemic plants",
        "Sanetti Plateau",
        "Harenna Forest",
        "Bird watching"
      ]
    }
  ];

  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ethiopia's Magnificent Destinations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore the diverse landscapes and rich cultural heritage of Ethiopia's most remarkable locations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative">
                <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{destination.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Sun className="w-5 h-5 mr-3 text-primary-600" />
                    <span>Best Time: {destination.bestTime}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Cloud className="w-5 h-5 mr-3 text-primary-600" />
                    <span>Climate: {destination.climate}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <ThermometerSun className="w-5 h-5 mr-3 text-primary-600" />
                    <span>Altitude: {destination.altitude}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Highlights:</h4>
                  <ul className="space-y-2">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
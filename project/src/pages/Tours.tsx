import React from 'react';
import { Calendar, Clock, DollarSign, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Tours() {
  const tours = [
    {
      id: 1,
      title: "Historical Northern Circuit",
      image: "https://images.unsplash.com/photo-1635326444005-76055acaa8b8?auto=format&fit=crop&w=1000&q=80",
      duration: "8 Days",
      price: 1588,
      groupSize: "4-12",
      location: "Northern Ethiopia",
      description: "Explore the ancient churches of Lalibela, the castles of Gondar, and the majestic Simien Mountains.",
      highlights: [
        "Rock-hewn churches of Lalibela",
        "Royal castles of Gondar",
        "Simien Mountains trek",
        "Lake Tana monasteries",
        "Blue Nile Falls"
      ]
    },
    {
      id: 2,
      title: "Axum Ancient Kingdom",
      image: "https://images.unsplash.com/photo-1635326446432-c9e4eab5e1bd?auto=format&fit=crop&w=1000&q=80",
      duration: "5 Days",
      price: 988,
      groupSize: "4-10",
      location: "Axum",
      description: "Discover the ancient kingdom of Axum, its mysterious stellae, and the claimed home of the Ark of the Covenant.",
      highlights: [
        "Axum Obelisks",
        "St. Mary of Zion Church",
        "Queen of Sheba's Palace",
        "Archaeological Museum",
        "Ancient Tombs"
      ]
    },
    {
      id: 3,
      title: "Geralta Rock Churches",
      image: "https://images.unsplash.com/photo-1635326444728-a0a1f45fe7f5?auto=format&fit=crop&w=1000&q=80",
      duration: "4 Days",
      price: 1188,
      groupSize: "4-8",
      location: "Tigray Region",
      description: "Experience the dramatic rock-hewn churches of Geralta, perched high in the mountains of Tigray.",
      highlights: [
        "Abuna Yemata Guh",
        "Daniel Korkor",
        "Maryam Korkor",
        "Mountain hiking",
        "Local culture"
      ]
    },
    {
      id: 4,
      title: "Omo Valley Cultural Experience",
      image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1000&q=80",
      duration: "7 Days",
      price: 1988,
      groupSize: "4-10",
      location: "Southern Ethiopia",
      description: "Immerse yourself in the unique cultures and traditions of Ethiopia's indigenous tribes.",
      highlights: [
        "Visit Hamer villages",
        "Karo tribe encounters",
        "Traditional markets",
        "Cultural ceremonies",
        "Photography opportunities"
      ]
    },
    {
      id: 5,
      title: "Danakil Depression Adventure",
      image: "https://images.unsplash.com/photo-1635326445426-cc7f471f1e9d?auto=format&fit=crop&w=1000&q=80",
      duration: "5 Days",
      price: 1988,
      groupSize: "6-12",
      location: "Afar Region",
      description: "Experience one of Earth's most extreme landscapes with its colorful mineral formations and active volcanoes.",
      highlights: [
        "Dallol hot springs",
        "Salt mining",
        "Erta Ale volcano",
        "Desert camping",
        "Unique landscapes"
      ]
    },
    {
      id: 6,
      title: "Gheralta Lodge Retreat",
      image: "https://images.unsplash.com/photo-1635326444889-a8f1c4f71c9b?auto=format&fit=crop&w=1000&q=80",
      duration: "3 Days",
      price: 888,
      groupSize: "2-8",
      location: "Tigray Region",
      description: "Relax in the stunning Gheralta Lodge while exploring the surrounding ancient churches and landscapes.",
      highlights: [
        "Luxury accommodation",
        "Church visits",
        "Sunset views",
        "Local cuisine",
        "Cultural experiences"
      ]
    },
    {
      id: 7,
      title: "Bale Mountains Safari",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603a9eda?auto=format&fit=crop&w=1000&q=80",
      duration: "6 Days",
      price: 1388,
      groupSize: "4-8",
      location: "Bale Mountains",
      description: "Track the rare Ethiopian Wolf and discover unique wildlife in their natural habitat.",
      highlights: [
        "Ethiopian Wolf tracking",
        "Endemic species",
        "Mountain hiking",
        "Harenna Forest",
        "Bird watching"
      ]
    },
    {
      id: 8,
      title: "Lake Tana Monasteries",
      image: "https://images.unsplash.com/photo-1635326444236-c8e0cc6f2726?auto=format&fit=crop&w=1000&q=80",
      duration: "3 Days",
      price: 788,
      groupSize: "4-10",
      location: "Bahir Dar",
      description: "Explore the ancient monasteries of Lake Tana and witness the magnificent Blue Nile Falls.",
      highlights: [
        "Island monasteries",
        "Blue Nile Falls",
        "Boat trips",
        "Bird watching",
        "Local markets"
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return `ETB ${price.toLocaleString()}`;
  };

  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover Ethiopia's Wonders</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our carefully crafted tours that showcase the best of Ethiopia's rich history, vibrant culture, and stunning landscapes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative">
                <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full">
                  <span className="font-semibold">{formatPrice(tour.price)}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tour.title}</h3>
                <p className="text-gray-600 mb-6">{tour.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 mr-3 text-primary-600" />
                    <span>{tour.groupSize} people</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                    <span>{tour.location}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Highlights:</h4>
                  <ul className="space-y-2">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/payment"
                  className="mt-8 block text-center bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition duration-300"
                >
                  Book This Tour
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tours;
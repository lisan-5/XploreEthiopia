import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function PaymentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user } = useAuthStore();
  const [selectedDestination, setSelectedDestination] = useState('');

  const destinations = [
    "Historical Northern Circuit",
    "Omo Valley Cultural Tour",
    "Danakil Depression Adventure",
    "Bale Mountains Safari",
    "Simien Mountains Trek",
    "Lake Tana Monasteries Tour",
    "Harar Ancient City Experience",
    "Awash National Park Safari",
    "Ethiopian Coffee Trail",
    "Custom Tour"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert('Please sign in to send an inquiry');
    }
  };

  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-emerald-700 mb-4">
              We're Enhancing Your Booking Experience!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Online payments coming soon. For now, please contact us directly to secure your Ethiopian adventure.
            </p>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>+251 911 234 567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>bookings@xploreethiopia.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>Bole Road, Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Booking Inquiry</h2>
              {isSubmitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center">
                  Inquiry sent successfully! We'll contact you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your name"
                      defaultValue={user?.username || ''}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="your@email.com"
                      defaultValue={user?.email || ''}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Destination</label>
                    <select
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    >
                      <option value="">Select a destination</option>
                      {destinations.map((dest) => (
                        <option key={dest} value={dest}>{dest}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      rows={4}
                      placeholder="Tell us about your travel plans..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition duration-300"
                  >
                    Send Inquiry
                  </button>
                  {!user && (
                    <p className="text-red-500 text-sm text-center">
                      Please sign in to send an inquiry
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User, Search, MapPin, Calendar, Phone } from 'lucide-react';
import { AuthModal } from './AuthModal';
import { useAuthStore } from '../store/authStore';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showQuickContact, setShowQuickContact] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const QuickContact = () => (
    <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-xl p-4 z-50">
      <div className="space-y-3">
        <div className="flex items-center text-gray-700">
          <Phone className="w-5 h-5 mr-3 text-primary-600" />
          <span>+251 911 234 567</span>
        </div>
        <div className="flex items-center text-gray-700">
          <MapPin className="w-5 h-5 mr-3 text-primary-600" />
          <span>Bole Road, Addis Ababa</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Calendar className="w-5 h-5 mr-3 text-primary-600" />
          <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-primary-900/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-primary-900/80 backdrop-blur-sm py-4'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center space-x-2 group"
                aria-label="Home"
              >
                <span className="text-2xl font-display font-bold text-white group-hover:text-secondary-300 transition-all duration-300">
                  Xpl<Search className="inline-block w-6 h-6 mx-0.5 text-secondary-300" />reEthi<Search className="inline-block w-6 h-6 mx-0.5 text-secondary-300" />pia
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {[
                { path: '/', label: 'Home' },
                { path: '/tours', label: 'Tours & Destinations' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`px-4 py-2 rounded-lg transition-all duration-300 text-lg
                    ${isActive(item.path) 
                      ? 'text-secondary-300 font-semibold scale-105 bg-white/10' 
                      : 'text-white hover:text-secondary-300 hover:bg-white/10'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center space-x-4 ml-6">
                <button
                  onClick={() => setShowQuickContact(!showQuickContact)}
                  className="nav-icon-button text-white hover:text-secondary-300"
                  aria-label="Quick Contact"
                >
                  <Phone className="h-5 w-5" />
                </button>

                {user ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-white">Welcome, {user.username}</span>
                    <button 
                      onClick={() => signOut()}
                      className="nav-icon-button text-white hover:text-secondary-300 hover:bg-white/10"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowAuthModal(true)}
                    className="nav-icon-button text-white hover:text-secondary-300 hover:bg-white/10"
                    aria-label="Sign In"
                  >
                    <User className="h-5 w-5" />
                  </button>
                )}
              </div>

              {showQuickContact && <QuickContact />}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`
            md:hidden fixed inset-0 top-[4rem] bg-primary-900/95 backdrop-blur-md
            transition-all duration-300 ease-in-out transform z-40
            ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
        >
          <div className="px-4 py-3 space-y-1">
            {[
              { path: '/', label: 'Home' },
              { path: '/tours', label: 'Tours & Destinations' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`block px-4 py-3 rounded-lg transition-all duration-300 text-lg
                  ${isActive(item.path) 
                    ? 'text-secondary-300 bg-white/10 font-semibold' 
                    : 'text-white hover:text-secondary-300 hover:bg-white/10'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {user ? (
              <>
                <div className="px-4 py-3 text-white">Welcome, {user.username}</div>
                <button 
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-white hover:text-secondary-300 hover:bg-white/10 rounded-lg"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button 
                onClick={() => {
                  setShowAuthModal(true);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-secondary-300 hover:bg-white/10 rounded-lg"
              >
                Sign In
              </button>
            )}

            {/* Quick Contact for Mobile */}
            <div className="px-4 py-3 space-y-3 text-white">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-secondary-300" />
                <span>+251 911 234 567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-secondary-300" />
                <span>Bole Road, Addis Ababa</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-secondary-300" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}

export default Navbar;
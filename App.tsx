import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Menu, X, Diamond, MapPin, Phone, Mail, Instagram, Facebook, Calendar, Clock, Users, ChevronRight, Star, Quote } from 'lucide-react';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import Reservations from './pages/Reservations';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import About from './pages/About';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background-dark/95 backdrop-blur-md border-border-dark py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-primary transition-transform group-hover:scale-110">
              <Diamond size={32} strokeWidth={1.5} fill="currentColor" className="opacity-20 absolute" />
              <Diamond size={32} strokeWidth={1.5} />
            </div>
            <h1 className="text-white text-xl font-bold tracking-[0.15em] uppercase font-serif">Royal Spice</h1>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-white/80'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/reservations" className="hidden lg:flex items-center justify-center h-10 px-6 bg-primary hover:bg-primary-hover text-background-dark text-xs font-bold tracking-widest uppercase rounded transition-all">
              Book a Table
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-background-dark z-40 transition-transform duration-300 pt-24 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-xl font-medium tracking-widest uppercase ${location.pathname === link.path ? 'text-primary' : 'text-white/80'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/reservations" className="flex items-center justify-center h-12 w-full bg-primary text-background-dark font-bold tracking-widest uppercase rounded mt-4">
            Book a Table
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-border-dark py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Diamond size={24} className="text-primary" />
              <h3 className="text-white text-lg font-bold tracking-widest uppercase">Royal Spice</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              A tribute to the majestic culinary heritage of India, served with contemporary elegance in the heart of the city.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400 font-light">
              <p className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-1" />
                <span>123 Culinary Avenue,<br/>Luxury District, New York 10012</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+1 (212) 555-0199</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span>reservations@royalspice.com</span>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Hours</h4>
            <div className="space-y-3 text-sm text-gray-400 font-light">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-white">5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-white">5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">4:00 PM - 9:30 PM</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Explore</h4>
             <div className="flex flex-col gap-2 text-sm text-gray-400 font-light">
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                <Link to="/menu" className="hover:text-primary transition-colors">Our Menu</Link>
                <Link to="/reservations" className="hover:text-primary transition-colors">Private Dining</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Gift Cards</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Careers</Link>
             </div>
          </div>
        </div>
        
        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2024 The Royal Spice. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background-dark text-white font-sans selection:bg-primary selection:text-background-dark">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
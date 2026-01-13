
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On home page, use transparent until scroll. On others, always use dark for visibility.
  const navBgClass = isHomePage 
    ? (scrolled ? 'glass-nav py-3' : 'bg-transparent py-6')
    : 'nav-dark py-3 shadow-lg';

  const navLinks = [
    { name: 'হোম', path: '/' },
    { name: 'দেশি প্যাকেজ', path: '/domestic' },
    { name: 'বিদেশি প্যাকেজ', path: '/international' },
    { name: 'আমাদের সম্পর্কে', path: '/about' },
    { name: 'যোগাযোগ', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="group flex items-center space-x-3">
            <div className="bg-sky-500 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-sky-500/20">
              <i className="fas fa-plane-departure text-white text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight leading-none text-white uppercase">
                TRAVEL <span className="text-sky-400">TRIP</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-sky-200 uppercase">OF SYLTHE</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-all hover:text-sky-400 ${
                  location.pathname === link.path ? 'text-sky-400' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-xl"
            >
              বুকিং করুন
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden bg-[#0f172a] absolute w-full transition-all duration-300 ${isOpen ? 'top-full opacity-100 shadow-2xl' : '-top-[500px] opacity-0'}`}>
        <div className="p-6 space-y-4 border-t border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-bold text-white/90 hover:text-sky-400"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center btn-primary text-white py-4 rounded-xl font-bold"
          >
            বুকিং করুন
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-xl font-playfair font-bold text-navy">
            M<span className="text-rose">{'&'}</span>You
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#hero" className="text-navy hover:text-rose transition-colors font-medium">Home</a>
            <a href="#story" className="text-navy hover:text-rose transition-colors font-medium">Our Story</a>
            <a href="#gallery" className="text-navy hover:text-rose transition-colors font-medium">Gallery</a>
            <a href="#birthday" className="text-navy hover:text-rose transition-colors font-medium">Birthday</a>
            <a href="#letter" className="text-navy hover:text-rose transition-colors font-medium">My Letter</a>
          </div>
          
          <button 
            className="md:hidden text-navy" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden bg-white border-t border-gray-100 absolute w-full shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a href="#hero" className="text-navy hover:text-rose py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#story" className="text-navy hover:text-rose py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Our Story</a>
          <a href="#gallery" className="text-navy hover:text-rose py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a href="#birthday" className="text-navy hover:text-rose py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Birthday</a>
          <a href="#letter" className="text-navy hover:text-rose py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>My Letter</a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import GallerySection from '../components/GallerySection';
import BirthdaySection from '../components/BirthdaySection';
import LoveLetterSection from '../components/LoveLetterSection';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import BirthdaySurpriseModal from '../components/BirthdaySurpriseModal';

const Home = () => {
  useEffect(() => {
    // Scroll animation for fade-in elements
    const checkScroll = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once on load
    checkScroll();
    
    // Run on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <MusicPlayer />
      <HeroSection />
      <StorySection />
      <GallerySection />
      <BirthdaySection />
      <LoveLetterSection />
      <Footer />
      <BirthdaySurpriseModal />
    </motion.div>
  );
};

export default Home;

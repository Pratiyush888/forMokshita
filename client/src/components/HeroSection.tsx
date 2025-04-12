import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

const HeroSection = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-pattern relative overflow-hidden pt-16">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-rose rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 text-center z-10 fade-in visible">
        <motion.h1 
          className="text-4xl md:text-6xl font-playfair font-bold text-navy mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          For <span className="text-rose italic">Mokshita</span>, With Love
        </motion.h1>
        
        <motion.div 
          className="w-20 h-1 bg-gold mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.div>
        
        <motion.p 
          className="text-lg md:text-xl text-navy-light max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          To the woman who makes my heart skip a beat every single day. This is a celebration of us, our journey, and your special day.
        </motion.p>
        
        <motion.div 
          className="relative inline-block animate-float mb-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 0.7 
          }}
        >
          <div className="text-6xl md:text-8xl mb-2">❤️</div>
        </motion.div>
        
        <div className="mb-10">
          <div id="birthday-countdown" className="text-navy font-medium text-xl">
            Counting down to your special day...
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <motion.div 
              className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="text-2xl md:text-3xl font-bold text-rose">{days}</span>
              <span className="text-xs uppercase tracking-wide text-navy-light">Days</span>
            </motion.div>
            <motion.div 
              className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <span className="text-2xl md:text-3xl font-bold text-rose">{hours}</span>
              <span className="text-xs uppercase tracking-wide text-navy-light">Hours</span>
            </motion.div>
            <motion.div 
              className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <span className="text-2xl md:text-3xl font-bold text-rose">{minutes}</span>
              <span className="text-xs uppercase tracking-wide text-navy-light">Minutes</span>
            </motion.div>
            <motion.div 
              className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <span className="text-2xl md:text-3xl font-bold text-rose">{seconds}</span>
              <span className="text-xs uppercase tracking-wide text-navy-light">Seconds</span>
            </motion.div>
          </div>
        </div>
        
        <motion.a 
          href="#story" 
          className="inline-block bg-navy text-white px-8 py-3 rounded-full hover:bg-navy-light transition-colors text-lg font-medium shadow-md hover:shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Begin Our Journey <i className="fas fa-arrow-down ml-2"></i>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;

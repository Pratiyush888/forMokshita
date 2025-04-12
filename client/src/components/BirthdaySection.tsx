import { useState } from 'react';
import { motion } from 'framer-motion';
import { birthdayWishes } from '../lib/data';

const BirthdaySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  return (
    <section id="birthday" className="py-20 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🎂</div>
        <div className="absolute bottom-20 right-10 text-8xl">🎁</div>
        <div className="absolute top-40 right-20 text-6xl">🎈</div>
        <div className="absolute bottom-40 left-20 text-6xl">🎉</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <motion.h2 
            className="text-3xl md:text-5xl font-playfair font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Happy Birthday, Mokshita!
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gold mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            September 8th is a special day because it's when the world received its most beautiful gift - you.
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center max-w-4xl mx-auto">
          <motion.div 
            className="w-full md:w-1/2 fade-in"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-rose">Birthday Wishes</h3>
              <p className="mb-4 text-white/90 leading-relaxed">
                On your special day, I wish you everything that brings a smile to your face:
              </p>
              <ul className="space-y-3 mb-6">
                {birthdayWishes.map((wish, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <i className="fas fa-star text-gold mt-1 mr-3"></i>
                    <span>{wish}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-white/90">
                And most importantly, I wish you to know just how loved and cherished you are, every single day.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 fade-in"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-rose/20 backdrop-blur-sm p-8 rounded-lg border border-rose/30 text-center">
              <div className="mb-6">
                <span className="block text-xl font-light mb-1">Birthday Countdown</span>
                <h3 className="text-4xl font-playfair font-bold">September 8th</h3>
              </div>
              
              <div id="birthday-message" className="mb-8">
                <p className="text-lg italic font-playfair">"To the most amazing woman in my world, happy birthday! You deserve all the happiness this universe can offer."</p>
              </div>
              
              <motion.button 
                id="birthday-surprise" 
                className="bg-white text-navy px-6 py-3 rounded-full font-medium hover:bg-rose hover:text-white transition-colors"
                onClick={handleOpenModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-gift mr-2"></i> Click For Your Surprise
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BirthdaySection;

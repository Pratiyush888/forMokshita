import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BirthdaySurpriseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Listen for the open modal event
    const handleOpenModal = () => setIsOpen(true);
    document.getElementById('birthday-surprise')?.addEventListener('click', handleOpenModal);

    return () => {
      document.getElementById('birthday-surprise')?.removeEventListener('click', handleOpenModal);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close modal when clicking outside
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-navy-dark/70 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg max-w-lg w-full mx-4 overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="bg-rose p-4 text-center">
              <h3 className="text-2xl font-playfair font-bold text-white">Your Birthday Surprise!</h3>
            </div>
            
            <div className="p-6 text-center">
              <motion.div 
                className="text-6xl mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                🎁
              </motion.div>
              
              <motion.p 
                className="text-navy mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I have a special surprise planned for your birthday!
              </motion.p>
              
              <motion.div 
                className="bg-rose/10 p-4 rounded-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="font-medium text-navy italic">
                  "This is just a preview. Your actual surprise awaits you on September 8th. Be ready for something special!"
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center space-x-2 text-5xl mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {['🎂', '🎉', '❤️', '🎈'].map((emoji, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1), type: "spring" }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.button
                className="bg-navy text-white px-6 py-3 rounded-full font-medium hover:bg-navy-light transition-colors"
                onClick={closeModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                I Can't Wait!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BirthdaySurpriseModal;

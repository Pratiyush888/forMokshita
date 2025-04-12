import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="text-3xl font-playfair font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          M<span className="text-rose">{'&'}</span>You
        </motion.div>
        
        <motion.p 
          className="text-white/70 mb-6 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          This site was created with love, for the one who holds my heart.
        </motion.p>
        
        <motion.div 
          className="flex justify-center space-x-4 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="#hero" className="text-white/70 hover:text-rose transition-colors">
            <i className="fas fa-heart"></i>
          </a>
          <a href="#story" className="text-white/70 hover:text-rose transition-colors">
            <i className="fas fa-book-open"></i>
          </a>
          <a href="#gallery" className="text-white/70 hover:text-rose transition-colors">
            <i className="fas fa-images"></i>
          </a>
          <a href="#birthday" className="text-white/70 hover:text-rose transition-colors">
            <i className="fas fa-birthday-cake"></i>
          </a>
          <a href="#letter" className="text-white/70 hover:text-rose transition-colors">
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
        
        <motion.div 
          className="text-white/50 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>Made with <span className="text-rose">❤</span> for Mokshita</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

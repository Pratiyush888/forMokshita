import { motion } from 'framer-motion';
import { loveLetterContent } from '../lib/data';

const LoveLetterSection = () => {
  const paragraphs = loveLetterContent.trim().split('\n\n');
  
  return (
    <section id="letter" className="py-20 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">My Letter To You</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-navy-light max-w-2xl mx-auto">Words from my heart to yours.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-rose/10 relative fade-in"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-5 -right-5 text-4xl">❤️</div>
            <div className="absolute -bottom-5 -left-5 text-4xl">❤️</div>
            
            <div className="font-playfair text-navy-light">
              {paragraphs.map((paragraph, index) => {
                if (index === paragraphs.length - 1) {
                  // This is the signature
                  const [line1, line2] = paragraph.split('\n');
                  return (
                    <motion.p 
                      key={index} 
                      className="italic text-right"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    >
                      {line1}<br />
                      <span className="font-bold text-navy">{line2}</span>
                    </motion.p>
                  );
                }
                
                if (index === 0) {
                  // This is the greeting
                  return (
                    <motion.p 
                      key={index} 
                      className="mb-6 text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {paragraph}
                    </motion.p>
                  );
                }
                
                // Regular paragraphs
                return (
                  <motion.p 
                    key={index} 
                    className="mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    {paragraph}
                  </motion.p>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;

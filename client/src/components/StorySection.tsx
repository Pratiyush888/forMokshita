import { motion } from 'framer-motion';
import { timelineData } from '../lib/data';

const StorySection = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">Our Story</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-navy-light max-w-2xl mx-auto">
            Every moment with you has been a treasure. Here are some of our most memorable chapters together.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose/30"></div>
          
          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <div 
              key={item.id} 
              className="timeline-item flex justify-between items-center mb-16 relative fade-in"
            >
              <div className="w-5 h-5 bg-rose rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
              
              {index % 2 === 0 ? (
                <>
                  <div className="w-5/12">
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                      whileHover={{ y: -5 }}
                    >
                      <h3 className="text-xl font-playfair font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <p className="text-sm text-rose font-medium">{item.date}</p>
                    </motion.div>
                  </div>
                  <div className="w-5/12"></div>
                </>
              ) : (
                <>
                  <div className="w-5/12"></div>
                  <div className="w-5/12">
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                      whileHover={{ y: -5 }}
                    >
                      <h3 className="text-xl font-playfair font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <p className="text-sm text-rose font-medium">{item.date}</p>
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          ))}
          
          {/* Today & Beyond item */}
          <div className="timeline-item flex justify-between items-center mb-0 relative fade-in">
            <div className="w-5 h-5 bg-gold rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 animate-pulse-slow"></div>
            
            <div className="w-5/12"></div>
            
            <div className="w-5/12">
              <motion.div 
                className="bg-rose/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-rose/20"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-playfair font-bold text-navy mb-2">Today & Beyond</h3>
                <p className="text-gray-600 mb-4">With each passing day, my love for you grows stronger. I'm excited for all our future chapters.</p>
                <p className="text-sm text-navy font-medium">Forever & Always</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

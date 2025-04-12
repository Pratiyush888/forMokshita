import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../lib/constants';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">Our Beautiful Memories</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-navy-light max-w-2xl mx-auto">The moments we've shared together that I'll cherish forever.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div 
              key={image.id}
              className="polaroid p-4 bg-white border border-rose/10 rounded-lg shadow-xl gallery-item fade-in overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                rotate: index % 2 === 0 ? 1 : -1 
              }}
            >
              <div className="relative overflow-hidden rounded mb-4">
                <img 
                  src={image.url} 
                  alt={image.description} 
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-center text-navy-dark text-sm font-medium px-2 py-1">{image.description}</p>
              <div className="absolute top-1 right-1 text-rose-DEFAULT opacity-50 text-lg">❤️</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../lib/constants';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">Our Moments</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-navy-light max-w-2xl mx-auto">A collection of our beautiful memories together, frozen in time.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div 
              key={image.id}
              className="polaroid p-3 bg-white rounded gallery-item fade-in"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={image.url} 
                alt={image.description} 
                className="w-full h-64 object-cover rounded mb-3"
                loading="lazy"
              />
              <p className="text-center text-navy-light text-sm italic">{image.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

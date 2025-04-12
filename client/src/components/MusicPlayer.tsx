import { useMusic } from '../context/MusicContext';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg flex items-center space-x-2"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <button 
        className="w-10 h-10 rounded-full bg-rose flex items-center justify-center text-white hover:bg-rose-dark transition-colors"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-music'}`}></i>
      </button>
      <div className="hidden sm:block text-xs font-medium text-navy">
        Music: {isPlaying ? 'On' : 'Off'}
      </div>
    </motion.div>
  );
};

export default MusicPlayer;

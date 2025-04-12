import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '@assets/WhatsApp Image 2025-04-13 at 1.27.43 AM (3).jpeg';

interface PasswordProtectionProps {
  password: string;
  onAuthenticated: () => void;
}

const PasswordProtection = ({ password, onAuthenticated }: PasswordProtectionProps) => {
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Enter');
  
  // Check if already authenticated in session storage
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
    if (isAuthenticated) {
      onAuthenticated();
    }
  }, [onAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputPassword === password) {
      // Set authenticated in session storage
      sessionStorage.setItem('authenticated', 'true');
      onAuthenticated();
    } else {
      setError(true);
      setAttempts(prev => prev + 1);
      
      if (attempts >= 2) {
        setButtonText('Try Again');
        setIsButtonDisabled(true);
        setTimeout(() => {
          setIsButtonDisabled(false);
          setButtonText('Enter');
        }, 3000);
      }
      
      // Clear error message after 2 seconds
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          filter: 'blur(8px)'
        }}
      />
      
      <motion.div 
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <div className="text-center mb-8">
          <motion.div 
            className="text-5xl mb-4 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            ❤️
          </motion.div>
          <h2 className="text-3xl font-playfair font-bold text-white mb-2">For Mokshita's Eyes Only</h2>
          <p className="text-white/70">This romantic journey requires a password</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Enter your password"
              className={`w-full p-4 rounded-lg bg-white/10 border ${error ? 'border-red-500' : 'border-white/30'} text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose transition-all`}
              autoFocus
            />
            {error && (
              <motion.p 
                className="absolute text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Incorrect password. Please try again.
              </motion.p>
            )}
          </div>
          
          <motion.button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-rose text-white font-medium hover:bg-rose-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isButtonDisabled}
          >
            {buttonText}
          </motion.button>
          
          <div className="text-center mt-6">
            <p className="text-white/50 text-sm">Hint: It's a simple, three-word phrase expressing love</p>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PasswordProtection;
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { X, Send, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Preset responses from Pratyush Bot
const PRESET_RESPONSES = [
  "I miss you too, Mokshita! Can't wait to see you again soon.",
  "I'm always thinking about you, my princess ❤️",
  "You're the most beautiful person I've ever met, inside and out.",
  "Remember that time we spent hours talking? I cherish those memories.",
  "I've been counting down the days until your birthday! September 8th is going to be special.",
  "You make me so happy. Every single day, just knowing you're mine.",
  "I love your smile - it lights up my entire world like nothing else.",
  "What new adventures should we plan for our future together?",
  "Tell me more about your day! I want to know everything.",
  "I cherish every moment we spend together, they're the best times of my life.",
  "You're my favorite person in the whole world, Mokshita.",
  "I'm planning something special for your birthday! You deserve all the happiness.",
  "You are my sunshine on cloudy days and my stars on clear nights.",
  "I feel so blessed to have you in my life. You're my everything.",
  "Your laugh is my favorite sound in the entire universe.",
  "No matter how far apart we are, you're always close to my heart.",
  "You inspire me to be a better person every single day.",
  "Our love story is my favorite - and it's just beginning.",
  "I fall in love with you all over again every time I see you.",
  "You're not just my girlfriend, you're my best friend and soulmate.",
  "You are the reason behind my smile every day.",
  "Your messages brighten up my day more than you know.",
  "I'm here for you always, no matter what you need.",
  "Every day with you is another day in paradise.",
  "You make my heart skip a beat, even after all this time.",
];

// Get a random response from the preset list
const getRandomResponse = () => {
  const randomIndex = Math.floor(Math.random() * PRESET_RESPONSES.length);
  return PRESET_RESPONSES[randomIndex];
};

// Conversation history storage
interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi Mokshita! I'm Pratyush Bot, your virtual companion. I'm here to chat with you anytime. How are you feeling today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate typing delay before response (500-1500ms)
    const typingDelay = Math.floor(Math.random() * 1000) + 500;
    
    setTimeout(() => {
      // Add response message
      const responseMessage: Message = {
        text: getRandomResponse(),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, responseMessage]);
    }, typingDelay);
  };

  // Format time as HH:MM
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <Button 
          onClick={toggleChat} 
          className="h-14 w-14 rounded-full bg-rose-DEFAULT hover:bg-rose-dark shadow-lg"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </Button>
      </motion.div>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-24 right-6 w-80 sm:w-96 rounded-lg shadow-xl bg-navy-dark border border-rose-DEFAULT z-40 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat header */}
            <div className="px-4 py-3 bg-navy-light flex items-center border-b border-navy-DEFAULT">
              <Avatar className="h-9 w-9 bg-rose-DEFAULT mr-3">
                <span className="font-semibold text-white">P</span>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-playfair text-white text-sm font-medium">Pratyush Bot</h3>
                <p className="text-xs text-gray-300">Always here for you ❤️</p>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="text-gray-300 hover:text-white">
                <X size={18} />
              </Button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto max-h-[350px] space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser 
                        ? 'bg-rose-DEFAULT text-white rounded-br-none' 
                        : 'bg-navy-light text-white rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1 text-right">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-navy-light flex items-center gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-navy-light text-white border-navy-DEFAULT focus-visible:ring-rose-light"
              />
              <Button type="submit" size="icon" className="bg-rose-DEFAULT hover:bg-rose-dark">
                <Send size={18} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
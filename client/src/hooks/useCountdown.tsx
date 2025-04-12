import { useState, useEffect } from 'react';
import { BIRTHDAY_DATE } from '../lib/constants';

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function useCountdown(): CountdownResult {
  const [countdown, setCountdown] = useState<CountdownResult>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const birthdayDateObj = new Date(BIRTHDAY_DATE);
      const currentDate = new Date();
      
      // If the birthday has passed this year, set for next year
      let targetDate = birthdayDateObj;
      if (birthdayDateObj.getTime() < currentDate.getTime()) {
        targetDate = new Date(BIRTHDAY_DATE);
        targetDate.setFullYear(currentDate.getFullYear() + 1);
      }
      
      const distance = targetDate.getTime() - currentDate.getTime();
      
      if (distance < 0) {
        // The date has arrived
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }
      
      // Calculate days, hours, minutes, seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setCountdown({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false
      });
    };
    
    // Run once immediately
    calculateCountdown();
    
    // Update every second
    const timer = setInterval(calculateCountdown, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return countdown;
}

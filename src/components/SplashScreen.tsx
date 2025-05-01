
import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary to-primary-light overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse-light" style={{ transform: 'scale(1.3)' }}></div>
          <div className="h-32 w-32 rounded-full bg-white/90 flex items-center justify-center shadow-glow">
            <img 
              src="/lovable-uploads/acb6546b-be9b-49e7-987b-25063224688a.png" 
              alt="AI Tutor Logo"
              className="h-24 w-24 object-contain animate-pulse-soft"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in font-poppins tracking-wider">AI Tutor</h1>
        <p className="text-white/90 animate-slide-in-up text-lg font-light">Welcome to TechLearn</p>
        
        <div className="mt-10 flex space-x-3">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="h-3 w-3 bg-white rounded-full"
              style={{ animation: `pulse 1s ${i * 0.3}s infinite` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;


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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-primary overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse-light" style={{ transform: 'scale(1.2)' }}></div>
          <div className="h-28 w-28 rounded-full bg-white flex items-center justify-center shadow-glow">
            <img 
              src="/lovable-uploads/acb6546b-be9b-49e7-987b-25063224688a.png" 
              alt="AI Tutor Logo"
              className="h-20 w-20 object-contain"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in font-poppins">AI Tutor</h1>
        <p className="text-white/80 animate-slide-in-up">Welcome to TechLearn</p>
        
        <div className="mt-8 flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="h-2 w-2 bg-white rounded-full"
              style={{ animation: `pulse 1s ${i * 0.3}s infinite` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

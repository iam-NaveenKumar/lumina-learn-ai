
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page
    navigate('/');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center scale-hover">
        <h1 className="text-2xl font-bold mb-4 text-primary">Redirecting to Home...</h1>
      </div>
    </div>
  );
};

export default Index;

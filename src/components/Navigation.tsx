
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, BarChart2, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("/");
  
  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);
  
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: BarChart2
    },
    {
      name: "My Learning",
      path: "/learning",
      icon: BookOpen
    }
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:top-20 md:bottom-auto md:left-4 z-40 bg-white border-t md:bg-transparent md:border-none md:w-16">
      <div className="flex justify-around md:flex-col md:space-y-4 py-2 px-4 md:py-4">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-lg transition-all md:w-12 md:h-12 hover:shadow-md",
              activeRoute === item.path 
                ? "text-primary bg-primary/10" 
                : "text-gray-500 hover:text-primary hover:bg-primary/5 hover:scale-105 transition-transform duration-200"
            )}
          >
            <item.icon className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-xs mt-1 md:hidden">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;


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
    <nav className="fixed left-0 top-16 bottom-0 z-40 w-16 glass backdrop-blur-md border-r border-primary/10 shadow-md">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col space-y-12 py-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-xl transition-all w-12 h-12 nav-item hover-glow relative group",
                activeRoute === item.path 
                  ? "text-white bg-gradient-primary shadow-glow" 
                  : "text-primary hover:text-primary-light"
              )}
            >
              <item.icon className={cn(
                "w-6 h-6 transition-all",
                activeRoute === item.path ? "animate-pulse-soft" : "group-hover:scale-110"
              )} />
              <span className="absolute left-16 bg-gradient-primary text-white px-3 py-1.5 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

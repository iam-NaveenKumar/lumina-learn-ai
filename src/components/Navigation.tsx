
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
    <nav className="fixed left-0 top-16 bottom-0 z-40 w-16 bg-white/80 backdrop-blur-sm border-r border-primary/10 shadow-sm">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col space-y-8 py-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-lg transition-all w-12 h-12 nav-item hover-glow relative group",
                activeRoute === item.path 
                  ? "text-primary bg-primary/10 shadow-soft" 
                  : "text-gray-500 hover:text-primary"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute left-16 bg-primary text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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

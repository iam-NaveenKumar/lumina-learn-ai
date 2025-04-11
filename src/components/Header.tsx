
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  username?: string;
}

const Header = ({ username = "Naveen" }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-md border-b border-primary/20 py-4 px-4 md:px-6 shadow-md transition-all duration-300">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-primary font-['PT_Sans'] animate-slide-in">Hello, {username}</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full relative text-primary header-button"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary w-2.5 h-2.5 rounded-full"></span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2 rounded-full border-primary/20 hover:border-primary/80 text-primary header-button glass"
            >
              <span>My Profile</span>
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <p className="text-primary/80 ml-1 font-['PT_Sans'] animate-fade-in">How was your day? Shall we start learning?</p>
      </div>
    </header>
  );
};

export default Header;

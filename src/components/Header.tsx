
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  username?: string;
}

const Header = ({ username = "User" }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b py-3 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-medium">Hello, {username}</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 bg-primary w-2.5 h-2.5 rounded-full"></span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2 rounded-full border-primary/20 hover:border-primary/50"
          >
            <span>My Profile</span>
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

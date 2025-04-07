
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast({
        title: "AI Chatbot",
        description: "This feature is under construction. Stay tuned!",
        duration: 3000,
      });
    }
  };
  
  return (
    <>
      <Button
        onClick={toggleChatbot}
        className="fixed bottom-20 right-4 md:bottom-8 md:right-8 rounded-full h-14 w-14 shadow-md bg-primary hover:bg-primary-light flex items-center justify-center"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
      
      {isOpen && (
        <div className="fixed bottom-[5.5rem] md:bottom-28 right-4 md:right-8 w-80 h-96 bg-white rounded-2xl shadow-card border p-4 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-lg">AI Tutor</h3>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center h-[calc(100%-3rem)]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <p className="text-center text-muted-foreground">
              Our AI Tutor is currently under construction. 
              <br />
              Check back soon!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;

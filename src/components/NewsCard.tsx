
import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

const NewsCard = ({ title, description, date, image }: NewsCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="overflow-hidden card-hover h-full flex flex-col border-primary/10 group shadow-md rounded-xl">
          <div className="h-44 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <CardDescription className="line-clamp-3">{description}</CardDescription>
          </CardContent>
          <CardFooter className="pt-2 pb-4 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1 text-primary" />
              <span>{date}</span>
            </div>
          </CardFooter>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0 shadow-lg">
        <div className="h-32 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h4 className="font-medium text-primary mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="mt-2 text-xs text-muted-foreground flex items-center">
            <Calendar className="w-3 h-3 mr-1 text-primary" />
            <span>{date}</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default NewsCard;


import { BookOpen, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  duration: string;
  lessons: number;
  image: string;
  tags?: string[];
  type?: "global" | "local";
}

const CourseCard = ({ 
  title, 
  description, 
  progress, 
  duration, 
  lessons,
  image,
  tags = [],
  type = "global"
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden card-hover border-primary/10 transition-all duration-300 group animate-scale">
      <div className="h-40 overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {type === "local" && (
          <Badge className="absolute top-2 right-2 bg-primary hover-glow">Local</Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-1 group-hover:text-primary transition-colors">{title}</CardTitle>
          {tags.length > 0 && (
            <Badge variant="outline" className="text-xs transition-all duration-300 hover:bg-primary hover:text-white">{tags[0]}</Badge>
          )}
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-100" />
        </div>
      </CardContent>
      <CardFooter className="pt-0 text-xs text-muted-foreground">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="w-3 h-3 mr-1 text-primary" />
            <span>{lessons} lessons</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;

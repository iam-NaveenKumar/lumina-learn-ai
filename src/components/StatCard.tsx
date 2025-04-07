
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color?: string;
}

const StatCard = ({ title, value, icon, color = "bg-primary/10" }: StatCardProps) => {
  return (
    <Card className="shadow-soft card-hover border-primary/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium text-primary">{title}</CardTitle>
        <div className={cn("p-2 rounded-full text-primary", color)}>{icon}</div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-primary">{value}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;


import { BookOpen, Clock, BarChart2, Award } from "lucide-react";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";

const Dashboard = () => {
  // Sample data for stats
  const stats = [
    {
      title: "Courses in Progress",
      value: "3",
      icon: <BookOpen className="h-4 w-4 text-primary" />,
      color: "bg-primary/10"
    },
    {
      title: "Hours Learned",
      value: "27",
      icon: <Clock className="h-4 w-4 text-blue-500" />,
      color: "bg-blue-100"
    },
    {
      title: "Learning Streak",
      value: "14 days",
      icon: <BarChart2 className="h-4 w-4 text-green-500" />,
      color: "bg-green-100"
    },
    {
      title: "Achievements",
      value: "7",
      icon: <Award className="h-4 w-4 text-amber-500" />,
      color: "bg-amber-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header username="Alex" />
      
      <main className="container px-4 py-6 md:px-6 max-w-7xl mx-auto pb-20 md:pb-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Learning Stats</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Learning Progress</h2>
          
          <div className="bg-white rounded-xl shadow-soft p-6 border h-64 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BarChart2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Learning Analytics Coming Soon</h3>
            <p className="text-center text-muted-foreground">
              We're working on detailed learning analytics to help you track your progress.
              <br />
              Check back soon for personalized insights!
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Weekly Focus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-soft p-6 border">
              <h3 className="text-lg font-medium mb-4">Recommended Focus</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Complete Python Basics</h4>
                    <p className="text-sm text-gray-500">Finish the remaining 3 lessons in your Python course</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-green-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Start Machine Learning Project</h4>
                    <p className="text-sm text-gray-500">Begin your first hands-on machine learning project</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-amber-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Review Data Structures</h4>
                    <p className="text-sm text-gray-500">Revisit key concepts in data structures for stronger foundations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6 border">
              <h3 className="text-lg font-medium mb-4">Learning Milestones</h3>
              <div className="flex flex-col h-[calc(100%-2rem)] items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-pulse-light">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <p className="mb-2">Milestone tracking under development</p>
                <p className="text-sm text-muted-foreground">
                  Soon you'll be able to track your learning achievements and milestones here!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

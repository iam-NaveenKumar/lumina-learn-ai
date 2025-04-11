import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Learning = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'global' | 'local'>('all');
  
  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Python Programming Fundamentals",
      description: "Learn the basics of Python programming with hands-on examples and projects.",
      progress: 65,
      duration: "6 hours",
      lessons: 24,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
      tags: ["Python"],
      type: "global"
    },
    {
      id: 2,
      title: "Machine Learning Essentials",
      description: "Understand key concepts in machine learning and build your first models.",
      progress: 32,
      duration: "8 hours",
      lessons: 16,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      tags: ["ML"],
      type: "global"
    },
    {
      id: 3,
      title: "Web Development with React",
      description: "Build modern, reactive web applications with React.js.",
      progress: 18,
      duration: "10 hours",
      lessons: 32,
      image: "https://images.unsplash.com/photo-1488590528505-98d2a5aee158?w=800&auto=format&fit=crop",
      tags: ["React"],
      type: "local"
    },
    {
      id: 4,
      title: "Data Science for Beginners",
      description: "Start your journey in data science with essential tools and techniques.",
      progress: 8,
      duration: "12 hours",
      lessons: 28,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      tags: ["Data"],
      type: "local"
    }
  ];
  
  // Filter courses based on selected filter
  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.type === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container px-4 py-6 md:px-6 max-w-7xl mx-auto pb-20 md:pb-6">
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-semibold text-gray-800">My Learning</h2>
            <div className="flex items-center space-x-2">
              <Button
                variant={activeFilter === 'all' ? "default" : "outline"}
                className={cn(
                  "rounded-full",
                  activeFilter === 'all' ? "bg-primary hover:bg-primary-dark" : ""
                )}
                onClick={() => setActiveFilter('all')}
              >
                All Courses
              </Button>
              <Button
                variant={activeFilter === 'global' ? "default" : "outline"}
                className={cn(
                  "rounded-full",
                  activeFilter === 'global' ? "bg-primary hover:bg-primary-dark" : ""
                )}
                onClick={() => setActiveFilter('global')}
              >
                Global Learning
              </Button>
              <Button
                variant={activeFilter === 'local' ? "default" : "outline"}
                className={cn(
                  "rounded-full",
                  activeFilter === 'local' ? "bg-primary hover:bg-primary-dark" : ""
                )}
                onClick={() => setActiveFilter('local')}
              >
                Local Learning
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                progress={course.progress}
                duration={course.duration}
                lessons={course.lessons}
                image={course.image}
                tags={course.tags}
                type={course.type as 'global' | 'local'}
              />
            ))}
          </div>
        </section>
        
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Recommended Courses</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="col-span-full">
              <div className="bg-white rounded-xl shadow-soft p-6 border">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
                      <path d="M12 22V8"></path>
                      <path d="m2 10 10-8 10 8"></path>
                      <path d="M4 22v-7"></path>
                      <path d="M20 22v-7"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Personalized Recommendations Coming Soon</h3>
                  <p className="text-center text-muted-foreground max-w-lg mx-auto">
                    We're building a smart recommendation engine to suggest courses tailored to your interests and learning style.
                    Check back soon for personalized course recommendations!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Learning;

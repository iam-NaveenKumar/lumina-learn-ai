import { useState } from "react";
import NewsCard from "@/components/NewsCard";

const Home = () => {
  const [username, setUsername] = useState("User");
  
  // Mock tech news data
  const techNews = [
    {
      id: 1,
      title: "New AI Model Breaks Records in Language Understanding",
      description: "Researchers have developed a new AI model that outperforms humans in complex language understanding tasks, setting new benchmarks in natural language processing.",
      date: "April 5, 2025",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Quantum Computing Reaches New Milestone",
      description: "Scientists have achieved a breakthrough in quantum computing, successfully maintaining quantum coherence for over 10 minutes, a significant advancement for practical quantum applications.",
      date: "April 3, 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Tech Companies Partner on Climate Initiative",
      description: "Major tech companies announced a joint initiative to reduce carbon emissions in data centers by 50% within the next five years through innovative cooling technologies and renewable energy.",
      date: "April 2, 2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "New Programming Language Aims to Simplify Machine Learning",
      description: "A team of developers has released a new programming language specifically designed to make machine learning more accessible to programmers without specialized AI training.",
      date: "March 30, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container px-4 py-6 md:px-6 max-w-7xl mx-auto pb-20 md:pb-6">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Latest Tech News</h2>
            <button className="text-primary hover:text-primary-dark text-sm font-medium">View All</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techNews.map((news) => (
              <NewsCard
                key={news.id}
                title={news.title}
                description={news.description}
                date={news.date}
                image={news.image}
              />
            ))}
          </div>
        </section>
        
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Recommended for You</h2>
            <button className="text-primary hover:text-primary-dark text-sm font-medium">View All</button>
          </div>
          
          <div className="bg-white rounded-xl shadow-soft p-6 border">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop"
                  alt="Recommended learning"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Get Started with AI in 2025</h3>
                <p className="text-gray-600 mb-4">
                  Learn the fundamentals of artificial intelligence with our curated path. Start with basics 
                  and progress to advanced machine learning concepts with hands-on projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Difficulty</p>
                    <p className="font-medium">Beginner-Friendly</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">8 Weeks</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Projects</p>
                    <p className="font-medium">4 Hands-on</p>
                  </div>
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-light transition-colors button-hover">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

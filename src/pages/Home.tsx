import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { GraduationCap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Learn Without Limits
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Master new skills with expert-led courses. Start your learning journey today.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Popular Courses</h2>
            <p className="text-muted-foreground">
              Explore our most popular courses and start learning today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

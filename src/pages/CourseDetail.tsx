import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ProgressBar";
import { ArrowLeft, Clock, Users, BookOpen, CheckCircle2, Circle } from "lucide-react";
import { toast } from "sonner";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem(`course-${courseId}-progress`);
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, [courseId]);

  useEffect(() => {
    // Save progress to localStorage
    localStorage.setItem(`course-${courseId}-progress`, JSON.stringify(completedLessons));
  }, [completedLessons, courseId]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const progress = (completedLessons.length / course.lessons.length) * 100;

  const toggleLesson = (lessonId: string) => {
    setCompletedLessons((prev) => {
      if (prev.includes(lessonId)) {
        toast.info("Lesson marked as incomplete");
        return prev.filter((id) => id !== lessonId);
      } else {
        toast.success("Lesson completed! Keep going!");
        return [...prev, lessonId];
      }
    });
  };

  const completeCourse = () => {
    if (completedLessons.length === course.lessons.length) {
      toast.success("🎉 Congratulations! Course completed!");
    } else {
      toast.error("Please complete all lessons first");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-gradient-primary py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to courses
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                {course.level}
              </Badge>
              <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-lg text-white/90 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 text-white/90 text-sm mb-6">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {course.enrolled.toLocaleString()} enrolled
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {course.lessons.length} lessons
                </div>
              </div>

              <p className="text-white/80">Instructor: {course.instructor}</p>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <ProgressBar value={progress} className="mb-8" />

          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-bold">Course Lessons</h2>
              <p className="text-muted-foreground">
                Click on a lesson to mark it as complete
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {course.lessons.map((lesson, index) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => toggleLesson(lesson.id)}
                      className="w-full text-left"
                    >
                      <Card className={`transition-all hover:shadow-md ${
                        isCompleted ? "bg-primary/5 border-primary/20" : ""
                      }`}>
                        <CardContent className="flex items-center gap-4 p-4">
                          {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
                          ) : (
                            <Circle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                          )}
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium text-muted-foreground">
                                Lesson {index + 1}
                              </span>
                              {isCompleted && (
                                <Badge variant="outline" className="text-xs border-success text-success">
                                  Completed
                                </Badge>
                              )}
                            </div>
                            <h3 className={`font-semibold ${isCompleted ? "text-muted-foreground" : ""}`}>
                              {lesson.title}
                            </h3>
                          </div>

                          <div className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {lesson.duration}
                          </div>
                        </CardContent>
                      </Card>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={completeCourse}
            disabled={completedLessons.length !== course.lessons.length}
            className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold text-lg h-12"
          >
            {completedLessons.length === course.lessons.length
              ? "Complete Course & Get Certificate"
              : `Complete ${course.lessons.length - completedLessons.length} more lesson${
                  course.lessons.length - completedLessons.length > 1 ? "s" : ""
                } to finish`}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;

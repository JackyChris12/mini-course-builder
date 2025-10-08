import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/course/${course.id}`} className="group block">
      <Card className="h-full overflow-hidden border-border shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {course.level}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Users className="w-3 h-3 mr-1" />
              {course.enrolled.toLocaleString()}
            </div>
          </div>
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {course.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {course.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <BookOpen className="w-3 h-3 mr-1" />
              {course.lessons.length} lessons
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-border pt-4">
          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}

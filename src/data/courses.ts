export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  enrolled: number;
  lessons: Lesson[];
  thumbnail: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites from scratch.",
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    level: "Beginner",
    enrolled: 2341,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    lessons: [
      { id: "1-1", title: "Introduction to HTML", duration: "45 min", completed: false },
      { id: "1-2", title: "CSS Styling Basics", duration: "52 min", completed: false },
      { id: "1-3", title: "JavaScript Fundamentals", duration: "68 min", completed: false },
      { id: "1-4", title: "Building Your First Website", duration: "90 min", completed: false },
      { id: "1-5", title: "Responsive Design Principles", duration: "55 min", completed: false },
    ],
  },
  {
    id: "2",
    title: "React.js Masterclass",
    description: "Master React and build powerful, interactive web applications with modern best practices.",
    instructor: "Michael Chen",
    duration: "10 weeks",
    level: "Intermediate",
    enrolled: 1876,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    lessons: [
      { id: "2-1", title: "React Basics & Components", duration: "60 min", completed: false },
      { id: "2-2", title: "State Management with Hooks", duration: "72 min", completed: false },
      { id: "2-3", title: "React Router & Navigation", duration: "48 min", completed: false },
      { id: "2-4", title: "API Integration", duration: "65 min", completed: false },
      { id: "2-5", title: "Advanced Patterns & Performance", duration: "80 min", completed: false },
    ],
  },
  {
    id: "3",
    title: "Python for Data Science",
    description: "Dive into data analysis and machine learning using Python, pandas, and scikit-learn.",
    instructor: "Dr. Emily Rodriguez",
    duration: "12 weeks",
    level: "Intermediate",
    enrolled: 3102,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
    lessons: [
      { id: "3-1", title: "Python Basics for Data Science", duration: "55 min", completed: false },
      { id: "3-2", title: "NumPy & Pandas Essentials", duration: "70 min", completed: false },
      { id: "3-3", title: "Data Visualization", duration: "58 min", completed: false },
      { id: "3-4", title: "Statistical Analysis", duration: "75 min", completed: false },
      { id: "3-5", title: "Machine Learning Fundamentals", duration: "95 min", completed: false },
    ],
  },
  {
    id: "4",
    title: "UI/UX Design Principles",
    description: "Create beautiful, user-centered designs that delight users and solve real problems.",
    instructor: "Alex Turner",
    duration: "6 weeks",
    level: "Beginner",
    enrolled: 1654,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    lessons: [
      { id: "4-1", title: "Design Thinking Basics", duration: "40 min", completed: false },
      { id: "4-2", title: "User Research Methods", duration: "50 min", completed: false },
      { id: "4-3", title: "Wireframing & Prototyping", duration: "62 min", completed: false },
      { id: "4-4", title: "Visual Design Principles", duration: "55 min", completed: false },
      { id: "4-5", title: "Usability Testing", duration: "48 min", completed: false },
    ],
  },
  {
    id: "5",
    title: "Advanced Node.js Backend",
    description: "Build scalable, production-ready backend systems with Node.js, Express, and databases.",
    instructor: "James Wilson",
    duration: "10 weeks",
    level: "Advanced",
    enrolled: 987,
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    lessons: [
      { id: "5-1", title: "Node.js Architecture", duration: "65 min", completed: false },
      { id: "5-2", title: "RESTful API Design", duration: "70 min", completed: false },
      { id: "5-3", title: "Database Integration", duration: "80 min", completed: false },
      { id: "5-4", title: "Authentication & Security", duration: "75 min", completed: false },
      { id: "5-5", title: "Deployment & Scaling", duration: "85 min", completed: false },
    ],
  },
  {
    id: "6",
    title: "Mobile App Development",
    description: "Create cross-platform mobile apps using React Native and modern development tools.",
    instructor: "Maria Garcia",
    duration: "9 weeks",
    level: "Intermediate",
    enrolled: 1432,
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
    lessons: [
      { id: "6-1", title: "React Native Setup", duration: "45 min", completed: false },
      { id: "6-2", title: "Core Components", duration: "60 min", completed: false },
      { id: "6-3", title: "Navigation & Routing", duration: "55 min", completed: false },
      { id: "6-4", title: "Native Device Features", duration: "70 min", completed: false },
      { id: "6-5", title: "Publishing Your App", duration: "50 min", completed: false },
    ],
  },
];

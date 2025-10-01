import myAvatar from "../public/myAvatar.png";
export const personalInfo = {
  name: "Varadraj Kini",
  title: "Full Stack Software Engineer",
  subtitle: "MS in Computer Science, USA",
  email: "varadrajkini88@gmail.com",
  phone: "+1 (302) 803-9711",
  location: "Greater Philadelphia Area, USA",
  github: "https://github.com/varad27042000",
  linkedin: "https://www.linkedin.com/in/kinivaradraj27/",
  avatar: myAvatar,
};

export const about = {
  description: [
    "Code, coffee, and curiosity! That’s my development stack. ",
    "I’m a Full Stack Software Engineer with a knack for turning messy problems into clean, scalable systems. I've built Production ready applications, SaaS platforms, AI-powered apps, and interfaces that feel effortless.",
    "Toolkit: Next.js, MERN, Java, Python, cloud-native, and not just these; I’m a quick study who’ll jump into any stack, from bleeding-edge to gloriously creaky legacy code. Superpower: writing code people actually enjoy using and maintaing!",
    "When I’m not debugging reality, I’m trading stocks, geeking out on algorithms, or playing guitar badly enough to stick to coding.",
  ],

  interests: [
    {
      title: "Code & Research",
      description:
        "Exploring data structures and algorithms while staying up-to-date with emerging technologies.",
      icon: "Code2",
    },
    {
      title: "Web Development",
      description:
        "High-quality development of Full-Stack Web Applications at the professional level.",
      icon: "Globe",
    },
    {
      title: "Trading & Investments",
      description: "Stock Market Investment and Trading in Equities, F&O.",
      icon: "TrendingUp",
    },
    {
      title: "Guitarist",
      description:
        "I enjoy playing romantic melodies on the guitar, bringing emotion and warmth to my music.",
      icon: "Music",
    },
  ],
};

export const skills = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 85 },
  { name: "Java", level: 80 },
  { name: "MongoDB", level: 85 },
  { name: "PostgreSQL", level: 85 },
  { name: "AWS/GCP", level: 75 },
  { name: "Docker", level: 80 },
];

export const experience = [
  {
    company: "Vestra",
    location: "New Jersey",
    position: "Founding Full Stack Engineer",
    period: "2024 — Present",
    achievements: [
      "Architected and scaled a multi-tenant SaaS platform using Next.js, TypeScript, and MongoDB, enabling onboarding of 3+ brokerage clients and reducing code duplication by over 40% through modular design.",
      "Built internal admin tools and reusable component libraries using shadcn/ui, improving developer productivity.",
      "Integrated secure, role-based authentication with NextAuth.js and streamlined data validation with React Hook Form + Zod, cutting user-facing form errors by over 60% during onboarding and daily operations.",
    ],
  },
  {
    company: "KeelWorks",
    location: "Oak Harbor",
    position: "SDE & Front End Team Lead",
    period: "2024",
    achievements: [
      "Led and mentored a team of 3+ frontend developers, conducting 13+ code reviews every sprint to ensure code quality.",
      "Developed and optimized applications using React.js with TypeScript, Node.js, and MySQL, improving initial load times by up to 40%.",
      "Applied CI/CD practices with GitHub Actions to support efficient software deployment and ensure reliable production rollouts.",
      "Developed and maintained a suite of Playwright tests to validate UI layout, contributing to early detection of rendering issues.",
    ],
  },
  {
    company: "FulcrumGT",
    location: "Chicago",
    position: "Software Engineer",
    period: "2023 — 2024",
    achievements: [
      "Built and maintained robust web applications for the legal industry using Next.js, Java, and PostgreSQL.",
      "Designed, developed, and deployed Java-based RESTful services using Spring Boot, JPA, and Hibernate for backend business logic and data persistence.",
      "Applied MVC design patterns and implemented authentication and authorization layers using Spring Security.",
      "Contributed to deployment of microservices on GCP using Compute Engine for server management and Cloud Storage for persistent file handling.",
    ],
  },
  {
    company: "The Sparks Foundation",
    location: "India",
    position: "Web Developer Intern",
    period: "2022 (3 Months)",
    achievements: [
      "Built a banking web app for 25+ users using HTML5, CSS3, JS and MySQL with customer and transaction features.",
      "Applied machine learning techniques such as linear regression and decision trees for exploratory data analysis and score prediction on customer transaction data using Python and Pandas.",
    ],
  },
  {
    company: "Freelance",
    location: "India",
    position: "Web Developer",
    period: "2022 (9 Months)",
    achievements: [
      "Managed end-to-end WordPress development, including custom themes, plugins, and Elementor-based designs, improving site efficiency by 40%.",
      "Styled and enhanced 10+ landing pages using Bootstrap, Tailwind CSS, and Material UI, ensuring cross-browser compatibility and mobile responsiveness.",
      "Provided website maintenance, debugging, and performance enhancements, reducing load times by 45% and improving security with SSL and database optimizations.",
      "Collaborated with 5+ clients, gathering requirements, designing solutions, and delivering high-quality projects within deadlines.",
    ],
  },
];

export const projects = [
  {
    title: "Doctor Appointment System",
    category: "Full Stack",
    description:
      "Developed a scalable appointment scheduling system for doctors and patients with user authentication, doctor availability tracking, and patient history logs.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
    image:
      "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Hulu Clone",
    category: "Full Stack",
    description:
      "Designed and developed a responsive web application to stream movies & TV shows with TMDB API integration for real-time data fetching.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "TMDB API"],
    image:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "AI-Powered Resume Analyzer",
    category: "AI/ML",
    description:
      "Developed an AI-powered platform for resume analysis, feedback generation, and ATS score prediction with FastAPI backend and OpenAI integration.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "FastAPI",
      "OpenAI API",
    ],
    image:
      "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "URL Shortener",
    category: "Full Stack",
    description:
      "Designed and developed a RESTful API for generating and managing shortened URLs with a frontend interface for real-time link generation.",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "PostgreSQL",
      "Docker",
      "GCP",
    ],
    image:
      "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Fake News Detector",
    category: "AI/ML",
    description:
      "Engineered a full-stack web application that detects fake news articles using NLP-based AI models with OpenAI/BERT integration.",
    technologies: [
      "React.js",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "OpenAI API",
      "RoBERTa",
      "Docker",
    ],
    image:
      "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Speech Emotion Recognition",
    category: "AI/ML",
    description:
      "Machine learning model that identifies different emotions like happy, sad, surprised, angry from audio data for security systems and call centers.",
    technologies: ["Python", "librosa", "RAVDESS dataset", "sklearn"],
    image:
      "https://images.pexels.com/photos/8190804/pexels-photo-8190804.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Stock Market Prediction",
    category: "AI/ML",
    description:
      "UI with a list of stocks for investors where users can select stocks and view future trend predictions based on historical data using LSTM and RNN.",
    technologies: ["LSTM", "RNN", "HTML", "CSS", "JavaScript", "Python"],
    image:
      "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const education = [
  {
    institution: "University Of Delaware, USA",
    degree: "MS In Computer & Information Science",
    period: "2022 — 2024",
    coursework:
      "Algorithm Design and Analysis, Game Theory, Artificial Intelligence, Intro to Data Mining, Accessible Computing, Operating Systems, Computer System Architecture, Computer Networks",
  },
  {
    institution: "University Of Mumbai, India",
    degree: "BTech In Information Technology",
    period: "2018 — 2022",
    coursework:
      "Data Structure and Algorithm, Advanced Cyber Security, Big Data Theory, Database System & Management, Cloud Computing and Services",
  },
];

export const certifications = [
  "Diploma In Secure MERN Stack Development",
  "Techniques For Improving The Effectiveness Of RAG Systems - NVIDIA",
  "Capstone: Retrieving, Processing, And Visualizing Data With Python - University Of Michigan",
  "The Complete SQL Course: Become a MYSQL Master - Udemy",
  "Java Full Stack Development - Udemy",
];

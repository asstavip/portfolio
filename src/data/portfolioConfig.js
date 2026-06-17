// ============================================================
// 🎯 PORTFOLIO CONFIG — Edit this file to update your portfolio
// ============================================================

export const PROFILE = {
  name: "SHADOW",
  nameAccent: "STRIKE",
  title: "Mobile Developer & AI Engineer",
  tagline: "I craft digital experiences that combine design, code, and storytelling.",
  heroImage: "/hero.png",
  resumeUrl: "#", // Link to your resume PDF
  quote: {
    text: "Design is not just what it looks like, but how it works.",
    author: "Steve Jobs",
  },
  availableFor: "Freelance",
  established: "2020",
  location: "Digital World",
};

export const NAV_LINKS = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT = {
  heading: "About Me",
  highlight: "I'm a Mobile Developer & AI Engineer",
  description:
    "Passionate about creating powerful mobile experiences and leveraging AI to solve real-world problems. I build cross-platform apps with Flutter and integrate intelligent features using modern LLM tools and cloud services.",
  bullets: [
    "Mobile Development",
    "AI / LLM Integration",
    "Cloud & Backend",
    "UI/UX Design",
  ],
};

export const SKILLS = [
  { name: "Flutter", icon: "🦋", level: 90 },
  { name: "Dart", icon: "🎯", level: 85 },
  { name: "C", icon: "⚙️", level: 75 },
  { name: "Python", icon: "🐍", level: 80 },
  { name: "Firebase", icon: "🔥", level: 85 },
  { name: "AI / LLM", icon: "🤖", level: 78 },
];

export const PROJECTS = [
  {
    id: 1,
    title: "CyberFit",
    category: "Mobile App",
    description:
      "A futuristic fitness tracking application with real-time health monitoring, AI-powered workout recommendations, and a sleek dark interface.",
    image: "/project1.png",
    tags: ["Flutter", "Firebase", "AI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Aether AI",
    category: "Dashboard",
    description:
      "An advanced AI analytics dashboard featuring predictive models, neural traffic monitoring, and real-time anomaly detection.",
    image: "/project2.png",
    tags: ["Python", "React", "LLM"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Neon Arcade",
    category: "E-Commerce",
    description:
      "A cyberpunk-themed e-commerce platform with dynamic product cards, wishlist functionality, and immersive shopping experience.",
    image: "/project3.png",
    tags: ["Flutter", "Dart", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const EXPERIENCE = [
  {
    type: "work",
    title: "Mobile Developer",
    organization: "Tech Corp",
    period: "2023 — Present",
    description:
      "Building cross-platform mobile applications using Flutter and integrating AI-powered features for enhanced user experiences.",
  },
  {
    type: "work",
    title: "Freelance Developer",
    organization: "Self-Employed",
    period: "2021 — 2023",
    description:
      "Delivered 10+ mobile and web projects for clients worldwide, specializing in Flutter development and Firebase backend integration.",
  },
  {
    type: "education",
    title: "Computer Science",
    organization: "University",
    period: "2019 — 2023",
    description:
      "Bachelor's degree in Computer Science with focus on mobile computing, artificial intelligence, and software engineering.",
  },
];

export const CONTACT = {
  heading: "Get In Touch",
  description:
    "Have a project in mind or just want to connect? Feel free to reach out — I'm always open to new opportunities and collaborations.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

export const FOOTER = {
  text: `© ${new Date().getFullYear()} ShadowStrike. All rights reserved.`,
};

// ============================================================
// 🎯 PORTFOLIO CONFIG — Edit this file to update your portfolio
// ============================================================

export const PROFILE = {
  firstName: "ABDERRAHMANE",
  lastName: "EL BISSARI",
  title: "Flutter Developer & AI Explorer",
  tagline:
    "I build reliable cross-platform apps and explore how AI/LLMs fit into modern development workflows.",
  resumeUrl: "/cv.pdf", // Place your CV PDF in /public/cv.pdf
  email: "abdo.bissari@gmail.com",
  phone: "+212 706 313 526",
  availableFor: "Internship",
  location: "Marrakech, Morocco",
  school: "1337 — UM6P",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT = {
  heading: "About Me",
  highlight: "Flutter Developer & AI Explorer",
  description:
    "Flutter Developer with hands-on professional experience building cross-platform mobile applications (iOS/Android). Strong foundation in Python and C through rigorous systems programming at 1337 — UM6P, with active exploration of AI and LLM-based tools in development workflows. Familiar with REST API design and consumption, Firebase ecosystem, and backend integration. Detail-oriented, analytical, and fully remote-ready.",
  bullets: [
    "Cross-Platform Mobile (Flutter/Dart)",
    "AI / LLM Integration",
    "REST APIs & Firebase Backend",
    "Systems Programming (C/Python)",
  ],
};

export const SKILLS = [
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "AI / LLM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AquaManage",
    category: "Mobile App",
    description:
      "Water consumption & billing management app built with Flutter, MVVM architecture, Cubit state management, and local API integration. Full UI state transitions across feature modules.",
    image: "/project1.png",
    tags: ["Flutter", "MVVM", "Cubit", "REST API"],
    liveUrl: "",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "PDF Quizzer",
    category: "Mobile App",
    description:
      "App that converts PDF content into MCQ and True-or-False quizzes with dynamic question generation. Validated parsing accuracy across various PDF formats.",
    image: "/project2.png",
    tags: ["Flutter", "Dart", "AI"],
    liveUrl: "",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Tut App",
    category: "Mobile App",
    description:
      "Modular Flutter app built with Clean Architecture and full REST API integration. Tested endpoint contracts and verified UI behaviour against API responses.",
    image: "/project3.png",
    tags: ["Flutter", "Clean Arch", "REST API"],
    liveUrl: "",
    githubUrl: "#",
  },
];

export const EXPERIENCE = [
  {
    type: "work",
    title: "WordPress & Flutter Developer",
    organization: "M5Tech Company",
    period: "June 2025 — Aug 2025",
    location: "Marrakech, Morocco",
    description:
      "Designed and shipped a full client project: Flutter mobile app + WordPress web platform. Validated REST API integration end-to-end, ensured cross-platform performance on iOS/Android, and collaborated with designers following Agile/Scrum.",
  },
  {
    type: "Internship",
    title: "Flutter & Web Developer — Internship",
    organization: "M5Tech Company",
    period: "April 2025 — May 2025",
    location: "Marrakech, Morocco",
    description:
      "Led Flutter app development with Node.js backend integration and REST API consumption. Manually tested API endpoints using Postman and delivered production-ready modules with clean architecture.",
  },
  {
    type: "education",
    title: "Software Engineering Program",
    organization: "1337 Coding School — UM6P",
    period: "2025 — Present",
    location: "Rabat, Morocco",
    description:
      "Intensive software engineering program focused on C, Python, systems programming, and algorithms. Projects: Libft, get_next_line, ft_printf, Born2beroot, push_swap.",
  },
  {
    type: "education",
    title: "Diploma in Mobile Applications Development",
    organization: "ISTA NTIC Sidi Youssef Ben Ali",
    period: "2023 — 2025",
    location: "Marrakech, Morocco",
    description:
      "Graduated with High Honors. Specialized in mobile app development with Flutter, Dart, and modern development practices.",
  },
];

export const CONTACT = {
  heading: "Get In Touch",
  description:
    "Have a project in mind or want to discuss an internship opportunity? Feel free to reach out — I'm always open to new challenges and collaborations.",
  email: "abdo.bissari@gmail.com",
  github: "https://github.com/asstavip",
  linkedin: "https://linkedin.com/in/abderrahmane-el-bissari",
};

export const FOOTER = {
  text: `© ${new Date().getFullYear()} Abderrahmane El Bissari. All rights reserved.`,
};

export const PROJECTS_42 = [
  {
    name: "Libft",
    description: "My first C library. A ground-up recreation of various standard C library functions, emphasizing memory management and algorithm optimization.",
    tags: ["C", "Memory Management", "Algorithms"],
    score: "125%",
    githubUrl: "#",
  },
  {
    name: "get_next_line",
    description: "A function that reads a file line by line. Introduced the concept of static variables and robust File I/O handling in C.",
    tags: ["C", "File I/O", "Static Variables"],
    score: "125%",
    githubUrl: "#",
  },
  {
    name: "ft_printf",
    description: "A fully functional recreation of the famous C printf function, exploring variadic arguments and complex string parsing.",
    tags: ["C", "Variadic Functions", "Parsing"],
    score: "100%",
    githubUrl: "#",
  },
  {
    name: "Born2beroot",
    description: "System administration project requiring the setup of a secure Virtual Machine with Debian, strict UFW firewall, and LVM partitions.",
    tags: ["SysAdmin", "Linux", "Bash"],
    score: "100%",
    githubUrl: "#",
  },
  {
    name: "push_swap",
    description: "A highly optimized data sorting algorithm project using only two stacks and a strictly limited set of stack operations.",
    tags: ["C", "Sorting Algorithms", "Optimization"],
    score: "100%",
    githubUrl: "#",
  }
];

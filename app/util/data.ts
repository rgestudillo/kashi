export interface Project {
  title: string;
  description: string;
  link: string;
  type?: string,
}

export const projects: Project[] = [
  {
    title: "Folderly",
    description: "Folderly is a Flutter-based application designed to simplify and enhance the academic experience for students with AI Technology.",
    link: "https://folderly.online/",
    type: "mobile",
  },
  {
    title: "ENTERn",
    description: "A Flutter-based application leveraging GPT-4 API to analyze data, aimed at assisting inexperienced students in finding internships and entering the industry.",
    link: "", 
    type: "mobile",
  },
  {
    title: "a2z Ideas",
    description: "A Flutter-based platform designed to connect users with businesses, facilitating the sharing of dating ideas and the promotion of businesses.",
    link: "https://github.com/rgestudillo/a2z", 
    type: "mobile",
  },
  {
    title: "NPA Compiler",
    description: "A full-stack web application programming language compiler. It offers dynamic syntax for flexible coding, a compiler certification tool, and a time complexity calculator to optimize algorithm efficiency.",
    link: "https://npa.debmac.tech/", 
    type: "web",
  },
  {
    title: "Gauss-Jordan Calculator",
    description: "A web app that integratesGauss-Jordan elimination-based calculator for solving systems of linear equations up to 3 unknowns and 4 equations. Fast, accurate, and hassle-free.",
    link: "https://gauss-jordan.vercel.app/", 
    type: "web",
  },
  {
    title: "Flower Language",
    description: "A web app to create flowers based on your name.",
   link: "https://flower-language.vercel.app/",
   type: "web",
  },
  {
    title: "Alpha Beta Pruning",
    description: "A web app for 1v1 gameplay between a user and AI, where the first to form a letter wins using alpha-beta pruning.",
    link: "https://alphaword.debmac.tech/",
    type: "ai",
  },
  {
    title: "AI Search and Logic Backend",
    description: "A web app to demonstrate the backend in search and logic from the word game.",
    link: "https://debmac-searchlogic.vercel.app/",
    type: "ai",
  },
  {
    title: "1v1 Word Game",
    description: "A web app for 1v1 gameplay where the first to guess the word wins.",
    link: "https://sushi.debmac.tech/",
    type: "ai",
  },
  {
    title: "File Explorer",
    description: "A web app that uses voice recognition in a file explorer.",
    link: "https://debmac-phase-1.vercel.app/editor",
    type: "web",
  },

  {
    title: "Hatud",
    description: "A mobile-friendly web application developed using JavaScript, HTML, and CSS, seamlessly integrated with external APIs such as OpenStreetMap for precise school bus tracking and accurate real-time updates.",
    link: "https://hatud.netlify.app/", 
    type: "web",
  },
];

export const experience = [
  {
    title: "Folderly",
    position: "Full-Stack Lead Developer",
    time: "Dec, 2023 - Present",
    location: "Cebu City",
    description:
      "Led full-stack development of Folderly platform with AI-driven flashcards for study efficiency and managed database integrity, performance, and security, optimizing costs with Google Cloud Platform hosting.",
    tech: [
      "Dart",
      "Flutter",
      "Firebase",
      "Google Cloud Platform",

    ],
  },
  {
    title: "NCR Atleos",
    position: "Research and Development Intern",
    time: "Jun, 2023 - Sep, 2023",
    location: "Cebu City",
    description:
      "Implemented a cybersecurity solution that integrates AI and real-time surveillance to enhance ATM security.",
    tech: ["Python", "AI", "Computer Vision", "Data Science"],
  },
  {
    title: "Solana",
    position: "Freelance Web3 Developer",
    time: "2021 - 2023",
    location: "Remote",
    description:
      "Developed Solana minting web app with presale features and landing pages to attract users and investors.",
    tech: ["Cryptocurrency", "Web3" ,"Rust", "Next JS", "React JS"],
  },
  {
    title: "CuteVPN",
    position: "Founder and Sole Developer",
    time: "2020 - 2021",
    location: "Cebu City",
    description:
      "Enhanced OpenVPN Android app, developed Debian 9 auto-install script, and implemented remote MySQL solution for efficient client data management and security compliance.",
    tech: ["Android" , "Java", "Shell Script", "Digital Ocean"],
  },
  {
    title: "University of the Philippines",
    position: "Computer Science Student",
    time: "2021 - Present",
    location: "Cebu City",
    description:
      "1.4 GPA | National Scholar under DOST-SEI RA7687 Scholarship.",
    tech: [
      "C/C++",
      "Java",
      "Python",
      "RStudio",
      "Calculus",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [

  {
    title: "Gauss-Jordan Calculator",
    description: "Gauss-Jordan elimination-based calculator for solving systems of linear equations up to 3 unknowns and 4 equations. Fast, accurate, and hassle-free.",
    link: "https://gauss-jordan.vercel.app/", 
  },
  {
    title: "NPA Compiler",
    description: "A full-stack web application programming language compiler. It offers dynamic syntax for flexible coding, a compiler certification tool, and a time complexity calculator to optimize algorithm efficiency.",
    link: "https://npa.debmac.tech/", 
  },
  {
    title: "Flower Language",
    description: "A web app to create flowers based on your name.",
   link: "https://flower-language.vercel.app/"
  },
  {
    title: "Alpha Beta Pruning",
    description: "A web app for 1v1 gameplay between a user and AI, where the first to form a letter wins using alpha-beta pruning.",
    link: "https://alphaword.debmac.tech/"
  },
  {
    title: "AI Search and Logic Backend",
    description: "A web app to demonstrate the backend in search and logic from the word game.",
    link: "https://debmac-searchlogic.vercel.app/"
  },
  {
    title: "1v1 Word Game",
    description: "A web app for 1v1 gameplay where the first to guess the word wins.",
    link: "https://sushi.debmac.tech/"
  },
  {
    title: "File Explorer",
    description: "A web app that uses voice recognition in a file explorer.",
    link: "https://debmac-phase-1.vercel.app/editor"
  },
  {
    title: "a2z Ideas",
    description: "A platform designed to connect users with businesses, facilitating the sharing of dating ideas and the promotion of businesses.",
    link: "https://github.com/rgestudillo/a2z", 
  },
  {
    title: "ENTERn",
    description: "A Flutter-based application leveraging GPT-4 API to analyze data, aimed at assisting inexperienced students in finding internships and entering the industry.",
    link: "", 
  },
  {
    title: "Hatud",
    description: "A mobile-friendly web application developed using JavaScript, HTML, and CSS, seamlessly integrated with external APIs such as OpenStreetMap for precise school bus tracking and accurate real-time updates.",
    link: "https://hatud.netlify.app/", 
  },
];


export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Full-Stack Lead Developer",
    logo: "/company-logo.png",
    position: "",
    description: "Led full-stack development of Folderly platform with AI-driven flashcards for study efficiency and managed database integrity, performance, and security, optimizing costs with Google Cloud Platform hosting.",
    years: "Dec, 2023 - Present",
  },
  {
    company: "Cybersecurity Intern",
    logo: "/company-logo.png", 
    position: "",
    description: "Implemented a cybersecurity solution that integrates AI and real-time surveillance to enhance ATM security.",
    years: "Jun, 2023 - Sep, 2023",
  },
  {
    company: "Freelance Web3 Developer",
    logo: "/company-logo.png", 
    position: "Freelance Web3 Developer",
    description: "Developed Solana minting web app with presale features and landing pages to attract users and investors.",
    years: "2021 - 2023",
  },
  {
    company: "CuteVPN Founder",
    logo: "/company-logo.png", 
    position: "Founder and Sole Developer",
    description: "Enhanced OpenVPN Android app, developed Debian 9 auto-install script, and implemented remote MySQL solution for efficient client data management and security compliance.",
    years: "2020 - 2021",
  },
  {
    company: "Computer Science Student ",
    logo: "/company-logo.png", 
    position: " ",
    description: "University of the Philippines - Cebu | 1.4 GPA | National Scholar under DOST-SEI RA7687 Scholarship",
    years: "2021 - Present",
  },
];


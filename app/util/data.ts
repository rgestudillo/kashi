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
    tech: ["Cryptocurrency", "Web3", "Rust", "Next JS", "React JS"],
  },
  {
    title: "CuteVPN",
    position: "Founder and Sole Developer",
    time: "2020 - 2021",
    location: "Cebu City",
    description:
      "Enhanced OpenVPN Android app, developed Debian 9 auto-install script, and implemented remote MySQL solution for efficient client data management and security compliance.",
    tech: ["Android", "Java", "Shell Script", "Digital Ocean"],
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


export interface Blog {
  title: string;
  date: string;
  content: string;
  slug: string;
}

export const blogs: Blog[] = [
  {
    title: "I AM HYPOCRITE",
    date: "2024-06-12",
    content: "I never thought I'd pursue a career related to technology. Ever since I was a kid, all I wanted to do was create an impact on society. I believe in the Ripple Effect; that the slightest good thing we do creates a ripple effect on other people. So, I dreamt of becoming an environmental lawyer. I was passionate about helping farmers, fishermen, and all those responsible for making the world a better place.\n\n And now, I feel like a hypocrite. Here I am, in technology. It struck me that I might not be able to fulfill those dreams since I will inevitably end up working for some corporate company. That's never what I wanted. I want to create an impact to make this world safer. \n\n But then, as I am studying in the field of Computer Science, I began to realize something. Technology isn't just about creating flashy gadgets or maximizing profits. It's a tool, a powerful one that can be wielded for the good of humanity. With the right mindset and the right projects, I could still make a difference.\n\nI started to focus on projects aimed at sustainability, developing apps to help farmers manage resources more efficiently, creating platforms to connect environmental activists, and even contributing to initiatives that used AI to tackle climate change.\n\n In this journey, I found that my passion for making the world a better place hadn't diminished; it had evolved. I may not be in a courtroom arguing for environmental justice, but I'm still fighting for the same cause, using a different set of tools.\n\n And as I saw the impact of my work grow, I realized that sometimes, the path to making a difference isn't always the one we envision, but it can be just as meaningful and impactful. My journey from aspiring environmental lawyer to tech advocate taught me that the most important thing is to never lose sight of the change you want to see in the world, no matter where life takes you.",
    slug: "hypocrite"
  },
  {
    title: "ASSHOLE THEORY",
    date: "2024-06-13",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    slug: "second-blog-post"
  },
  {
    title: "Third Blog Post",
    date: "2024-06-14",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    slug: "third-blog-post"
  },
  {
    title: "Fourth Blog Post",
    date: "2024-06-15",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    slug: "fourth-blog-post"
  },
  {
    title: "Fifth Blog Post",
    date: "2024-06-16",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
    slug: "fifth-blog-post"
  },
  // Add more blog posts as needed
];


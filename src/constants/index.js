// index.js
// src/constants/index.js

export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "I build modern, scalable web applications using clean architecture and practical engineering. From backend logic to responsive interfaces, I deliver solutions that are reliable, fast, and user‑focused.",
    items: [
      {
        title: "Frontend Development",
        description: "React, Vue, TypeScript, Interactive UI/UX",
        tech: [
          { name: "React", icon: "skill-icons:react-light" },
          { name: "Vue", icon: "skill-icons:vuejs-light" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "Next.js", icon: "skill-icons:nextjs-light" },
          { name: "Responsive UI/UX", icon: "/" },
        ],
      },
      {
        title: "Backend Development",
        description: "Python, Flask APIs, REST APIs, Authentication Systems, Node.js Services",
        tech: [
          { name: "Python", icon: "skill-icons:python-light" },
          { name: "Flask", icon: "skill-icons:flask-light" },
          { name: "Node.js", icon: "devicon-plain:nodejs-wordmark" },
          { name: "REST APIs", icon: "mdi:api" },
          { name: "Authentication Systems", icon: "mdi:lock-check" },
        ],
      },
      {
        title: "Database Design",
        description: "SQL/NoSQL, Growth-ready Structures, MongoDB",
        tech: [
          { name: "SQL", icon: "vscode-icons:file-type-sql" },
          { name: "NoSQL", icon: "mdi:database-outline" },
          { name: "MongoDB", icon: "skill-icons:mongodb" },
          { name: "Schema Design", icon: "material-symbols:schema" },
        ],
      },
    ],
  },
  {
    title: "Deployment & Optimization",
    description:
      "I streamline deployments and optimize performance so apps run smoothly and efficiently. From hosting to CI/CD, I ensure your product is stable and secure.",
    items: [
      {
        title: "CI/CD Workflows",
        description: "GitHub Actions, Docker, Automated Deployments",
        tech: [
          { name: "GitHub Actions", icon: "skill-icons:github-light" },
          { name: "Docker", icon: "skill-icons:docker" },
          { name: "Automated Builds & Deployments", icon: "" },
        ],
      },
      {
        title: "Server Management",
        description: "Linux, Nginx, Hosting & Maintenance",
        tech: [
          { name: "Linux", icon: "skill-icons:linux-light" },
          { name: "Nginx", icon: "logos:nginx" },
          { name: "Environment Setup", icon: "" },
          { name: "App Hosting", icon: "simple-icons:hostinger", },
        ],
      },
      {
        title: "Performance Tuning",
        description: "Caching, Compression, Faster Load Times",
        tech: [
          { name: "Caching", icon: "material-symbols:cached-rounded" },
          { name: "Compression", icon: "mdi:zip-box-outline" },
          { name: "Speed", icon: "line-md:speed-twotone-loop" },
        ],
      },
      {
        title: "Cloud Services",
        description: "AWS, Vercel, Netlify, Firebase Hosting",
        tech: [
          { name: "AWS", icon: "skill-icons:aws-light" },
          { name: "Vercel", icon: "skill-icons:vercel-light" },
          { name: "Netlify", icon: "skill-icons:netlify-light" },
          { name: "Firebase Hosting", icon: "logos:firebase" },
        ],
      },
    ],
  },
  {
    title: "Code Quality & Reliability",
    description:
      "I review and refine codebases to ensure maintainability, speed, and security. My focus is on delivering bug-free, future-ready solutions.",
    items: [
      {
        title: "Code Reviews",
        description: "Refactoring, Cleanup, Best Practices",
        tech: [
          { name: "Refactoring", icon: "mdi:code-tags-check" },
          { name: "Best Practices", icon: "mdi:check-decagram" },
          { name: "Cleanup", icon: "" },
        ],
      },
      {
        title: "Debugging",
        description: "Error Handling, Testing, Reliable Fixes",
        tech: [
          { name: "Error Handling", icon: "material-symbols:error-rounded" },
          { name: "Testing", icon: "mdi:test-tube" },
          { name: "Reliable Fixes", icon: "eos-icons:patch-fixes" },
        ],
      },
    ],
  },
  {
    title: "Web & Mobile Experiences",
    description:
      "I design apps that feel alive—responsive, intuitive, and culturally resonant. Whether web or mobile, I bridge design and functionality to deliver products people love to use.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "Web + Mobile with a single codebase",
        tech: [
          { name: "Web + Mobile with a single codebase", icon: "" },
        ],
      },
      {
        title: "E-Commerce Solutions",
        description: "Checkout flows, Payment Gateways, Inventory APIs",
        tech: [
          { name: "Checkout flows", icon: "" },
          { name: "Payment Gateways", icon: "" },
          { name: "Inventory APIs", icon: "mdi:package-variant" },
        ],
      },
      {
        title: "Animations & Interactivity",
        description: "GSAP, react‑three‑fiber, Motion Design",
        tech: [
          { name: "GSAP", icon: "simple-icons:gsap" },
          { name: "React Three Fiber", icon: "" },
          { name: "Motion Design", icon: "" },
        ],
      },
    ],
  },
];


export const projects = [
  {
    id: 1,
    name: "My Portfolio",
    description:
      "A personal portfolio showcasing immersive, theme-driven web experiences with GSAP animations, modular architecture, and recruiter-ready presentation.",
    href: "", 
    image: "/assets/projects/portfolio.png", 
    bgImage: "/assets/backgrounds/blanket.jpg", 
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Three.js" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];


export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/ajson_.dev?igsh=OGQ5ZDc2ODk2ZA==" },
  {
    name: "WhatsApp",
    href: "https://wa.me/254701949593", 
  },
  { name: "LinkedIn", href: "/" },
  { name: "GitHub", href: "https://github.com/alvin101-coder" },
  {
    name: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=alvinjason066@gmail.com",
  },
];
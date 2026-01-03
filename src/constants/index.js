import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  photoshop,
  threejs,
  craftshub,
  greenbot,
  nasa,
  taskmaster,
  fitness,
  bites,
  royalspoon,
  freeScribe,
  kaizpay,
  kzn,
  findcribs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: creator,
  },
  {
    title: "Three.js Developer",
    icon: backend,
  },
  {
    title: "Node.js Developer",
    icon: creator,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: web,
  },
  {
    title: "Express.js Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  
];

const experiences = [
  {
    title: "Web Developer Tutor",
    iconBg: "#FCE8E6",
    date: "October 2023 - Present",
    points: [
      "Mentored students in core web technologies including HTML, CSS, JavaScript, and React.js.",
    "Brokedown complex programming concepts into digestible lessons, improving student comprehension and project outcomes.",
    "Conducted code reviews and debugging sessions, teaching problem-solving strategies and best practices.",
    "Developed supplemental learning materials and practice projects to reinforce key concepts.",
    ],
  },
  {
    title: "Web Developer",
    iconBg: "#383E56",
    date: "July 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Designer",
    iconBg: "#E6DEDD",
    date: "June 2020 - Present",
    points: [
      "Designed logos, branding materials, and marketing content for various clients.",
      "Utilized tools like Adobe Photoshop and Illustrator for high-quality designs.",
      "Collaborated with clients to understand their vision and deliver tailored solutions.",
      "Managed multiple projects simultaneously, ensuring timely delivery.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    iconBg: "#383E56",
    date: "April 2020 - July 2020",
    points: [
       "Developed responsive and interactive user interfaces using modern frameworks like React.js and Next.js.",
    "Collaborated with UX designers and backend developers to translate wireframes into functional components.",
    "Wrote clean, maintainable code and participated in peer code reviews to ensure quality standards.",
    "Optimized web application performance, improving Lighthouse scores by implementing lazy loading and efficient state management.",
    ],
  },
  {
    title: "System Analyst",
    iconBg: "#E6DEDD",
    date: "Feb. 2020 - July 2022",
    points: [
      "Coordinated  cross-functional teams to deliver project on time, within budget, and to specification.",
      "Ensured effective communication and collaboration among team members and stakeholders.",
      "Fostered strong relationships with clients and team members to drive project success.",
      "Utilized project management skills to prioritize tasks, manage risks, and achieve project goals.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He consistently writes clean, reusable code — and his attention to accessibility is something I’ve really picked up from him. It’s always a pleasure pairing with Kaizen on components.",
    name: "Aisha Bello",
    company: "Freelance",
    service: "Frontend Developer",
    // image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "Dev Kaizen brings clarity to any codebase. His pull requests are thoughtful, and his approach to solving bugs is both methodical and efficient.",
    name: "Tunde Adedayo",
    company: "Freelance",
    service: "Full Stack Developer",
    // image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    testimonial:
      "Reliable, creative, and highly professional. Kaizen asks the right questions, understood our needs, and exceeds every expectation. Clients now comment on how intuitive our platform feels.",
    name: "Chijioke Cherish",
    company: "Web3 Aggregator",
    service: "UI/UX Designer",
    // image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    testimonial:
      "Kaizen’s work ethic is unmatched. He kept me in the loop, explained technical stuff clearly, and brought real energy to the project.",
    name: "Adeyemi Olayinka",
    company: "Freelance",
    service: "Creative Director",
    // image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "I was genuinely impressed with the website's clean layout, thoughtful color combinations, and a seamless user experience. My colleagues agreed: it’s both visually appealing and highly functional.",
    name: "Akintunde Abigail",
    company: "AIC Computer Institute",
    service: "Graphic Designer",
    // image: "https://randomuser.me/api/portraits/men/45.jpg",
  }
];


const projects = [
  {
    name: "TaskMaster",
    description:
    "A to-do list application that helps users manage tasks efficiently, with features like adding, editing, deleting tasks, and marking them as completed.",
  
    image: taskmaster,
    source_code_link: "https://github.com/adeisaac7/TaskMaster",

    live_link: 'https://kaizenlist.vercel.app'
  },
  {
    name: "SpaceVision",
    description:
    "A React-based NASA application that fetches and displays data from NASA's public APIs, including astronomical pictures, rover images, and mission information.",

    image: nasa,
    source_code_link: "https://github.com/adeisaac7/Space-Vision",

    live_link: 'https://spacevision.vercel.app'

  },
  {
    name: "Craftshub",
    description:
    "An artisan locator system that helps users find artisans based on location, allowing easy access to skilled workers for various services.",

    image: craftshub,
    source_code_link: "https://github.com/adeisaac7/E-commerce01",

    live_link: 'https://craftshub-frontend.vercel.app'

  },
  {
    name: "Kaizen Fit",
    description:
    "A fitness application that tracks workouts and progress, providing users with personalized fitness plans and performance analytics.",

    image: fitness,
    source_code_link: "https://github.com/adeisaac7/Kaizen-Fit",

    live_link: ''

  },
  {
    name: "GreenBot",
    description:
    "An intelligent virtual assistant designed to engage users in natural conversations, answer questions, and provide support across various topics and tasks.",


    image: greenbot,
    source_code_link: "https://github.com/adeisaac7/GREENBOT-react",
    
    live_link: 'https://greenbot-react.vercel.app'

  },
  {
    name: "Bites",
    description:
    "A sleek, conversion-focused landing page for a food delivery service, featuring responsive design, appetizing food visuals, and optimized call-to-action elements to drive user engagement.",

    image: bites,
    source_code_link: "https://github.com/adeisaac7/bites-landing-page",
    
    live_link: 'https://bites-page.vercel.app'

  },
  {
    name: "Royalspoon Food and Events",

    description:"A full-stack catering platform with Paystack payment integration, React-Email order confirmations, and responsive UI—built for seamless customer purchases.",

    image: royalspoon,
    source_code_link: "https://github.com/adeisaac7/RoyalSpoon-Food-and-Events",
    
    live_link: 'https://royalspoon-food-and-events.vercel.app'

  },
  {
    name: "FreeScribe",

    description: "A browser-based transcription and translation tool powered by machine learning. Built with React, it supports multiple languages and offers a responsive, distraction-free UI for seamless content conversion.",

    image: freeScribe,
    source_code_link: "https://github.com/adeisaac7/Free-Scribe",
    
    live_link: ''

  },
  {
    name: "KaizPay",

    description: "A browser-based transcription and translation tool powered by machine learning. Built with React, it supports multiple languages and offers a responsive, distraction-free UI for seamless content conversion.",

    image: kaizpay,
    source_code_link: "https://github.com/adeisaac7/KaizPay",
    
    live_link: ''

  },
  {
    name: "SaaS Landing Page",

    description: "A clean, modern, and conversion-optimized SaaS landing page template designed to showcase software products or startups. Built with React and Tailwind CSS, it features sleek user interface, responsive design, feature highlights, customer testimonials, and a clear call to action to drive sign-ups or conversions.",

    image: kzn,
    source_code_link: "https://github.com/adeisaac7/KZN-SaaS-Landing-Page",
    
    live_link: ''

  },
  {
    name: "FindCribs - Real Estate Marketplace",

    description: "A comprehensive full-stack real estate marketplace platform connecting property seekers with agents. Features property valuation, advanced search with natural language processing, property listings with rich media, user authentication, real-time notifications.",

    image: findcribs,
    source_code_link: "",
    
    live_link: 'https://findcribs.ng'

  },
];

export { services, technologies, experiences, testimonials, projects };

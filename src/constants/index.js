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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  photoshop,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  craftshub,
  greenbot,
  nasa,
  taskmaster,
  fitness,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
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
    title: "Web Developer",
    iconBg: "#383E56",
    date: "March 2019 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    iconBg: "#383E56",
    date: "Jan 2020 - Present",
    points: [
      "Developed dynamic and interactive web applications using React.js.",
      "Built reusable components and front-end libraries for future use.",
      "Worked with RESTful APIs to fetch and display data dynamically.",
      "Implemented state management solutions using Redux and Context API.",
    ],
  },
  {
    title: "Graphic Designer",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Designed logos, branding materials, and marketing content for various clients.",
      "Utilized tools like Adobe Photoshop and Illustrator for high-quality designs.",
      "Collaborated with clients to understand their vision and deliver tailored solutions.",
      "Managed multiple projects simultaneously, ensuring timely delivery.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TaskMaster",
    description:
    "A to-do list application that helps users manage tasks efficiently, with features like adding, editing, deleting tasks, and marking them as completed.",
  
    image: taskmaster,
    source_code_link: "https://github.com/adeisaac7/TaskMaster",
  },
  {
    name: "SpaceVision",
    description:
    "A React-based NASA application that fetches and displays data from NASA's public APIs, including astronomical pictures, rover images, and mission information.",

    image: nasa,
    source_code_link: "https://github.com/adeisaac7/Space-Vision",
  },
  {
    name: "Craftshub",
    description:
    "An artisan locator system that helps users find artisans based on location, allowing easy access to skilled workers for various services.",

    image: craftshub,
    source_code_link: "https://github.com/adeisaac7/E-commerce01",
  },
  {
    name: "Kaizen Fit",
    description:
    "A fitness application that tracks workouts and progress, providing users with personalized fitness plans and performance analytics.",

    image: fitness,
    source_code_link: "https://github.com/adeisaac7/Kaizen-Fit",
  },
  {
    name: "GreenBot",
    description:
    "An intelligent virtual assistant designed to engage users in natural conversations, answer questions, and provide support across various topics and tasks.",


    image: greenbot,
    source_code_link: "https://github.com/adeisaac7/GREENBOT-react",
  },
];

export { services, technologies, experiences, testimonials, projects };

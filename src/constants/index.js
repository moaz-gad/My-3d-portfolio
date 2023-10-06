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
  figma,
  docker,
  itzain,
  dv,
  basmetelhayat,
  paramount,
  dvwebsite,
  recoveryhub,
  infrafit,
  zilla,
  crewma,
  illuminate,
  amrsalah,
  shehab,
  threejs,
} from "../assets"

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
]

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Javascript Developer",
    icon: backend,
  },
  {
    title: "React Creator",
    icon: creator,
  },
]

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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "React Developer",
    company_name: "It Zain",
    icon: itzain,
    iconBg: "#fff",
    date: "Feb 2023 - Present",
    points: [
      "Developed HR system's UI using React, enhancing user experience.",
      "Collaborated on front-end tasks, translating designs into functional components.",
      "Supported seamless integration of responsive web elements for the HR system.",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Digital Vibes",
    icon: dv,
    iconBg: "#383E56",
    date: "May 2022 - Feb 2023",
    points: [
      "Developed and maintained over 10 projects for clients in various industries using React, jQuery, and advanced CSS.",
      "Collaborated with designers to ensure high-quality designs were implemented into all projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Gained experience in marketing by working with clients in the marketing industry, and incorporating marketing strategies into frontend development projects.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Moaz on several projects and I must say that he is one of the most talented developers I have ever worked with. His knowledge of front-end development is exceptional, and his ability to translate designs into clean, functional, and responsive code is impressive.",
    name: "Amr Salah",
    designation: "UI/UX designer",
    company: "",
    image: amrsalah,
  },
  {
    testimonial:
      "Working with Moaz was a remarkable experience. He brilliantly translated our ideas into a captivating website, showcasing his expertise and commitment. The seamless collaboration produced an impressive online presence for Illuminate.",
    name: "Shehab Alkaabi",
    designation: "Owner",
    company: "Of illuminateproductions",
    image: shehab,
  },
]

const projects = [
  {
    name: "Crewma",
    description: "Create all the website and the translation funcitionality",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: crewma,
    source_code_link: "https://crewma.com/",
  },
  {
    name: "Zilla design",
    description: "Create the frontend and form submission",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "WordPress",
        color: "green-text-gradient",
      },
      {
        name: "Cdn",
        color: "pink-text-gradient",
      },
    ],
    image: zilla,
    source_code_link: "https://zillads.com/",
  },
  {
    name: "Illuminate",
    description: "Create all the design and the animation of the website",
    tags: [
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
    ],
    image: illuminate,
    source_code_link: "https://illumin8production.com/",
  },
  {
    name: "Basmat-Elhayat",
    description:
      "I helped enhance the performance and resolve front-end issues for a United Arab Emirates-based beauty, treatment, and cosmetic dentistry center.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
    ],
    image: basmetelhayat,
    source_code_link: "https://basmatalhayat.com/",
  },
  {
    name: "paramount",
    description:
      "I optimized the front-end codebase and integrated a patient appointment booking form for this medical center.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: paramount,
    source_code_link: "https://paramountmedicalcenter.ae/",
  },
  {
    name: "Digital Vibes",
    description:
      "I created a custom-designed website for an e-marketing company, using custom widgets and utilizing JavaScript and CSS modifications to meet  the UI.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dvwebsite,
    source_code_link: "https://digitalvibesmarketing.com",
  },
  {
    name: "Recovery Hub",
    description:
      "I built a cosmetic and physiotherapy medical center, following UI design guidelines. Custom JavaScript and CSS improved both functionality and aesthetics.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: recoveryhub,
    source_code_link: "https://recoveryhub.ae",
  },
  {
    name: "Infrafit",
    description:
      "I performed a complete redesign of a sizable medical center's website in the Emirates, achieving significant performance enhancements while also resolving various front-end issues.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: infrafit,
    source_code_link: "https://infrafit.ae/",
  },
]

export { services, technologies, experiences, testimonials, projects }

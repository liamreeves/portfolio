import {
  skater,
  creator,
  record,
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
  docker,
  safex,
  and,
  bjss,
  e42,
  materiom,
  lnw,
  safexOrg,
  materiomOrg,
  monopoly,
  safexPic,
  threejs,
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
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Skater",
    icon: skater,
  },
  {
    title: "World Record Holder",
    icon: record,
  },
];

const technologies = [
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Product Developer",
    company_name: "AND Digital",
    icon: and,
    iconBg: "#ffffff",
    date: "January 2024 - March 2024",
    points: [
      "Working with various clients and technologies for a top UK tech consultancy.",
      "Responsible for helping clients achieve their visions through Agile methods.",
      "Visiting clients on site to facilitate better integration between teams.",
    ],
  },
  {
    title: "Senior Developer",
    company_name: "Light & Wonder",
    icon: lnw,
    iconBg: "#ffffff",
    date: "August 2023 - December 2023",
    points: [
      "Responsible for game development and project management at industry leading gaming company.",
      "Mentoring and code review for junior developers.",
      "Managing ongoing live issues for games already released to the public.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "BJSS",
    icon: bjss,
    iconBg: "#ffffff",
    date: "July 2022 - December 2023",
    points: [
      "Working with different UK companies on behalf of a top UK tech consultancy.",
      "Certified AWS Cloud Practitioner.",
      "Participated in collaborative projects to help improve internal processes.",
    ],
  },
  {
    title: "Principal Developer",
    company_name: "Materiom",
    icon: materiom,
    iconBg: "#ffffff",
    date: "January 2022 - July 2022",
    points: [
      "Tasked with research and selection of new technologies for use in greenfield project.",
      "Collaborating with cross-functional teams including designers, database experts and material scientists.",
      "Implementing responsive design and ensuring cross browser and device compatibility for new MVP product.",
    ],
  },
  {
    title: "Lead Fullstack Developer",
    company_name: "Element 42",
    icon: e42,
    iconBg: "#ffffff",
    date: "January 2021 - December 2023",
    points: [
      "Responsible for overseeing a team of developers.",
      "Finding new projects and initiating the design process.",
      "Working with clients and developers to achieve a shared vision.",
      "Delivering highly functional and scalable products with ongoing support.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Safex",
    icon: safex,
    iconBg: "#ffffff",
    date: "December 2019 - January 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Materials Library",
    description:
      "Web application allowing users to submit, view and edit biomaterial research data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "cordra",
        color: "green-text-gradient",
      },
      {
        name: "tailwinds",
        color: "pink-text-gradient",
      },
    ],
    image: materiomOrg,
    source_code_link: "https://materiom.org/search",
  },
  {
    name: "Monopoly TWT",
    description:
      "Online slot game built using in house JS framework.",
    tags: [
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "jira",
        color: "pink-text-gradient",
      },
      {
        name: "pixijs",
        color: "blue-text-gradient",
      },
    ],
    image: monopoly,
    source_code_link: "https://igaming.lnw.com/games/monopoly-travel-world-tour/",
  },
  {
    name: "Safex",
    description: "The landing page for the Safex blockchain project.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
    ],
    image: safexOrg,
    source_code_link: "https://safex.org/",
  },
  {
    name: "Safex Marketplace",
    description:
      "A desktop app allowing users access a decentralised e-commerce marketplace based on blockchain technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "electron",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: safexPic,
    source_code_link: "https://safex.org/wallet",
  },
];

export { services, technologies, experiences, projects };

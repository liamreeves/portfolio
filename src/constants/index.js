import {
  safex,
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
  bjss,
  e42,
  materiom,
  safexOrg,
  materiomOrg,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Safex",
    icon: safex,
    iconBg: "#ffffff",
    date: "March 2020 - January 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Fullstack Developer",
    company_name: "Element 42",
    icon: e42,
    iconBg: "#ffffff",
    date: "January 2021 - January 2022",
    points: [
      "Responsible for overseeing a team of developers.",
      "Finding new projects and initiating the design process.",
      "Working with clients and developers to achieve a shared vision.",
      "Delivering highly functional and scalable products with ongoing support.",
    ],
  },
  {
    title: "Lead Fullstack Developer",
    company_name: "Materiom",
    icon: materiom,
    iconBg: "#ffffff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Tasked with research and selection of new technologies for use in greenfield project.",
      "Collaborating with cross-functional teams including designers, database experts and material researchers.",
      "Implementing responsive design and ensuring cross-browser compatibility for new MVP product.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "BJSS",
    icon: bjss,
    iconBg: "#ffffff",
    date: "July 2022 - December 2023",
    points: [
      "Certified AWS Cloud Practitioner",
      "Participated in collaborative projects to help improve internal processes",
    ],
  },
];

const projects = [
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
    name: "Materials Library",
    description:
      "Web application allowing users to submit, view and edit sustainable biomaterial recipes.",
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
    name: "Safex World Marketplace",
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

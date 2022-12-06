import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Quiz Master",
    desc: "It's a quiz game where you can get lifelines as well.",
    img: "/static/projects/project3.png",
    link: "https://leafy-cactus-a2eff2.netlify.app/",
    github: "https://github.com/sohan9542/-mateusap1",
    tags: ["React", "TailwindCSS", "CSS", "Javascript"],
  },
  {
    id: 1,
    title: "Tour",
    desc: "Build a digital Tour® that scales & converts",
    img: "/static/projects/project1.png",
    link: "https://tour.video/",
    tags: ["React", "CSS", "TailwindCSS", "ApextChart", "API", "Material UI", "Swiper","Moment"],
  },
  {
    id: 2,
    title: "NFT LAMBO CLUB",
    desc: "Buy and Stock NFT for your future.",
    img: "/static/projects/exp.png",
    link: "https://crypto-expert.vercel.app/",
    github: "",
    tags: ["Express", "MongoDB","React", "API", "Tailwind CSS", "Node","CSS"],
  },
  {
    id: 3,
    title: "Creator App",
    desc: "Launch your creator portfolio website in minutes",
    img: "/static/projects/project4.png",
    link: "https://creator.app/",
    github: "",
    tags: ["Next Js", "React", "API", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: 4,
    title: "Dream Mint",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
    img: "/static/projects/dream.png",
    link: "https://boisterous-sprite-5c5a2e.netlify.app/",
    tags: ["React", "React-Bootstrap", "CSS", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Jurassic Nodes",
    desc: "Gain passive income by leveraging Jurassic's Financial protocol",
    img: "/static/projects/jura.png",
    link: "https://niohdev.netlify.app/",
    tags: ["Animation", "Css", "React", "Talwind CSS", "AOS"],
  },
  {
    id: 6,
    title: "Social Security Disability",
    desc: "Question & Answer Taking Servey Platform.",
    img: "/static/projects/social.png",
    github: "https://github.com/sohan9542/quikaidfive",
    link:"https://endearing-scone-61949f.netlify.app/",
    tags: ["HTML", "JAVASCRIPT", "CSS"],
  },
  {
    id: 7,
    title: "LOST SOYTHERD 😭",
    desc: "A Crypto Platfrom to buy and mint NFT's.",
    img: "/static/projects/lost.png",
    link: "https://papaya-wisp-9defa0.netlify.app/",
    github:"https://github.com/sohan9542/Unbox-NFT-Staking",
    tags: ["TypeScript", "React JS","Talwind CSS", "CSS"],
  },
  {
    id: 8,
    title: "Safetag Tracking",
    desc: "SafeTag Tracking: Accurate, reliable gps trackers backed up by a GPS tracking service",
    img: "/static/projects/safetag.png",
    link: "https://www.safetagtracking.com/",
    tags: ["API", "Javascript",'React','Tailwind CSS', 'SCSS'],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
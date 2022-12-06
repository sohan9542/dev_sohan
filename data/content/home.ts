type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    title: "Charts",
    icon: "/static/doodles/skills/chartjs-logo.svg",
  },
  {
    title: "Material UI",
    icon: "/static/doodles/skills/mui.png",
  },
  {
    title: "MongoDB",
    icon: "/static/doodles/skills/mongo.png",
  },

];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sohan, is a man of many skills, but friendship, collaborations and attention to detail with very strong frontend skills makes him an absolute delight to work with. Cannot recommend him enough :)",
    name: "Amulya Pharma",
    job: "Founder & CEO of tour.video",
  },
  {
    quote:
      "This Gentleman is brilliant, fast effective and highly recomendable.. will use him for all my projects, I develop products and web applications for 30 years and he is one of the best Front end developers",
    name: "Juan Ehlers",
    job: "Co-founder of compupigeon.com",
  },
  {
    quote:
      "An excellent and proficient developer with a high understanding of front end development. Easy to communicate with and works in a timely fashion. Highly recommended",
    name: "Aftaf Khan",
    job: "flovatar.com",
  },
];

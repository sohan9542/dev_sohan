import type { Footer, Route } from "@/types";

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Designs",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/sohan9542",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/dev-sohan/",
          leavesWebsite: true,
        },
        {
          name: "Telegram",
          link: "https://t.me/dev_sohan",
          leavesWebsite: true,
        },
        {
          name: "Skype",
          link: "https://join.skype.com/invite/s6QvjmeKpT6P",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:sohanurrahmants@gmail.com",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    message: "I appreciate your support very much! 💙",
  },
};

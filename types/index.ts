import type { CSSProperties, ReactNode } from "react";

export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

export type Skill = {
  title: string;
  icon: string;
  style?: CSSProperties;
};

export type Testimonial = {
  quote: string;
  name: string;
  job: string;
};

export type Design = {
  label: string;
  img: string;
  link: string;
};

export type Route = {
  title: string;
  path: string;
};

export type FooterLink = {
  name: string;
  link: string;
  icon?: string;
  leavesWebsite: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type Footer = {
  columns: FooterColumn[];
  support: {
    message: string;
  };
};

export type PageMeta = {
  title?: string;
  desc: string;
};

export type PageProps = {
  currentPage: string;
  meta: PageMeta;
  children?: ReactNode;
};

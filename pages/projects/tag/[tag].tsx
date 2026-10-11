import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import Page from "@/components/utility/Page";
import projects, { allKebabTags, allTags } from "@/data/content/projects";
import { kebabArray, kebabCase } from "@/utils/utils";
import Projects from "@/components/projects/Projects";
import Heading from "@/components/projects/Heading";
import type { Project } from "@/types";

type TagPageProps = {
  filteredProjects: Project[];
  tag: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tagNames: string[] = [];

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      tagNames.push(tag);
    });
  });

  const uniqueTags = [...new Set(tagNames)];
  const paths = uniqueTags.map((path) => ({
    params: { tag: kebabCase(path) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TagPageProps> = async (context) => {
  const tag = context.params?.tag;

  if (typeof tag !== "string") {
    return { notFound: true };
  }

  const filteredProjects = projects.filter((project) =>
    kebabArray(project.tags).includes(tag)
  );

  return {
    props: {
      filteredProjects,
      tag,
    },
  };
};

function TagPage({ filteredProjects, tag }: TagPageProps) {
  const capsTag = allTags[allKebabTags.indexOf(tag)] ?? tag;

  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${capsTag} Projects`,
        desc: `A showcase for all of my ${capsTag} projects.`,
      }}
    >
      <Heading tag={capsTag} />
      <Projects overwriteProjects={filteredProjects} />

      <Link href="/projects" passHref>
        <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
          View All
        </div>
      </Link>
    </Page>
  );
}

export default TagPage;

import projects, { allKebabTags, allTags } from "@/data/content/projects";
import { kebabCase } from "@/utils/utils";

describe("projects content", () => {
  it("has unique project ids", () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("keeps tag lists aligned with kebab versions", () => {
    expect(allKebabTags).toHaveLength(allTags.length);
    expect(allKebabTags).toEqual(allTags.map((tag) => kebabCase(tag)));
  });

  it("includes an image and at least one tag for every project", () => {
    projects.forEach((project) => {
      expect(project.img).toMatch(/^\/static\//);
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });
});

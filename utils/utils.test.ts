import { kebabArray, kebabCase } from "@/utils/utils";

describe("kebabCase", () => {
  it("converts spaced titles to kebab-case", () => {
    expect(kebabCase("Tailwind CSS")).toBe("tailwind-css");
  });

  it("converts camelCase to kebab-case", () => {
    expect(kebabCase("ReactJS")).toBe("react-js");
  });

  it("lowercases already-kebab strings", () => {
    expect(kebabCase("TypeScript")).toBe("type-script");
  });
});

describe("kebabArray", () => {
  it("maps every tag in an array", () => {
    expect(kebabArray(["React", "Tailwind CSS", "API"])).toEqual([
      "react",
      "tailwind-css",
      "api",
    ]);
  });
});

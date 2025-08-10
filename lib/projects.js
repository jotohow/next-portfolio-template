import fs from "fs";
import matter from "gray-matter";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "_content/projects");

export function getAllProjects() {
  // Get file names under /_content/projects
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = fileNames
    .filter(fileName => fileName.endsWith(".md"))
    .map(fileName => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        ...matterResult.data,
        content: matterResult.content,
      };
    });

  // Sort projects by date (newest first)
  return allProjectsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
}

export function getProjectBySlug(slug) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    slug,
    ...matterResult.data,
    content: matterResult.content,
  };
}

export function getAllProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith(".md"))
    .map(fileName => fileName.replace(/\.md$/, ""));
}

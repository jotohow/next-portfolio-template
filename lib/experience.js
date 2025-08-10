import fs from "fs";
import path from "path";

const experienceFile = path.join(process.cwd(), "_content/experience.json");

export function getAllExperience() {
  // Read and parse the JSON file
  const fileContents = fs.readFileSync(experienceFile, "utf8");
  const experienceData = JSON.parse(fileContents);

  // Sort by date (newest first) and reverse to match the original behavior
  const sortedData = experienceData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB; // ascending order
  });

  return sortedData.reverse(); // reverse to get newest first in timeline display
}

export function getExperienceById(id) {
  const allExperience = getAllExperience();
  return allExperience.find(exp => exp.id === id);
}

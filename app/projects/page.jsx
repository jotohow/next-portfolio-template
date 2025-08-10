import ContentContainer from "../../components/ContentContainer";
import ProjectGrid from "../../components/ProjectGrid";
import { getAllProjects } from "../../lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();
  return (
    <ContentContainer>
      <ProjectGrid data={projects} />
    </ContentContainer>
  );
}

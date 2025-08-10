import ContentContainer from "../../components/ContentContainer";
import Timeline from "../../components/Timeline";
import { getAllExperience } from "../../lib/experience";

export default function ExperiencePage() {
  const experienceData = getAllExperience();

  return (
    <ContentContainer>
      <Timeline data={experienceData} />
    </ContentContainer>
  );
}

import ContentContainer from "../../components/ContentContainer";

export default function AboutPage() {
  return (
    <ContentContainer>
      <p className="leading-tight mb-8">
        I'm <span className="font-bold">Your Name</span>.
      </p>
      <p className="leading-tight mb-8">
        I'm a <span className="font-bold">Professional Title</span> at{" "}
        <a href="https://example.com" target="_blank" rel="noreferrer">
          <span className="font-bold">Company Name</span>
        </a>
        , where I work on <span className="font-bold">exciting projects</span>{" "}
        and <span className="font-bold">innovative solutions</span> in my field.
      </p>
      <p className="leading-tight">
        I'm interested in <span className="font-bold">technology</span>,{" "}
        <span className="font-bold">problem solving</span>,{" "}
        <span className="font-bold">continuous learning</span>, and{" "}
        <span className="font-bold">personal growth</span>.
      </p>
    </ContentContainer>
  );
}

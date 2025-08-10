import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getProjectBySlug, getAllProjectSlugs } from "../../../lib/projects";
import ContentContainer from "../../../components/ContentContainer";
import { Button } from "@headlessui/react";

// Generate static params for all project slugs
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map(slug => ({
    slug: slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const project = await getProjectBySlug(slug);
    return {
      title: project.title,
      description: project.subtitle,
    };
  } catch (error) {
    return {
      title: "Project Not Found",
    };
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  let project;

  try {
    project = await getProjectBySlug(slug);
  } catch (error) {
    notFound();
  }

  const textSizes = "text-base md:text-lg ";

  return (
    <ContentContainer>
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="mb-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-none">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
              {project.subtitle}
            </p>
          )}

          {/* Project Image */}
          {
            <div className="mb-6">
              <img
                src={project.image || "/ldn.avif"}
                alt={project.title}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          }

          {/* Project Link */}
          {project.link && (
            <Button className="px-4 py-2 bg-custom-teal hover:bg-custom-teal/80 text-white rounded-lg transition-colors duration-200 leading-none flex justify-center ">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg my-auto"
              >
                View Project →
              </a>
            </Button>
          )}
        </div>

        {/* Project Content */}
        <div className={"max-w-none text-white " + textSizes}>
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>

        {/* Back to Projects */}
        <div className={"mt-6 pt-6 border-t border-gray-600 " + textSizes}>
          <a
            href="/projects"
            className="text-custom-teal hover:text-custom-teal/80 transition-colors duration-200"
          >
            ← Back to all projects
          </a>
        </div>
      </div>
    </ContentContainer>
  );
}

import PageTransition from "@/components/PageTransition";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12">
            <h1 className="text-4xl md:text-5xl font-playfair">Projects</h1>
            <div className="grid gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;

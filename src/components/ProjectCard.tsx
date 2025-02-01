import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";
import { Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-playfair">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={() => window.open(project.preview, "_blank", "noopener,noreferrer")}>
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

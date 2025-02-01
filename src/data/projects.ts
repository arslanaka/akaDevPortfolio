export interface Project {
    title: string;
    description: string;
    preview: string;
    github: string;
    tags: string[];
  }
  
  export const projects: Project[] = [
    {
      title: "Project One",
      description: "A beautiful, minimal web application",
      preview: "https://example.com",
      github: "https://github.com/username/project-one",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Project Two",
      description: "An innovative mobile app",
      preview: "https://example.com/project-two",
      github: "https://github.com/username/project-two",
      tags: ["React Native", "Firebase"],
    },

    {
        title: "Project three",
        description: "An innovative mobile app",
        preview: "https://example.com/project-two",
        github: "https://github.com/username/project-two",
        tags: ["React Native", "Firebase"],
      },

    {
        title: "Project four",
        description: "An innovative mobile app",
        preview: "https://example.com/project-two",
        github: "https://github.com/username/project-two",
        tags: ["React Native", "Firebase"],
      },

    {
        title: "Project five",
        description: "An innovative mobile app",
        preview: "https://example.com/project-two",
        github: "https://github.com/username/project-two",
        tags: ["React Native", "Firebase"],
      },
    // Add more projects here...
  ];

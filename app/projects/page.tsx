import React from "react";
import { Project, projects } from "@/lib/data";
import ProjectShowcase from "./project-showcase";
const page = () => {
  return (
    <div className="space-y-5 mt-5 ">
      {projects.map((project: Project) => (
        <ProjectShowcase key={project.title} project={project} />
      ))}
    </div>
  );
};

export default page;

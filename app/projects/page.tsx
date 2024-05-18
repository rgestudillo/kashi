"use client";

import React, { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Project, projects } from "@/lib/data";
import ProjectShowcase from "./project-showcase";

const ProjectsPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    console.log("Current pathname:", pathname);
    console.log("Category from query:", searchParams.get("category"));
  }, [pathname, searchParams]);

  // Sort projects based on category
  const sortedProjects = projects.slice().sort((a, b) => {
    return (b.type === category ? 1 : 0) - (a.type === category ? 1 : 0);
  });

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="space-y-5 mt-5">
        {sortedProjects.map((project: Project) => (
          <ProjectShowcase
            extraInfo={category || undefined}
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default ProjectsPage;

"use client";

import { Project } from "@/lib/data";
import { ExternalLink } from "lucide-react";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div
      onClick={() => {
        window.open(project.link);
      }}
      className="rounded-xl border border-black bg-card text-black shadow cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring  hover:bg-slate-300 hover:text-accent-foreground"
    >
      <div className="space-y-2 p-6">
        <div className="flex space-x-1">
          <h3 className="font-semibold leading-none tracking-tight">
            {project.title}
          </h3>
          <ExternalLink height={15} width={15} />
        </div>
        <p className="text-sm text-black text-start">{project.description}</p>
      </div>
    </div>
  );
}

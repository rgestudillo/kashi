import { Project } from "../util/data";
import { ExternalLink } from "lucide-react";

interface ProjectShowcaseProps {
  project: Project;
  extraInfo?: string; // Retain the optional parameter
}

export default function ProjectShowcase({
  project,
  extraInfo,
}: ProjectShowcaseProps) {
  // Determine the background color based on whether the project type matches the extraInfo
  const bgColorClass =
    project.type === extraInfo
      ? "bg-blue-950 text-white"
      : "bg-card text-black";

  return (
    <div
      onClick={() => {
        console.log(`Extra Info: ${extraInfo}`);
        window.open(project.link);
      }}
      className={`rounded-xl  border border-black ${bgColorClass} text-black shadow cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-slate-300 hover:text-accent-foreground`}
    >
      <div className="space-y-2 p-6">
        <div className="flex space-x-1">
          <h3 className="font-semibold leading-none tracking-tight">
            {project.title}
          </h3>
          <ExternalLink height={15} width={15} />
        </div>
        <p className="text-sm text-start">{project.description}</p>
      </div>
    </div>
  );
}

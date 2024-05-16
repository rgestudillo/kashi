import React from "react";

import { WorkExperience, workExperiences } from "@/lib/data";
import WorkShowcase from "./work-showcase";
const page = () => {
  return (
    <section id="work" key="work">
      <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
        <div className="p-6 space-y-6">
          {workExperiences.map((experience: WorkExperience, index: number) => (
            <WorkShowcase
              key={experience.company}
              experience={experience}
              whetherlast={workExperiences.length == index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;

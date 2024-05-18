"use client";
import React from "react";
import { experience } from "../util/data";
import { ExperienceItem } from "./ExperienceItem";
const page = () => {
  return (
    <section className="section-wrapper" id="experience">
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

export default page;

'use client';

import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt"; // replace 'react-tilt' if you're using it
// import { github } from "../assets";


// Types
export interface Project {
  name: string;
  description: string;
  img: string;
  github_link: string;
  live_link: string;
  key: string;
}

interface WorkCardProps {
  project: Project;
  index: number;
}

// Main export
export default function Projects() {
  return (
    <div>
      <Works />
    </div>
  );
}

// Projects Grid
const Works: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://protfolio-one-tau.vercel.app/project")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects", err));
  }, []);

  return (
    <div className="mx-auto container px-10">
      <h2 className="text-5xl font-extrabold text-white">All Projects</h2>

      <p className="py-10 text-zinc-400 text-xl">
        As a highly skilled and experienced professional,
        I have meticulously curated a selection of projects that exemplify my expertise and problem-solving prowess.
        Each of these projects serves as a testament to my ability to tackle intricate challenges, adapt to diverse technologies,
        and manage projects effectively.
      </p>

      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <WorkCard key={project?.live_link || index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

// Single Project Card
const WorkCard: React.FC<WorkCardProps> = ({ project }) => {
  return (
    <div
     
      className="bg-[#0B1727] border border-[#8A623B] p-5 rounded-2xl w-full h-[500px]"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={project?.img}
          alt={project?.name}
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(project?.github_link, "_blank")}
            className="bg-black bg-opacity-50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            {/* <img
              src={github}
              alt="GitHub"
              className="w-1/2 h-1/2 object-contain"
            /> */}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{project?.name}</h3>
        <p className="mt-2 text-[#8A623B] text-[14px]">{project?.description}</p>
      </div>

      <div className="mt-4 flex justify-between">
        <a
          href={project?.live_link}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

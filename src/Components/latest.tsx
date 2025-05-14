"use client";

import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";


interface ExperienceType {
  date: string;
  img: string;
  title: string;
  company_name: string;
  details: string;
  Live: string;
  gitlink: string;
}

interface ExperienceCardProps {
  experience: ExperienceType;
}


const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#0B1727",
      color: "#94673D",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={experience.date}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src="https://i.ibb.co/qFmpTyk/custom-coding-icon-shadowed-detailed-custom-coding-logo-free-vector-removebg-preview.png"
          alt="icon"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <img src={experience.img} className="rounded-xl mb-4" alt={experience.title} />
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold'>{experience.company_name}</p>
    </div>

    <p className='mt-5 text-white'>{experience.details}</p>

    <div className="mt-4 flex gap-4">
      <a href={experience.Live} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
        Live Link
      </a>
      <a href={experience.gitlink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
        GitHub
      </a>
    </div>
  </VerticalTimelineElement>
);

const Latest: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  useEffect(() => {
    fetch("https://protfolio-kamrulhasananik019.vercel.app/latest")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Failed to fetch experiences:", error));
  }, []);

  return (
    <section id="work" className="px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <div>
        <p className="text-center text-3xl my-5 mt-5">What I have done so far</p>
        <h2 className="text-center text-7xl font-extrabold">Latest Projects</h2>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Latest;

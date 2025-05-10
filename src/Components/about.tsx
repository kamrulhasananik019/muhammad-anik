'use client';

import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaHtml5,
  FaWordpress,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandFirebase } from "react-icons/tb";
import { SiWebflow, SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";

// Single prop interface: title, logo, count
interface ServiceCardProps {
  title: string;
  logo: React.ReactNode;
  count: number;
}

const ServiceCard = ({ title, logo, count }: ServiceCardProps) => {
  return (
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-[#0D1929] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <div
          style={{
            background: `conic-gradient(rgb(220,145,170) ${count}%, #ddd ${count}%)`,
          }}
          className="w-32 h-32 flex items-center justify-center rounded-full"
        >
          <p className="text-5xl w-28 h-28 bg-[#da822e] rounded-full flex items-center justify-center">
            {logo}
          </p>
        </div>
        <h3 className="text-white text-[22px] font-bold text-center mt-3">
          {title}
        </h3>
      </div>
    </div>
  );
};

const About = () => {
  const skills: ServiceCardProps[] = [
    { logo: <FaWordpress />, title: "WordPress", count: 85 },
    { logo: <SiWebflow />, title: "Webflow", count: 85 },
    { logo: <FaJs />, title: "JavaScript", count: 85 },
    { logo: <FaReact />, title: "ReactJS", count: 85 },
    { logo: <TbBrandNextjs />, title: "NextJS", count: 85 },
    { logo: <SiExpress />, title: "ExpressJS", count: 85 },
    { logo: <SiMongodb />, title: "MongoDB", count: 85 },
    { logo: <TbBrandFirebase />, title: "Firebase", count: 85 },
    { logo: <BiLogoTailwindCss />, title: "Tailwind CSS", count: 85 },
    { logo: <FaBootstrap />, title: "Bootstrap 5", count: 85 },
    { logo: <FaCss3Alt />, title: "CSS3", count: 85 },
    { logo: <FaHtml5 />, title: "HTML5", count: 85 },
  ];

  return (
    <section id="about" className="px-4 py-10 md:px-10 max-w-7xl mx-auto">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          About Me
        </h2>
      </div>

      <p className="mt-4 text-slate-200 font-medium text-[20px] max-w-3xl leading-[30px]">
        I am a Full Stack Developer with a strong foundation in JavaScript,
        ReactJS, and NextJS. Eager to contribute to dynamic development
        projects and learn from experienced professionals. Proven ability to
        solve complex problems and deliver modern, scalable code. Effective
        communicator and team player dedicated to continuous learning and
        growth in the field.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, i) => (
          <ServiceCard key={i} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default About;

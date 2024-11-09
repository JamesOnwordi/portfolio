import { useState, useEffect } from "react";
import Image from "next/image";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch("/skills.json");
      const data = await response.json();
      setSkills(data);
    };

    fetchSkills();
  }, []);

  return (
    <div id="skills" className="text-gray-900 min-h-screen p-16 font-kurale">
      <h2 className="text-4xl text-center mb-10 font-bold">Skill Set</h2>
      <div>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative rounded-lg m-5 p-4 sm:p-8 border-gray-800 border-2 shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-40 lg:h-40">
                <Image
                  src={skill.src}
                  alt={`${skill.name} logo`}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <p className="text-center w-16 sm:w-24  md:w-36  lg:w-40  mt-2 text-s text-md sm:text-xl">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

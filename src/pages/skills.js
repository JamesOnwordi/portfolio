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
    <div
      id="skills"
      className="text-gray-900 min-h-screen p-16 max-h-30px font-kurale "
    >
      <h2 className="text-4xl text-center mb-10  font-bold">Skill Set</h2>
      <div className="flex font-kurale items-center">
        <div>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="relative rounded-lg m-5 p-8 border-gray-800 border-2 shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              >
                <Image
                  src={skill.src}
                  alt="Java Skill Icon"
                  width={100}
                  height={100}
                />

                <p className="text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

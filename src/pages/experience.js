import { useEffect, useState } from "react";

export default function Experience() {
  const [experience, setExperience] = useState([]);

  const fetchExperience = async () => {
    const response = await fetch("/experience.json");
    const data = await response.json();
    setExperience(data);
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <div id="experience" className="text-wool font-kurale p-16 bg-gray-900">
      <h2 className="text-4xl text-center mb-3 text-caramel font-bold">
        My Experience
      </h2>
      <div>
        {experience.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col items-center my- border-b border-gray-700 pb-6 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Experience Details */}
            <div className="w-full p-4 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2 text-frost">
                {`${exp.position} at ${exp.company}`}
              </h3>
              <p className="text-gray-400 mb-3 font-kurale">{exp.duration}</p>
              <p className=" text-wool">{exp.responsibilities}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

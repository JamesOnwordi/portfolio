import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/project.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message || "Failed to fetch projects");
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div>Error loading projects: {error}</div>;
  }

  return (
    <div id="project" className="text-wool font-kurale p-16 bg-gray-900">
      <h2 className="text-4xl text-center mb-10 text-caramel font-bold">
        My Projects
      </h2>
      <div>
        {projects.map((project, index) => (
          <div
            key={project.id || index} // Fallback to index if `id` is missing
            className={`flex flex-col md:flex-row items-center my-8 border-b border-gray-700 pb-6 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2 p-4 flex justify-center">
              <img
                src={project.media}
                alt={project.name}
                className="w-full h-auto rounded-lg shadow-lg border border-gray-700"
              />
            </div>

            {/* Project Description */}
            <div className="w-full md:w-1/2 p-4 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2 text-frost">
                {project.name}
              </h3>
              <p className="mb-4 text-wool">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-caramel hover:underline transition-transform duration-300 transform hover:scale-105 inline-flex items-center"
              >
                View Project
                <svg
                  width="20"
                  height="20"
                  className="inline-block ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path
                    fill="currentColor"
                    d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navBackground, setNavBackground] = useState("bg-transparent");

  useEffect(() => {
    let isInExperience = false;
    let isInProject = false;
    let isAtTop = true;

    const updateNavbarBackground = () => {
      if (isAtTop) {
        setNavBackground(
          "bg-gray-800 bg-opacity-80 text-white transition duration-500",
        );
      } else if (isInExperience || isInProject) {
        setNavBackground(
          "bg-white bg-opacity-95 text-black transition duration-500",
        );
      } else {
        setNavBackground(
          "bg-gray-800 bg-opacity-80 text-white transition duration-500",
        );
      }
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "content-top") {
          isAtTop = entry.isIntersecting;
        } else if (entry.target.id === "experience") {
          isInExperience = entry.isIntersecting;
        } else if (entry.target.id === "project") {
          isInProject = entry.isIntersecting;
        }
      });
      updateNavbarBackground();
    };

    const observerOptions = {
      rootMargin: "0px 0px -99% 0px",
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const topSection = document.querySelector("#content-top");
    const experienceSection = document.querySelector("#experience");
    const projectSection = document.querySelector("#project");

    if (topSection) observer.observe(topSection);
    if (experienceSection) observer.observe(experienceSection);
    if (projectSection) observer.observe(projectSection);

    return () => {
      if (topSection) observer.unobserve(topSection);
      if (experienceSection) observer.unobserve(experienceSection);
      if (projectSection) observer.unobserve(projectSection);
    };
  }, []);

  // Smooth scroll handler for each section
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed top-0 h-16 left-0 z-50 flex justify-around items-center font-kurale w-full ${navBackground}`}
    >
      <div className="ml-4">
        <button
          onClick={() => scrollToSection("#home")}
          className="nav-link hover:bg-opacity-80 hover:translate-y-[-2px] transition-all duration-300"
        >
          James
        </button>
      </div>

      <div className="flex justify-around w-1/3">
        <button
          onClick={() => scrollToSection("#skills")}
          className="nav-link hover:bg-opacity-80 hover:translate-y-[-2px] transition-all duration-300"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("#experience")}
          className="nav-link hover:bg-opacity-80 hover:translate-y-[-2px] transition-all duration-300"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("#project")}
          className="nav-link hover:bg-opacity-80 hover:translate-y-[-2px] transition-all duration-300"
        >
          Projects
        </button>
        <Link
          href="https://www.linkedin.com/in/james-onwordi/"
          target="_blank"
          rel="noreferrer"
          className="nav-link hover:bg-opacity-80 hover:translate-y-[-2px] transition-all duration-300"
        >
          Contact Me
        </Link>
      </div>

      <div className="mr-4">
        <a
          href="https://docs.google.com/document/d/1mCG2bnXZJv34qx4YF13QITGvV_yis5xqCbzX3GR_AFo/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white font-semibold py-2 px-4 rounded transition-all duration-300 hover:bg-gray-600 hover:translate-y-[-2px]"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

"use client";
import Main from "../pages/main";
import Skills from "@/pages/skills";
import Experience from "@/pages/experience";
import Project from "@/pages/project";

export default function Home() {
  return (
    <>
      <div id="content-top"></div>
      <Main></Main>

      {/* Skills section */}
      <Skills></Skills>

      {/* Experience section */}
      <Experience></Experience>

      {/* Project section */}
      <Project></Project>
    </>
  );
}

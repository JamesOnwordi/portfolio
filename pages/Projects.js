import {Link } from 'next/link';
import Project from './Project';
import projects from '../Projects.json'

export default function Projects(){
    
    const allProjects = projects.map((project,ind) =>{
        return <Project key={"project"+ind} project={project}> </Project>
      })
  
      return(
          <div  className="flex bg-gray-800 justify-center items-center " >
    <div>
      <div className=' flex justify-center text-yellow-400 m-6 font-serif text-7xl'>Projects</div>
    <div className='flex flex-wrap justify-center  grid-cols-2 gap-8 m-8'>
  
  
    <div className='  flex flex-wrap justify-center gap-5'>
      {allProjects}
    </div>
      </div>
    </div>
  </div>
      )
}
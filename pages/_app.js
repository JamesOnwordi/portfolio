import '../styles/globals.css'
// import styles from '../styles/Home.module.css'
import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import Project from './Project';
import projects from '../projects.json'

function MyApp({ Component, pageProps }) {
  console.log(projects)

  const [width,setWidth] = useState()
  const [height,setHeight] = useState(0)
  const [spline,setSpline] = useState() 

  
  useEffect(()=>{
    console.log(spline)
    spline?spline._viewportHeight = height:''
    spline?spline._viewportWidth = width:''
    console.log(spline)
    console.log(height+" "+width)
  },[width])
  
  const onLoad = (spline) =>{
    setSpline(spline)
    console.log(spline._viewportHeight = window.innerHeight)
    spline._viewportWidth = window.innerWidth/2
    console.log(window.innerHeight)
    // setHeight(e.target.innerHeight)
    window.addEventListener("resize",(e)=>{
      setWidth(e.target.innerWidth)
      
    })
    // setWidth(window.innerWidth/2)
    setHeight(window.innerHeight)
    
  }

  const allProjects =
    projects.map((project,ind) =>{
      return <Project key={"project"+ind} project={project}> </Project>
    })

  return <div>
    {/* Nav Bar */}
          <div>  
            <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="https://flowbite.com" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Contact</a>
                            </li>
                          
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">about</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">techs</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          </div>
    {/* about page */}
        <div>
        <div className="flex   ">
          <div className=' text-left tracking-wide  w-screen '  >
          <div className='flex items-center justify-center h-screen '>
          <div className='container mx-auto px-4'>
            <p className='my-8'>Hi, I am </p>

        <h1 className="text-7xl my-8 font-bold ">
          James Onwordi
        </h1>
        <h1 className="text-5xl my-8 font- ">
          Software Engineer
        </h1>
        {/* <h1 className="text-5xl text-center font-bold ">
          Based in Canada
        </h1> */}
        <div className='grid grid-col-2'>
          <div >
            <h1 className='text-2xl text-start mb-8 text-center'>
              I am Computer Science graduate with bootcamp experience in Software 
              development. I enjoy solving technical problems, and love the feeling gotten when I arrive at a solution.
            </h1>
            <div>
            <aside aria-label="Sidebar">
              <div>
                <ul className=" flex justify-center ">
                  <li>
                      <a href="#" className="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg height="32"  aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" >
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                        <span className="ml-2">Github</span>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" focusable="false">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                        <span className="flex-1 ml-2 whitespace-nowrap">Linked In</span>
                        
                      </a>
                  </li>
                  
                  <li>
                      <a href="#" className="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <img src="https://cdn-icons-png.flaticon.com/512/1230/1230247.png" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <span className="flex-1 ml-2 whitespace-nowrap">Resume</span>
                      </a>
                  </li>
                      
                </ul>
              </div>
            </aside>
            </div>
          </div>
        </div>
          </div>
            
          </div>
          </div>
          <div style={{height:{height}, width:{width}}} className="invisible sm:visible" >
            <Spline className='' onLoad={onLoad} scene="https://prod.spline.design/DAypc3NUHt398Ugm/scene.splinecode" />
            {/* <Spline  className='absolute' onLoad={onLoad}  scene="https://prod.spline.design/vua3eadykL8W5wyo/scene.splinecode" /> */}
          </div>
          
          
      
      </div>
  </div>
    {/* me page */}
 
<div className='flex justify-center items-center sm:h-screen' style={{backgroundColor:"yellow"}}>
  <div className='flex m-7' >
  
  <div className="aboutMe flex flex-wrap " >
  <div className="flex  justify-center items-center" >

    {/* contains picture and summary */}
    <div className='sm:grid grid-cols-2 flex flex-wrap justify-evenly'>
      {/* image div */}
      <div className='flex justify-center items-center m-4 '>
              <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg" width="300px "></img>
      </div>
          {/* summary */}
      <div className=' flex items-center sm:m-12 mt-4 mb-4'>
        <div >
           {/* text about me */}
          <div  >
            <h1 className=' md:text-xl mb-1 2xl:text-3xl text-left text-md t'>
              I got introduced to programming in my first year at the university and ever since then I fell in love with it 
            </h1>
            <h1 className=' md:text-xl mb-1 2xl:text-3xl text-md text-left'>
              I am always trilled to solve questions that required me to thinking outside the box or take a shower before I get a solution. 
            </h1>
            <h1 className=' md:text-xl 2xl:text-3xl text-md text-left'>
              I believe in learning new thing because that is the only way to find the best version of myself  
            </h1>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
  <div className='flex justify-center'>
    <aside className="   m-6"  >
    <div className='flex justify-center sm:ml-12 sm:mr-12'>
      <div className="container text-sm sm:text-md md:text-xl 2xl:text-2xl bg-gray-800 sm:ml-12 sm:mr-12">
            <ul className=" justify-center flex flex-wrap ">
                    <span className=" text-start mb-2 text-center m-5">Java</span>
                    <span className=" text-start mb-2 text-center m-5">JavaScript</span>
                    <span className=" text-start mb-2 text-center m-5">Python</span>
                    <span className=" text-start mb-2 text-center m-5">Node</span>
                    <span className=" text-start mb-2 text-center m-5">Git</span>
                    <span className=" text-start mb-2 text-center m-5">Github</span>
                    <span className=" text-start mb-2 text-center m-5">mongoose</span>
                    <span className=" text-start mb-2 text-center m-5">Postgres</span>
                    <span className=" text-start mb-2 text-center m-5">MongoDB</span>
                    <span className=" text-start mb-2 text-center m-5">REST</span>
                    <span className=" text-start mb-2 text-center m-5">Express</span>
                    <span className=" text-start mb-2 text-center m-5">SQL</span>
                    <span className=" text-start mb-2 text-center m-5">React</span>
                    <span className=" text-start mb-2 text-center m-5">Next.js</span>
                    <span className=" text-start mb-2 text-center m-5">CSS</span>
                    <span className=" text-start mb-2 text-center m-5">HTML</span>
            </ul>
        </div>
    </div>
   
  </aside>
  </div>

  
  
  
  
</div>

</div>
</div>



<div  className="flex justify-center items-center " >
  <div>
    <div className=' flex justify-center m-6 underline text-4xl'>Projects</div>
  <div className='flex flex-wrap justify-center  grid-cols-2 gap-8 m-8'>

  {allProjects}
    
    
    
    
    </div>
  </div>
</div>
  </div>
}

export default MyApp

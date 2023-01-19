// import Link  from 'next/link';
import { Suspense } from "react";
import { TypeAnimation } from 'react-type-animation';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from 'react';




export default function Main(props){
    return(
        <div className=' flex h-screen sm:block'>
          <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="https://flowbite.com" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    {/* <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button> */}
                    <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex text-white flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">                
                                                     
                        <li>
                      <a href="https://github.com/JamesOnwordi" rel="noreferrer" target="_blank" className="flex items-center p-1 text-base font-normal  rounded-lg dark: hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg height="32"  aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="flex-shrink-0  w-6 h-6  transition duration-75 dark: group-hover: dark:group-hover:" >
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                        <span className="ml-2  ">Github</span>
                      </a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/james-onwordi" rel="noreferrer"  target="_blank" className="flex items-center p-1 text-base font-normal  rounded-lg dark: hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="flex-shrink-0 w-6 h-6  transition duration-75 dark: group-hover: dark:group-hover:" width="24" height="24" focusable="false">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                        <span className="flex-1 ml-2 whitespace-nowrap">Linked In</span>
                        
                      </a>
                  </li>
                  
                  <li>
                      <a href="https://docs.google.com/document/d/1mCG2bnXZJv34qx4YF13QITGvV_yis5xqCbzX3GR_AFo/edit?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center p-1 text-base font-normal  rounded-lg dark: hover:bg-gray-100 dark:hover:bg-gray-700">
                      <img src="https://cdn-icons-png.flaticon.com/512/1230/1230247.png" className="flex-shrink-0 w-6 h-6  transition duration-75 dark: group-hover: dark:group-hover:" />
                        <span className="flex-1 ml-2    whitespace-nowrap">Resume</span>
                      </a>
                  </li>
                            
                        </ul>
                    </div>
                </div>
        </nav>
        <div className="flex justify-center text-gray-800 ">
          <div className='flex items-center mt-12 gap-12 flex-col justify-center  '>
          <div className='container mx-auto px-4'>
            <p className='my-8 text-2xl'> </p>
            

        <h1 className="text-7xl my-8 font-bold ">
          James Onwordi
        </h1>
        <div className="ml-12">
          <TypeAnimation 
                sequence={[
                  
                  'Front End Developer', 
                  1000, 
                  'Back End Developer', 
                  1000,
                  'Full Stack Developer',
                  2000, 
                  () => {
                  }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em' }}
              />
              <div className='mt-4'>
          <div >
            <h1 className='text-2xl text-start mr-12 mb-12 text-center'>
            I am Computer Science graduate with bootcamp experience in Software Development. I enjoy solving technical problems, and love the feeling when I arrive at a solution.
            <p className="mt-2"></p> 
            I am eager for growth and development and always give my best to everything I do. I have experience with Backend, Frontend and Databases.
            <p className="mt-2"></p>
            
            </h1>
            <div>
            <aside aria-label="Sidebar flex ">
              <div>
                <ul className=" flex flex-wrap justify-center  gap-4 ">
                  <li>
                      <a href="https://github.com/JamesOnwordi" rel="noreferrer" target="_blank" className="flex items-center p-1 text-base font-normal  rounded-lg dark: hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg height="32"  aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="flex-shrink-0  w-6 h-6  transition duration-75 dark: group-hover: dark:group-hover:" >
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                        <span className="ml-2  ">Github</span>
                      </a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/james-onwordi" rel="noreferrer"  target="_blank" className="flex items-center p-1 text-base font-normal  rounded-lg dark: hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="flex-shrink-0 w-6 h-6  transition duration-75 dark: group-hover: dark:group-hover:" width="24" height="24" focusable="false">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                        <span className="flex-1 ml-2 whitespace-nowrap">Linked In</span>
                        
                      </a>
                  </li>
                  
                  <li>
                      <a href="https://docs.google.com/document/d/1mCG2bnXZJv34qx4YF13QITGvV_yis5xqCbzX3GR_AFo/edit?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center p-1 text-base font-normal  rounded-lg dark: hover:bg-gray-100 dark:hover:bg-gray-700">
                      <img src="https://cdn-icons-png.flaticon.com/512/1230/1230247.png" className="flex-shrink-0 w-6 h-6  transition duration-75 dark: group-hover: dark:group-hover:" />
                        <span className="flex-1 ml-2    whitespace-nowrap">Resume</span>
                      </a>
                  </li>
                      
                </ul>
              </div>
            </aside>
            </div>
          </div>
        </div>
        </div>
      
        <h1 className="text-5xl my-8  font- ">
          
        </h1>
        
        {/* <h1 className="text-5xl text-center font-bold ">
          Based in Canada
        </h1> */}
        
          </div>
          <div className="flex justify-center ">
    <div className="animate-bounce bg-white  dark:bg-slate-800 p-2 w-20 h-20 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
      <svg className="w-20 h-10 text-5xl text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
        </div>
          
            
          </div>
          </div>
          
          
      
  </div>
    )
}
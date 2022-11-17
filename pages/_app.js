import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [width,setWidth] = useState('')
  const [height,setHeight] = useState('')
  
  const onLoad = (spline) =>{
    console.log(spline)
    console.log(spline._viewportHeight = window.innerHeight)
    console.log(window.innerHeight)
    setWidth(window.innerWidth/2)
    setHeight(window.innerHeight)
    
  }
  return <div>
  <div>
    
<nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div id="mega-menu-full" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Contact</a>
                </li>
               
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">about</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">techs</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">projects</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

  </div>
  <div>
    <div class="grid grid-cols   gap-4">
      <div>
        <Spline className='absolute' onLoad={onLoad} scene="https://prod.spline.design/DAypc3NUHt398Ugm/scene.splinecode" />
      </div>
  <div className='relative tracking-wide ' style={{backgroundColor:"", width:`${width}px`, height:`${height}px`}} >
    <div className='flex items-center justify-center h-screen '>
      <div>
         <p className='my-8'>Hi, I am </p>

    <h1 class="text-7xl my-8 font-bold ">
      James Onwordi
    </h1>
    <h1 class="text-5xl my-8 font-bold ">
      I am a Full Stack Developer
    </h1>
    {/* <h1 class="text-5xl text-center font-bold ">
      Based in Canada
    </h1> */}
    <div>
    <h1 className='text-3xl mb-8 text-center'>
      I am a full-stack web developer, that likes any thing with cool gadgets. I have strong analytical background... change word with a degree in Computer and Mathematics. Currently, I want to do something technical.
    </h1>
  </div>
<aside class="" aria-label="Sidebar">
   <div class="  bg-gray-800">
      <ul class=" flex justify-center ">
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg height="32"  aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" >
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
               <span class="ml-3">Github</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" focusable="false">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Linked In</span>
               
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/professional-skills-icon.svg" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
               <span class="flex-1 ml-3 whitespace-nowrap">Email</span>
               
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2ZFlYuUfpiccPvs0-mygZzienldVp35t4kZAo75CWF_mwIzvjHaflPNeONYQJrKlxhM&usqp=CAU" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
               <span class="flex-1 ml-3 whitespace-nowrap">Resume</span>
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
  

  <div class="flex space-x-2">
    <img src='' />
    
    
  </div>
 
<div className='flex items-center'>
  <div className='' style={{backgroundColor:"", height:`${height}px`}}>
  <h1>
    About Me
  </h1>
  <div className="aboutMe flex " >
  <div style={{backgroundColor:"" ,width:`${width}px`}}></div>
  
  <div>
    <h1 className='text-2xl t' style={{backgroundColor:"" ,width:`${width}px`}}>
I fell in love with programming in my first year at the university.

It was my dream to become a theoretical physicist so I set out to study Mathematics and Physics at the University of Toronto. It wasn’t until the 3rd year of university that I wrote my first real code. At that moment, I was smitten. At first, I learned Python to analyze data I gathered during experiments and learned C++ to code microcontrollers to gather data; however, I continued to code because of how much I enjoyed it.

I am basically meant to come up with something enlightening ... just tell us your life story on how you liked coding

Tell us how you like learning new thing and what you would probably want to work on in the nearest future

Here are the programming languages and technologies I am currently familiar with:
  </h1>
  
  </div>
  
</div>
<aside class="" aria-label="Sidebar">
   <div class="  bg-gray-800">
      <ul class=" grid grid-cols-6 gap-4 ">
         <li>
               <span class="ml-3">Java</span>
         </li>
         <li>
               <span class="ml-3">JavaScript</span>
         </li>
         <li>
               <span class="ml-3">Python</span>
         </li>
         <li>
               <span class="ml-3">Node</span>
         </li>
         <li>
               <span class="ml-3">Git</span>
         </li>
         <li>
               <span class="ml-3">Github</span>
         </li>
         <li>
               <span class="ml-3">SQL</span>
         </li>
         <li>
               <span class="ml-3">Postgres</span>
         </li>
         <li>
               <span class="ml-3">MongoDB</span>
         </li>
         <li>
               <span class="ml-3">REST</span>
         </li>
         <li>
               <span class="ml-3">Express</span>
         </li>
         <li>
               <span class="ml-3">mongoose</span>
         </li>
         <li>
               <span class="ml-3">React</span>
         </li>
         <li>
               <span class="ml-3">Next.js</span>
         </li>
         <li>
               <span class="ml-3">CSS</span>
         </li>
         <li>
               <span class="ml-3">HTML</span>
         </li>
            
      </ul>
   </div>
</aside>
</div>
</div>



<div className="flex justify-center " style={{backgroundColor:"", width:`${width}px`, height:`${height}px`}}>
<div className="flex-wrap justify-center">
  <div>
    <a className='flex' href="https://nextjs.org/docs" >
      <div>
         <h2 >3D Ludo &rarr;</h2> 
         <p>Find in-depth information about Next.js features and API.</p>
      </div> 
            <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg' width="300px" />
          </a>
  </div>
  <div>
    <a className='flex' href="https://nextjs.org/docs" >
      <div>
         <h2 >Creatube &rarr;</h2> 
         <p>Find in-depth information about Next.js features and API.</p>
      </div> 
            <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg' width="300px" />
          </a>
  </div>
  <div>
    <a className='flex' href="https://nextjs.org/docs" >
      <div>
         <h2 >Memories &rarr;</h2> 
         <p>Find in-depth information about Next.js features and API.</p>
      </div> 
            <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg' width="300px" />
          </a>
  </div>
  <div>
    <a className='flex' href="https://nextjs.org/docs" >
      <div>
         <h2 >Ludo &rarr;</h2> 
         <p>Find in-depth information about Next.js features and API.</p>
      </div> 
            <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg' width="300px" />
          </a>
  </div>
        </div>
</div>
  </div>
}

export default MyApp

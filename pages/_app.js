import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import Projects from './Projects';
import About from './About';
import Home from './Home';
import Link  from 'next/link';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  const [width,setWidth] = useState()
  const [height,setHeight] = useState(0)
  const [spline,setSpline] = useState() 

  
  useEffect(()=>{
    console.log(spline)
    spline?spline._viewportHeight = height:0
    spline?spline._viewportWidth = width:0
    console.log(spline)
    console.log(height+" "+width)
  },[width])
  

 

  return <div>
    {/* Nav Bar */}
    
    <Head>
        <title>James Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-sad-anime-avatar-image-91.jpg" />
        
      </Head>
          <div>  
            <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
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
                        {/* <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">                
                            <li>
                                <Link href="/Home" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link href="/About" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">about</Link>
                            </li>
                            <li>
                                <Link href="/Projects" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">projects</Link>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
          </div>
    {/* about page */}
       
    {/* me page */}
<Home setSpline={setSpline} setWidth={setWidth} setHeight={setHeight}/>
<About/>
<Projects/>
<footer className="text-center lg:text-left bg-gray-100 text-gray-600">
  <div className="flex justify-center items-center p-6 border-b border-gray-300">
    <div className="mr-12 hidden lg:block">
      <span>Get connected with me on social networks:</span>
    </div>
    <div className="flex justify-center">
      
    <aside aria-label="Sidebar">
              <div>
                <ul className=" flex justify-center gap-4 ">
                  <li>
                      <a href="https://github.com/JamesOnwordi" target="_blank" rel="noreferrer" className="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg height="32"  aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="flex-shrink-0  w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" >
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                        <span className="ml-2 text-gray-700 hover:text-white">Github</span>
                      </a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/james-onwordi" target="_blank" rel="noreferrer" className="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" focusable="false">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                        <span className="flex-1 ml-2 text-gray-700 hover:text-white whitespace-nowrap">Linked In</span>
                        
                      </a>
                  </li>
                  
                  <li>
                      <a href="https://docs.google.com/document/d/1mCG2bnXZJv34qx4YF13QITGvV_yis5xqCbzX3GR_AFo/edit?usp=sharing" rel="noreferrer" target="_blank" className="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <img src="https://cdn-icons-png.flaticon.com/512/1230/1230247.png" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <span className="flex-1 ml-2  text-gray-700 hover:text-white whitespace-nowrap">Resume</span>
                      </a>
                  </li>
                      
                </ul>
              </div>
            </aside>
            
    </div>
  </div>
  
  <div className="text-center p-6 bg-gray-200">
    <span>© 2022 James Onwordi</span>
  </div>
</footer>
  </div>
}

export default MyApp

import '../styles/globals.css'
import Link  from 'next/link';
import Home from '.';





 
  export default function MyApp({ Component, pageProps }) {
    return <div>
        
        <Component {...pageProps} />
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


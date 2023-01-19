import Head from 'next/head'
import Image from 'next/image'
import About from './about';
import Projects from './projects';
import styles from '../styles/Home.module.css'
// import styles from '../styles/Home.module.css'
import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import Link  from 'next/link';
import Main from './Main';
// import Head from 'next/head';

export default function Home() {

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

  console.log("in home")
  return (
    <div >
      <Head>
      <title>James Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-sad-anime-avatar-image-91.jpg" />
        
      </Head>
      <Main />
      <About className="w-screen"/>
      <Projects  />
          <div className=''>  
            
          </div>
    {/* about page */}
       
    {/* me page */}
{/* <Home setSpline={setSpline} setWidth={setWidth} setHeight={setHeight}/> */}
{/* <About className="w-screen"/> */}
{/* <Projects/> */}

  </div>)
}

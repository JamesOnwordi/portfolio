

export default function About(){

    return(
        <div className='flex justify-center items-center sm:h-screen' style={{backgroundColor:"yellow"}}>
  <div className='flex m-7' >
  
  <div className="aboutMe flex flex-wrap " >
  <div className="flex  justify-center items-center" >

    {/* contains picture and summary */}
    <div className='sm:grid grid-cols-2 flex flex-wrap justify-evenly'>
      {/* image div */}
      <div className='flex justify-center items-center m-4 '>
              <img src="https://res.cloudinary.com/dwgzdayor/image/upload/v1669242005/portfolio_pic_ws41rn.jpg" width="300px "></img>
      </div>
          {/* summary */}
      <div className=' flex items-center sm:m-12 mt-4 mb-4'>
        <div >
           {/* text about me */}
          <div  >
            <h1 className=' bg-yellow-500 md:text-xl font-mono text-gray-800 mb-1 2xl:text-2xl text-left text-md t'>
              I got introduced to programming in my first year at the university and ever since then, I fell in love with it.
              <p className='m-2'></p>
              I am always trilled to solve questions that requires me to think outside the box and sometimes take a shower before I get a solution. 
              <p className='m-2'></p>I believe in learning new thing because that is the only way to find the best version of myself  
            </h1>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
  <div className='flex  justify-center'>
    <aside className="   m-6"  >
    <div className='flex justify-center sm:ml-12 sm:mr-12'>
      <div className="container text-sm sm:text-md md:text-xl 2xl:text-3xl bg-gray-800 sm:ml-12 sm:mr-12">
            <ul className="text-yellow-400 justify-center flex flex-wrap ">
                    <span className=" text-yellow-400 text-start mb-2 text-center m-5">Java</span>
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
    )
}
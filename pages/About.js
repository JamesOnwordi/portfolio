
import Link  from 'next/link';
// import Link  from 'next/link';

export default function About(){
    return(
        <div className='flex justify-center items-center lg:h-screen bg-gray-800 ' >
  <div className='flex m-7' >
  
  <div className="aboutMe flex flex-wrap " >
  <div className="flex  justify-center items-center" >

    {/* contains picture and summary */}
    <div className='sm:grid grid-cols-2 flex flex-wrap justify-evenly'>
      {/* image div */}
      <div className='flex justify-center  items-center m-4 '>
              <img className="rounded" src="https://res.cloudinary.com/dwgzdayor/image/upload/v1669242005/portfolio_pic_ws41rn.jpg" width="300px "></img>
      </div>
          {/* summary */}
      <div className=' flex items-center sm:m-12 mt-4 mb-4'>
        <div >
           {/* text about me */}
          <div  >
            <h1 className=' bg--500 md:text-xl font-mono bg-white/0  rounded text-white mb-1 2xl:text-2xl text-left text-md t'>
              To me Software Development is like creating a musical piece and coding is like playing a musical instrument, a lot of new skills to learn and different coding styles, but the best part of the whole process to me is being able to work with other developers to create a master piece.
              <p className='m-2'></p>
              I love going on hackathons, business trips and anything that gives me the opportunity to meet new people and make new friends. 
              <p className='m-2'></p> 
            </h1>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
  <div className='flex  justify-center'>
    <aside className=" text-gray-800 bg-white rounded m-6"  >
    <div className='flex justify-center sm:ml-12 sm:mr-12'>
      <div className="container text-sm sm:text-md md:text-xl 2xl:text-3xl  sm:ml-12 sm:mr-12">
            <ul className=" justify-center flex flex-wrap ">
                    <span className=" text-start mb-2 text-center m-5">HTML</span>
                    <span className=" text-start mb-2 text-center m-5">CSS</span>
                    <span className=" text-start mb-2 text-center m-5">Java</span>
                    <span className=" text-start mb-2 text-center m-5">JavaScript</span>
                    <span className=" text-start mb-2 text-center m-5">Python</span>
                    <span className=" text-start mb-2 text-center m-5">Node</span>
                    <span className=" text-start mb-2 text-center m-5">SQL</span>
                    <span className=" text-start mb-2 text-center m-5">React</span>
                    <span className=" text-start mb-2 text-center m-5">Next.js</span>
                    <span className=" text-start mb-2 text-center m-5">Express</span>
                    <span className=" text-start mb-2 text-center m-5">mongoose</span>
                    <span className=" text-start mb-2 text-center m-5">Postgres</span>
                    <span className=" text-start mb-2 text-center m-5">MongoDB</span>
                    <span className=" text-start mb-2 text-center m-5">REST</span>
                    <span className=" text-start mb-2 text-center m-5">Git</span>
                    <span className=" text-start mb-2 text-center m-5">Github</span>
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
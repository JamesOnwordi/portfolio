
export default function Project (props){
    console.log(props)
    return(
       
            <a className=' flex ' href={`${props.project.url}`} >
            <div className="flex justify-between flex-col  rounded  bg-yellow-100/80 hover:bg-yellow-400 drop-shadow-xl hover:drop-shadow-8xl flex-wrap m- items-center justify-center">
                <div className="flex  justify-center">
                    <div className=' sm:w-96 '>
             <h2 className='text-center text-xl  rounded bold m-4'>{props.project.name} </h2> 
             <div className=' justify-center flex text-center m2 m2 rounded flex items-center'>
            <p className="text-lg   rounded lg:text-xl ">{props.project.description}</p>
            </div>
             <div><br/></div>
            </div>
              
                </div>
                
                <div className=" ">
                 <img src={""+props.project.media+""}  />
                </div>
            
           </div>
             </a>
        
    )
}

export default function Project (props){
    console.log(props)
    return(
       
            <a className=' flex justify-center xl:w-1/3' href={`${props.project.url}`} >
                <div className="">
                   <div className='flex justify-center  '>
                    <div>

             <h2 className='text-center text-2xl  rounded bold m-4'>{props.project.name} </h2> 
             <div className=' justify-center flex  sm:w-1/2 text-center m2 m2 rounded flex items-center'>
                    </div>
            <p className="text-lg   rounded lg:text-xl ">{props.project.description}</p>
            </div>
             <div><br/></div>
            </div>
            {/* <div className=""> */}
                 <img src={""+props.project.media+""}  />
            {/* </div> */}
            <div className=" flex justify-center ">
                    <h2 className=' text-2xl  rounded bold '>{props.project.skills} </h2> 
                </div> 
                </div>
                 
            
            
             </a>
        
    )
}
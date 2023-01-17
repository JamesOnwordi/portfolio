
export default function Project (props){
    console.log(props)
    return(
        <div >
            <a className='flex  justify-center hover:bg-gray-800' href={`${props.project.url}`} >
                <div className="flex flex-wrap border-4  justify-center">
                   <div className='flex items-center bg-blue-300/100 justify-center w-1/2 '>
                    <div>

             <h2 className=' text-2xl bg-white/50 text-center text-gray-900 rounded bold m-4'>{props.project.name} </h2> 
            
                    <div className="">
                    <h2 className='flex text-2xl m-4  justify-center bg-blend-darken text-black rounded bold '>{props.project.skills} </h2> 
                </div> 
            <p className="text-lg bg-white/20 text-black m-4 text-center rounded lg:text-xl ">{props.project.description}</p>
            
            </div>
             <div><br/></div>
            </div>
            {/* <div className=""> */}
                 <img src={""+props.project.media+""} className="border-4   border-gray-800 bg-gray-800"  />
            {/* </div> */}
            
                </div>
                 
            
            
             </a>
        </div>
            
        
    )
}
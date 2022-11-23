
export default function Project (props){
    console.log(props)
    return(
    <div>
        <div>
            <a className='flex flex-wrap justify-center w- hover:bg-blue-700' href={`${props.project.url}`} >
            <div className='flex flex-col justify-between '>
             <h2 className='text-center text-xl bold m-4'>{props.project.name} </h2> 
             <div className=' justify-center flex text-center m2 m2 flex items-center'>
            <p className="hover:text-lg text-sm sm:text-md lg:text-xl sm:w-1/3">{props.project.description}</p>
            </div>
             <div><br/></div>
            </div> 
            <div className="flex justify-center w-1/2 ">
                 <img src={""+props.project.media+""}  />
            </div>
             </a>
        </div>
    </div>
    )
}
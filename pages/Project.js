import { Card } from "flowbite-react";

export default function Project (props){
    console.log(props.project)
    return(

<div className="w-1/2 p-8  border-2">
    <div className="p-8 border-2 bg-gray-800 border-blue-100">
    <h5 className="text-2xl mb-4 font-bold text-center tracking-tight text-white ">
    {props.project?props.project.name:""}
    </h5>
<div className="flex justify-center">
    <div className="max-w-">
    <a className='flex drop-shadow-2xl  justify-center ' href={`${props.project?props.project.url:""}`} >
        <Card  className="hover:bg-white hover:text-gray-700 rounded-none border-radius-none dark:text-gray-300 flex w-fit" imgSrc={`${props.project?props.project.media:""}`} >
    
    <p className="font-normal text-xl text-center h-24  ">
    {props.project?props.project.description:""}
    </p>
  </Card></a>
</div>
</div>
{/* <div className="flex flex-wrap border-4  justify-center"> */}


<h2 className='flex text-2xl m-4  justify-center bg-blend-darken text-white rounded bold '>{props.project?props.project.skills:""} </h2> 
    </div>

</div>

        




        
            
        
    )
}
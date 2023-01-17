import { Card } from "flowbite-react";

export default function Project (props){
    console.log(props)
    return(
        // <div >
        //     <a className='flex  justify-center hover:bg-gray-800' href={`${props.project.url}`} >
        //         <div className="flex flex-wrap border-4  justify-center">
        //            <div className='flex items-center bg-blue-300/100 justify-center w-1/2 '>
        //             <div>

        //      <h2 className=' text-2xl bg-white/50 text-center text-gray-900 rounded bold m-4'>{props.project.name} </h2> 
            
        //             <div className="">
        //             <h2 className='flex text-2xl m-4  justify-center bg-blend-darken text-black rounded bold '>{props.project.skills} </h2> 
        //         </div> 
        //     <p className="text-lg bg-white/20 text-black m-4 text-center rounded lg:text-xl ">{props.project.description}</p>
            
        //     </div>
        //      <div><br/></div>
        //     </div>
        //     {/* <div className=""> */}
        //          <img src={""+props.project.media+""} className="border-4   border-gray-800 bg-gray-800"  />
        //     {/* </div> */}
            
        //         </div>
                 
            
            
        //      </a>
        // </div>
        
//         <div className="relative">
//             <div class="max-w-2xl m-auto">
//   <div id="default-carousel" class="relative mb-4 mt-4 ml-4" data-carousel="slide">
//     {/* <!-- Carousel wrapper --> */}
//     <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
//          {/* <!-- Item 1 --> */}
//         <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
//             <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
//             <img src="data:image/jpeg;base64,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" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
//             {/* <img src class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."> */}
//         </div>
//         {/* <!-- Item 2 --> */}
//         <div class="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="data:image/jpeg;base64,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" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
//         </div>
//         {/* <!-- Item 3 --> */}
//         <div class="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="data:image/jpeg;base64,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" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
//         </div>
//     </div>
//     {/* <!-- Slider indicators --> */}
//     <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
//         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//     </div>
//     {/* <!-- Slider controls --> */}
//     <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
//         <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
//             <span class="hidden">Previous</span>
//         </span>
//     </button>
//     <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
//         <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
//             <span class="hidden">Next</span>
//         </span>
//     </button>
// </div>
//   <p class="ml-4">This carousel component is part of the <a class="text-blue-600 hover:underline" href="https://flowbite.com/docs/components/carousel/" target="_blank">Flowbite component library.</a></p>
// </div>
//         </div>

<div className="w-1/2 p-8  border-2">
    <div className="p-8 border-2 bg-gray-800 border-blue-100">
    <h5 className="text-2xl mb-4 font-bold text-center tracking-tight text-white ">
    {props.project.name}
    </h5>
<div className="flex justify-center">
    <div className="max-w-">
    <a className='flex drop-shadow-2xl  justify-center ' href={`${props.project.url}`} ><Card  className="hover:bg-white hover:text-gray-700 rounded-none border-radius-none dark:text-gray-300 flex w-fit" imgSrc={""+props.project.media+""} >
    
    <p className="font-normal text-xl text-center h-24  ">
    {props.project.description}
    </p>
  </Card></a>
</div>
</div>
{/* <div className="flex flex-wrap border-4  justify-center"> */}


<h2 className='flex text-2xl m-4  justify-center bg-blend-darken text-white rounded bold '>{props.project.skills} </h2> 
    </div>

</div>

        




        
            
        
    )
}
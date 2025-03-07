import gsap from "gsap";
import { useEffect, useRef } from "react"

function AnimatedTitle({title , containerClass}) {
  const  containerRef = useRef(null);
 useEffect(()=>{
  const ctx = gsap.context(()=>{
   const titleAnimation = gsap.timeline({
     scrollTrigger:{
      trigger:containerRef.current,
      start:'100 bottom',
      end: 'centr bottom',
      toggleActions:'play none none reverse'
     }
   });

   titleAnimation.to('.animated-word',{
    opacity:1,
    transform:'translate3d(0,0,0) rotateY(0deg)  rotateX(0deg)',
    ease:'power2.inOut',
    stagger:0.05,
   })
  } , containerRef)
  return ()=> ctx.revert();
},[])
  
  return (
  <div
  ref={containerRef} 
  className={`animated-title ${containerClass}`} >
     {
        title.split('<br/>').map((line , id)=>(
         <div key={id} className="flex-center max-w-full 
         flex-wrap gap-2  px-10  md:text-[6.3vw] ">
           {
            line.split(' ').map((word , i)=>(
                <span key={i} className="animated-word "
                dangerouslySetInnerHTML={{__html: word}}/>
            ))
           }
        </div>
        ))
     }
  </div>
  )
}

export default AnimatedTitle
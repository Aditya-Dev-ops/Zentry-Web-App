import { useGSAP } from "@gsap/react"
import AnimatedTitle from "./AnimatedTitle"
import gsap from "gsap"
import { useRef } from "react"
import RoundedCornenrs from "./RoundedCornenrs"
import Button from "./Button"
const Story = () => {

    const frameRef = useRef(null);

    const handleMouseLeave = ()=>{
    const element = frameRef.current;
    gsap.to(element , {
            rotateX: 0,
            rotateY: 0,
            ease:'power1.inOut'
        })
    }
    const handleMouseMove = (e)=>{
    const {clientX , clientY} = e;
    const element = frameRef.current;
    if(!element) return ;
    const rect = element.getBoundingClientRect();
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerX) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element , {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3 ,
        transformPerspective: 500,
        ease:'power1.inOut'
    })
    }
    useGSAP(()=>{
        const AnimateWelcomeZentry = gsap.timeline({
            scrollTrigger:{
              trigger:'#story',
              start:"top 90%",
              end:"top 80%",
              scrub:'0.4'
            }
          });
          AnimateWelcomeZentry.to('#t1',
            {
             opacity:1
            }
          )
          AnimateWelcomeZentry.to('#t2',
           {
            opacity:1
           })
          AnimateWelcomeZentry.to('#t3',
           {
            opacity:1
           })
          AnimateWelcomeZentry.to('#t4',
           {
            opacity:1
           })
    })
  return (
       <section id="story" className="min-h-dvh w-screen
       bg-black text-blue-50">
         <div className="flex size-full flex-col 
         items-center py-10 pb-24">
           <p className="font-general text-sm uppercase
           md:text-[10px]">
            <span className="opacity-0" id="t1"> The </span>
            <span className="opacity-0" id="t2"> multiversal </span>
            <span className="opacity-0" id="t3"> ip </span>
            <span className="opacity-0" id="t4"> world </span>
           </p>
           <div className="relative size-full">
             <AnimatedTitle
              title="The st<b>o</b>ry of <br/> a hidden realm"
              sectionId = "#story"
              containerClass="mt-5 pointer-event-none 
              mix-blend-difference relative z-10 text-blue-50"
             />

             <div className="story-img-container">
               <div className="story-img-mask">
                 <div className="story-img-content">
                     
                  <img 
                   ref={frameRef}
                   onMouseLeave={handleMouseLeave}
                   onMouseUp={handleMouseLeave}
                   onMouseEnter={handleMouseLeave}
                   onMouseMove={handleMouseMove}
                   src="/img/entrance.webp"
                   alt="entrance" 
                   className="object-contain"
                   />
                 </div>
               </div>
               <RoundedCornenrs/>
             </div>
           </div>

            <div className="-mt-36 flex w-full justify-center 
            md:me-44 md:-mt-15  md:justify-end">
              <div className="flex h-full w-fit flex-col items-center
              md:items-start">
                  <p className="-mt-16 max-md:-mt-24 max-w-sm text-center
                  font-circular-web text-violet-50 md:text-start ">
                    where realms converge, lies Zentry and the boundless
                    pillar. Discover its secrets and shape your fate amidst infinite opportunities.
                  </p>
                  <Button
                   id="realm-button"
                   title="discover prologue"
                   containerClass="mt-5 text-black"
                   ChooseBtnClass="Story-Btn"
                   isAnimated
                  />
              </div>
            </div>

         </div>
       </section>
 )
}

export default Story
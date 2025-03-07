import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import AnimatedTitle from "./AnimatedTitle";

const About = () => {
  useGSAP(()=>{
  const clipAnimation = gsap.timeline({
    scrollTrigger:{
      trigger:'#clip',
      start:'center center',
      end:'+=800 center',
      scrub:0.5,
      pin:true,
      pinSpacing:true
    }
  });
  clipAnimation.to('.mask-clip-path', {
    width:'101vw',
    height:'101vh',
    borderRadius:'0'
  })
  },[])

  useGSAP(()=>{
    const AnimateWelcomeZentry = gsap.timeline({
      scrollTrigger:{
        trigger:'#about',
        start:"top 90%",
        end:"top 80%",
        scrub:'0.4'
      }
    });
    AnimateWelcomeZentry.to('#first',
      {
       opacity:1
      }
    )
    AnimateWelcomeZentry.to('#second',
     {
      opacity:1
     })
    AnimateWelcomeZentry.to('#third',
     {
      opacity:1
     })
  })
  return (
       <div id="about" className="min-h-screen w-screen ">
          <div className="relative mb-8 mt-36 flex flex-col 
          items-center gap-5">
           <h2 className="font-general text-sm  uppercase
           md:text-[10px]"> 
           <span id="first" className="opacity-0"> Welcome </span>
           <span id="second" className="opacity-0"> to  </span>
           <span id="third" className="opacity-0"> Zentry </span>
           </h2>      
            <AnimatedTitle
              title={`Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure`}
              containerClass="text-black"
            />

            <div className="about-subtext">
              <p>The Game of Games begins-your life, now an epi
                MMORPG</p>
                <p>
                  Zentry unites every player from countless games and platforms
                </p>
            </div>
          </div>
          <div className="h-dvh w- w-screen" id="clip">
            <div className="mask-clip-path about-image overflow-hidden">
              <img src="img/about.webp" 
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
              />
            </div>
          </div>
       </div>
  )
}

export default About
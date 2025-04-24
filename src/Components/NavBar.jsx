import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { IoMenu } from "react-icons/io5";

function NavBar() {
    const navContainerRef = useRef(null);
    const [isAudioPlaying , setIsAudioPlaying] = useState(false);
    const [isIndicatorActive , setIsIndicatorActive] =useState(false);
    const audioElementRef = useRef(null); 
    const RightNavData = ["nexus" , "vault" , "prologue" , "about" , "contact"];
    
    const [lastScrollY , setLastScrollY] = useState(0);
    const { y:currentScrollY } = useWindowScroll(); 
    const [isNavVisible , setIsNavVisible] = useState(false);

    const toggleAudioIndicator =()=>{
       setIsAudioPlaying((prev)=> !prev);
       setIsIndicatorActive((prev)=>!prev);
    };

    useEffect(()=>{
      console.log(currentScrollY - lastScrollY + "This Checked")
      if(currentScrollY === 0){
        setIsNavVisible(true);
        navContainerRef.current.classList.remove('floating-nav')
      }
      else if(currentScrollY > lastScrollY){
          setIsNavVisible(false);
          navContainerRef.current.classList.add('floating-nav');
      }
      else if(currentScrollY < lastScrollY){
        setIsNavVisible(true);
        navContainerRef.current.classList.add('floating-nav');
      }
      setLastScrollY(currentScrollY)
    },[currentScrollY , lastScrollY]);
    
    useEffect(()=>{
      gsap.to(navContainerRef.current,{
        y: isNavVisible?0:-100,
        opacity:isNavVisible?1:0,
        duration:0.2
      })
    },[currentScrollY , isNavVisible])

    useEffect(()=>{
     if(isAudioPlaying){
      audioElementRef.current.classList.remove('hidden')
      audioElementRef.current.play();
     }
     else{
      audioElementRef.current.pause();
     }
    },[isAudioPlaying]);
  return (
    <div
    ref={navContainerRef}
    className="fixed inset-x-0 top-4 z-50 h-16  w-[full - inset-4] lg:w-full border-none
    transition-all duration-700 sm:inset-x-6  rounded-md ">
        <header className="absolute top-1/2 w-full
         -translate-y-1/2  z-50 h-full">
            <nav className="flex size-full items-center justify-between p-4">
               <div className="flex items-center gap-7">
                 <img src="/img/logo.png" alt="logo"
                 className="w-10"/>

                 <Button
                 id="product-button"
                 title="products"
                 rightIcon={<TiLocationArrow/>}
                 containerClass={"bg-blue-50 md:flex items-center justify-center"}
                 ChooseBtnClass="NavBar-Animated"
                 isAnimated={true}
                 />
               </div>

              <div className="flex justify-center text-white">

               <div className="w-fit justify-center items-center transition-all sm:flex hidden"
               >
                  {RightNavData.map((item ,id)=>(
                    <Button id={id}  key={id} title={item} NavRightBtn={true}/>
                  ))}
               </div>

               <div className="sm:hidden flex justify-center items-center">
               <IoMenu className="w-10 h-5"/>
               </div>

               <div className="mr-5">
               <button
                    className="ml-6 flex items-center justify-center h-10 w-10 bg-slate-950 p-2 rounded-full"
                    onClick={toggleAudioIndicator}
                  >
                    {/* Audio element is always present */}
                    <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />

                    {isAudioPlaying ? (
                      // Audio bars when playing
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4].map((bar) => (
                          <div
                            key={bar}
                            className={`indicator-line bg-white w-1 h-4 ${isIndicatorActive ? 'active' : ''}`}
                            style={{ animationDelay: `${bar * 0.1}s` }}
                          />
                        ))}
                      </div>
                    ) : (
                      // Play state (Before clicking)
                      <span className="text-white">▶</span>
                    )}
                  </button>
               </div>
               {/* <div className="h-10 w-10 bg-amber-50 flex items-center justify-center rounded-full">
                {isAudioPlaying ? 
                <AiFillPauseCircle 
                 onClick={()=>setIsAudioPlaying(!isAudioPlaying) }
                className="h-7 w-7" /> : 
                <FaCirclePlay 
                 onClick={()=>setIsAudioPlaying(!isAudioPlaying) }
                 className="h-7 w-7" />}
                </div> */}
            </div>
           </nav>
        </header>
    </div>
  )
}

export default NavBar
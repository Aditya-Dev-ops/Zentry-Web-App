import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

function Button({ title, id, rightIcon, leftIcon, containerClass, isAnimated = false, NavRightBtn = false , ChooseBtnClass=""}) {
  const [isHovered, setIsHovered] = useState(false);
  const btnRef = useRef(null);

  // GSAP animations
  useGSAP(() => {
    if (isAnimated) {
      if (isHovered) {
        console.log("Run Animation")
        gsap.to(`.${ChooseBtnClass}`, {
          y: -17,
          duration: 0.3,
          ease: "power1.out",
        });
      } else {
        gsap.to(`.${ChooseBtnClass}`, {
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      }
    }
  }, [isHovered]);

   return (
    <>
      {!isAnimated ? (
        <button
        id={id}
        key={id}
        className={` group relative z-10 w-fit cursor-pointer  rounded-full transition-all  px-7 py-3 ${containerClass} ${NavRightBtn?`hover:bg-violet-50 hover:text-black text-violet-50`:"bg-violet-50"}`}

        ref={btnRef}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}
      >
         <div className="overflow-y-hidden w-fit h-4 relative">
          <div className="flex relative">
          {leftIcon}
          <span className="relative  overflow-hidden font-general text-xs uppercase block">
            <div>{title}</div>
          </span>
          {rightIcon}
          </div>
        </div>
          </button>
      ) : (
    <button
      id={id}
      key={id}
      className={`group relative z-10 w-fit cursor-pointer  rounded-full bg-violet-50 px-7 py-3 ${containerClass}`}
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
    >
        <div className="overflow-y-hidden w-fit h-4 relative" >
          <div className={`flex relative changed ${ChooseBtnClass}`}>
          {leftIcon}
          <span className="relative  overflow-hidden font-general text-xs uppercase block">
            <div>{title}</div>
          </span>
          {rightIcon}
          </div>
          <div className={`flex relative  ${ChooseBtnClass}`}>
          {leftIcon}
          <span className="relative  overflow-hidden font-general text-xs uppercase block">
            <div>{title}</div>
          </span>
          {rightIcon}
          </div>
        </div>
        </button>
      )}
    </>
  );
}

export default Button;


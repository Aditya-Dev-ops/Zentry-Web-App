import { useRef } from "react";
import { useState } from "react"


const BentoTilt = ({children , className=""}) => {
 const [transformStyle ,setTransformStyle] = useState("");
 const itemRef = useRef(null);
 
 const handleMouseMove = (e)=>{
   if(!itemRef.current) return;

  const {left ,top , width , height} = itemRef.current.getBoundingClientRect();
  const relativeX = (e.clientX - left) / width;
  const relativeY = (e.clientY - top) / height;
  const tiltX = (relativeY - 0.5) * 25;
  const tiltY = (relativeX - 0.5) * -25;

  const newTransform = `perspective(700px) rotateX(${tiltX}deg)
  rotateY(${tiltY}deg) scale3d(0.98 , 0.98 , 0.98)`
  console.log("Turn")
   setTransformStyle(newTransform)
 }

 const handleMouseLeave = ()=>{
 setTransformStyle("")
 }

  return (
    <div className={className}
    ref={itemRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{transform:transformStyle}}
    >
        {children}
    </div>
  )
}

export default BentoTilt
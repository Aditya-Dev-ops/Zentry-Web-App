import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";
import BentoTilt from "./BentoTilt";

const Features =()=>{
return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg
          text-blue-50"> Into the Metagame Layer</p>
        
        <p className="max-w-md font-circular-web text-lg text-violet-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe
            where a vibrant array of products coverge into an interconnected
            overlay experience on your world
        </p>
       </div>
      
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full
      overflow-hidden rounded-md md:h-[65vh]">
       <BentoCard
        src="videos/feature-1.mp4"
        title={<>radi<b>n</b>t</>}
        description="A cross-platform 
        metagame app , turning your activities across web3 games into a rewarding adventure."
        isComingSoon
       />
      </BentoTilt>
       <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
         
         <BentoTilt
         key={1}
         className="bento-tilt_1 row-span-1 md:col-span-1
         md:row-span-2">
           <BentoCard
           src="videos/feature-2.mp4"
           title={<>Zig<b>m</b>a</>}
           description="An anime and gaming-inspired NFT
           collection - the IP primed for expansion"
           />
         </BentoTilt>

         <BentoTilt 
         key={2}
         className="bento-titl_1 row-span-1 col-span-1
          md:col-span-1 md:ms-0">
            <BentoCard
             src="videos/feature-3.mp4"
             title={<>n<b>e</b>xus</>}
             description="A gamified social hub, adding a new dimension of play to social
             interaction for web3 communities."
            />
         </BentoTilt>
         
         <BentoTilt
         key={3}
         className="bento-titl_1 me-14 row-span-1 md:col-span-1 md:me-0">
         <BentoCard
             src="videos/feature-4.mp4"
             title={<>az<b>u</b>l</>}
             description="the agent of against elevating agentic ai experience 
             to be more fun and productive"
         />
         </BentoTilt>

         <BentoTilt
         key={4}
         className="bento-tilt_2">
           <div className="flex size-full flex-col
           justify-between bg-violet-300 p-5">
            <h1 className="bento-title">M<b>o</b>re co<b>m</b>ing s<b>o</b>on!</h1>
             
             <TiLocationArrow className="m-5 scale-[5] self-end"/>
           </div>
         </BentoTilt>

          <BentoTilt 
            key={5}
            className="bento-tilt_2 ">
            <video
             src="videos/feature-5.mp4"
             loop
             muted
             autoPlay
             className="size-full object-cover object-center"
            />

          </BentoTilt>
       </div>
      </div>
    </section>
)
}

export default Features;
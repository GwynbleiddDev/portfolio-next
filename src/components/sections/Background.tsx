import Image from "next/image";


export default function Background() {
  return (
    <div className="scene">
      <div className="delorean-container">
        <Image 
          src="/assets/bg/delorean.svg" 
          alt="DeLorean" 
          className="delorean"
          fill
        />
      </div>
      <div className="top">
        <div className="startails">
          <div className="startail-r"></div>
          <div className="startail-l"></div>
          <div className="startail-m"></div>
        </div>
        <div className="top-lines"></div>
        <div className="sun"></div>
        <Image 
          src="/assets/bg/palm-small.svg" 
          alt="Palm Small" 
          className="palm small"
          fill
        />
        <Image 
          src="/assets/bg/palm.svg" 
          alt="Palm" 
          className="palm"
          fill
        />
      </div>
      <div className="bottom">
        <div className="m0"></div>
        <div className="m1"></div>
        <div className="m2"></div>
        <div className="bottom-overlay"></div>
      </div>
      <div id="stars"></div>
    </div>
  )
}
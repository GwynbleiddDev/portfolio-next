import Image from "next/image";


export default function Background() {
  return (
    <div className="scene">
      <div className="delorean-container">
        <Image 
          src="/assets/bg/delorean.svg" 
          alt="DeLorean" 
          className="delorean"
          width={200}
          height={100}
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
          width={100}
          height={150}
        />
        <Image 
          src="/assets/bg/palm.svg" 
          alt="Palm" 
          className="palm"
          width={150}
          height={200}
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
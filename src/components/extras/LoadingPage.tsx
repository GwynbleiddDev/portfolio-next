import { useLenis } from "lenis/react"
import { useEffect } from "react"


export default function LoadingPage({ fadeOut } : {fadeOut : boolean}) {

  const lenis = useLenis()
  
  useEffect(() => {
    lenis?.stop() 
    window.scrollTo(0, 0)
    if(fadeOut) setTimeout(() => lenis?.start(), 500)
  })

  return (
    <div
      id="load"
      className={`text-purple-800 fixed inset-0 w-screen h-screen z-50 overflow-hidden transition-opacity duration-500 ease-in-out ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <p>G</p>
      <p>N</p>
      <p>I</p>
      <p>D</p>
      <p>A</p>
      <p>O</p>
      <p>L</p>
    </div>
  )
}
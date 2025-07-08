'use client'


type NavOverlayProps = {
  isOpen: boolean
  isOpening: boolean
  isClosing: boolean
}


export default function NavOverlay({ isOpen, isOpening, isClosing }: NavOverlayProps) {
  return (
    (isOpening || isOpen || isClosing) && (
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-gray-900/50 backdrop-blur-lg transition-opacity duration-500 ease-in-out z-40 ${
          isOpen && !isClosing ? 'opacity-100' : 'opacity-0'
        }`}
      />
    )
  )
}
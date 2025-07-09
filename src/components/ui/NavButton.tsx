'use client'

import Link from 'next/link'


type NavButtonProps = {
  href: string
  id: string
  label: string
  isActive: boolean
  onClick: () => void
}

export default function NavButton({ href, id, label, isActive, onClick }: NavButtonProps) {

  return (
    <Link
      href={href}
      id={id}
      className={`transition-colors duration-300 ${
        isActive
          ? 'text-indigo-200 cursor-not-allowed'
          : 'text-indigo-400 hover:text-indigo-200'
      }`}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {label}
    </Link>
  )
}
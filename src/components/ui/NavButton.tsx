import Link from "next/link"

interface NavButtonProps {
  href: string
  id: string
  label: string
  isActive?: boolean
}

export default function NavButton({href, id, label, isActive = false }: NavButtonProps) {
  return (
    <li className={isActive ? 'active' : ''}>
      <Link
        href={href}
        id={id}
        className={`nav-link text-indigo-400 hover:text-indigo-200 ${isActive ? 'text-indigo-200' : ''}`}
      >{label}</Link>
    </li>
  )
}

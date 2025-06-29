'use client';

import Link from 'next/link';

interface NavButtonProps {
  href: string;
  id: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function NavButton({ href, id, label, isActive, onClick }: NavButtonProps) {
  return (
    <Link
      href={href}
      id={id}
      className={`text-indigo-400 hover:text-indigo-200 transition-colors duration-300 ${
        isActive ? 'underline underline-offset-4' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
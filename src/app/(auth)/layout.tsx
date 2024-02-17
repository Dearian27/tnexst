"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {name: "Register", href: "/register"},
  {name: "Login", href: "/login"},
]

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
  
  return (
    <>
      {navLinks.map(el => {
        const isActive = pathname.startsWith(el.href);
        return <Link style={isActive ? {textDecoration: "none"} : {}} key={el.href} href={el.href}> 
          {el.name}
        </Link>
      })}
    <div style={{margin: '0 auto'}}>
      <h2 style={{margin: '0 auto'}}>Auth page</h2>
      {children}
    </div>
    </>
  )
}
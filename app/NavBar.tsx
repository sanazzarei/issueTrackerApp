import Link from 'next/link'
import React from 'react'
import { IoBugSharp } from "react-icons/io5";

function NavBar() {
    const links =[
        { href: '/' , name : 'Dashboard'},
        { href: '/issues' , name : 'Issues'}
    ]
  return (
    <div>
      <nav className='flex space-x-6 px-3 items-center border-b mb-4 h-14'>
        <Link href='/'><IoBugSharp /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => <li key={link.href}><Link  href={link.href}  className=' text-zinc-500 hover:text-zinc-800 transition-colors'>{link.name}</Link></li>)}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar

'use client'
import Link from 'next/link'
import React from 'react'
import { IoBugSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';


function NavBar() {
    const currentPath = usePathname();
    const links =[
        { href: '/' , name : 'Dashboard'},
        { href: '/issues' , name : 'Issues'}
    ]
  return (
    <div>
      <nav className='flex space-x-6 px-3 items-center border-b mb-4 h-14'>
        <Link href='/'><IoBugSharp /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => <li key={link.href}>
                <Link  href={link.href}     className={classNames({
                'text-zinc-800': currentPath === link.href,
                'text-zinc-500': currentPath !== link.href,
                'hover:text-zinc-800 transition-colors': true
              })}
                >{link.name}</Link>
                </li>)}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar

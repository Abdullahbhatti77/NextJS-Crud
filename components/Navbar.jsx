import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3 rounded-lg'>
        <Link href={'/'} className='font-bold text-white '>Home</Link>
        <Link href={'/addTopic'} className='bg-white p-2 rounded-lg'>Add topic</Link>
    </nav>
  )
}

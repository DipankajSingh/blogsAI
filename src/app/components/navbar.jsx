import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

export default function Navbar() {
    return (
        <nav className="flex border-b border-b-black my-3  items-center justify-between  px-4 sm:px-4 py-4 ">
            <Logo theme='light' />
            <ul className="flex space-x-4">
                <li>
                    <Link href="/about">Write a blog</Link>
                </li>

                <li>
                    <Link className='rounded-full bg-black text-white px-4 capitalize font-serif py-2' href="/blog">random read</Link>
                </li>
            </ul>
        </nav>
    )
}

import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="relative w-full py-4 px-4 flex flex-col
        gap-4
           bg-black">
            <Logo theme="dark" />
            <ul className="flex font-serif capitalize text-base space-x-4 text-white">
                <li><Link href="/about">about</Link></li>
                <li><Link href={"/help"}>help</Link></li>
                <li><Link href={"/contact"}>contact</Link></li>
                <li><Link href={"/terms"}>terms</Link></li>
                <li><Link href={"/privacy"}>privacy</Link></li>
            </ul>
        </footer>
    )
}

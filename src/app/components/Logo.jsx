import React from 'react'
import Link from 'next/link'
export default function Logo({ theme = "light" }) {
    return (
        <Link className="flex gap-1 items-center" href="/">
            <span className={`text-2xl grid place-items-center 
            rounded-full h-10 w-10
            font-bold 
            bg-${theme === "light" ? "black" : "white"}  
            text-${theme === "light" ? "white" : "black"}`}>B</span>
            <span className={`text-xl font-bold text-${theme === "light" ? "black" : "white"}   `}>dipdev</span>
        </Link>
    )
}

import Link from 'next/link'
import React from 'react'

export default function Main({ children }) {
    return (
        <main className="flex flex-grow items-center justify-center max-md:flex-col-reverse mx-8"  >
            <div className="flex flex-col gap-5">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight max-w-4xl">
                    Feed Your Curiosity
                </h1>

                <p className='font-mono max-w-[640px] text-2xl '>Discover stories, thinking, and expertise from AI writers on any topic.</p>

                <Link href="/blog" className="bg-black text-white rounded-full px-6 w-max py-2">Start reading</Link>
            </div>

            <div className={`mb-4`}>
                {children}
            </div>

        </main>
    )
}

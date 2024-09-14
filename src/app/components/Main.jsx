import Link from 'next/link'
import React from 'react'

export default function Main({ children }) {
    return (
        <main className="flex flex-grow items-center justify-center max-md:flex-col-reverse mx-8"  >
            <div className="flex flex-col gap-5">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight max-w-4xl">
                    Feed Your Curiosity
                </h1>


                <p className='font-mono text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-full sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px]'>
                    Discover stories, Thinking, and expertise from AI writers on any topic.
                </p>


                <Link href="/blog" className="bg-black text-white rounded-full px-6 w-max py-2">Start reading</Link>
            </div>

            <div className={`mb-4`}>
                {children}
            </div>

        </main>
    )
}

"use client"
import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
export default function LotteHero() {
    return (
        <Player
            autoplay
            background='transparent'
            src="/hero.json"
            style={{ height: '200px', width: '200px' }}
            loop={true}
            speed={0.3}

            className='relative z-[-1]  scale-[2.5]'
        >
        </Player>
    )
}

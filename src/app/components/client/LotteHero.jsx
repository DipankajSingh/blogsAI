"use client"
import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
export default function LotteHero() {
    return (
        <Player
            autoplay
            background='transparent'
            src="/hero.json"
            style={{ height: '400px', width: '400px' }}
            loop={true}
            className='right-1/3 scale-150 relative  z-[-1]'
        >
        </Player>
    )
}

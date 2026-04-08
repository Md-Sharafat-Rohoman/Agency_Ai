import React from 'react'
import assets from '../assets/assets'

export default function Hero() {
    return (
        <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
            {/* Trusted Badge */}
            <div className='inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 p-1.5 pr-4 rounded-full'>
                <img className='w-20' src={assets.group_profile} alt="" />
                <p className='text-xs font-medium'>Trusted by 10k+ people</p>
            </div>

            <h1 className='text-4xl sm:text-7xl font-bold leading-tight'>
                Build your next <span className='text-primary'>AI Agency</span>
            </h1>
        </div>
    )
}
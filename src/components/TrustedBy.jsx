import React from 'react'
import { company_logos } from '../assets/assets'

export default function TrustedBy() {
    return (

        <div className='py-10 text-center'> 
            <h3 className='font-semibold text-gray-600 dark:text-gray-300 mb-6'>
                Trusted by Leading Companies
            </h3> {/* */}

            <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
                {company_logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Company ${index}`}
                        className='max-h-5 sm:max-h-6 grayscale hover:grayscale-0 transition-all duration-300 dark:drop-shadow-xl'
                    />
                ))} {/* */}
            </div>
        </div>
    )
}

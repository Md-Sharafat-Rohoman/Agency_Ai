import React from 'react'
import { company_logos } from '../assets/assets'
import { motion } from "motion/react"
// import { Visitor } from 'vite'


export default function TrustedBy() {
    return (

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='py-10 text-center'>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='font-semibold text-gray-600 dark:text-gray-300 mb-6'>
                Trusted by Leading Companies
            </motion.h3> {/* */}

            <motion.div
                initial='hidden'
                whileInView='visible'
                transition={{ staggerChildren:0.1 }}
                viewport={{ once: true }}
                className='flex items-center justify-center flex-wrap gap-10 m-4'
            >
                {company_logos.map((logo, index) => (
                    <motion.img
                    variants={{
                        hidden:{opacity:0, y:10},
                        visible:{opacity:1, y:0}
                    }}
                    transition={{duration:0.4}}
                        key={index}
                        src={logo}
                        alt={`Company ${index}`}
                        className='max-h-5 sm:max-h-6 hover:scale-110 transition-all duration-300 dark:drop-shadow-xl'
                    />
                ))} {/* */}
            </motion.div>
        </motion.div>
    )
}

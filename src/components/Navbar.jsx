import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from "motion/react"

export default function Navbar({ theme, setTheme }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 overflow-x-clip'>

            <img
                src={theme === "dark" ? assets.logo_dark : assets.logo}
                alt="Logo"
                className='w-32 sm:w-40 relative z-30'
            />


            <div className={`
                flex gap-5 transition-all duration-500 ease-in-out
                sm:static sm:flex-row sm:items-center sm:bg-transparent sm:text-gray-700 dark:sm:text-white
                
                max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:min-h-screen max-sm:w-64 
                max-sm:bg-primary dark:max-sm:bg-gray-900 
                max-sm:text-white 
                max-sm:flex-col max-sm:pt-24 max-sm:pl-10 max-sm:z-50 shadow-2xl
                
                ${sidebarOpen ? 'max-sm:right-0' : 'max-sm:-right-64'}
            `}>
                <img
                    src={assets.close_icon}
                    alt="Close"
                    className='w-5 absolute right-6 top-6 sm:hidden cursor-pointer brightness-0 invert'
                    onClick={() => setSidebarOpen(false)}
                />

                <a href="#" className='hover:opacity-70 font-medium text-lg' onClick={() => setSidebarOpen(false)}>Home</a>
                <a href="#services" className='hover:opacity-70 font-medium text-lg' onClick={() => setSidebarOpen(false)}>Services</a>
                <a href="#our-work" className='hover:opacity-70 font-medium text-lg' onClick={() => setSidebarOpen(false)}>Our Work</a>
                <a href="#contact-us" className='hover:opacity-70 font-medium text-lg' onClick={() => setSidebarOpen(false)}>Contact Us</a>
            </div>

            <div className='flex items-center gap-2 sm:gap-4 relative z-30'>
                <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                <img
                    src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
                    alt="Menu"
                    onClick={() => setSidebarOpen(true)}
                    className='w-8 sm:hidden cursor-pointer '
                />

                <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition-all'>
                    Connect <img src={assets.arrow_icon} width={14} alt="" />
                </a>
            </div>
        </motion.div>
    )
}
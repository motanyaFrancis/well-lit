'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Header.css';

const navItems = [
    { href: '#photos', label: 'Photos', color: '#29363B', content: 'Visual Stories' },
    { href: '#videos', label: 'Videos', color: '#EA495F', content: 'Moving Frames' },
    { href: '#music', label: 'Music', color: '#F4837D', content: 'Sonic Vibes' },
    { href: '/discover', label: 'Discover', color: '#FDCEA9', content: 'Explore More' },
    { href: '/about', label: 'About Us', color: '#99B998', content: 'Who We Are' },
    { href: '/contact', label: 'Contact Us', color: '#6C5B7B', content: 'Reach Out' },
];

const Header: React.FC = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    const variants = {
        hidden: (i: number) => ({
            x: -50,
            opacity: 0,
            transition: { delay: i * 0.05 },
        }),
        visible: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: i * 0.1, duration: 0.4 },
        }),
        exit: (i: number) => ({
            x: 50,
            opacity: 0,
            transition: { delay: i * 0.05 },
        }),
    };

    return (
        <>
            <nav className="barStyle topBar">
                <span className="header_span">Well-Lit</span>
                <strong className="header_strong">Pictures</strong>
                <button className="menuButton" onClick={toggleOverlay}>
                    <div className={`menu-icon ${isOverlayOpen ? 'open' : ''}`}></div>
                </button>
            </nav>

            <AnimatePresence>
                {isOverlayOpen && (
                    <motion.div
                        className="overlay_nav enhanced-overlay fixed inset-0 flex flex-col z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        
                        <ul className="flex flex-col md:flex-row w-full h-full text-white text-center text-xl font-light uppercase tracking-widest">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.label}
                                    className="flex-1 flex items-center justify-center relative group"
                                    style={{ backgroundColor: item.color }}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={variants}
                                >
                                    <Link href={item.href} passHref>
                                        <span
                                            onClick={() => setIsOverlayOpen(false)}
                                            className="relative hover-underline-animation cursor-pointer"
                                            data-content={item.content}
                                        >
                                            {item.label}
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;

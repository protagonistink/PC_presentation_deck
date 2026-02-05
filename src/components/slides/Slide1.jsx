import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

export default function Slide1() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-20 bg-brand-black relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="mb-12"
            >
                <img src={logo} alt="Protagonist Ink" className="w-[600px] max-w-full h-auto object-contain" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-4xl"
            >
                <p className="text-brand-orange uppercase tracking-[0.3em] font-sans text-sm mb-4 font-medium">
                    Pacific Crest x Protagonist Ink
                </p>
                <div className="w-24 h-px bg-brand-orange/30 mx-auto mb-8" />
                <p className="text-brand-white/40 font-sans text-xs uppercase tracking-[0.4em]">
                    2/8/26
                </p>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 text-[10px] uppercase tracking-[0.4em] text-white/10 vertical-text h-32 flex items-center">
                EST. 2024
            </div>
            <div className="absolute top-10 right-10 text-[10px] uppercase tracking-[0.4em] text-white/10 vertical-text h-32 flex items-center">
                WORKSHOP SERIES
            </div>
        </div>
    );
}


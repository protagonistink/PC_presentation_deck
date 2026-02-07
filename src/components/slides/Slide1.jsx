import React from 'react';
import { motion } from 'framer-motion';
import pacificCrestLogo from '../../assets/pacific_crest_logo.png';
import protagonistLogo from '../../assets/protagonist_logo_full.png';

export default function Slide1() {
    return (
        <div className="w-full h-full bg-brand-black text-brand-white flex flex-col items-center justify-center p-20 relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-orange/5 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center max-w-5xl"
            >
                {/* Logos */}
                <div className="flex items-center justify-center gap-16 mb-16">
                    <motion.img
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        src={pacificCrestLogo}
                        alt="Pacific Crest"
                        className="h-32 object-contain"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="w-1 h-20 bg-brand-orange/40"
                    />
                    <motion.img
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        src={protagonistLogo}
                        alt="Protagonist Ink"
                        className="h-20 object-contain opacity-90"
                    />
                </div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="font-serif text-[100px] leading-[1] mb-8"
                >
                    Finding Your Story
                </motion.h1>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col items-center gap-6 mb-12"
                >
                    <p className="font-serif text-3xl italic text-brand-white/70">
                        A Retreat on Narrative & Transformation
                    </p>
                    <div className="h-px w-48 bg-brand-orange/40" />
                </motion.div>

                {/* Date and Location */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex items-center justify-center gap-6 text-brand-orange"
                >
                    <span className="font-sans text-sm uppercase tracking-[0.4em] font-bold">
                        February 8, 2026
                    </span>
                </motion.div>
            </motion.div>

            {/* Bottom accent */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent"
            />
        </div>
    );
}

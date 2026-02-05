import React from 'react';
import { motion } from 'framer-motion';
import kidBoots from '../../assets/kid_boots.jpg';
import whiteLogo from '../../assets/logo_white.png';

export default function Slide4() {
    return (
        <div className="w-full h-full bg-brand-white text-brand-black flex flex-col p-20 font-sans">
            {/* Top Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40 mb-4">
                    About Protagonist | Ink
                </p>
                <h1 className="font-serif text-7xl leading-tight">
                    We build stories meant<br />for business.
                </h1>
            </motion.div>

            {/* Hero Image Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-5xl mx-auto mb-16 aspect-[2.5/1] overflow-hidden rounded-sm"
            >
                <img
                    src={kidBoots}
                    alt="Mission"
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-20">
                    <img src={whiteLogo} alt="Protagonist Ink" className="w-[60%] object-contain drop-shadow-2xl" />
                </div>
            </motion.div>

            {/* Bottom 3-Column Content */}
            <div className="grid grid-cols-3 gap-16 w-full max-w-7xl mx-auto mt-auto pb-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    <p className="text-[13px] leading-relaxed text-black/70">
                        We build stories for people on a mission—the founders, brands, and cultural organizations carving their own paths. You're the ones shaping what's next. We're here to help you tell the right story in the right way.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                >
                    <p className="text-[13px] leading-relaxed text-black/70 italic font-serif text-lg">
                        Narrative architecture is the strategy that anchors your vision, aligns your people, and makes every conversation click.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pl-8 border-l border-brand-orange space-y-4"
                >
                    <p className="text-[13px] leading-relaxed text-black/80 font-medium">
                        A powerful story is more than your marketing, it's your DNA. Our goal is to make sure you show up as the protagonist: confident, clear, and impossible to ignore.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

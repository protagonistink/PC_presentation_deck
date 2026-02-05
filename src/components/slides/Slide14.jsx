import React from 'react';
import { motion } from 'framer-motion';

export default function Slide6() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-24 bg-brand-orange text-brand-black">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <span className="text-brand-black/40 uppercase tracking-[0.4em] font-sans text-xs font-bold">Phase One</span>
                <h2 className="text-7xl font-serif text-brand-black mt-6 mb-12 italic leading-tight">
                    Workshop Part 1: <br />
                    Claiming Identity
                </h2>
                <div className="w-24 h-px bg-brand-black/20 mx-auto mb-12" />
                <p className="text-brand-black/60 font-sans text-lg max-w-sm mx-auto">
                    Before we tell the story, we must know the protagonist.
                </p>
            </motion.div>

            {/* Visual texture */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <div className="text-[150px] font-serif italic leading-none select-none">WHO?</div>
            </div>
        </div>
    );
}

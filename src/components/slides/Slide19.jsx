import React from 'react';
import { motion } from 'framer-motion';

export default function Slide19() {
    return (
        <div className="w-full h-full bg-brand-black text-white flex flex-col items-center justify-center p-20 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
            >
                <span className="text-brand-orange uppercase tracking-[0.5em] text-xs mb-8 block font-bold">Act II</span>
                <h1 className="font-serif text-[120px] leading-none mb-12">Building the <br /><span className="italic text-brand-orange">Next Chapter</span></h1>
                <div className="h-px w-32 bg-brand-orange/40 mx-auto mb-16" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-2xl font-serif italic text-white/60 mb-8">
                        Every transformation begins in the status quo.
                    </p>
                    <p className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-bold">
                        Start: The Ordinary World
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

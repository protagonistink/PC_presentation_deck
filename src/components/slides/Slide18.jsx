import React from 'react';
import { motion } from 'framer-motion';

export default function Slide18() {
    return (
        <div className="w-full h-full bg-brand-black text-white flex flex-col items-center justify-center p-20 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
            >
                <span className="text-brand-orange uppercase tracking-[0.5em] text-xs mb-8 block font-bold">Act I</span>
                <h1 className="font-serif text-[140px] leading-none mb-16 italic">The Foundation</h1>
                <div className="h-px w-32 bg-brand-orange/40 mx-auto mb-16" />

                <div className="grid grid-cols-2 gap-24 max-w-4xl mx-auto text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-brand-orange uppercase tracking-widest text-[10px] mb-4 font-bold opacity-60">Question 01</p>
                        <p className="text-4xl font-serif italic text-white/90">Why are we here?</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <p className="text-brand-orange uppercase tracking-widest text-[10px] mb-4 font-bold opacity-60">Question 02</p>
                        <p className="text-4xl font-serif italic text-white/90">Why talk about story?</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

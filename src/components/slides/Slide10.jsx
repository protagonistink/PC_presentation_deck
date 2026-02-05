import React from 'react';
import { motion } from 'framer-motion';

export default function Slide10() {
    return (
        <div className="w-full h-full bg-brand-orange text-brand-white flex flex-col items-center justify-center p-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <p className="font-sans text-sm uppercase tracking-[0.5em] mb-12 opacity-80">The Core Shift</p>
                <h1 className="font-serif text-6xl md:text-7xl leading-tight mb-8">
                    "The best brands in the world <br />
                    <span className="italic">don’t sell products.</span>"
                </h1>
                <div className="h-px w-24 bg-brand-white/30 mx-auto mb-8" />
                <h2 className="font-serif text-5xl italic opacity-90">
                    They sell the belief of transformation.
                </h2>
            </motion.div>
        </div>
    );
}

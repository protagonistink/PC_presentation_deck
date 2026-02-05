import React from 'react';
import { motion } from 'framer-motion';

export default function Slide5() {
    return (
        <div className="w-full h-full bg-brand-black text-brand-white flex items-center justify-center p-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <span className="text-brand-orange uppercase tracking-[0.4em] text-sm mb-12 block font-sans">The Core Question</span>
                <h1 className="font-serif text-9xl leading-none mb-12">
                    What is <span className="italic">Story?</span>
                </h1>
                <div className="h-px w-48 bg-brand-orange/40 mx-auto transition-all duration-1000 group-hover:w-64" />
            </motion.div>
        </div>
    );
}

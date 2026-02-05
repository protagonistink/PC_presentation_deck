import React from 'react';
import { motion } from 'framer-motion';

export default function Slide13() {
    return (
        <div className="w-full h-full bg-brand-white text-brand-black flex items-center justify-center p-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-4xl"
            >
                <span className="text-brand-orange uppercase tracking-[0.4em] font-sans text-sm mb-12 block">Case Study 03</span>
                <h1 className="font-serif text-8xl md:text-9xl mb-12 leading-none">
                    What is <br />
                    <span className="italic">Pacific Crest’s</span> <br />
                    story?
                </h1>
                <div className="h-px w-64 bg-brand-black/10 mx-auto mb-12" />
                <p className="font-sans text-xs uppercase tracking-[0.5em] opacity-30">
                    The question we define today.
                </p>
            </motion.div>
        </div>
    );
}

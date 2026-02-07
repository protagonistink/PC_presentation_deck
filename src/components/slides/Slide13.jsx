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
                <h1 className="font-serif text-[120px] mb-12 leading-none">
                    Once upon <br />
                    <span className="italic text-brand-orange">a time...</span>
                </h1>
                <p className="font-serif text-4xl mb-12 italic opacity-80">
                    There was an organization called Pacific Crest...
                </p>
                <div className="h-px w-64 bg-brand-black/10 mx-auto mb-12" />
                <div className="flex items-center justify-center gap-4 text-brand-orange">
                    <span className="font-sans text-xs uppercase tracking-[0.4em] font-bold">Exercise 01</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/30" />
                    <span className="font-sans text-xs uppercase tracking-[0.4em]">8-10 Minutes + Share Out</span>
                </div>
            </motion.div>
        </div>
    );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function Slide25() {
    return (
        <div className="w-full h-full bg-brand-black text-brand-white flex flex-col items-center justify-center p-20 font-sans relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <div className="w-32 h-1 bg-brand-orange mx-auto mb-12" />

                <h1 className="font-serif text-[100px] leading-tight mb-8">
                    What is <br />
                    <span className="italic text-brand-orange">Pacific Crest's</span> <br />
                    Story?
                </h1>

                <p className="opacity-40 uppercase tracking-[0.5em] text-xs font-bold">
                    Case Study 03
                </p>
            </motion.div>
        </div>
    );
}

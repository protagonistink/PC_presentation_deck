import React from 'react';
import { motion } from 'framer-motion';

export default function Slide10() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-24 bg-brand-black text-center relative overflow-hidden">
            {/* Background grain/texture effect placeholder */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="max-w-4xl relative z-10"
            >
                <span className="text-brand-orange uppercase tracking-[0.5em] font-sans text-xs mb-12 block font-bold">Conclusion</span>
                <h2 className="text-8xl md:text-9xl font-serif text-brand-white italic mb-12 leading-tight">
                    Your Shared Narrative
                </h2>
                <div className="w-48 h-px bg-brand-orange/40 mx-auto mb-12" />
                <p className="text-brand-white/80 font-sans text-2xl tracking-widest uppercase font-light">
                    The story you tell is the <span className="text-brand-white font-bold italic">future you build</span>.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 text-[10px] uppercase font-sans tracking-[0.6em] text-white"
            >
                Protagonist Ink © 2024
            </motion.div>
        </div>
    );
}

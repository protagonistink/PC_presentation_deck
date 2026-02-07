import React from 'react';
import { motion } from 'framer-motion';

export default function Slide20() {
    return (
        <div className="w-full h-full bg-brand-black text-white flex flex-col items-center justify-center p-20 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
            >
                <span className="text-brand-orange uppercase tracking-[0.5em] text-xs mb-8 block font-bold">Act III</span>
                <h1 className="font-serif text-[120px] leading-none mb-12 italic text-brand-orange">The Pitch</h1>
                <div className="h-px w-32 bg-brand-orange/40 mx-auto mb-16" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-xl mx-auto bg-white/5 border border-white/10 p-12 backdrop-blur-sm"
                >
                    <h2 className="font-serif text-5xl mb-6 text-white">The One Liner</h2>
                    <p className="text-white/40 font-sans text-xs uppercase tracking-[0.3em] leading-relaxed">
                        The narrative architecture of your brand, <br />distilled into a single, unmistakable hook.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

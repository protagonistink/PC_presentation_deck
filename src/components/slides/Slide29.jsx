import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Slide29() {
    const [showX, setShowX] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowX(true), 2000); // Auto-reveal X after 2s
        return () => clearTimeout(timer);
    }, []);

    const mistakes = [
        "We're a small community-based nonprofit trying to make a difference.",
        "We serve underresourced youth in the greater LA area.",
        "We believe every child deserves access to music education."
    ];

    return (
        <div className="w-full h-full bg-brand-white text-brand-black flex flex-col items-center justify-center p-20 font-sans relative overflow-hidden">
            <div className="relative z-10 text-center max-w-4xl">
                <p className="font-sans text-xs uppercase tracking-[0.4em] mb-12 opacity-40">
                    Claiming Your Identity
                </p>

                <div className="space-y-12 relative">
                    {mistakes.map((text, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.5 }}
                            className="font-serif text-4xl italic leading-relaxed"
                        >
                            "{text}"
                        </motion.p>
                    ))}

                    {/* The Giant Red X */}
                    <AnimatePresence>
                        {showX && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ type: 'spring', bounce: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                                <svg width="600" height="600" viewBox="0 0 100 100" className="text-red-500/80 drop-shadow-2xl">
                                    <motion.path
                                        d="M 20 20 L 80 80 M 80 20 L 20 80"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    />
                                </svg>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* The Reveal */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: showX ? 1 : 0, y: showX ? 0 : 50 }}
                transition={{ delay: 3.5 }}
                className="absolute bottom-12 bg-brand-black text-white px-12 py-6 rounded-sm shadow-2xl"
            >
                <p className="font-bold uppercase tracking-widest text-sm">The Shift</p>
                <p className="font-serif text-xl italic mt-2">None of these are WHO YOU ARE. They are what you do.</p>
            </motion.div>
        </div>
    );
}

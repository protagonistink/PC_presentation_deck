import React from 'react';
import { motion } from 'framer-motion';

export default function Slide3() {
    return (
        <div className="w-full h-full grid grid-cols-2 bg-brand-black p-24 gap-12 items-center">
            <div className="flex flex-col gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-brand-orange uppercase tracking-[0.3em] font-sans text-xs">Foundations</span>
                    <h2 className="text-6xl font-serif text-brand-white leading-tight mt-6">
                        Reframing <span className="italic">Story</span>
                    </h2>
                    <p className="text-brand-white/60 font-sans text-lg mt-8 max-w-md">
                        Story isn't just a marketing tactic. It's the lens through which we process reality and make meaning.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col gap-12 border-l border-white/10 pl-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-3xl font-serif text-brand-white mb-4 italic">01. Clarity over Cleverness</h3>
                    <p className="text-brand-white/40 font-sans text-sm">
                        The best stories are the ones we understand instantly. If the reader has to work to find the point, you've already lost.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-3xl font-serif text-brand-white mb-4 italic">02. Embrace the Conflict</h3>
                    <p className="text-brand-white/40 font-sans text-sm">
                        Without conflict, there is no story. We often try to hide the messy parts, but that's where the resonance lives.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

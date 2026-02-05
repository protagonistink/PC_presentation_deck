import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function Slide7() {
    return (
        <div className="w-full h-full p-24 bg-black flex flex-col">
            <div className="flex justify-between items-start mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <span className="text-brand-orange uppercase tracking-[.3em] font-sans text-xs">The Breakout</span>
                    <h2 className="text-5xl font-serif text-brand-white mt-4 italic">Round 1: Once Upon A Time</h2>
                </motion.div>

                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                    <Clock className="text-brand-orange" size={18} />
                    <span className="text-brand-white/60 font-mono text-sm uppercase tracking-widest">10 Minutes</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-8"
                >
                    <div className="p-10 bg-white/5 border border-white/10 rounded-2xl relative">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center font-serif text-black text-xl italic">?</div>
                        <h3 className="text-xl font-serif text-brand-white mb-6 italic underline decoration-brand-orange/40 underline-offset-8">The Prompt</h3>
                        <p className="text-brand-white/80 font-sans text-lg leading-relaxed italic">
                            "Once upon a time, there was a [NARRATIVE IDENTITY] who believed [CORE BELIEF]..."
                        </p>
                    </div>
                    <p className="text-brand-white/40 font-sans text-sm italic">
                        Don't overthink. Focus on the raw essence of your role and your conviction.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col gap-8"
                >
                    <h3 className="text-xs uppercase tracking-[.4em] text-white/30 font-sans">Objective</h3>
                    <ul className="flex flex-col gap-6">
                        <li className="flex gap-4">
                            <span className="text-brand-orange font-mono text-xs">01</span>
                            <p className="text-brand-white/60 text-sm">Identify your core archetype.</p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-brand-orange font-mono text-xs">02</span>
                            <p className="text-brand-white/60 text-sm">Define the foundational truth you stand for.</p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-brand-orange font-mono text-xs">03</span>
                            <p className="text-brand-white/60 text-sm">Share with your partner/group.</p>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}

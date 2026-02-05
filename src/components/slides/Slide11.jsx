import React from 'react';
import { motion } from 'framer-motion';

export default function Slide5() {
    return (
        <div className="w-full h-full flex bg-[#111]">
            <div className="w-1/2 h-full relative overflow-hidden bg-brand-orange/10 border-r border-white/5">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 flex items-center justify-center p-20"
                >
                    <div className="text-[200px] font-serif text-white/5 absolute -left-20 -top-20 pointer-events-none">CASE</div>
                    <h2 className="text-8xl font-serif text-brand-white italic relative z-10 leading-none">
                        Belief, <br />
                        <span className="text-brand-orange">Not Product.</span>
                    </h2>
                </motion.div>
            </div>

            <div className="w-1/2 h-full flex flex-col justify-center p-24">
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-brand-orange uppercase tracking-[.3em] font-sans text-xs">Exemplar: Nike</span>
                    <p className="text-brand-white/80 font-sans text-2xl leading-relaxed mt-12 mb-8">
                        "Nike doesn't just sell shoes. They sell the <span className="text-brand-white font-bold italic">spirit of the athlete</span>. They sell the dream of overcoming."
                    </p>
                    <div className="w-12 h-px bg-brand-orange/40 mb-12" />
                    <p className="text-brand-white/40 font-sans text-sm leading-relaxed max-w-md italic">
                        When you align with a belief, the product becomes an artifact of that belief. You aren't buying a shoe; you're buying into a narrative of greatness.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

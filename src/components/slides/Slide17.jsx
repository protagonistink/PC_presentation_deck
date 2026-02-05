import React from 'react';
import { motion } from 'framer-motion';
import { Edit3 } from 'lucide-react';

export default function Slide9() {
    return (
        <div className="w-full h-full p-24 bg-brand-black flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <span className="text-brand-orange uppercase tracking-[.3em] font-sans text-xs mb-8 block">The Synthesis</span>
                <h2 className="text-6xl font-serif text-brand-white italic mb-12">Round 3: The Rewrite</h2>

                <div className="p-16 bg-white/5 border border-white/10 rounded-3xl relative">
                    <Edit3 className="absolute -top-6 -right-6 text-brand-orange bg-brand-black p-2 rounded-lg border border-white/10" size={48} />

                    <h3 className="text-xl font-sans text-white/30 uppercase tracking-[0.3em] mb-12">The Transformer Formula</h3>

                    <div className="flex flex-col gap-8 text-3xl font-serif text-brand-white leading-relaxed italic">
                        <p>
                            "We take <span className="text-brand-orange not-italic font-sans text-sm align-middle mx-2 border-b border-white/20 px-4">[AUDIENCE/CONTEXT]</span>"
                        </p>
                        <p>
                            "Through <span className="text-brand-orange not-italic font-sans text-sm align-middle mx-2 border-b border-white/20 px-4">[SPECIFIC CONFLICT/ACTION]</span>"
                        </p>
                        <p>
                            "To reach <span className="text-brand-orange not-italic font-sans text-sm align-middle mx-2 border-b border-white/20 px-4">[THE NEW REALITY]</span>"
                        </p>
                    </div>
                </div>

                <p className="mt-16 text-brand-white/40 font-sans text-sm max-w-lg mx-auto">
                    Your one-liner should be a promise of transformation. It's not what you do; it's the bridge you build between current reality and potential.
                </p>
            </motion.div>
        </div>
    );
}

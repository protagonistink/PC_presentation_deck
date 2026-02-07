import React from 'react';
import { motion } from 'framer-motion';

export default function Slide27() {
    return (
        <div className="w-full h-full bg-brand-black text-brand-white flex flex-col items-center justify-center p-20 font-sans">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center max-w-5xl"
            >
                <h1 className="font-serif text-7xl leading-tight mb-16">
                    What are the elements needed to tell a <span className="italic text-brand-orange">great story</span>?
                </h1>

                <div className="grid grid-cols-3 gap-8 opacity-60">
                    <div className="border-t border-white/20 pt-4">
                        <p className="uppercase tracking-widest text-sm">Character</p>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                        <p className="uppercase tracking-widest text-sm">Conflict</p>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                        <p className="uppercase tracking-widest text-sm">Resolution</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

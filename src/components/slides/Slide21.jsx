import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function Slide21() {
    return (
        <div className="w-full h-full bg-brand-white text-brand-black flex flex-col items-center justify-center p-20 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center max-w-4xl"
            >
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-12 mx-auto">
                    <MessageSquare className="w-8 h-8 text-brand-orange" />
                </div>

                <h1 className="font-serif text-6xl leading-tight mb-12">
                    Who are the <span className="italic">major characters</span><br />in your organization?
                </h1>

                <div className="h-px w-32 bg-brand-orange/20 mx-auto mb-16" />

                <div className="grid grid-cols-2 gap-12 text-left bg-[#f9f9f9] p-12 rounded-sm border border-black/5">
                    <div>
                        <p className="text-brand-orange uppercase tracking-widest text-[10px] mb-4 font-bold">Characters to identify</p>
                        <ul className="space-y-3 font-serif font-italic text-xl opacity-70">
                            <li>• The Protagonist (The Customer)</li>
                            <li>• The Villain (The Barrier)</li>
                            <li>• The Mentor (The Solution)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center border-l border-black/10 pl-12">
                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-2">Timing</p>
                        <p className="font-serif text-3xl italic">5 Minute Discussion</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

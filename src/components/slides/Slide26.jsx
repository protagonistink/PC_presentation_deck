import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Slide26() {
    return (
        <div className="w-full h-full bg-[#f4f4f4] text-brand-black flex flex-col items-center justify-center p-20 font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl text-center"
            >
                <Quote className="w-16 h-16 text-brand-orange mx-auto mb-8 opacity-50" />

                <h1 className="font-serif text-5xl italic leading-relaxed mb-12">
                    "A hero ventures forth from the world of common day into a region of supernatural wonder."
                </h1>

                <div className="flex flex-col items-center gap-2">
                    <p className="font-bold text-xl uppercase tracking-widest">Joseph Campbell</p>
                    <p className="font-serif italic opacity-60">The Hero with a Thousand Faces (1949)</p>
                </div>

                <div className="mt-20 border-t border-black/10 pt-8 w-full">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40">
                        Context: We didn't invent this structure. We're applying it.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

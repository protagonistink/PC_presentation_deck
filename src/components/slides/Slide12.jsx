import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function Slide12() {
    return (
        <div className="w-full h-full bg-brand-white text-brand-black flex">
            <div className="w-1/2 p-20 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-brand-orange uppercase tracking-[0.3em] font-sans text-xs mb-8 block">Case Study 02</span>
                    <h1 className="font-serif text-8xl mb-4 leading-none text-brand-black">
                        Habitat for <br />
                        <span className="italic">Humanity</span>
                    </h1>
                    <div className="h-2 w-32 bg-brand-orange mb-12" />

                    <p className="font-serif text-4xl italic opacity-70 leading-tight">
                        "They sell the belief that everyone deserves a home."
                    </p>
                </motion.div>
            </div>

            <div className="w-1/2 bg-brand-black flex items-center justify-center p-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    <div className="w-64 h-64 border border-brand-white/10 flex items-center justify-center rounded-sm">
                        <Home className="w-32 h-32 text-brand-orange" strokeWidth={0.5} />
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-orange/20 rounded-full blur-xl" />
                    <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-brand-orange/20 rounded-full blur-xl" />
                </motion.div>
            </div>
        </div>
    );
}

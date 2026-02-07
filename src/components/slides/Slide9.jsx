import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Zap, Users, Skull } from 'lucide-react';

export default function Slide9() {
    const characters = [
        { name: 'Protagonist', icon: <User className="w-8 h-8" />, desc: 'The Customer (Business) / The Hero (Story). The one whose world changes.' },
        { name: 'Villain', icon: <Skull className="w-8 h-8" />, desc: 'The Problem (Business) / The Shadow (Story). What stands in the way.' },
        { name: 'Mentor', icon: <Zap className="w-8 h-8" />, desc: 'Your Brand (Business) / The Guide (Story). Provides the tool/plan.' },
        { name: 'Allies', icon: <Users className="w-8 h-8" />, desc: 'Community & Partners. The internal team or external supporters.' },
        { name: 'Stakes', icon: <Shield className="w-8 h-8" />, desc: 'The Mission. What happens if the journey fails?' },
    ];

    return (
        <div className="w-full h-full bg-brand-white text-brand-black p-20 flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <h1 className="font-serif text-7xl italic">Major Characters</h1>
                <div className="h-1 w-24 bg-brand-orange mt-4" />
            </motion.div>

            <div className="grid grid-cols-5 gap-8 flex-1">
                {characters.map((char, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-24 h-24 rounded-full bg-brand-black text-brand-white flex items-center justify-center mb-6 
                          group-hover:bg-brand-orange transition-colors duration-500 shadow-xl">
                            {char.icon}
                        </div>
                        <h3 className="font-serif text-2xl mb-3">{char.name}</h3>
                        <p className="font-sans text-xs uppercase tracking-widest opacity-40 leading-relaxed px-4">
                            {char.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

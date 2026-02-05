import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Zap, Users, Skull } from 'lucide-react';

export default function Slide9() {
    const characters = [
        { name: 'Protagonist', icon: <User className="w-8 h-8" />, desc: 'The hero of the journey. The one who transforms.' },
        { name: 'Villain', icon: <Skull className="w-8 h-8" />, desc: 'The force of opposition. Represents the stakes.' },
        { name: 'Mentor', icon: <Zap className="w-8 h-8" />, desc: 'The guide. Provides tools or wisdom.' },
        { name: 'Allies', icon: <Users className="w-8 h-8" />, desc: 'The support system. Helps along the way.' },
        { name: 'Enemies', icon: <Shield className="w-8 h-8" />, desc: 'Minor obstacles or gatekeepers.' },
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

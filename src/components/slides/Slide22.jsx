import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, DollarSign, MessageCircle } from 'lucide-react';

export default function Slide22() {
    return (
        <div className="w-full h-full bg-brand-white text-brand-black flex flex-col items-center justify-center p-20 relative overflow-hidden font-sans">
            <h1 className="font-serif text-6xl text-brand-orange mb-16 italic text-center">
                Why Storytelling?
            </h1>

            <div className="relative w-full max-w-4xl h-[600px] flex flex-col items-center">

                {/* Top Row: People */}
                <div className="flex justify-center gap-12 mb-4 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <Users className="w-16 h-16 text-brand-black/40 mb-2" strokeWidth={1.5} />
                        <span className="font-serif italic text-lg opacity-60">Partners</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <Heart className="w-16 h-16 text-brand-black/40 mb-2" strokeWidth={1.5} />
                        <span className="font-serif italic text-lg opacity-60">Audiences</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <DollarSign className="w-16 h-16 text-brand-black/40 mb-2" strokeWidth={1.5} />
                        <span className="font-serif italic text-lg opacity-60">Donors</span>
                    </motion.div>
                </div>

                {/* The Seat: Scaled Health */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="z-10 bg-brand-black/5 rounded-[50%] w-[400px] h-[120px] flex items-center justify-center mb-[-40px] border border-brand-black/10 shadow-lg relative"
                >
                    <div className="text-center leading-tight">
                        <p className="font-serif text-2xl">Health & Strength</p>
                        <p className="text-xs uppercase tracking-widest opacity-50">of an Organization</p>
                    </div>
                </motion.div>

                {/* The Core: Mission/Values */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="z-0 bg-white border border-brand-black/20 w-[300px] pt-12 pb-8 text-center shadow-sm relative top-[-20px]"
                >
                    <p className="font-bold text-sm uppercase tracking-widest mb-1">Mission - Vision</p>
                    <p className="font-serif italic text-brand-black/60">Values & Beliefs</p>
                </motion.div>

                {/* The Legs */}
                <div className="flex justify-between w-[500px] absolute top-[280px]">
                    {/* Left Leg: Story */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -15, x: 50 }}
                        animate={{ opacity: 1, rotate: -15, x: 0 }}
                        transition={{ delay: 1 }}
                        className="w-24 h-64 bg-brand-orange text-white flex items-center justify-center shadow-xl relative left-[-20px]"
                    >
                        <div className="rotate-90 whitespace-nowrap font-bold uppercase tracking-widest text-sm flex items-center gap-3">
                            <MessageCircle className="w-4 h-4" /> Communications & Story
                        </div>
                    </motion.div>

                    {/* Middle Leg: Culture */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="w-16 h-64 bg-brand-black/5 border-l border-r border-brand-black/10 flex items-center justify-center relative -ml-4"
                    >
                        <div className="flex flex-col items-center gap-4 py-8 h-full justify-center">
                            {'CULTURE'.split('').map((char, i) => (
                                <span key={i} className="font-serif text-sm opacity-40">{char}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Leg: Fundraising */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 15, x: -50 }}
                        animate={{ opacity: 1, rotate: 15, x: 0 }}
                        transition={{ delay: 1.4 }}
                        className="w-24 h-64 bg-brand-black/10 text-brand-black flex items-center justify-center shadow-lg relative right-[-20px]"
                    >
                        <div className="rotate-90 whitespace-nowrap font-bold uppercase tracking-widest text-[10px] opacity-60">
                            Donor Engagement &<br />Fiscal Support
                        </div>
                    </motion.div>
                </div>

                {/* Connection Arrows (Simplified) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute top-[400px] w-[600px] h-[200px] pointer-events-none"
                >
                    <svg width="100%" height="100%">
                        <path d="M 180 100 Q 300 150 420 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-black/20" strokeDasharray="4 4" />
                        <path d="M 420 100 Q 300 50 180 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-black/20" strokeDasharray="4 4" />
                    </svg>
                </motion.div>

            </div>
        </div>
    );
}

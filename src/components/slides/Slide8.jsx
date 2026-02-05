import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info } from 'lucide-react';

const Stage = ({ title, number, x, y, delay, isActive, onClick }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        className="absolute flex flex-col items-center gap-2 cursor-pointer group"
        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
        onClick={onClick}
    >
        <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-[10px] font-mono transition-all duration-300 ${isActive ? 'bg-brand-orange border-brand-orange text-brand-white scale-110 shadow-[0_0_20px_rgba(217,78,31,0.4)]' : 'bg-brand-black border-brand-orange text-brand-orange group-hover:bg-brand-orange/10'
            }`}>
            {number}
        </div>
        <span className={`font-sans text-[10px] uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-brand-orange font-bold' : 'text-white/40 group-hover:text-white/60'
            }`}>
            {title}
        </span>
    </motion.div>
);

export default function Slide8() {
    const [activeStage, setActiveStage] = useState(null);

    const stages = [
        {
            title: "Ordinary World",
            number: "01",
            x: 15, y: 30,
            desc: "The hero's starting point. A state of status quo where something is missing or out of balance."
        },
        {
            title: "Call to Adventure",
            number: "02",
            x: 30, y: 60,
            desc: "The disruption. An event or realization that demands the hero leave their comfort zone."
        },
        {
            title: "The Threshold",
            number: "03",
            x: 50, y: 80,
            desc: "The point of no return. The hero commits to the journey and enters the unknown world."
        },
        {
            title: "The Abyss",
            number: "04",
            x: 70, y: 60,
            desc: "The greatest challenge. A moment of death and rebirth where the hero faces their deepest fear."
        },
        {
            title: "The Return",
            number: "05",
            x: 85, y: 30,
            desc: "The homecoming. The hero returns to the ordinary world, but is fundamentally transformed."
        },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-24 bg-brand-black relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 text-center"
            >
                <span className="text-brand-orange uppercase tracking-[0.3em] font-sans text-xs">Framework</span>
                <h2 className="text-5xl font-serif text-brand-white mt-4 italic">Storytelling 101: The Hero's Journey</h2>
            </motion.div>

            <div className="relative w-full h-64 mt-4">
                {/* Animated Path */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.path
                        d="M 15 30 Q 30 90, 50 80 T 85 30"
                        fill="none"
                        stroke="rgba(217, 78, 31, 0.2)"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{ width: '100%', height: '100%' }}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    />
                </svg>

                {stages.map((s, i) => (
                    <Stage
                        key={i}
                        {...s}
                        delay={0.5 + i * 0.2}
                        isActive={activeStage === i}
                        onClick={() => setActiveStage(activeStage === i ? null : i)}
                    />
                ))}
            </div>

            <div className="h-32 mt-12 w-full max-w-2xl text-center relative">
                <AnimatePresence mode="wait">
                    {activeStage !== null ? (
                        <motion.div
                            key={activeStage}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-brand-orange/5 border border-brand-orange/20 p-6 rounded-lg backdrop-blur-sm"
                        >
                            <h3 className="text-brand-orange font-serif text-2xl mb-2">{stages[activeStage].title}</h3>
                            <p className="font-sans text-white/70 text-sm leading-relaxed">
                                {stages[activeStage].desc}
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center h-full opacity-30 group"
                        >
                            <Info className="w-5 h-5 mb-2 text-brand-orange group-hover:animate-pulse" />
                            <p className="font-sans text-[10px] uppercase tracking-[0.3em]">Click a stage to explore</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-12 text-brand-white/20 font-sans text-center max-w-lg text-[10px] leading-relaxed uppercase tracking-widest"
            >
                Transformation is the only metric that matters.
            </motion.p>
        </div>
    );
}


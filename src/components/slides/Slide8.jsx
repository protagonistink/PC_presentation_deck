import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Feather } from 'lucide-react';

const stages = [
    { title: "Ordinary World", desc: "Where your brand story begins: real, unpolished, human." },
    { title: "Call to Adventure", desc: "The spark to evolve; a shift, hunch, or reinvention." },
    { title: "Refusal of the Call", desc: "The doubt: will anyone care? Can you stand out?" },
    { title: "Meeting the Mentor", desc: "Guidance appears—clarity, voice, structure." },
    { title: "Crossing the Threshold", desc: "Leaving the old scripts behind." },
    { title: "Tests, Allies, Enemies", desc: "Deep story work: rediscovering why you began." },
    { title: "Approach to Inmost Cave", desc: "The edit bay. Resistance." },
    { title: "Ordeal", desc: "Confronting sameness. Breaking from the algorithm." },
    { title: "Reward", desc: "A true voice—unmistakable, resonant, alive." },
    { title: "The Road Back", desc: "Systemizing your story for scale." },
    { title: "Resurrection", desc: "Becoming the protagonist your audience believes in." },
    { title: "Return with the Elixir", desc: "Sharing the story only you can tell." },
];

export default function Slide8() {
    const [activeStage, setActiveStage] = useState(null);

    return (
        <div className="w-full h-full bg-brand-black text-brand-white flex flex-col items-center justify-center p-20 font-sans related overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-orange/5 via-black to-black opacity-50" />

            <div className="relative w-[800px] h-[800px] flex items-center justify-center">

                {/* Center Logo */}
                <div className="absolute z-20 flex flex-col items-center">
                    <Feather className="w-32 h-32 text-brand-white/80 animate-pulse-slow" strokeWidth={1} />
                </div>

                {/* The Circle */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800">
                    <circle cx="400" cy="400" r="350" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10" />

                    {/* Active Connection Line */}
                    {activeStage !== null && (
                        <motion.line
                            x1="400" y1="400"
                            x2={400 + 350 * Math.sin(activeStage * (Math.PI * 2 / 12))}
                            y2={400 - 350 * Math.cos(activeStage * (Math.PI * 2 / 12))}
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-brand-orange"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                        />
                    )}
                </svg>

                {/* Stages around the circle */}
                {stages.map((stage, i) => {
                    const angle = (i * (360 / 12)) - 90; // Start at top (-90deg)
                    const radius = 350;
                    const x = 400 + radius * Math.cos(angle * (Math.PI / 180));
                    const y = 400 + radius * Math.sin(angle * (Math.PI / 180));

                    return (
                        <motion.div
                            key={i}
                            className={`absolute w-4 h-4 rounded-full cursor-pointer z-30 transition-all duration-300 ${activeStage === i ? 'bg-brand-orange scale-150 shadow-[0_0_20px_rgba(255,107,0,0.8)]' : 'bg-white/20 hover:bg-white/50'}`}
                            style={{
                                left: x - 8,
                                top: y - 8
                            }}
                            whileHover={{ scale: 1.5 }}
                            onClick={() => setActiveStage(i)}
                        >
                            {/* Label */}
                            <div
                                className={`absolute w-48 text-center transition-opacity duration-300 pointer-events-none ${activeStage === i ? 'opacity-100' : 'opacity-40'}`}
                                style={{
                                    left: '50%',
                                    top: angle > 0 && angle < 180 ? '20px' : 'auto',
                                    bottom: angle > 0 && angle < 180 ? 'auto' : '20px',
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                <p className={`uppercase text-[10px] tracking-widest font-bold mb-1 ${activeStage === i ? 'text-brand-orange' : 'text-white'}`}>
                                    {stage.title}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Description Overlay */}
            <AnimatePresence mode="wait">
                {activeStage !== null && (
                    <motion.div
                        key={activeStage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute bottom-12 z-40 bg-brand-white/10 backdrop-blur-md p-8 rounded-sm border-l-4 border-brand-orange max-w-2xl text-center"
                    >
                        <h3 className="font-serif text-3xl mb-2">{stages[activeStage].title}</h3>
                        <p className="font-sans text-brand-white/80">{stages[activeStage].desc}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hint */}
            {activeStage === null && (
                <p className="absolute bottom-12 opacity-30 animate-pulse text-xs uppercase tracking-widest">
                    Select a stage to explore the journey
                </p>
            )}
        </div>
    );
}

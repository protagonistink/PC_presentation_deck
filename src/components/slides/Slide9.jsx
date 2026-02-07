import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Zap, Skull, ChevronRight, ChevronLeft } from 'lucide-react';

const characters = [
    {
        name: 'PROTAGONIST',
        role: 'The one who drives the story',
        icon: <User className="w-12 h-12" />,
        color: 'text-brand-orange',
        examples: [
            { source: 'Finding Nemo', character: 'Marlin' },
            { source: 'Barbie', character: 'Barbie' },
            { source: 'Star Wars', character: 'Luke Skywalker' },
        ]
    },
    {
        name: 'MENTOR',
        role: 'The guide or teacher',
        icon: <Zap className="w-12 h-12" />,
        color: 'text-yellow-400',
        examples: [
            { source: 'Harry Potter', character: 'Dumbledore' },
            { source: 'The Godfather', character: 'Vito Corleone' },
            { source: 'Barbie', character: 'Weird Barbie / Ruth' },
        ]
    },
    {
        name: 'NEMESIS / VILLAIN',
        role: 'The Enemy who DRIVES the Protagonist’s change',
        icon: <Skull className="w-12 h-12" />,
        color: 'text-red-500',
        examples: [
            { source: 'Silence of the Lambs', character: 'Buffalo Bill the Killer' },
            { source: 'Star Wars', character: 'Darth Vader' },
            { source: 'Barbie', character: 'Reality' },
        ]
    }
];

export default function Slide9() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % characters.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
    };

    return (
        <div className="w-full h-full bg-brand-white text-brand-black flex flex-col items-center justify-center p-20 font-sans related">
            {/* Navigation Overlay */}
            <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none z-20">
                <button onClick={prevSlide} className="pointer-events-auto p-4 rounded-full hover:bg-black/5 transition-colors">
                    <ChevronLeft className="w-8 h-8 opacity-50" />
                </button>
                <button onClick={nextSlide} className="pointer-events-auto p-4 rounded-full hover:bg-black/5 transition-colors">
                    <ChevronRight className="w-8 h-8 opacity-50" />
                </button>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center max-w-4xl w-full"
                >
                    <div className={`mb-8 p-6 rounded-full bg-brand-black/5 ${characters[currentIndex].color}`}>
                        {characters[currentIndex].icon}
                    </div>

                    <h1 className="font-serif text-8xl mb-4 tracking-tight">
                        {characters[currentIndex].name}
                    </h1>

                    <p className="font-sans text-xl uppercase tracking-widest opacity-60 mb-16">
                        {characters[currentIndex].role}
                    </p>

                    <div className="grid grid-cols-3 gap-8 w-full text-left">
                        {characters[currentIndex].examples.map((ex, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="bg-[#f5f5f5] p-8 rounded-sm border-l-4 border-brand-orange/20"
                            >
                                <p className="font-bold text-sm uppercase tracking-wider mb-2 opacity-50">{ex.source}</p>
                                <p className="font-serif text-2xl">{ex.character}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute bottom-12 flex gap-4">
                {characters.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-brand-orange w-8' : 'bg-black/10'}`}
                    />
                ))}
            </div>
        </div>
    );
}

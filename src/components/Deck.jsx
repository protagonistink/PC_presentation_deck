import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function Deck({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    return (
        <div className="presentation-container">
            <div className="slide-frame">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="w-full h-full"
                    >
                        {slides[currentSlide]}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-8 right-8 flex gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 z-50">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <div className="flex items-center text-white/50 font-mono text-sm tracking-widest px-2">
                        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}

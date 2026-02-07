import React from 'react';
import { motion } from 'framer-motion';
import WorksheetImg from '../../assets/protagonist_journey_worksheet.png';

export default function Slide28() {
    return (
        <div className="w-full h-full bg-[#e5e5e5] flex items-center justify-center p-12 font-sans overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
                className="bg-white shadow-2xl rounded-sm p-4 rotate-1 max-h-full aspect-[3/4]"
            >
                <img
                    src={WorksheetImg}
                    alt="Protagonist's Journey Worksheet"
                    className="h-full w-full object-contain"
                />
            </motion.div>

            <div className="absolute top-12 right-12 text-right">
                <p className="font-serif text-4xl text-brand-black/80 italic mb-2">Your Turn</p>
                <p className="font-sans text-xs uppercase tracking-widest text-brand-orange font-bold">15 Minute Exercise</p>
            </div>
        </div>
    );
}

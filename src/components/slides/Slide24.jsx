import React from 'react';
import NikeLogo from '../../assets/nike_swoosh.png';
import { motion } from 'framer-motion';

export default function Slide24() {
    return (
        <div className="w-full h-full bg-brand-white flex items-center justify-center relative overflow-hidden">
            <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={NikeLogo}
                alt="Nike Swoosh"
                className="w-[400px] object-contain drop-shadow-2xl"
            />

            {/* Subtle interactive hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 2, duration: 2 }}
                className="absolute inset-0 bg-gradient-to-tr from-brand-black/5 to-transparent pointer-events-none"
            />
        </div>
    );
}

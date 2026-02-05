import React from 'react';
import { motion } from 'framer-motion';

const Pillar = ({ title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col gap-4 border-l border-brand-orange pl-8 py-4"
    >
        <h3 className="text-2xl font-serif text-brand-white italic">{title}</h3>
        <p className="text-brand-white/60 font-sans text-sm leading-relaxed max-w-sm">
            {description}
        </p>
    </motion.div>
);

export default function Slide2() {
    return (
        <div className="w-full h-full flex flex-col justify-center p-24 bg-brand-black">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20"
            >
                <span className="text-brand-orange uppercase tracking-[0.3em] font-sans text-xs">Preamble</span>
                <h2 className="text-5xl font-serif text-brand-white mt-4">The Stakes: Why Story Matters</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <Pillar
                    title="Positioning"
                    description="How you are perceived in the market. Story is the differentiator that moves you from a commodity to a category of one."
                    delay={0.3}
                />
                <Pillar
                    title="Alignment"
                    description="Internal cohesion. When the story is clear, every team member knows the mission, the stakes, and their role in the narrative."
                    delay={0.5}
                />
                <Pillar
                    title="Infrastructure"
                    description="The systems that support the story. Ensuring your operational reality matches the narrative you're telling the world."
                    delay={0.7}
                />
            </div>
        </div>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldAlert, Users, RotateCcw } from 'lucide-react';

const Quadrant = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col gap-4 group hover:bg-white/10 transition-colors"
    >
        <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-colors">
            <Icon size={20} />
        </div>
        <h3 className="text-xl font-serif text-brand-white italic">{title}</h3>
        <p className="text-brand-white/40 font-sans text-sm leading-relaxed">
            {description}
        </p>
    </motion.div>
);

export default function Slide8() {
    return (
        <div className="w-full h-full p-24 bg-black flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <span className="text-brand-orange uppercase tracking-[.3em] font-sans text-xs">The Breakout</span>
                <h2 className="text-5xl font-serif text-brand-white mt-4 italic">Round 2: Building the Next Chapter</h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 flex-1">
                <Quadrant
                    icon={Target}
                    title="Dreams"
                    description="What is the ultimate vision for the future? What is the 'New World' your organization wants to build?"
                    delay={0.3}
                />
                <Quadrant
                    icon={ShieldAlert}
                    title="Barriers"
                    description="What stands in the way? Identity the internal and external conflicts that must be overcome."
                    delay={0.4}
                />
                <Quadrant
                    icon={Users}
                    title="Allies"
                    description="Who is on this journey with you? Who are the partners, community members, and stakeholders?"
                    delay={0.5}
                />
                <Quadrant
                    icon={RotateCcw}
                    title="The Return"
                    description="How will you be changed? What is the lasting impact after the conflict is resolved?"
                    delay={0.6}
                />
            </div>
        </div>
    );
}

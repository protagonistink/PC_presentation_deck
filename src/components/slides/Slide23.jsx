import React from 'react';
import { motion } from 'framer-motion';

const agendaItems = [
    { time: '40 min', title: 'Reflecting On & Defining Identity', points: ['What are our organizational values?', 'What’s been most meaningful?', 'What’s the story we’re currently telling?'] },
    { time: '20 min', title: 'Telling a Story with Creativity', points: ['What makes a great story?', 'How are great stories shared?'] },
    { time: '40 min', title: 'Building & Transforming Your Story', points: ['What do we dream for our organization?', 'What makes us proud?', 'What barriers must we overcome?'] },
    { time: '15 min', title: 'Sharing Your Story', points: ['What is our shared narrative?', 'How do we communicate our unique place?'] },
];

export default function Slide23() {
    return (
        <div className="w-full h-full bg-brand-white text-brand-black flex flex-col items-center justify-center p-20 font-sans">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-4xl text-brand-orange mb-16 italic text-center w-full max-w-5xl"
            >
                Telling Our Story & Building the Next Chapter Together
            </motion.h1>

            <div className="w-full max-w-5xl relative">
                <div className="absolute left-[80px] top-0 bottom-0 w-px bg-brand-black/10" />

                <div className="flex flex-col gap-12">
                    {agendaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex gap-12 relative"
                        >
                            {/* Time */}
                            <div className="w-[80px] text-right pt-1">
                                <span className="font-bold text-lg font-sans text-brand-orange">{item.time}</span>
                            </div>

                            {/* Node */}
                            <div className="absolute left-[76px] top-[10px] w-[9px] h-[9px] rounded-full bg-brand-black ring-4 ring-white" />

                            {/* Content */}
                            <div className="flex-1 pb-4">
                                <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                                <ul className="space-y-1">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-brand-black/70 text-sm font-sans">
                                            <span className="mt-1.5 w-1 h-1 bg-brand-orange/50 rounded-full" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function Slide2() {
    const questions = [
        { id: '1)', text: 'Who are you?' },
        { id: '2)', text: 'What do you do?' },
        { id: '3)', text: 'Why is it important?' },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-brand-white text-brand-black p-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full"
            >
                <h1 className="font-serif text-8xl mb-16 leading-tight">
                    Just a few quick <br />
                    <span className="italic text-brand-orange">intros...</span>
                </h1>

                <div className="space-y-8">
                    {questions.map((q, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                            className="flex items-baseline gap-6"
                        >
                            <span className="font-sans text-4xl text-brand-orange font-light">{q.id}</span>
                            <span className="font-sans text-6xl tracking-tight font-medium">{q.text}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

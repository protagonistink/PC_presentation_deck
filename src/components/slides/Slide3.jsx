import React from 'react';
import { motion } from 'framer-motion';
import patrick from '../../assets/patrick_new.jpg';
import amy from '../../assets/amy_new.png';
import symbol from '../../assets/symbol.png';

export default function Slide3() {
    return (
        <div className="w-full h-full flex font-sans relative overflow-hidden">
            {/* Left Side: Patrick */}
            <div className="w-1/2 h-full bg-[#f2f2f2] relative flex flex-col p-12 overflow-hidden">
                {/* Background Headshot */}
                <div className="absolute inset-0 opacity-20 grayscale pointer-events-none">
                    <img
                        src={patrick}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Header Text */}
                <div className="relative z-10">
                    <h2 className="font-serif text-[80px] leading-[0.9] text-brand-black mb-2">
                        Patrick<br />Kirkland
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-orange opacity-90">
                        Founder — Chief Storybuilder
                    </p>
                </div>

                {/* Separator Line */}
                <div className="absolute left-0 top-1/2 w-full h-px bg-brand-orange z-10" />

                {/* Bio Box */}
                <div className="mt-auto relative z-20 w-[85%] bg-white p-8 shadow-2xl self-start border-l-4 border-brand-orange">
                    <p className="text-[13px] leading-relaxed text-brand-black/80">
                        Patrick has spent over two decades as a screenwriter, copywriter and creative director for Fortune 500 brands including <span className="text-brand-orange font-bold">Apple, Verizon, and AT&T</span>, learning how stories scale at the highest level. Through Protagonist Ink, he partners with founders and organizations to shape narratives that matter.
                    </p>
                </div>
            </div>

            {/* Right Side: Amy */}
            <div className="w-1/2 h-full bg-[#111] relative flex flex-col p-12 overflow-hidden">
                {/* Background Headshot */}
                <div className="absolute inset-0 opacity-30 grayscale pointer-events-none">
                    <img
                        src={amy}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Separator Line */}
                <div className="absolute right-0 top-[65%] w-full h-px bg-brand-orange z-10" />

                {/* Bio Box */}
                <div className="absolute top-[50%] right-[-10%] translate-y-[-50%] z-20 w-[85%] bg-brand-black/80 backdrop-blur-md p-8 shadow-2xl border-r-4 border-brand-orange">
                    <p className="text-[13px] leading-relaxed text-brand-white/80">
                        A connector working at the intersection of arts, education, and community. Amy serves as a Learning Specialist at the <span className="text-brand-orange font-bold">LA Phil</span> and Managing Director of Decoda. With a 25-year career spanning <span className="text-brand-orange font-bold">Carnegie Hall and Lincoln Center</span>, she develops programs that inspire collective action.
                    </p>
                </div>

                {/* Footer Text */}
                <div className="mt-auto text-right relative z-10">
                    <h2 className="font-serif text-[80px] leading-[0.9] text-brand-white mb-2">
                        Amy<br />Kirkland
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-orange">
                        Founder — Executive Producer
                    </p>
                </div>
            </div>

            {/* Central Symbol Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-24 h-24 rounded-full border border-white/20 bg-brand-black/20 backdrop-blur-2xl flex items-center justify-center p-4">
                    <img src={symbol} alt="Logo Symbol" className="w-full h-full object-contain invert opacity-80" />
                </div>
            </div>
        </div>
    );
}

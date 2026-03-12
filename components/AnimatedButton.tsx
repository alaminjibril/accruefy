"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function AnimatedButton({
    children,
    className = "",
    onMouseEnter,
    onMouseLeave,
    ...props
}: AnimatedButtonProps) {
    const controls = useAnimation();
    const [hovered, setHovered] = useState(false);

    const handleEnter = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setHovered(true);
        await controls.start({ x: "0%", transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } });
        if (onMouseEnter) onMouseEnter(e);
    };

    const handleLeave = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setHovered(false);
        await controls.start({ x: "-100%", transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } });
        if (onMouseLeave) onMouseLeave(e);
    };

    return (
        <button
            {...props}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={`relative overflow-hidden bg-black text-sm font-semibold px-6 py-2.5 rounded-lg border border-black ${className}`}
        >
            <motion.span
                initial={{ x: "-100%" }}
                animate={controls}
                className="absolute inset-0 bg-white rounded-lg"
                style={{ zIndex: 0 }}
            />
            <span
                className="relative z-10 transition-colors duration-300 flex items-center justify-center gap-2"
                style={{ color: hovered ? "#000" : "#fff" }}
            >
                {children}
            </span>
        </button>
    );
}

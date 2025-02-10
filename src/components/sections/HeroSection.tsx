'use client';

import { motion, MotionValue } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/text/AnimatedHeading";
import { ScrollIndicator } from "@/components/ui/scroll/ScrollIndicator";
import Image from "next/image";
import { useRef, useEffect } from "react";

interface HeroSectionProps {
  opacity: MotionValue<number>;
}

export function HeroSection({ opacity }: HeroSectionProps) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity }}
      className="flex flex-col min-h-screen items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
    >

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
            className="absolute rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(255,209,250,0.3) 0%, rgba(255,169,249,0.1) 100%)`,
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center h-screen">
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-8 relative group"
          >
            <Image 
              src="/suiko.svg" 
              alt="Suiko Logo" 
              width={120} 
              height={120}
              className="drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>

          <AnimatedHeading 
            text="Connect, Create, and Build in Web3"
            size="xl"
            delay={0.3}
            className="mb-4 text-center bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 text-transparent bg-clip-text font-bold tracking-tight"
          />
          
          <AnimatedHeading 
            text="The First Decentralized Talent Platform on Sui"
            size="md"
            delay={1.5}
            className="text-gray-400 font-light tracking-wider mb-12 text-center"
          />

          <div className="flex gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-medium 
                       shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 
                       transition-all duration-300 hover:scale-105"
            >
              Mint Your Profile
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="px-8 py-3 bg-transparent border border-purple-500 rounded-full text-white font-medium 
                       shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 
                       transition-all duration-300 hover:scale-105"
            >
              Post a Project
            </motion.button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </motion.div>
  );
}
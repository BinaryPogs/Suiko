'use client';

import { motion, MotionValue } from "framer-motion";
import { FeatureCard } from "@/components/ui/features/FeatureCard";
import { 
  Rocket, 
  Users, 
  Shield,
  Star, 
  Code2 
} from "lucide-react";

interface FeaturesSectionProps {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}

export function FeaturesSection({ opacity, y }: FeaturesSectionProps) {
  return (
    <motion.div 
      style={{ opacity, y }}
      className="flex flex-col h-[80vh] items-center justify-center gap-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#fff7ad] via-[#ffd1fa] to-[#ffa9f9] text-transparent bg-clip-text mb-8"
      >
        Why Choose Our Platform?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
        <FeatureCard 
          icon={Rocket}
          title="Gather interest for your projects"
          description="Create and publish your Web3 projects in minutes with our streamlined workflow"
          className="bg-[#0A192F]/30 border-[#ffd1fa]/20"
        />

        <FeatureCard 
          icon={Users}
          title="Find Top Talent"
          description="Connect with skilled builders and developers from the Web3 ecosystem"
          className="bg-[#0A192F]/30 border-[#ffd1fa]/20"
        />
        <FeatureCard 
          icon={Shield}
          title="Verified Profiles"
          description="Build trust with on-chain verification of skills and project history"
          className="bg-[#0A192F]/30 border-[#ffd1fa]/20"
        />
        <FeatureCard 
          icon={Star}
          title="Reputation System"
          description="Earn reputation through successful project completions and contributions"
          className="bg-[#0A192F]/30 border-[#ffd1fa]/20"
        />
        <FeatureCard 
          icon={Code2}
          title="Builder-First"
          description="Designed specifically for Web3 builders"
          className="bg-[#0A192F]/30 border-[#ffd1fa]/20"
        />
      </div>
    </motion.div>
  );
} 
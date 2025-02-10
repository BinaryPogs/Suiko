'use client';

import { motion, MotionValue } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/text/AnimatedHeading";
import { MailingListForm } from "@/components/ui/mailing/MailingListForm";
import { Rocket, Users } from "lucide-react";

interface WaitlistSectionProps {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}

export function WaitlistSection({ opacity, y }: WaitlistSectionProps) {
  return (
    <motion.div
      style={{ opacity, y }}
      className="flex flex-col min-h-screen items-center justify-center gap-8 px-4"
    >
      <div className="text-center max-w-2xl">
        <AnimatedHeading 
          text="Join the Web3 Builder Community"
          size="lg"
          className="mb-4 bg-gradient-to-r from-[#fff7ad] via-[#ffd1fa] to-[#ffa9f9] text-transparent bg-clip-text"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#94A3B8] text-lg mb-8"
        >
          Be among the first to access our platform and connect with talented Web3 builders and innovative projects
        </motion.p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-md relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff7ad]/10 to-[#ffa9f9]/10 rounded-lg blur-xl" />
        <MailingListForm className="relative z-10 bg-[#0A192F]/30 backdrop-blur-sm rounded-lg border border-[#ffd1fa]/20 p-6" />
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[#ffd1fa]/60 text-sm mt-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-2"
        >
          <Rocket className="w-4 h-4" />
          <span>Early access to project creation</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-2"
        >
          <Users className="w-4 h-4" />
          <span>Connect with verified builders</span>
        </motion.div>
      </div>
    </motion.div>
  );
} 
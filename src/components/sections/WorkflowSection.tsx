'use client';

import { motion, MotionValue } from "framer-motion";
import { Briefcase, Code2, Star, Rocket, Users, Building, Handshake } from "lucide-react";

interface WorkflowSectionProps {
  opacity?: MotionValue<number>;
  y?: MotionValue<number>;
}

interface WorkflowStep {
  icon: React.ElementType;
  title: string;
  description: string;
  role: "founder" | "builder";
}

const workflowSteps: Record<"founders" | "builders", WorkflowStep[]> = {
  founders: [
    {
      icon: Building,
      title: "Create Founder Profile",
      description: "Build your on-chain identity with project history, background, and vision",
      role: "founder"
    },
    {
      icon: Briefcase,
      title: "Post Projects",
      description: "Define project scope, required skills, and compensation structure",
      role: "founder"
    },
    {
      icon: Users,
      title: "Review Applications",
      description: "Evaluate builders based on experience, reputation score, and past deployments",
      role: "founder"
    },
    {
      icon: Handshake,
      title: "Collaborate & Build",
      description: "Work with talented builders and track project milestones on-chain",
      role: "founder"
    }
  ],
  builders: [
    {
      icon: Code2,
      title: "Create Builder Profile",
      description: "Showcase your skills, past deployments, and on-chain achievements",
      role: "builder"
    },
    {
      icon: Star,
      title: "Build Reputation",
      description: "Earn reputation through successful deployments and project completions",
      role: "builder"
    },
    {
      icon: Rocket,
      title: "Apply to Projects",
      description: "Find exciting projects that match your expertise and interests",
      role: "builder"
    },
    {
      icon: Handshake,
      title: "Deliver & Grow",
      description: "Complete projects, earn rewards, and strengthen your Web3 portfolio",
      role: "builder"
    }
  ]
};

export function WorkflowSection({ opacity, y }: WorkflowSectionProps) {
  return (
    <motion.section
      style={{ opacity, y }}
      className="w-screen min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#fff7ad] via-[#ffd1fa] to-[#ffa9f9] text-transparent bg-clip-text mb-4">
            Choose Your Path
          </h2>
          <p className="text-[#94A3B8] text-lg">
          Whether you&apos;re a founder or builder, start your Web3 journey here
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Founders Section */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-2xl font-semibold text-[#ffd1fa] mb-8"
            >
              For Founders
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.founders.map((step, index) => (
                <StepCard key={step.title} step={step} index={index} total={workflowSteps.founders.length} />
              ))}
            </div>
          </div>

          {/* Builders Section */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-2xl font-semibold text-[#ffd1fa] mb-8"
            >
              For Builders
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.builders.map((step, index) => (
                <StepCard key={step.title} step={step} index={index} total={workflowSteps.builders.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

interface StepCardProps {
  step: {
    icon: React.ElementType;
    title: string;
    description: string;
    role: string;
  };
  index: number;
  total: number;
}

function StepCard({ step, index, total }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {index < total - 1 && (
        <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="h-full bg-gradient-to-r from-[#ffd1fa]/30 to-transparent origin-left"
          />
        </div>
      )}
      <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#0A192F]/30 border border-[#ffd1fa]/10 backdrop-blur-sm transition-all duration-300 hover:border-[#ffd1fa]/30 group-hover:transform group-hover:-translate-y-1">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fff7ad]/10 to-[#ffa9f9]/10 flex items-center justify-center mb-4 border border-[#ffd1fa]/20 group-hover:border-[#ffd1fa]/40 transition-all duration-300">
          <step.icon className="w-8 h-8 text-[#ffd1fa]" />
        </div>
        <h3 className="text-[#ffd1fa] text-xl font-medium mb-2">
          {step.title}
        </h3>
        <p className="text-[#94A3B8] text-sm">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
'use client';

import { motion, MotionValue } from "framer-motion";
import { useState } from 'react';
import { FileText, Code2, Target } from 'lucide-react';
import { ProjectForm } from "@/components/project/ProjectForm";
import { ProjectPreview } from "@/components/project/ProjectPreview";
import { CreationStep, ProjectParams } from "@/types/project";


interface ProjectCreationSectionProps {
  opacity?: MotionValue<number>;
  y?: MotionValue<number>;
}

const CREATION_STEPS: CreationStep[] = [
  {
    question: "What's your project name?",
    placeholder: "e.g., DeFi Lending Protocol",
    parameter: "projectName",
    type: 'text',
    icon: Target
  },
  {
    question: "Describe your project vision",
    placeholder: "Tell us about your project goals and vision...",
    parameter: "description",
    type: 'textarea',
    icon: FileText
  },
  {
    question: "What are the key objectives?",
    placeholder: "List the main objectives and deliverables...",
    parameter: "objectives",
    type: 'textarea',
    icon: Target
  },
  {
    question: "What skills are required?",
    placeholder: "e.g., Solidity, Move, React, Smart Contract Security",
    parameter: "requirements",
    type: 'textarea',
    icon: Code2
  }
];

export function ProjectCreationSection({ opacity, y }: ProjectCreationSectionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPublished, setIsPublished] = useState(false);
  const [params, setParams] = useState<ProjectParams>({
    projectName: '',
    description: '',
    requirements: '',
    objectives: ''
  });
  const [isPublishing, setIsPublishing] = useState(false);

  const handleInputChange = (value: string) => {
    const currentParam = CREATION_STEPS[currentStep].parameter;
    setParams(prev => ({ ...prev, [currentParam]: value }));
  };

  const handleNext = () => {
    if (currentStep < CREATION_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsPublishing(true);
      setTimeout(() => {
        setIsPublishing(false);
        setIsPublished(true);
      }, 2000);
    }
  };

  return (
    <motion.section
      style={{ opacity, y }}
      className="w-screen min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="w-[95vw] max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProjectForm
          currentStep={currentStep}
          params={params}
          isPublishing={isPublishing}
          onInputChange={handleInputChange}
          onNext={handleNext}
          steps={CREATION_STEPS}
        />
        <ProjectPreview 
          params={params} 
          isPublished={isPublished}
        />
      </div>
    </motion.section>
  );
} 
'use client';

import { motion } from "framer-motion";
import { FileText, Rocket } from 'lucide-react';
import { CreationStep, ProjectParams } from "@/types/project";
import { Progress } from "@/components/ui/progress";
import { KeyboardEvent, useEffect, useRef } from 'react';

interface ProjectFormProps {
  currentStep: number;
  params: ProjectParams;
  isPublishing: boolean;
  onInputChange: (value: string) => void;
  onNext: () => void;
  steps: CreationStep[];
}

export function ProjectForm({ 
  currentStep, 
  params, 
  isPublishing, 
  onInputChange, 
  onNext, 
  steps 
}: ProjectFormProps) {
  const progress = (currentStep / (steps.length - 1)) * 100;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (steps[currentStep].type === 'textarea') {
      textareaRef.current?.focus();
    } else {
      inputRef.current?.focus();
    }
  }, [currentStep, steps]);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && params[steps[currentStep].parameter]) {
      e.preventDefault();
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-fit"
    >
      <div className="relative w-full bg-[#0A192F]/30 rounded-xl p-8 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2942] via-[#0A192F] to-[#0d2347] rounded-xl opacity-20" />
        
        <div className="relative z-10">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2 text-sm text-[#94A3B8]">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-1 bg-[#1a2942] overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </Progress>
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              {steps[currentStep].icon && (
                (() => {
                  const Icon = steps[currentStep].icon;
                  return <Icon className="w-6 h-6 text-[#ffd1fa]" />;
                })()
              )}
              <h2 className="text-2xl text-[#ffd1fa] font-medium">
                {steps[currentStep].question}
              </h2>
            </div>

            {steps[currentStep].type === 'textarea' ? (
              <textarea
                ref={textareaRef}
                value={params[steps[currentStep].parameter]}
                onChange={(e) => onInputChange(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={steps[currentStep].placeholder}
                rows={4}
                className="w-full bg-[#1a2942]/50 border border-[#ffd1fa]/20 rounded-lg px-4 py-3 text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#ffd1fa]/50 transition-colors resize-none"
              />
            ) : (
              <input
                ref={inputRef}
                type="text"
                value={params[steps[currentStep].parameter]}
                onChange={(e) => onInputChange(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={steps[currentStep].placeholder}
                className="w-full bg-[#1a2942]/50 border border-[#ffd1fa]/20 rounded-lg px-4 py-3 text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#ffd1fa]/50 transition-colors"
              />
            )}
          </motion.div>

          <div className="mt-6">
            <button
              onClick={onNext}
              disabled={!params[steps[currentStep].parameter]}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] hover:from-[#ffd1fa] hover:to-[#fff7ad] text-[#1a2942] py-3 px-6 rounded-lg transition-all duration-200 font-medium text-lg shadow-lg disabled:opacity-50"
            >
              {isPublishing ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="w-5 h-5" />
                </motion.div>
              ) : (
                <>
                  <span>{currentStep === steps.length - 1 ? 'Publish Project' : 'Next'}</span>
                  {currentStep === steps.length - 1 ? (
                    <Rocket className="w-5 h-5" />
                  ) : (
                    <FileText className="w-5 h-5" />
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 
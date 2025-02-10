'use client';

import { motion } from "framer-motion";
import { ProjectParams } from "@/types/project";
import { Card } from "@/components/ui/card";

interface ProjectPreviewProps {
  params: ProjectParams;
  isPublished?: boolean;
}

export function ProjectPreview({ params, isPublished = false }: ProjectPreviewProps) {
  const previewFields = [
    { key: 'projectName' as keyof ProjectParams, label: 'Project Name', icon: '🎯' },
    { key: 'description' as keyof ProjectParams, label: 'Description', icon: '📝' },
    { key: 'objectives' as keyof ProjectParams, label: 'Objectives', icon: '🎯' },
    { key: 'requirements' as keyof ProjectParams, label: 'Required Skills', icon: '💻' },
    { key: 'budget' as keyof ProjectParams, label: 'Budget', icon: '💰' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="relative h-full bg-[#0A192F]/30 rounded-xl p-8 backdrop-blur-sm border-[#ffd1fa]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2942] via-[#0A192F] to-[#0d2347] rounded-xl opacity-20" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-between border-b border-[#ffd1fa]/10 pb-4">
            <h2 className="text-2xl text-[#ffd1fa] font-medium">Project Preview</h2>
            <span className={`text-sm px-3 py-1 rounded-full ${
              isPublished 
                ? 'bg-[#1a4229]/50 text-emerald-400' 
                : 'bg-[#1a2942]/50 text-[#94A3B8]'
            }`}>
              {isPublished ? 'Published' : 'Draft'}
            </span>
          </div>
          
          <div className="space-y-6">
            {previewFields.map(({ key, label, icon }) => (
              params[key] && (
                <div key={key} className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{icon}</span>
                    <h3 className="text-lg text-[#ffd1fa]/70">{label}</h3>
                  </div>
                  <div className="bg-[#1a2942]/30 p-4 rounded-lg border border-[#ffd1fa]/10 group-hover:border-[#ffd1fa]/20 transition-colors">
                    <p className="text-white whitespace-pre-wrap">{params[key]}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
} 
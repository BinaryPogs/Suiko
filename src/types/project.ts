import { LucideIcon } from 'lucide-react';

export interface ProjectParams {
  projectName: string;
  description: string;
  requirements: string;
  objectives: string;
}

export interface CreationStep {
  question: string;
  placeholder: string;
  parameter: keyof ProjectParams;
  type: 'text' | 'textarea';
  icon: LucideIcon;
} 
'use client';

import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ProjectCreationSection } from "@/components/sections/ProjectCreationSection";
import { useScrollAnimations } from "@/utils/scrollAnimations";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const animations = useScrollAnimations(scrollYProgress);

  return (
    <div ref={containerRef} className="relative">
      <HeroSection opacity={animations.hero.opacity} />
      <WorkflowSection opacity={animations.workflow.opacity} y={animations.workflow.y} />
      <ProjectCreationSection opacity={animations.project.opacity} y={animations.project.y} />
      <FeaturesSection opacity={animations.features.opacity} y={animations.features.y} />
      <WaitlistSection opacity={animations.waitlist.opacity} y={animations.waitlist.y} />
    </div>
  );
}
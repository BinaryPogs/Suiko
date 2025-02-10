import { MotionValue, useTransform } from "framer-motion";

export function useScrollAnimations(scrollYProgress: MotionValue<number>) {
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  const workflowOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0.7, 1]);
  const workflowY = useTransform(scrollYProgress, [0.1, 0.2], [50, 0]);
  
  const projectOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const projectY = useTransform(scrollYProgress, [0.2, 0.3], [50, 0]);
  
  const featuresOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const featuresY = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);
  
  const waitlistOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const waitlistY = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);

  return {
    hero: {
      opacity: heroOpacity
    },
    workflow: {
      opacity: workflowOpacity,
      y: workflowY
    },
    project: {
      opacity: projectOpacity,
      y: projectY
    },
    features: {
      opacity: featuresOpacity,
      y: featuresY
    },
    waitlist: {
      opacity: waitlistOpacity,
      y: waitlistY
    }
  };
} 
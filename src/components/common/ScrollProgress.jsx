// src/components/common/ScrollProgress.jsx
import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-gold origin-left"
      style={{ scaleX, opacity: isVisible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  );
}

export default ScrollProgress;

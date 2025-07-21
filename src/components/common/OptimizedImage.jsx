// src/components/common/OptimizedImage.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function OptimizedImage({ src, alt, className }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [imageRef, setImageRef] = useState(null);

  useEffect(() => {
    if (!imageRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(imageRef);
    
    return () => {
      if (imageRef) {
        observer.disconnect();
      }
    };
  }, [imageRef]);

  useEffect(() => {
    if (!isIntersecting) return;
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [isIntersecting, src]);

  return (
    <div 
      ref={setImageRef}
      className={`relative overflow-hidden ${className}`}
    >
      {isIntersecting && (
        <>
          <div 
            className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          />
          <motion.img 
            src={src} 
            alt={alt} 
            className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
            decoding="async"
          />
        </>
      )}
    </div>
  );
}

export default OptimizedImage;

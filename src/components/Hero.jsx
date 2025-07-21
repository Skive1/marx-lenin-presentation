import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

function Hero() {
  // Lazy loading cho background image
  const [bgLoaded, setBgLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = '/images/vietnam-development.jpg';
    img.onload = () => setBgLoaded(true);
  }, []);

  // Tối ưu animation
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.98,
      transition: { 
        duration: 0.1
      }
    }
  };

  const arrowVariants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-700 to-accent-800 overflow-hidden">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${bgLoaded ? 'opacity-20' : 'opacity-0'}`} 
        style={{ backgroundImage: bgLoaded ? 'url(/images/vietnam-development.jpg)' : 'none' }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-display hardware-accelerated"
          >
            Công Nghiệp Hóa, Hiện Đại Hóa và Hội Nhập Kinh Tế Quốc Tế
          </motion.h1>
          
          <motion.h2 
            variants={subtitleVariants}
            className="text-2xl md:text-3xl text-white mb-10 font-display hardware-accelerated"
          >
            Phát triển bền vững và bảo tồn ngành nghề truyền thống
          </motion.h2>
          
          <motion.p 
            variants={descriptionVariants}
            className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto hardware-accelerated"
          >
            Tìm hiểu về quá trình phát triển kinh tế của Việt Nam thông qua công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế
          </motion.p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link 
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-white text-primary-700 rounded-full font-bold text-lg shadow-lg hardware-accelerated"
              >
                Tìm hiểu thêm
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10">
        <Link 
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          <motion.div 
            variants={arrowVariants}
            animate="animate"
            className="cursor-pointer hardware-accelerated"
          >
            <svg 
              className="w-12 h-12 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
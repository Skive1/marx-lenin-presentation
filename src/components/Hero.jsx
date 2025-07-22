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

  const decorativeLineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { 
      scaleX: 1,
      transition: { 
        duration: 1.2,
        delay: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-luxury overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-pattern-dark opacity-10"></div>
      
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${bgLoaded ? 'opacity-30' : 'opacity-0'}`} 
        style={{ backgroundImage: bgLoaded ? 'url(/images/vietnam-development.jpg)' : 'none' }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <span className="inline-block text-gold-400 text-sm uppercase tracking-[0.2em] font-medium">
              Phát triển bền vững
            </span>
          </motion.div>
          
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-display hardware-accelerated leading-tight"
          >
            Công Nghiệp Hóa, Hiện Đại Hóa <br/>
            <span className="font-accent italic text-gold-300">và Hội Nhập Kinh Tế Quốc Tế</span>
          </motion.h1>
          
          <motion.div
            variants={decorativeLineVariants}
            className="w-32 h-[2px] bg-gradient-gold mx-auto my-8 rounded-full"
          ></motion.div>
          
          <motion.h2 
            variants={subtitleVariants}
            className="text-2xl md:text-3xl text-white mb-10 font-display hardware-accelerated"
          >
            Phát triển bền vững và bảo tồn ngành nghề truyền thống
          </motion.h2>
          
          <motion.p 
            variants={descriptionVariants}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto hardware-accelerated leading-relaxed"
          >
            Tìm hiểu về quá trình phát triển kinh tế của Việt Nam thông qua công nghiệp hóa, 
            hiện đại hóa và hội nhập kinh tế quốc tế
          </motion.p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
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
                className="px-10 py-4 bg-gradient-gold text-gray-900 rounded-full font-bold text-lg shadow-lg hardware-accelerated"
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
              className="w-12 h-12 text-gold-300" 
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
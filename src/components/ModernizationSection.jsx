// src/components/ModernizationSection.jsx
import { motion } from 'framer-motion';
import { FaRobot, FaTrademark, FaUserGraduate, FaUmbrellaBeach, FaLeaf, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { useAnimateOnScroll } from '../utils/animation';

function ModernizationSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, controls } = useAnimateOnScroll();

  const solutions = [
    {
      title: "Đầu tư công nghệ cao",
      description: "Đưa máy móc, công nghệ mới vào sản xuất nhằm nâng cao năng suất, chất lượng mà không làm mai một bản sắc truyền thống.",
      image: "/images/modern-tech-traditional.jpg",
      icon: <FaRobot className="text-2xl" />,
      color: "primary",
      points: [
        "Hiện đại hóa quy trình sản xuất",
        "Nâng cao năng suất lao động",
        "Giữ gìn bản sắc truyền thống"
      ]
    },
    {
      title: "Xây dựng thương hiệu",
      description: "Kết nối làng nghề với doanh nghiệp và các tổ chức xúc tiến thương mại, mở rộng tiếp cận thị trường quốc tế.",
      image: "/images/traditional-craft.jpg",
      icon: <FaTrademark className="text-2xl" />,
      color: "secondary",
      points: [
        "Xây dựng thương hiệu quốc gia",
        "Hỗ trợ xúc tiến thương mại",
        "Tận dụng các FTA để xuất khẩu"
      ]
    },
    {
      title: "Đào tạo nhân lực",
      description: "Đào tạo lớp nghệ nhân trẻ, nâng tầm tay nghề, kết hợp kỹ nghệ truyền thống với kiến thức thị trường hiện đại.",
      image: "/images/artisan-training.jpg",
      icon: <FaUserGraduate className="text-2xl" />,
      color: "accent",
      points: [
        "Truyền nghề cho thế hệ trẻ",
        "Kết hợp kỹ năng truyền thống và hiện đại",
        "Nâng cao nhận thức về giá trị văn hóa"
      ]
    },
    {
      title: "Phát triển du lịch",
      description: "Gắn sản xuất với khai thác giá trị văn hóa, phát triển du lịch trải nghiệm, thu hút đầu tư và khách quốc tế.",
      image: "/images/craft-village-tourism.jpg",
      icon: <FaUmbrellaBeach className="text-2xl" />,
      color: "primary",
      points: [
        "Phát triển du lịch trải nghiệm",
        "Tạo không gian sáng tạo và trưng bày",
        "Kết hợp văn hóa và sản xuất"
      ]
    },
    {
      title: "Bảo vệ môi trường",
      description: "Đầu tư xử lý chất thải, khuyến khích phát triển làng nghề xanh, cân bằng giữa mục tiêu kinh tế và môi trường.",
      image: "/images/eco-friendly-production.jpg",
      icon: <FaLeaf className="text-2xl" />,
      color: "secondary",
      points: [
        "Áp dụng công nghệ sạch",
        "Xử lý chất thải hiệu quả",
        "Phát triển sản phẩm thân thiện môi trường"
      ]
    }
  ];

  return (
    <section id="modernization" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-pattern-dark opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">Phần V</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-display leading-tight">
            Giải pháp kết hợp công nghiệp hóa với <br/>
            <span className="font-accent italic text-gold-300">bảo tồn ngành nghề truyền thống</span>
          </h2>
          <div className="w-32 h-[2px] bg-gradient-gold mx-auto mb-10 rounded-full"></div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="mb-10 overflow-x-auto pb-3 no-scrollbar">
          <div className="flex space-x-2 md:space-x-3 md:justify-center">
            {solutions.map((solution, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                  activeTab === index 
                    ? `bg-gray-700/80 text-white border-b-2 border-gold-400` 
                    : 'bg-gray-800/60 text-gray-400 hover:bg-gray-700/60 hover:text-gray-300'
                }`}
                whileTap={{ scale: 0.97 }}
              >
                <span className={`${activeTab === index ? 'text-gold-400' : 'text-gray-400'}`}>
                  {solution.icon}
                </span>
                <span className="font-medium text-sm md:text-base whitespace-nowrap">{solution.title}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
          className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-elegant overflow-hidden border border-gray-700"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeTab === index ? 1 : 0,
                display: activeTab === index ? 'block' : 'none'
              }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent`}></div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                    <div className={`bg-gold-500/80 backdrop-blur-sm p-3 md:p-4 rounded-lg inline-block mb-3`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-display">
                      {solution.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 md:p-10">
                  <div className="bg-gray-700/30 p-5 rounded-lg mb-6 backdrop-blur-sm border-l-4 border-gold-400">
                    <p className="text-gray-200 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  
                  <h4 className={`text-gold-400 font-semibold mb-4 font-accent`}>
                    Điểm chính:
                  </h4>
                  
                  <ul className="space-y-3">
                    {solution.points.map((point, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.1 }}
                      >
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gray-700/80 flex items-center justify-center mr-3 mt-0.5 border border-gold-600/30`}>
                          <span className="text-gold-400 text-xs">{idx + 1}</span>
                        </span>
                        <span className="text-gray-300">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-luxury rounded-lg p-8 shadow-premium text-white border border-gray-700"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-6 font-display text-white">
              Hài hòa giữa truyền thống và hiện đại
            </h3>
            <div className="w-24 h-[2px] bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-white/90 leading-relaxed">
              Sự kết hợp giữa công nghiệp hóa, hiện đại hóa với bảo tồn ngành nghề truyền thống không phải là hai xu hướng đối lập mà là quá trình hỗ trợ lẫn nhau, giúp Việt Nam phát triển bền vững và giữ gìn bản sắc văn hóa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ModernizationSection;

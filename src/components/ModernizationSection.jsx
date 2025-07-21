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
    <section id="modernization" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent-600 dark:text-accent-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Phần V</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white font-display">
            Giải pháp kết hợp công nghiệp hóa với bảo tồn ngành nghề truyền thống
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mb-6"></div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="mb-8 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex space-x-1 md:space-x-2 md:justify-center">
            {solutions.map((solution, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                  activeTab === index 
                    ? `bg-${solution.color}-100 dark:bg-${solution.color}-900/30 text-${solution.color}-700 dark:text-${solution.color}-300 border-b-2 border-${solution.color}-500` 
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/80'
                }`}
                whileTap={{ scale: 0.97 }}
              >
                <span className={`${activeTab === index ? `text-${solution.color}-600 dark:text-${solution.color}-400` : 'text-gray-500 dark:text-gray-400'}`}>
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
          className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
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
                <div className="relative h-56 md:h-auto">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${solution.color}-900/80 to-transparent opacity-60`}></div>
                  <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                    <div className={`bg-${solution.color}-500/80 backdrop-blur-sm p-2 md:p-3 rounded-lg inline-block mb-2`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-display">
                      {solution.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-5 md:p-8">
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg mb-5">
                    <p className="text-gray-700 dark:text-gray-200">
                      {solution.description}
                    </p>
                  </div>
                  
                  <h4 className={`text-${solution.color}-600 dark:text-${solution.color}-400 font-semibold mb-3`}>
                    Điểm chính:
                  </h4>
                  
                  <ul className="space-y-2">
                    {solution.points.map((point, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.1 }}
                      >
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-${solution.color}-100 dark:bg-${solution.color}-900/30 flex items-center justify-center mr-2 mt-0.5`}>
                          <span className={`text-${solution.color}-600 dark:text-${solution.color}-400 text-xs`}>{idx + 1}</span>
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="mt-5 flex justify-end">
                    <button className={`flex items-center text-${solution.color}-600 dark:text-${solution.color}-400 text-sm font-medium hover:underline`}>
                      <span>Chi tiết</span>
                      <FaArrowRight className="ml-1 text-xs" />
                    </button>
                  </div>
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
          className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-6 shadow-md text-white"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4 font-display text-white">
              Hài hòa giữa truyền thống và hiện đại
            </h3>
            <p className="text-white/90">
              Sự kết hợp giữa công nghiệp hóa, hiện đại hóa với bảo tồn ngành nghề truyền thống không phải là hai xu hướng đối lập mà là quá trình hỗ trợ lẫn nhau, giúp Việt Nam phát triển bền vững và giữ gìn bản sắc văn hóa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ModernizationSection;

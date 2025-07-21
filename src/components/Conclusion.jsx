// src/components/Conclusion.jsx
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaCheckCircle } from 'react-icons/fa';

function Conclusion() {
  const keyPoints = [
    {
      title: "Phát triển bền vững",
      content: "Công nghiệp hóa, hiện đại hóa giúp đất nước phát triển nhanh, nâng cao năng suất lao động, hội nhập quốc tế hiệu quả, xây dựng cơ sở vững chắc cho chủ nghĩa xã hội và nâng cao đời sống người dân."
    },
    {
      title: "Bảo tồn văn hóa",
      content: "Giữ gìn và phát triển ngành nghề truyền thống là bảo tồn cội nguồn văn hóa dân tộc, tạo sinh kế bền vững cho nông thôn, giải quyết việc làm cho hàng triệu lao động."
    },
    {
      title: "Đa dạng hóa kinh tế",
      content: "Đa dạng hóa sản phẩm phục vụ trong và ngoài nước, góp phần thúc đẩy tăng trưởng kinh tế, phát triển du lịch, nâng cao sức mạnh mềm và vị thế quốc gia trong hội nhập."
    }
  ];

  return (
    <section id="conclusion" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Phần VI</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white font-display">
            Giải đáp: Vì sao cần kết hợp CNH-HĐH với bảo tồn ngành nghề truyền thống?
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-custom p-8 hover:shadow-custom-lg transition-all duration-300 border-b-4 border-primary-500"
            >
              <div className="flex items-center mb-4">
                <FaCheckCircle className="text-primary-500 dark:text-primary-400 text-xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white font-display">
                  {point.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {point.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-10 shadow-custom max-w-4xl mx-auto border border-gray-100 dark:border-gray-700 relative"
        >
          <div className="absolute top-6 left-6 text-primary-300 dark:text-primary-700 opacity-30">
            <FaQuoteLeft size={40} />
          </div>
          
          <div className="absolute bottom-6 right-6 text-secondary-300 dark:text-secondary-700 opacity-30">
            <FaQuoteRight size={40} />
          </div>
          
          <div className="relative z-10">
            <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed mb-8 italic">
              Công nghiệp hóa - hiện đại hóa và bảo tồn, phát triển ngành nghề truyền thống là hai quá trình song hành, 
              bổ sung cho nhau, giúp Việt Nam phát triển bền vững, hội nhập sâu rộng mà vẫn giữ vững bản sắc, 
              phát huy nội lực và xây dựng tương lai thịnh vượng.
            </p>
            
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-display">
            Kết luận
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Việt Nam cần tiếp tục đẩy mạnh công nghiệp hóa, hiện đại hóa đồng thời bảo tồn và phát huy giá trị ngành nghề truyền thống 
            để phát triển toàn diện, bền vững và hài hòa giữa kinh tế, văn hóa và xã hội.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Conclusion;

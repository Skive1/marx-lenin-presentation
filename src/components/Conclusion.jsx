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
    <section id="conclusion" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-pattern-dark opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">Phần VI</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-display leading-tight">
            Giải đáp: Vì sao Việt Nam phải tiến hành CNH, HĐH<br/>
            <span className="font-accent italic text-gold-300">mà vẫn giữ ngành nghề truyền thống?</span>
          </h2>
          <div className="w-32 h-[2px] bg-gradient-gold mx-auto mb-10 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-luxury hover-lift"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-900/30 p-4 rounded-full mr-5 text-gold-400 border border-gold-700/30">
                  <FaCheckCircle className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  {point.title}
                </h3>
              </div>
              
              <div className="luxury-divider"></div>
              
              <p className="text-gray-300 leading-relaxed">
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
          className="bg-gradient-luxury rounded-xl p-10 shadow-premium max-w-4xl mx-auto border border-gray-700 relative mb-20"
        >
          <div className="absolute top-8 left-8 text-gold-700 opacity-20">
            <FaQuoteLeft size={40} />
          </div>
          
          <div className="absolute bottom-8 right-8 text-gold-700 opacity-20">
            <FaQuoteRight size={40} />
          </div>
          
          <div className="relative z-10">
            <p className="text-gray-300 text-xl leading-relaxed mb-8 italic text-center px-6">
              Công nghiệp hóa - hiện đại hóa và bảo tồn, phát triển ngành nghề truyền thống là hai quá trình song hành, 
              bổ sung cho nhau, giúp Việt Nam phát triển bền vững, hội nhập sâu rộng mà vẫn giữ vững bản sắc, 
              phát huy nội lực và xây dựng tương lai thịnh vượng.
            </p>
            
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-gold rounded-full"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6 font-display">
            Kết luận
          </h3>
          <div className="w-24 h-[2px] bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
            Việt Nam cần tiếp tục đẩy mạnh công nghiệp hóa, hiện đại hóa đồng thời bảo tồn và phát huy giá trị ngành nghề truyền thống 
            để phát triển toàn diện, bền vững và hài hòa giữa kinh tế, văn hóa và xã hội.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Conclusion;

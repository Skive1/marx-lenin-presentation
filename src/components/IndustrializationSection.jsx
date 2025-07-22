import { motion } from 'framer-motion';
import { FaCheckCircle, FaLightbulb, FaIndustry, FaLeaf, FaGlobeAsia, FaUsers, FaBrain } from 'react-icons/fa';

function IndustrializationSection() {
  const reasons = [
    {
      text: "Xuất phát từ yêu cầu phát triển lực lượng sản xuất, xây dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội.",
      icon: <FaIndustry className="text-gold-400 text-xl" />
    },
    {
      text: "Đáp ứng yêu cầu phát triển kinh tế, nâng cao đời sống nhân dân, rút ngắn nguy cơ tụt hậu xa về kinh tế so với các nước trong khu vực và trên thế giới.",
      icon: <FaUsers className="text-gold-400 text-xl" />
    },
    {
      text: "Bảo đảm độc lập, tự chủ, nâng cao thế và lực của đất nước trong bối cảnh hội nhập kinh tế quốc tế sâu rộng và cạnh tranh toàn cầu.",
      icon: <FaGlobeAsia className="text-gold-400 text-xl" />
    },
    {
      text: "Phát triển hài hòa giữa kinh tế - xã hội, bảo vệ môi trường, đảm bảo phát triển nhanh và bền vững.",
      icon: <FaLeaf className="text-gold-400 text-xl" />
    }
  ];

  const contents = [
    {
      title: "Phát triển công nghiệp nền tảng",
      text: "Phát triển mạnh các ngành công nghiệp nền tảng, ưu tiên công nghệ cao (cơ khí chế tạo, tự động hóa, điện tử, hóa chất, vật liệu mới, năng lượng sạch...).",
      icon: <FaIndustry className="text-2xl" />
    },
    {
      title: "Hiện đại hóa nông nghiệp",
      text: "Đẩy mạnh CNH, HĐH nông nghiệp, nông thôn đồng thời chuyển dịch cơ cấu kinh tế nông nghiệp sang sản xuất hàng hóa lớn, ứng dụng công nghệ mới.",
      icon: <FaLeaf className="text-2xl" />
    },
    {
      title: "Ứng dụng khoa học công nghệ",
      text: "Ứng dụng mạnh mẽ thành tựu khoa học - công nghệ, chuyển đổi số, đổi mới sáng tạo vào tất cả lĩnh vực sản xuất, quản trị và dịch vụ.",
      icon: <FaLightbulb className="text-2xl" />
    },
    {
      title: "Hội nhập quốc tế",
      text: "Gắn kết CNH, HĐH với phát triển kinh tế thị trường định hướng xã hội chủ nghĩa, hội nhập quốc tế, nâng cao năng lực tham gia chuỗi giá trị toàn cầu.",
      icon: <FaGlobeAsia className="text-2xl" />
    },
    {
      title: "Phát triển bền vững",
      text: "Kết hợp giữa phát triển nhanh và bền vững, bảo đảm an ninh quốc phòng, bảo vệ môi trường và thích ứng với biến đổi khí hậu.",
      icon: <FaCheckCircle className="text-2xl" />
    },
    {
      title: "Phát triển nguồn nhân lực",
      text: "Xây dựng nguồn nhân lực chất lượng cao, phát triển con người toàn diện, chủ động tiếp cận tri thức, văn hóa nhân loại.",
      icon: <FaUsers className="text-2xl" />
    }
  ];

  return (
    <section id="industrialization" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
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
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">Phần II</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-display leading-tight">
            Tính tất yếu khách quan và <br/>
            <span className="font-accent italic text-gold-300">nội dung công nghiệp hóa - hiện đại hóa</span>
          </h2>
          <div className="w-32 h-[2px] bg-gradient-gold mx-auto mb-10 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Phân tích các yếu tố cấu thành tính tất yếu và nội dung cơ bản của quá trình CNH-HĐH ở Việt Nam
          </p>
        </motion.div>

        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-10 shadow-elegant border border-gray-700"
          >
            <h3 className="text-3xl font-bold mb-10 text-white font-display">
              1. Tính tất yếu khách quan của CNH, HĐH tại Việt Nam
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start p-6 bg-gray-700/50 rounded-lg hover:shadow-premium transition-all duration-300 hover-lift"
                >
                  <div className="mr-5 mt-1 bg-gray-800 p-3 rounded-full shadow-sm border border-gold-600/30">
                    {reason.icon}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {reason.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-12 text-white text-center font-display">
            2. Nội dung chủ yếu của công nghiệp hóa - hiện đại hóa ở Việt Nam
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contents.map((content, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury hover-lift group"
              >
                <div className="bg-gray-700/80 rounded-full w-16 h-16 flex items-center justify-center mb-8 group-hover:bg-gray-600/80 transition-colors duration-300 border border-gold-600/30">
                  <div className="text-gold-400">
                    {content.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 text-white font-display">
                  {content.title}
                </h4>
                <div className="luxury-divider"></div>
                <p className="text-gray-300 leading-relaxed">
                  {content.text}
                </p>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-luxury rounded-xl p-8 shadow-premium transition-all duration-300 md:col-span-2 lg:col-span-3 text-white border border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6 md:mb-0 md:mr-6">
                  <FaBrain className="text-gold-300 text-2xl" />
                </div>
                <h4 className="text-2xl font-bold font-display">
                  Phát triển kinh tế tri thức
                </h4>
              </div>
              <div className="elegant-divider"></div>
              <p className="text-white/90 text-lg leading-relaxed">
                Từng bước phát triển kinh tế tri thức, lấy sáng tạo và tài năng con người làm động lực tăng trưởng chủ yếu.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default IndustrializationSection;
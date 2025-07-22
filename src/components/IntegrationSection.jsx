import { motion } from 'framer-motion';
import { FaGlobeAsia, FaChartLine, FaTrademark, FaLeaf, FaRegHandshake } from 'react-icons/fa';

function IntegrationSection() {
  const integrationStrategies = [
    {
      title: "Chủ động và tích cực hội nhập quốc tế",
      description: "Tham gia toàn diện các tổ chức, hiệp định kinh tế quốc tế, chủ động nắm bắt cơ hội, nâng cao năng lực cạnh tranh, mở rộng tiếp cận thị trường.",
      icon: <FaGlobeAsia />,
      color: "primary",
      details: [
        "CPTPP - Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương",
        "EVFTA - Hiệp định Thương mại tự do Việt Nam - EU",
        "RCEP - Hiệp định Đối tác Kinh tế Toàn diện Khu vực"
      ]
    },
    {
      title: "Nâng cao năng lực nội tại của nền kinh tế",
      description: "Đổi mới sáng tạo, chuyển đổi số, công nghiệp hóa sản xuất và phát triển nguồn nhân lực chất lượng cao là yếu tố quyết định năng lực cạnh tranh.",
      icon: <FaChartLine />,
      color: "secondary",
      details: [
        "Tăng cường ứng dụng khoa học - công nghệ",
        "Phát triển nguồn nhân lực chất lượng cao",
        "Cải thiện môi trường đầu tư kinh doanh"
      ]
    },
    {
      title: "Phát triển hài hòa các lĩnh vực",
      description: "Kết hợp phát triển công nghiệp hiện đại với sản xuất truyền thống tạo sự đa dạng nội lực ngành hàng Việt Nam trên thương trường quốc tế.",
      icon: <FaTrademark />,
      color: "accent",
      details: [
        "Đưa sản phẩm ngành nghề truyền thống đạt chuẩn quốc tế",
        "Xây dựng thương hiệu quốc gia",
        "Đẩy mạnh xuất khẩu sản phẩm có giá trị gia tăng cao"
      ]
    },
    {
      title: "Bảo đảm phát triển bền vững",
      description: "Gắn tăng trưởng kinh tế với bảo vệ môi trường, phát triển xã hội hài hòa, chú trọng bảo tồn giá trị văn hóa.",
      icon: <FaLeaf />,
      color: "primary",
      details: [
        "Thực hiện chuyển dịch cơ cấu kinh tế theo hướng xanh",
        "Phát triển kinh tế tuần hoàn",
        "Thích ứng tốt hơn với biến động toàn cầu"
      ]
    }
  ];

  return (
    <section id="integration" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative">
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
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">Phần III</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-display leading-tight">
            Phương hướng nâng cao hiệu quả <br/>
            <span className="font-accent italic text-gold-300">hội nhập kinh tế quốc tế</span>
          </h2>
          <div className="w-32 h-[2px] bg-gradient-gold mx-auto mb-10 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Các chiến lược và giải pháp để Việt Nam nâng cao hiệu quả hội nhập kinh tế quốc tế trong quá trình phát triển
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {integrationStrategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-luxury hover-lift"
            >
              <div className="flex items-center mb-8">
                <div className="bg-gray-700/80 p-4 rounded-full mr-5 text-gold-400 border border-gold-600/30">
                  {strategy.icon}
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  {index + 1}. {strategy.title}
                </h3>
              </div>
              
              <div className="luxury-divider"></div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                {strategy.description}
              </p>
              
              <div className="bg-gray-700/40 p-6 rounded-lg border-l-4 border-gold-400">
                <h4 className="font-semibold mb-4 text-gold-400 font-accent">
                  Điểm chính:
                </h4>
                <ul className="space-y-3">
                  {strategy.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold-400 mr-3 mt-1 text-lg">•</span>
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-luxury rounded-xl p-10 shadow-premium border border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:mr-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full">
                <FaRegHandshake className="text-gold-300 text-5xl" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display text-white">Hội nhập kinh tế quốc tế - Động lực phát triển</h3>
              <div className="elegant-divider mb-6"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hội nhập kinh tế quốc tế là một quá trình đa chiều, đòi hỏi sự chuẩn bị kỹ lưỡng và chiến lược dài hạn. 
                Việt Nam cần tận dụng tối đa các cơ hội từ các hiệp định thương mại tự do, đồng thời nâng cao năng lực 
                cạnh tranh nội tại để đảm bảo phát triển bền vững trong bối cảnh toàn cầu hóa.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default IntegrationSection;
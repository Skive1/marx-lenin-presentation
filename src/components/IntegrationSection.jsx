import { motion } from 'framer-motion';
import { FaGlobeAsia, FaChartLine, FaTrademark, FaLeaf, FaHandshake, FaFileSignature, FaRegHandshake } from 'react-icons/fa';

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
    <section id="integration" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-accent-600 dark:text-accent-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Phần IV</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white font-display">
            Phương hướng nâng cao hiệu quả hội nhập kinh tế quốc tế
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Các chiến lược và giải pháp để Việt Nam nâng cao hiệu quả hội nhập kinh tế quốc tế trong quá trình phát triển
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {integrationStrategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-custom p-8 border-l-4 border-${strategy.color}-500 hover:shadow-custom-lg transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <div className={`bg-${strategy.color}-100 dark:bg-${strategy.color}-900/30 p-3 rounded-full mr-4 text-${strategy.color}-600 dark:text-${strategy.color}-400`}>
                  {strategy.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                  {index + 1}. {strategy.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {strategy.description}
              </p>
              
              <div className={`bg-${strategy.color}-50/50 dark:bg-${strategy.color}-900/10 p-4 rounded-lg`}>
                <h4 className={`font-semibold mb-3 text-${strategy.color}-700 dark:text-${strategy.color}-300`}>
                  Điểm chính:
                </h4>
                <ul className="space-y-2">
                  {strategy.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`text-${strategy.color}-500 dark:text-${strategy.color}-400 mr-2 mt-1`}>•</span>
                      <span className="text-gray-600 dark:text-gray-300">{detail}</span>
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
          className="mt-12 bg-gradient-to-r from-accent-500 to-primary-600 rounded-xl p-8 shadow-custom text-white"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="bg-white/20 p-5 rounded-full">
                <FaRegHandshake className="text-white text-5xl" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">Hội nhập kinh tế quốc tế - Động lực phát triển</h3>
              <p className="text-white/90 text-lg leading-relaxed">
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
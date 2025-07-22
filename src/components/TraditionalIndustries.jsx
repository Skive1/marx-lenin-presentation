import { motion } from 'framer-motion';
import { FaCoins, FaLandmark, FaGlobeAmericas, FaChartLine } from 'react-icons/fa';

function TraditionalIndustries() {
  const reasons = [
    {
      title: "Phát triển kinh tế xã hội bền vững",
      description: "Ngành nghề truyền thống tạo việc làm, thu nhập cho hàng triệu lao động, nhất là khu vực nông thôn. Đó còn là giải pháp chuyển dịch cơ cấu lao động, góp phần ổn định xã hội.",
      icon: <FaCoins className="text-2xl" />,
      color: "secondary",
      image: "/images/traditional-craft.jpg"
    },
    {
      title: "Bảo tồn giá trị văn hóa, bản sắc dân tộc",
      description: "Sản phẩm làng nghề thủ công truyền thống chứa đựng tinh hoa lao động, trí tuệ, lịch sử, nghệ thuật của các cộng đồng người Việt, là 'thương hiệu mềm' có giá trị quảng bá quốc gia.",
      icon: <FaLandmark className="text-2xl" />,
      color: "primary",
      image: "/images/artisan-training.jpg"
    },
    {
      title: "Thúc đẩy du lịch, mở rộng thị trường xuất khẩu",
      description: "Nhiều sản phẩm ngành nghề truyền thống như gốm sứ, mây tre đan, lụa, sơn mài... đã và đang chiếm lĩnh thị trường quốc tế, là cầu nối giao lưu văn hóa toàn cầu.",
      icon: <FaGlobeAmericas className="text-2xl" />,
      color: "accent",
      image: "/images/craft-village-tourism.jpg"
    },
    {
      title: "Phát huy nội lực, tăng khả năng thích ứng hội nhập",
      description: "Ngành nghề truyền thống, khi được áp dụng tiến bộ khoa học - kỹ thuật, sẽ phát huy được lợi thế, tăng sức cạnh tranh quốc tế, tận dụng các FTA, đa dạng hóa mặt hàng xuất khẩu.",
      icon: <FaChartLine className="text-2xl" />,
      color: "secondary",
      image: "/images/modern-tech-traditional.jpg"
    }
  ];

  return (
    <section id="traditional" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
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
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">Phần IV</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-display leading-tight">
            Vì sao phải giữ gìn và phát triển <br/>
            <span className="font-accent italic text-gold-300">ngành nghề truyền thống?</span>
          </h2>
          <div className="w-32 h-[2px] bg-gradient-gold mx-auto mb-10 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Phân tích tầm quan trọng của việc bảo tồn và phát triển ngành nghề truyền thống trong bối cảnh công nghiệp hóa, hiện đại hóa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group hover-lift"
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-elegant hover:shadow-premium transition-all duration-500 h-full flex flex-col border border-gray-700">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={reason.image} 
                    alt={reason.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold font-display mb-2">
                      {reason.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-gray-700/80 p-4 rounded-full mr-5 text-gold-400 border border-gold-600/30">
                      {reason.icon}
                    </div>
                  </div>
                  
                  <div className="luxury-divider"></div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    {reason.description}
                  </p>
                  
                  <div className="mt-auto w-full h-1 bg-gradient-gold rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-luxury rounded-xl p-10 shadow-premium border border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:mr-10 bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
              <h3 className="text-2xl font-bold font-display">Kết luận</h3>
            </div>
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Việc giữ gìn và phát triển ngành nghề truyền thống trong quá trình CNH-HĐH không chỉ mang ý nghĩa kinh tế mà còn có giá trị văn hóa, xã hội sâu sắc. 
                Đây là cách để Việt Nam phát triển bền vững, tạo ra bản sắc riêng trên thương trường quốc tế, đồng thời giữ gìn được di sản văn hóa quý báu của dân tộc.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TraditionalIndustries;
import { motion } from 'framer-motion';
import { FaIndustry, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
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
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">Phần I</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-display leading-tight">
            Khái quát về Cách mạng công nghiệp <br/>
            <span className="font-accent italic text-gold-300">và Công nghiệp hóa - Hiện đại hóa</span>
          </h2>
          
          <div className="w-32 h-[2px] bg-gradient-gold mx-auto mb-10 rounded-full"></div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tìm hiểu về các khái niệm cơ bản và vai trò của công nghiệp hóa, hiện đại hóa trong sự phát triển kinh tế - xã hội
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-luxury hover-lift"
          >
            <div className="flex items-center mb-8">
              <div className="bg-gray-700/80 p-4 rounded-lg mr-5 border border-gold-600/30">
                <FaIndustry className="text-gold-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Cách mạng công nghiệp là gì?
              </h3>
            </div>
            
            <div className="luxury-divider"></div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Cách mạng công nghiệp là những <span className="text-gold-400 font-semibold">bước nhảy vọt về sản xuất xã hội</span>, nhờ vào các phát minh và tiến bộ khoa học - kỹ thuật, làm thay đổi căn bản phương thức sản xuất, tổ chức lao động và cấu trúc xã hội.
            </p>
            
            <div className="bg-gray-700/40 p-6 rounded-lg border-l-4 border-gold-400">
              <p className="text-gray-300 leading-relaxed italic">
                Trên thế giới đã diễn ra bốn cuộc cách mạng công nghiệp lớn, trong đó cuộc cách mạng công nghiệp 4.0 hiện nay tập trung vào <span className="text-gold-400 font-semibold">công nghệ số, trí tuệ nhân tạo, tự động hóa, kết nối vạn vật (IoT), ...</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-luxury hover-lift"
          >
            <div className="flex items-center mb-8">
              <div className="bg-gray-700/80 p-4 rounded-lg mr-5 border border-gold-600/30">
                <FaRocket className="text-gold-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Công nghiệp hóa và Hiện đại hóa
              </h3>
            </div>
            
            <div className="luxury-divider"></div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              <span className="font-accent font-semibold text-gold-400">Công nghiệp hóa</span> là quá trình chuyển đổi căn bản, toàn diện các hoạt động kinh tế - xã hội từ nền sản xuất thủ công, lạc hậu sang sản xuất bằng máy móc, thiết bị hiện đại.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              <span className="font-accent font-semibold text-gold-400">Hiện đại hóa</span> là quá trình liên tục đổi mới, ứng dụng khoa học công nghệ tiên tiến, cải tiến quản lý và tổ chức sản xuất nhằm từng bước nâng cao trình độ phát triển.
            </p>
            
            <div className="bg-gray-700/40 p-6 rounded-lg border-l-4 border-gold-400">
              <p className="text-gray-300 leading-relaxed italic">
                Công nghiệp hóa, hiện đại hóa ở Việt Nam là <span className="text-gold-400 font-semibold">tất yếu khách quan</span>, là nhiệm vụ trung tâm, lâu dài trong suốt thời kỳ quá độ lên chủ nghĩa xã hội.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
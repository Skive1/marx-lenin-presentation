import { motion } from 'framer-motion';
import { FaIndustry, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Phần I</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white font-display">
            Khái quát về Cách mạng công nghiệp và Công nghiệp hóa - Hiện đại hóa
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tìm hiểu về các khái niệm cơ bản và vai trò của công nghiệp hóa, hiện đại hóa trong sự phát triển kinh tế - xã hội
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-custom p-8 border-t-4 border-primary-500 hover:shadow-custom-lg transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                <FaIndustry className="text-primary-600 dark:text-primary-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">Cách mạng công nghiệp là gì?</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Cách mạng công nghiệp là những <span className="text-primary-600 dark:text-primary-400 font-semibold">bước nhảy vọt về sản xuất xã hội</span>, nhờ vào các phát minh và tiến bộ khoa học - kỹ thuật, làm thay đổi căn bản phương thức sản xuất, tổ chức lao động và cấu trúc xã hội.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Trên thế giới đã diễn ra bốn cuộc cách mạng công nghiệp lớn, trong đó cuộc cách mạng công nghiệp 4.0 hiện nay tập trung vào <span className="text-primary-600 dark:text-primary-400 font-semibold">công nghệ số, trí tuệ nhân tạo, tự động hóa, kết nối vạn vật (IoT)...</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-custom p-8 border-t-4 border-secondary-500 hover:shadow-custom-lg transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-lg mr-4">
                <FaRocket className="text-secondary-600 dark:text-secondary-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">Công nghiệp hóa và Hiện đại hóa</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <span className="font-semibold text-secondary-600 dark:text-secondary-400">Công nghiệp hóa</span> là quá trình chuyển đổi căn bản, toàn diện các hoạt động kinh tế - xã hội từ nền sản xuất thủ công, lạc hậu sang sản xuất bằng máy móc, thiết bị hiện đại.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <span className="font-semibold text-secondary-600 dark:text-secondary-400">Hiện đại hóa</span> là quá trình liên tục đổi mới, ứng dụng khoa học công nghệ tiên tiến, cải tiến quản lý và tổ chức sản xuất nhằm từng bước nâng cao trình độ phát triển.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Công nghiệp hóa, hiện đại hóa ở Việt Nam là <span className="text-secondary-600 dark:text-secondary-400 font-semibold">tất yếu khách quan</span>, là nhiệm vụ trung tâm, lâu dài trong suốt thời kỳ quá độ lên chủ nghĩa xã hội.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
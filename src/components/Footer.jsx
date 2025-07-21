// src/components/Footer.jsx
import { FaFacebook, FaTwitter, FaYoutube, FaEnvelope, FaGlobe, FaPhone, FaMapMarkerAlt, FaBook, FaIndustry, FaHandshake, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  const links = [
    { name: "Đảng Cộng sản Việt Nam", url: "https://dangcongsan.vn", icon: <FaGlobe /> },
    { name: "Bộ Công Thương", url: "https://www.moit.gov.vn", icon: <FaIndustry /> },
    { name: "Bộ Kế hoạch và Đầu tư", url: "https://www.mpi.gov.vn", icon: <FaChartLine /> },
    { name: "Làng nghề truyền thống Việt Nam", url: "#", icon: <FaHandshake /> }
  ];

  const sections = [
    { name: "I. Khái quát", to: "about" },
    { name: "II. Tính tất yếu", to: "industrialization" },
    { name: "III. Ngành nghề truyền thống", to: "traditional" },
    { name: "IV. Hội nhập kinh tế", to: "integration" },
    { name: "V. Giải pháp kết hợp", to: "modernization" },
    { name: "VI. Kết luận", to: "conclusion" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 font-display border-b border-primary-500 pb-2 inline-block">
              Về Bài Thuyết Trình
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Trang web thuyết trình về công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế của Việt Nam
              kết hợp với bảo tồn và phát triển ngành nghề truyền thống.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                <FaYoutube size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                <FaEnvelope size={22} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 font-display border-b border-secondary-500 pb-2 inline-block">
                Liên Kết
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-gray-300 hover:text-secondary-400 transition-colors duration-300 flex items-center"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">{link.icon}</span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 font-display border-b border-accent-500 pb-2 inline-block">
                Mục Lục
              </h3>
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a 
                      href={`#${section.to}`} 
                      className="text-gray-300 hover:text-accent-400 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2"><FaBook size={12} /></span>
                      <span>{section.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 font-display border-b border-primary-500 pb-2 inline-block">
              Liên Hệ
            </h3>
            <address className="text-gray-300 not-italic space-y-4">
              <p className="flex items-center">
                <FaEnvelope className="mr-3 text-primary-400" />
                <span>Email: info@cnh-hdh-vietnam.vn</span>
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-3 text-primary-400" />
                <span>Điện thoại: (84) 123-456-789</span>
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-primary-400" />
                <span>Địa chỉ: Hà Nội, Việt Nam</span>
              </p>
            </address>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Công nghiệp hóa - Hiện đại hóa Việt Nam. Tất cả các quyền được bảo lưu.</p>
          <p className="text-gray-500 text-sm mt-2">Thiết kế và phát triển bởi Nhóm Nghiên Cứu Triết Học Marx-Lenin</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

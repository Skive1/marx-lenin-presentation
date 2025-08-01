// src/App.jsx
import { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollProgress from './components/common/ScrollProgress';
// Lazy load các component không cần hiển thị ngay
const About = lazy(() => import('./components/About'));
const IndustrializationSection = lazy(() => import('./components/IndustrializationSection'));
const TraditionalIndustries = lazy(() => import('./components/TraditionalIndustries'));
const IntegrationSection = lazy(() => import('./components/IntegrationSection'));
const ModernizationSection = lazy(() => import('./components/ModernizationSection'));
const Conclusion = lazy(() => import('./components/Conclusion'));

// Loading component nhẹ
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-16 h-16 border-4 border-gold-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  // Changing initial state to true to make dark mode the default
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <ScrollProgress />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <About /> {/* I. Khái quát */}
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <IndustrializationSection /> {/* II. Tính tất yếu khách quan */}
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <IntegrationSection /> {/* III. Phương hướng nâng cao hiệu quả hội nhập */}
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <TraditionalIndustries /> {/* IV. Vì sao phải giữ gìn ngành nghề truyền thống */}
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ModernizationSection /> {/* V. Giải pháp kết hợp */}
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Conclusion /> {/* VI. Giải đáp */}
        </Suspense>
      </div>
    </div>
  );
}

export default App;

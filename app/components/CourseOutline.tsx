'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  FaDownload, 
  FaRocket, 
  FaBullseye, 
  FaCog, 
  FaSearch, 
  FaVideo, 
  FaPen, 
  FaMicrophone, 
  FaFilm, 
  FaImage, 
  FaChartBar, 
  FaDollarSign, 
  FaChartLine, 
  FaBalanceScale, 
  FaWrench 
} from 'react-icons/fa';

const modules = [
  { number: 1, title: 'Getting Started with YouTube', icon: FaRocket },
  { number: 2, title: 'Content Planning & Niching', icon: FaBullseye },
  { number: 3, title: 'Setting Up Your Channel', icon: FaCog },
  { number: 4, title: 'SEO & Research', icon: FaSearch },
  { number: 5, title: 'Video Creation', icon: FaVideo },
  { number: 6, title: 'Script Writing', icon: FaPen },
  { number: 7, title: 'Audio & Voiceovers', icon: FaMicrophone },
  { number: 8, title: 'Video Editing', icon: FaFilm },
  { number: 9, title: 'Titles & Thumbnails', icon: FaImage },
  { number: 10, title: 'YouTube Studio', icon: FaChartBar },
  { number: 11, title: 'Monetization', icon: FaDollarSign },
  { number: 12, title: 'Analytics & Tracking', icon: FaChartLine },
  { number: 13, title: 'Legal & Copyright', icon: FaBalanceScale },
  { number: 14, title: 'Troubleshooting', icon: FaWrench },
  { number: 15, title: 'Scaling', icon: FaChartLine },
];

export default function CourseOutline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    // Create a link to download the course file
    const link = document.createElement('a');
    link.href = '/YOUTUBE_COURSE.pdf';
    link.download = 'YOUTUBE_COURSE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Course Outline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            15 comprehensive modules covering everything you need to know from the basics to monetization. 
            Each module is packed with examples, case studies, tutorials, and assignments.
          </p>
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <FaDownload />
            <span>Download Full Course Outline</span>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="blurred-gradient rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <module.icon className="text-5xl text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-blue-600 mb-2">
                Module {module.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                {module.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="blurred-gradient-red rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Plus Bonus Content!
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Get additional resources including AI tools guide, demonetization prevention strategies, 
              AdSense and taxes information, YouTube Shorts monetization, stress management tips, 
              and exclusive niche-specific knowledge.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


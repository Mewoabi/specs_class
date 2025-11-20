'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaGraduationCap, FaBookOpen, FaUsers } from 'react-icons/fa';

const services = [
  {
    title: 'Masterclass',
    description: 'Comprehensive 9-day intensive masterclass with live sessions, Q&A, and real-time feedback. Perfect for those in Buea and worldwide participants.',
    icon: FaGraduationCap,
  },
  {
    title: 'Step-by-Step Course',
    description: '15 detailed modules covering everything from niche selection to monetization. Self-paced learning with lifetime access to all materials.',
    icon: FaBookOpen,
  },
  {
    title: 'Private Community',
    description: 'Exclusive access to a private community of successful creators. Get support, share wins, and network with like-minded individuals.',
    icon: FaUsers,
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You'll Get
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete 3-in-1 package designed to take you from zero to monetized YouTube success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="blurred-gradient-blue rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-4">
                {/* <div className="text-5xl text-blue-600">
                  <service.icon />
                </div> */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaCheckCircle className="text-green-500 text-3xl" />
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


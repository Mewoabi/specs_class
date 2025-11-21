'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaCheck, FaWhatsapp, FaTelegram, FaExclamationTriangle } from 'react-icons/fa';

const perks = [
  'The 15 Modules to 6 Figures',
  '3 in 1 Package',
  'YouTube Masterclass (for those in Buea)',
  'YouTube Course',
  '2 Months Mentorship',
];

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get The Password to YouTube Automation
          </h2>
          <p className="text-xl text-gray-600">
            Limited time offer - Price going up soon!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="blurred-gradient rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Discount Badge - Mobile: centered above pricing, Desktop: top-right */}
          <div className="relative md:absolute top-0 md:top-6 right-0 md:right-6 flex justify-center md:block mb-4 md:mb-0">
            <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg inline-block">
              75% OFF
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-3xl md:text-4xl text-gray-400 line-through">
                $800
              </span>
              <span className="text-5xl md:text-6xl font-bold text-gray-900">
                $200
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-lg text-gray-600">
              <span className="line-through">450,000frs</span>
              <span className="font-semibold text-gray-800">109,000frs</span>
            </div>
            <p className="text-red-600 font-semibold mt-4 text-lg flex items-center justify-center space-x-2">
              <FaExclamationTriangle />
              <span>Price going up soon - act now!</span>
            </p>
          </div>

          {/* Perks List */}
          <div className="mb-8 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What's Included:
            </h3>
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4"
              >
                <FaCheck className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-lg text-gray-800 font-medium">{perk}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <motion.a
              href="https://wa.me/237683406758"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp size={24} />
              <span>Pay Now via WhatsApp</span>
            </motion.a>

            {/* <motion.a
              href="https://t.me/+YG3HUEJ9KvkyMWFk"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-8 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaTelegram size={24} />
              <span>Pay Now via Telegram</span>
            </motion.a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


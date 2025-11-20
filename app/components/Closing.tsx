'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function Closing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="blurred-gradient rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn More or Get in Touch
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            Join our official WhatsApp forum for free tips and help. Perfect for anyone wanting to 
            learn YouTube and get marketing insights. In this group, free tips and help will be given 
            for anyone who wants to learn YouTube.
          </p>
          <motion.a
            href="https://chat.whatsapp.com/I2TSKEMlNcTF5YKOBGLhOk?mode=hqrc"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FaWhatsapp size={24} />
            <span>Join Our WhatsApp Forum</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


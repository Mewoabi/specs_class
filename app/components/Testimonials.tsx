'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="blurred-gradient rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Them For Yourself When You Join the Masterclass
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            Get first-hand testimonials and witness how the course can transform your YouTube journey. 
            Join successful students who have monetized their channels and achieved 6-figure incomes 
            using the exact strategies taught in this masterclass.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet successful Students when you join the masterclass and see real results from real people 
            who applied the Password to YouTube Automation system.
          </p>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 inline-block bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <p className="text-gray-700 font-medium flex items-center justify-center space-x-2">
              <FaLock className="text-blue-600" />
              <span>Testimonials are available exclusively to enrolled students</span>
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';
import { DecorativeCircles, DecorativeX, GeometricShapes, WavyLines, FloatingShapes } from './DecorativeElements';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <DecorativeCircles />
      <GeometricShapes />
      <WavyLines />
      <FloatingShapes />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="blurred-gradient rounded-3xl p-8 md:p-12 text-center relative"
        >
          {/* Decorative X symbols at bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-10 flex gap-2">
            <DecorativeX className="text-xl" />
            <DecorativeX className="text-xl" />
            <DecorativeX className="text-xl" />
            <DecorativeX className="text-xl" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 text-shadow-bold">
            MEET THEM FOR <span className="text-box-black text-3xl md:text-4xl lg:text-5xl">YOURSELF</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 font-semibold">
            Get first-hand testimonials and witness how the course can transform your YouTube journey. 
            Join successful students who have monetized their channels and achieved <span className="text-box-red text-lg md:text-xl">6-figure</span> incomes 
            using the exact strategies taught in this masterclass.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
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


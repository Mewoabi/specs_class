'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUsers, FaEye, FaDollarSign } from 'react-icons/fa';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    { label: 'Total Subscribers', value: '200k+', icon: FaUsers },
    { label: 'Total Views', value: '100M+', icon: FaEye },
    { label: 'Yearly Income', value: '$100K', icon: FaDollarSign },
  ];

  return (
    <section id="mentor" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="blurred-gradient rounded-3xl p-8 md:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Author Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="/images/PN5A3811.jpg"
                  alt="Atem Formin - Formin Spectacular"
                  fill
                  className="rounded-2xl object-cover object-top lg:object-top shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Author Info */}
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Meet Your Mentor
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-4">
                  Formin Spectacular
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  (Atem Formin)
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                With over a decade of experience in content creation, Formin Spectacular has mastered the art of 
                faceless YouTube automation. As a successful content creator and comedian, he has built multiple 
                monetized channels and mentored over 100+ students to YouTube monetization success.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                His unique approach combines proven strategies, real-world case studies, and hands-on mentorship 
                to help creators achieve 6-figure incomes without ever showing their face or using their voice.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg"
                  >
                    <div className="flex justify-center mb-2">
                      <achievement.icon className="text-4xl text-red-600" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUsers, FaEye, FaDollarSign } from 'react-icons/fa';
import { RedSemiCircle, DecorativeX, GeometricShapes, CornerDecorations, GridPattern, FloatingShapes } from './DecorativeElements';

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
    <section id="mentor" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-light-grey">
      <RedSemiCircle position="left" />
      <GeometricShapes />
      <CornerDecorations />
      <GridPattern />
      <FloatingShapes />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="blurred-gradient rounded-3xl p-8 md:p-12 lg:p-16 relative border-black-thick"
        >
          {/* Decorative X symbols */}
          <div className="absolute top-4 right-4 opacity-10 hidden lg:flex gap-1">
            <DecorativeX size="sm" />
            <DecorativeX size="sm" />
            <DecorativeX size="sm" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-10 hidden lg:block">
            <DecorativeX size="base" />
          </div>

          {/* Full-width heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow-bold text-center">
            MEET YOUR <span className="text-box-black text-4xl md:text-5xl lg:text-6xl">MENTOR</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-4">
                  Formin Spectacular
                </h3>
                {/* <p className="text-lg text-gray-700 leading-relaxed">
                  (Atem Formin)
                </p> */}
              </div>
              <div className="mb-4">
                <span className="text-box-black-large text-2xl md:text-3xl lg:text-4xl font-black italic">
                  ATEM FORMIN
                </span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                My story is simple. From a young age, I've always loved content creation. I can remember going to cyber cafes just to learn video editing. I started shooting comedy skits back in 2017, but that's a story for another day.

                I remember when my friends and I shared a single room—without a kitchen or toilet. A lot of people discouraged us, and we faced many challenges along the way. But everything changed when I made my first $5,000 on YouTube in December 2021.


              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Fast forward to today: I've won multiple YouTube Awards, earned hundreds of thousands of dollars, helped over 100 people get monetized on YouTube, spoken at multiple conferences, and so much more.

                It took me years to get monetized, probably because I never had a mentor. My hope is that I can now be the bridge between you and your YouTube monetization success.
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


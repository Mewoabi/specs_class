'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { DecorativeCircles, GeometricShapes, CornerDecorations, DecorativeX } from './DecorativeElements';

const faqs = [
  {
    question: "What's the duration of the Masterclass?",
    answer: "9 days (From the 21st-30th of December) but with 2 months of weekly follow up classes. This ensures you have ongoing support and can implement everything you learn at your own pace.",
  },
  {
    question: "Is it too late to Start YouTube?",
    answer: "It's never too late. I have Students monetize from scratch within weeks and a few months after applying our Secret formulas. The YouTube platform is constantly growing, and there's always room for new creators who bring value.",
  },
  {
    question: "What if I'm new to YouTube?",
    answer: "Yes! My Course/Masterclass is designed for both Beginners and experienced creators. Since I will teach from the basics and I have broken it down into modules, you'll be able to follow along regardless of your current experience level.",
  },
  {
    question: "How will I know what type of Videos to Make?",
    answer: "You will have access to complete YouTube Knowledge that shows the best niches and teaches exactly how to create Viral videos. We cover niche selection, content planning, and proven strategies that work.",
  },
  {
    question: "Will you answer my Questions once I join?",
    answer: "Yes, I & my team will answer your questions as fast as possible or during our follow up classes. You'll have direct access to support throughout your journey.",
  },
  {
    question: "Does it work worldwide?",
    answer: "Yes, you can create a YouTube channel and do YouTube from any part of the world. Follow up classes will try to suit your timezone, and all the strategies taught work globally regardless of your location.",
  },
  {
    question: "How long will it take to Monetize?",
    answer: "First of all you need to put in the work. I have Students who get monetized within 2 weeks. But let's say within 3 months if you apply all the skills learnt correctly. The timeline depends on your consistency and implementation of the strategies.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-grey relative overflow-hidden">
      <DecorativeCircles />
      <GeometricShapes />
      <CornerDecorations />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 text-shadow-bold">
            FREQUENTLY <span className="text-box-black text-4xl md:text-5xl lg:text-6xl">ASKED</span> QUESTIONS
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            Everything you need to know about the <span className="text-box-red text-lg md:text-xl">masterclass</span>
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="blurred-gradient-blue rounded-xl overflow-hidden shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-white/20 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg md:text-xl font-black text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-red-600 flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-red-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


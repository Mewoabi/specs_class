'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes, FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const heroImages = [
  '/images/PN5a3888.jpg',
  '/images/PN5A3818.jpg',
  '/images/PN5A3836.jpg',
  '/images/PN5A3853.jpg',
  '/images/PN5A3867.jpg',
];

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tighter">
              <span className="block text-gray-900">PASSWORD TO</span>
              <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                YOUTUBE AUTOMATION
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-normal">
              UNLOCK THE SECRETS TO MAKING 6 FIGURES
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Are you interested in Growing & Monetizing a YouTube channel without Showing your face or using your voice?
            </p>

            {/* CTA Button to Pricing */}
            <div className="pt-4">
              <motion.button
                onClick={scrollToPricing}
                className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto lg:mx-0"
              >
                <span>Get Started Now</span>
                <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Media Section - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Image Carousel */}
            <div className="embla overflow-hidden h-full w-full rounded-2xl" ref={emblaRef}>
              <div className="embla__container flex h-full">
                {heroImages.map((image, index) => (
                  <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative h-full">
                    <Image
                      src={image}
                      alt={`Hero image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Overlay with Play Button */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                className="pulse-glow bg-white/20 backdrop-blur-md rounded-full p-6 hover:bg-white/30 transition-all duration-300 group"
                aria-label="Play introduction video"
              >
                <FaPlay className="text-white text-4xl ml-1 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-colors"
                aria-label="Close video"
              >
                <FaTimes className="text-white text-xl" />
              </button>

              {/* Video Player */}
              <div className="relative w-full" style={{ maxHeight: '90vh' }}>
                <video
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  style={{ maxHeight: '90vh' }}
                  src="/video/WhatsApp Video 2025-11-20 at 18.57.23_97be6280.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
        }
      `}</style>
    </section>
  );
}

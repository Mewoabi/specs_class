'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 px-0 lg:px-16 xl:px-24 2xl:px-32">
        <div className="embla overflow-hidden h-full w-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {heroImages.map((image, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative h-full">
                <Image
                  src={image}
                  alt={`Hero image ${index + 1}`}
                  fill
                  className="object-cover object-top lg:object-top"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 z-10 bg-black/50" />
      
      {/* Transparent Blurred Overlay */}
      <div className="absolute inset-0 z-10 blurred-gradient-white" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">PASSWORD TO</span>
            <span className="block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              YOUTUBE AUTOMATION
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-300">
            UNLOCK THE SECRETS TO MAKING 6 FIGURES
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 leading-relaxed">
            Are you interested in Growing & Monetizing a YouTube channel without Showing your face or using your voice?
          </p>

          {/* Pulsing Play Button */}
          <div className="pt-8">
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


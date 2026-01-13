'use client';

import { motion } from 'framer-motion';

export function DecorativeCircles() {
  return (
    <>
      {/* Top Right Circle Pattern - Multiple sizes */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="100" cy="100" r="40" fill="#EF4444" fillOpacity="0.1" />
        </svg>
      </div>
      
      {/* Additional smaller circles */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-8 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="2,2" />
          <circle cx="50" cy="50" r="25" fill="#EF4444" fillOpacity="0.08" />
        </svg>
      </div>

      {/* Bottom Left Circle Pattern */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="100" cy="100" r="40" fill="#EF4444" fillOpacity="0.1" />
        </svg>
      </div>
      
      {/* Additional bottom right circle */}
      <div className="absolute bottom-20 right-20 w-40 h-40 opacity-8 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#000000" strokeWidth="1.5" strokeDasharray="4,4" />
        </svg>
      </div>
    </>
  );
}

export function DecorativeDots() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0">
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="#EF4444" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

export function RedSemiCircle({ position = 'right' }: { position?: 'left' | 'right' }) {
  return (
    <div className={`absolute ${position === 'right' ? 'right-0' : 'left-0'} top-0 bottom-0 w-32 lg:w-48 opacity-10 pointer-events-none hidden lg:block overflow-hidden`}>
      <svg viewBox="0 0 200 400" className="w-full h-full" preserveAspectRatio="none">
        <ellipse
          cx={position === 'right' ? '50' : '150'}
          cy="200"
          rx="100"
          ry="200"
          fill="#EF4444"
          fillOpacity="0.15"
        />
      </svg>
    </div>
  );
}

export function DecorativeX({ className = '', size = 'base' }: { className?: string; size?: 'sm' | 'base' | 'lg' | 'xl' }) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };
  
  return (
    <span className={`inline-block text-gray-400 ${sizeClasses[size]} ${className}`} style={{ fontFamily: 'monospace', color: className?.includes('text-white') ? '#ffffff' : undefined }}>
      ×
    </span>
  );
}

export function GeometricShapes() {
  return (
    <>
      {/* Triangles */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 opacity-5 pointer-events-none hidden lg:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="#EF4444" />
        </svg>
      </motion.div>
      
      {/* Squares */}
      <motion.div
        className="absolute bottom-10 right-10 w-12 h-12 opacity-5 pointer-events-none hidden lg:block"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      </motion.div>
      
      {/* Hexagons */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-20 h-20 opacity-5 pointer-events-none hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="#EF4444" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </>
  );
}

export function WavyLines() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none hidden lg:block">
      <svg width="100%" height="100%" className="absolute inset-0">
        <path
          d="M 0 50 Q 100 30, 200 50 T 400 50 T 600 50 T 800 50"
          fill="none"
          stroke="#EF4444"
          strokeWidth="2"
        />
        <path
          d="M 0 150 Q 100 130, 200 150 T 400 150 T 600 150 T 800 150"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeDasharray="5,5"
        />
      </svg>
    </div>
  );
}

export function DiagonalStripes() {
  return (
    <div className="absolute inset-0 opacity-3 pointer-events-none hidden lg:block">
      <svg width="100%" height="100%" className="absolute inset-0">
        <pattern id="diagonal-stripes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="40" y2="40" stroke="#EF4444" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
      </svg>
    </div>
  );
}

export function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-3 pointer-events-none hidden lg:block">
      <svg width="100%" height="100%" className="absolute inset-0">
        <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="50" stroke="#000000" strokeWidth="0.5" />
          <line x1="0" y1="0" x2="50" y2="0" stroke="#000000" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function CornerDecorations() {
  return (
    <>
      {/* Top Left Corner */}
      <div className="absolute top-0 left-0 w-24 h-24 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 0 0 L 0 30 L 30 0 Z" fill="#EF4444" />
          <path d="M 0 0 L 0 20 L 20 0 Z" fill="#000000" />
        </svg>
      </div>
      
      {/* Top Right Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 100 0 L 70 0 L 100 30 Z" fill="#EF4444" />
          <path d="M 100 0 L 80 0 L 100 20 Z" fill="#000000" />
        </svg>
      </div>
      
      {/* Bottom Left Corner */}
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 0 100 L 0 70 L 30 100 Z" fill="#EF4444" />
          <path d="M 0 100 L 0 80 L 20 100 Z" fill="#000000" />
        </svg>
      </div>
      
      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 100 100 L 100 70 L 70 100 Z" fill="#EF4444" />
          <path d="M 100 100 L 100 80 L 80 100 Z" fill="#000000" />
        </svg>
      </div>
    </>
  );
}

export function FloatingShapes() {
  return (
    <>
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16 opacity-5 pointer-events-none hidden lg:block"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="#EF4444" />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-12 h-12 opacity-5 pointer-events-none hidden lg:block"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="20" width="60" height="60" fill="#000000" />
        </svg>
      </motion.div>
    </>
  );
}


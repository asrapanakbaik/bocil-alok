import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Efek menghilang halus saat selesai
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f172a]"
    >
      <div className="w-64 h-64 md:w-80 md:h-80">
        <DotLottiePlayer
          src="https://lottie.host/a5e8794d-cbf2-48d0-92bd-6525c27948ee/mhqHISD47n.lottie"
          autoplay
          loop
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-center"
      >
        <p className="text-blue-400 font-mono tracking-[0.2em] text-sm animate-pulse">
          LOADING...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
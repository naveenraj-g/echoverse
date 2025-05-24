"use client"
import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white/90 dark:bg-black/90">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300/40 dark:bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300/40 dark:bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/40 dark:bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "-4s" }} />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-blue-300/20 to-pink-300/20 dark:from-purple-500/10 dark:via-blue-500/10 dark:to-pink-500/10 animate-pulse-slow" />
      </div>

      {/* Glowing dots */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 dark:bg-purple-400 rounded-full animate-pulse-slow" />
        <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-blue-300 dark:bg-blue-400 rounded-full animate-pulse-slow" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-pink-300 dark:bg-pink-400 rounded-full animate-pulse-slow" style={{ animationDelay: "-1s" }} />
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent dark:via-white/5 animate-shimmer" />
    </div>
  );
};

export default AnimatedBackground;

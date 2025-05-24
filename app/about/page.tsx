"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          About EchoVerse
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          EchoVerse is an innovative online collaborative learning platform designed to bring learners together in a vibrant community. Our mission is to provide a space where learners can connect, share knowledge, and grow together.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Our Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              To create a collaborative environment where learners can thrive and achieve their full potential through shared learning experiences.
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              To provide a platform that fosters community-driven learning, enabling users to practice, discuss, and excel in various subjects including aptitude, logical reasoning, and DSA.
            </p>
          </div>
        </motion.div>
        <div className="flex justify-center gap-4">
          <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
            Go to Home
          </Link>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default AboutPage;
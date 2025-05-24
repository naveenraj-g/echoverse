"use client"
import React from 'react';
import Link from 'next/link';

interface AuthButtonsProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ href, className, children }) => {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};

export default AuthButtons;

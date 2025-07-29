"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
const DemoPreview = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              See AIWriterPro in Action
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Watch how easy it is to create professional content with our
              AI-powered platform:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Choose from 50+ templates
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Input your topic and requirements
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  AI generates content in seconds
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Edit and export in your preferred format
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Content Generator
                  </h3>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded p-3">
                    <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-2 rounded text-sm">
                    Generate Content
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;


import React from 'react';
import { Search, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-navy-900 dark:bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container-custom relative z-10 py-24 md:py-32"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-zinc-100 dark:text-zinc-500">Find exceptional talent</span>
            <br />
            <span className="text-gray-200 dark:text-gray-500">for your team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-xl text-gray-300 dark:text-gray-400"
          >
            Connect with skilled professionals who showcase their work and expertise through interactive portfolios.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="text" 
                  placeholder="Search for skills, job titles, or keywords" 
                  className="pl-10 w-full h-12 bg-white/10 backdrop-blur-sm border-gray-700 focus:border-white text-white placeholder:text-gray-400 transition-all duration-300 focus:bg-white/20"
                />
              </div>
              <Button className="h-12 px-6 bg-white hover:bg-gray-100 text-navy-900 hover:scale-105 transition-all duration-300">
                Search
              </Button>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-4 text-sm text-gray-400"
            >
              Popular: React, JavaScript, UI Design, Full Stack, Remote
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <MousePointer2 className="h-6 w-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

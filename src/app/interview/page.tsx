"use client";
import { motion } from "framer-motion"; // Fixed import
import Link from "next/link";
import { FC } from "react";

const InterviewPage: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My4...')] opacity-[0.03]" />

      <div className="container mx-auto px-6 py-16">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 text-center font-serif text-6xl text-[#f5f1eb]"
        >
          Choose Your <span className="italic text-[#ff6b6b]">Interview</span>{" "}
          Mode
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16 text-center font-serif text-xl text-[#9e9e9e]"
        >
          Select the interview experience that suits your preparation needs
        </motion.p>

        <div className="mt-12 flex justify-center gap-8">
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="w-[300px] rounded-2xl bg-[#2a2a2a] p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="mb-4 font-serif text-2xl text-[#f5f1eb]">
                Mock Interview
              </h2>
              <p className="mb-6 text-[#9e9e9e]">
                Practice with AI-powered interviews at your own pace
              </p>
              <Link href="/interview/mock" passHref>
                <button className="w-full rounded-xl bg-[#d4c5b2] px-6 py-3 font-medium text-[#121212] transition-colors duration-300 hover:bg-[#bfad93]">
                  Start Mock Interview
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <div className="w-[300px] rounded-2xl bg-[#2a2a2a] p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="mb-4 font-serif text-2xl text-[#f5f1eb]">
                Live Interview
              </h2>
              <p className="mb-6 text-[#9e9e9e]">
                Connect with real interviewers for authentic experience
              </p>
              <Link href="/interview/live" passHref>
                <button className="w-full rounded-xl bg-[#d4c5b2] px-6 py-3 font-medium text-[#121212] transition-colors duration-300 hover:bg-[#bfad93]">
                  Join Live Interview
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InterviewPage;

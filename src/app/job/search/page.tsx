"use client";
import { motion } from "framer-motion";
import { Search, Briefcase, MapPin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function JobSearchPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-noise text-cream min-h-screen"
    >
      {/* Header Section */}
      <header className="px-8 py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 font-serif text-5xl text-[#f5f0e8]"
        >
          Find Your <span className="italic text-[#ff6b6b]">Dream</span> Career
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-[#a9a9a9]"
        >
          Explore opportunities that align with your aspirations
        </motion.p>
      </header>

      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-auto mb-12 max-w-4xl px-6"
      >
        <div className="mx-auto mb-12 max-w-4xl px-6">
          <div className="rounded-2xl bg-[#1a1a1a] p-6 shadow-xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="relative">
                <Search
                  className="absolute left-3 top-3 text-[#a9a9a9]"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="text-cream w-full rounded-xl bg-[#242424] px-10 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                />
              </div>
              <div className="relative">
                <Briefcase
                  className="absolute left-3 top-3 text-[#a9a9a9]"
                  size={20}
                />
                <select className="text-cream w-full appearance-none rounded-xl bg-[#242424] px-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]">
                  <option>Category</option>
                  <option>Technology</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div className="relative">
                <MapPin
                  className="absolute left-3 top-3 text-[#a9a9a9]"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="text-cream w-full rounded-xl bg-[#242424] px-10 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                />
              </div>
            </div>
            <button className="mt-4 w-full rounded-xl bg-[#beae94] px-8 py-3 font-medium text-[#121212] transition-all hover:bg-[#a69879] md:w-auto">
              Search Jobs
            </button>
          </div>
        </div>
      </motion.div>

      {/* Job Listings */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl px-6 pb-12"
      >
        <div className="space-y-4">
          {[1, 2, 3].map((job) => (
            <motion.div
              key={job}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer rounded-2xl bg-[#1a1a1a] p-6 transition-all hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="mb-2 font-serif text-xl text-[#f5f0e8]">
                    Senior Product Designer
                  </h3>
                  <p className="mb-2 text-[#a9a9a9]">Innovative Tech Corp</p>
                  <div className="flex gap-4 text-sm text-[#a9a9a9]">
                    <span>Remote</span>
                    <span>Full-time</span>
                    <span>$120k - $150k</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border border-[#beae94] bg-transparent px-4 py-2 text-[#beae94] transition-all hover:bg-[#beae94] hover:text-[#121212]"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

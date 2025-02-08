"use client";

import React from "react";
import { motion } from "motion/react";

import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const JobPage = () => {
  return (
    <motion.main
      className="min-h-screen py-6 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-8 md:space-y-16">
          {/* Header Section */}
          <motion.header
            className="space-y-4 text-center md:space-y-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="font-serif text-2xl leading-tight text-[#F5F1EA] sm:text-3xl md:text-4xl lg:text-5xl">
              Find your
              <motion.span
                className="italic text-[#FF6B6B]"
                whileHover={{ scale: 1.05 }}
              >
                {" "}
                perfect job{" "}
              </motion.span>
              with AI
            </h1>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-full bg-[#C8BEB5] px-6 py-4 text-sm font-medium text-[#0A0A0A] transition-colors hover:bg-[#B8AEA5] md:px-8 md:py-6 md:text-base">
                Find out best match
              </Button>
            </motion.div>
          </motion.header>

          {/* Search Suggestions Section */}
          <motion.div
            className="space-y-4 text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <p className="text-base text-[#C8BEB5] md:text-lg">
              OR Try out our AI powered search
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-2 md:gap-3"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                "React Developer in Bangalore",
                "App developer with AI skills",
                "Full stack developer with 3 years of experience",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="outline"
                    className="cursor-pointer rounded-full bg-[#C8BEB5] px-3 py-1.5 text-xs font-normal text-[#0A0A0A] transition-colors hover:bg-[#B8AEA5] md:px-4 md:py-2 md:text-sm"
                  >
                    {text}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Search Bar Section */}
          <motion.div
            className="mx-auto flex max-w-2xl px-4 md:px-0"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Input
              className="rounded-l-full border-r-0 text-sm text-[#C8BEB5] focus-visible:border-[#FF6B6B] md:text-base"
              placeholder="Describe your perfect job..."
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-r-full bg-[#C8BEB5] px-4 text-sm font-medium text-[#0A0A0A] transition-colors hover:bg-[#B8AEA5] md:px-6 md:text-base">
                <ArrowRight size={24} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default JobPage;

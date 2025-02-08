"use client";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Globe,
  Heart,
  Eye,
  MessageSquare,
} from "lucide-react";
import GitHubContributions from "~/components/gitubcontri";

// Add noise texture animation
const noiseAnimation = {
  initial: { backgroundPosition: "0% 0%" },
  animate: { backgroundPosition: "100% 100%" },
  transition: { duration: 20, repeat: Infinity, ease: "linear" },
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function PortfolioPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center pb-20">
      {/* Add noise texture overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
        {...noiseAnimation}
      />

      <div className="relative w-full max-w-4xl px-4 sm:px-8 md:px-12">
        {/* Header with softer gradient */}
        <motion.div
          className="relative h-64 bg-gradient-to-r from-[#1A1A1A] to-[#212121]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute -bottom-20 left-8">
            <motion.div
              className="h-40 w-40 rounded-full border-4 border-[#0A0A0A] bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>

        <div className="mt-24">
          {/* Profile Info */}
          <motion.div
            className="flex flex-wrap items-start justify-between gap-6"
            {...fadeIn}
          >
            <div>
              <h1 className="font-serif text-5xl tracking-tight text-[#F5F1EA]">
                Naman Sharma
                <span className="ml-2 text-2xl italic text-[#FF6B6B]">
                  designer
                </span>
              </h1>
              <p className="mt-2 text-xl font-light text-[#C8BEB5]">
                Senior Product Designer
              </p>
              <div className="mt-4 flex items-center gap-4 text-[#C8BEB5]">
                <span>1.2k followers</span>
                <span>Following 384</span>
              </div>
            </div>
          </motion.div>

          <GitHubContributions />

          {/* Skills */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            {[
              "UI/UX",
              "Product Design",
              "Design Systems",
              "Figma",
              "React",
              "TypeScript",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#232323] bg-[#161616] px-6 py-2.5 text-sm text-[#C8BEB5] shadow-sm transition-colors hover:border-[#2A2A2A]"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Projects */}
          <motion.div className="mt-12" {...fadeIn} transition={{ delay: 0.4 }}>
            <h2 className="mb-8 font-serif text-3xl text-[#F5F1EA]">
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((project) => (
                <motion.div
                  key={project}
                  className="group relative overflow-hidden rounded-xl bg-[#161616]"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video bg-[#1A1A1A]"></div>
                  <div className="p-6">
                    <h3 className="mb-2 font-serif text-xl text-[#F5F1EA]">
                      Project Title
                    </h3>
                    <p className="text-[#C8BEB5]">
                      Brief project description goes here
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-[#C8BEB5]">
                      <span className="flex items-center gap-1">
                        <Heart size={16} />
                        <span>128</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={16} />
                        <span>1.2k</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare size={16} />
                        <span>24</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-16 flex justify-center gap-8"
            {...fadeIn}
            transition={{ delay: 0.5 }}
          >
            {[
              { icon: <Github size={24} />, href: "#" },
              { icon: <Twitter size={24} />, href: "#" },
              { icon: <Linkedin size={24} />, href: "#" },
              { icon: <Globe size={24} />, href: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                className="rounded-full border border-[#232323] bg-[#161616] p-4 text-[#C8BEB5] shadow-md transition-all hover:border-[#2A2A2A] hover:bg-[#1A1A1A] hover:text-[#F5F1EA]"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

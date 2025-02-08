"use client";
import { motion } from "motion/react";
import {
  Github,
  Twitter,
  Linkedin,
  Globe,
  Plus,
  Settings,
  Heart,
  Building2,
  MapPin,
  Eye,
  MessageSquare,
} from "lucide-react";
import GitHubContributions from "~/components/gitubcontri";
import Sidebar from "~/components/sidebar";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pb-20">
      <Sidebar />
      <div className="md:pl-64">
        {/* Header Section */}
        <motion.div
          className="relative h-64 bg-gradient-to-r from-[#161616] to-[#1A1A1A]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -bottom-20 left-8">
            <motion.div
              className="h-40 w-40 rounded-full border-4 border-[#0A0A0A] bg-gradient-to-br from-[#FF6B6B] to-[#FF8B8B]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>

        <div className="px-4 sm:px-8 md:px-12">
          {/* Profile Info */}
          <motion.div
            className="mt-24 flex flex-wrap items-start justify-between gap-6"
            {...fadeIn}
          >
            <div>
              <h1 className="font-serif text-4xl text-[#F5F1EA]">
                Naman Sharma
              </h1>
              <p className="mt-2 text-xl text-[#C8BEB5]">
                Senior Product Designer
              </p>
              <div className="mt-2 flex items-center gap-4 text-[#C8BEB5]">
                <span className="flex items-center gap-1">
                  <Building2 size={16} />
                  <span>Design Studio X</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>San Francisco, CA</span>
                </span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-[#C8BEB5]">1.2k followers</span>
                <span className="text-[#C8BEB5]">Following 384</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-2"
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
                className="rounded-full bg-[#161616] px-4 py-2 text-sm text-[#C8BEB5]"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <GitHubContributions />

          {/* Projects Showcase */}
          <motion.div className="mt-12" {...fadeIn} transition={{ delay: 0.4 }}>
            <h2 className="mb-6 font-serif text-2xl text-[#F5F1EA]">
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
            className="mt-12 flex justify-center gap-6"
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
                className="rounded-full bg-[#161616] p-4 text-[#C8BEB5] transition-colors hover:bg-[#1A1A1A] hover:text-[#F5F1EA]"
                whileHover={{ y: -2 }}
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

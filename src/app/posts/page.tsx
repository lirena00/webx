"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, List } from "lucide-react";

const DevPosts = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  type Post = {
    id: number;
    title: string;
    content: string;
    author: {
      name: string;
      image: string;
    };
    date: string;
  };

  const posts: Post[] = [
    {
      id: 1,
      title: "Building with Next.js 13",
      content:
        "Exploring the new features in Next.js 13 and how they improve development...",
      author: {
        name: "Sarah Johnson",
        image: "/work.jpeg",
      },
      date: "2024-02-08",
    },
    {
      id: 2,
      title: "TypeScript Best Practices",
      content:
        "Essential TypeScript patterns and practices for large-scale applications...",
      author: {
        name: "Mike Chen",
        image: "/work2.jpeg",
      },
      date: "2024-02-07",
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS",
      content:
        "Advanced techniques and tips for building beautiful interfaces with Tailwind...",
      author: {
        name: "Alex Rivera",
        image: "/work3.jpeg",
      },
      date: "2024-02-06",
    },
    {
      id: 4,
      title: "Building with Next.js 13",
      content:
        "Exploring the new features in Next.js 13 and how they improve development...",
      author: {
        name: "Sarah Johnson",
        image: "/work4.jpeg",
      },
      date: "2024-02-08",
    },
    {
      id: 5,
      title: "Building with Next.js 13",
      content:
        "Exploring the new features in Next.js 13 and how they improve development...",
      author: {
        name: "Sarah Johnson",
        image: "/work1.jpeg",
      },
      date: "2024-02-08",
    },
    {
      id: 6,
      title: "TypeScript Best Practices",
      content:
        "Essential TypeScript patterns and practices for large-scale applications...",
      author: {
        name: "Mike Chen",
        image: "/work2.jpeg",
      },
      date: "2024-02-07",
    },
    {
      id: 7,
      title: "Mastering Tailwind CSS",
      content:
        "Advanced techniques and tips for building beautiful interfaces with Tailwind...",
      author: {
        name: "Alex Rivera",
        image: "/work3.jpeg",
      },
      date: "2024-02-06",
    },
    {
      id: 8,
      title: "Building with Next.js 13",
      content:
        "Exploring the new features in Next.js 13 and how they improve development...",
      author: {
        name: "Sarah Johnson",
        image: "/work4.jpeg",
      },
      date: "2024-02-08",
    },
  ];
  return (
    <div className="bg-noise min-h-screen bg-[#121212] p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header with layout toggle */}
        <div className="mb-12 flex items-center justify-between">
          <h1 className="font-serif text-5xl italic text-[#f5f5f0]">
            Developer <span className="text-[#ff6b6b]">Stories</span>
          </h1>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsGrid(true)}
              className={`rounded-lg p-3 transition-all ${
                isGrid ? "bg-[#2a2a2a]" : "bg-[#1a1a1a]"
              } text-[#f5f5f0] hover:bg-[#2a2a2a]`}
            >
              <LayoutGrid size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsGrid(false)}
              className={`rounded-lg p-3 transition-all ${
                !isGrid ? "bg-[#2a2a2a]" : "bg-[#1a1a1a]"
              } text-[#f5f5f0] hover:bg-[#2a2a2a]`}
            >
              <List size={20} />
            </motion.button>
          </div>
        </div>

        {/* Posts grid/list */}
        <motion.div
          layout
          className={`grid gap-8 ${
            isGrid ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          <AnimatePresence>
            {posts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] shadow-xl transition-all duration-300 hover:shadow-2xl"
                onHoverStart={() => setHoveredId(post.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <div className="relative h-56">
                  <img
                    src={post.author.image}
                    alt="Post cover"
                    className="h-full w-full object-cover"
                  />
                  <AnimatePresence>
                    {hoveredId === post.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
                      >
                        <div className="text-center text-[#f5f5f0]">
                          <img
                            src={post.author.image}
                            alt={post.author.name}
                            className="mx-auto mb-3 h-14 w-14 rounded-full border-2 border-[#f5f5f0]"
                          />
                          <p className="font-serif text-lg italic">
                            {post.author.name}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-8">
                  <h2 className="mb-3 font-serif text-2xl leading-relaxed text-[#f5f5f0]">
                    {post.title}
                  </h2>
                  <p className="mb-4 line-clamp-2 text-[#a0a0a0]">
                    {post.content}
                  </p>
                  <time className="font-serif text-sm italic text-[#808080]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default DevPosts;

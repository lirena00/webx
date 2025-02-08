"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List } from 'lucide-react';

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
    content: "Exploring the new features in Next.js 13 and how they improve development...",
    author: {
      name: "Sarah Johnson",
      image: "/work.jpeg"
    },
    date: "2024-02-08"
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    content: "Essential TypeScript patterns and practices for large-scale applications...",
    author: {
      name: "Mike Chen",
      image: "/work2.jpeg"
    },
    date: "2024-02-07"
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    content: "Advanced techniques and tips for building beautiful interfaces with Tailwind...",
    author: {
      name: "Alex Rivera",
      image: "/work3.jpeg"
    },
    date: "2024-02-06"
  },
  {
    id: 4,
    title: "Building with Next.js 13",
    content: "Exploring the new features in Next.js 13 and how they improve development...",
    author: {
      name: "Sarah Johnson",
      image: "/work4.jpeg"
    },
    date: "2024-02-08"
  }, {
    id: 5,
    title: "Building with Next.js 13",
    content: "Exploring the new features in Next.js 13 and how they improve development...",
    author: {
      name: "Sarah Johnson",
      image: "/work1.jpeg"
    },
    date: "2024-02-08"
  },
  {
    id: 6,
    title: "TypeScript Best Practices",
    content: "Essential TypeScript patterns and practices for large-scale applications...",
    author: {
      name: "Mike Chen",
      image: "/work2.jpeg"
    },
    date: "2024-02-07"
  },
  {
    id: 7,
    title: "Mastering Tailwind CSS",
    content: "Advanced techniques and tips for building beautiful interfaces with Tailwind...",
    author: {
      name: "Alex Rivera",
      image: "/work3.jpeg"
    },
    date: "2024-02-06"
  },
  {
    id: 8,
    title: "Building with Next.js 13",
    content: "Exploring the new features in Next.js 13 and how they improve development...",
    author: {
      name: "Sarah Johnson",
      image: "/work4.jpeg"
    },
    date: "2024-02-08"
  },
];

const DevPosts = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with layout toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-serif italic text-[#ff6b6b]">
            Developer Posts
          </h1>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsGrid(true)}
              className={`p-2 rounded ${isGrid ? 'bg-[a9a9a9]' : 'bg-gray-900'
                } text-white`}
            >
              <LayoutGrid size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsGrid(false)}
              className={`p-2 rounded ${!isGrid ? 'bg-[#ff6b6b]' : 'bg-gray-700'
                } text-white`}
            >
              <List size={24} />
            </motion.button>
          </div>
        </div>

        {/* Posts grid/list */}
        <motion.div
          layout
          className={`grid gap-6 ${isGrid
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
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
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-lg border border-gray-700"
                onHoverStart={() => setHoveredId(post.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <div className="relative h-48">
                  <img
                    src="/work2.jpeg"
                    alt="Post cover"
                    className="w-full h-full object-cover"
                  />
                  <AnimatePresence>
                    {hoveredId === post.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                      >
                        <div className="text-white text-center">
                          <img
                            src={post.author.image}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full mx-auto mb-2"
                          />
                          <p className="font-serif italic">{post.author.name}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-6 bg-[#a9a9a9]">
                  <h2 className="text-xl font-serif italic text-[#gg6b6b] mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-100 mb-4">{post.content}</p>
                  <time className="text-sm text-gray-200 font-serif italic">
                    {new Date(post.date).toLocaleDateString()}
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

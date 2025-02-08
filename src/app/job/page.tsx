"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  skills: string[];
  matchPercentage: number;
  experienceLevel: string;
  jobType: string;
}

const JobPage = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const skills = ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"];
  const levels = ["Entry", "Mid", "Senior"];
  const types = ["Full-time", "Part-time", "Contract"];

  const mockJobs: Job[] = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      logo: "/tech-corp-logo.png",
      skills: ["React", "TypeScript", "AWS"],
      matchPercentage: 95,
      experienceLevel: "Senior",
      jobType: "Full-time",
    },
    // Add more mock jobs as needed
  ];

  return (
    <div
      className="min-h-screen bg-black p-8"
      style={{
        backgroundImage: 'url("/noise.png")',
        backgroundBlendMode: "soft-light",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 font-serif text-5xl text-[#f5f5f0]">
          Find Your Next Role
        </h1>

        {/* Filters Section */}
        <div className="mb-12">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.button
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setSelectedSkills((prev) =>
                      prev.includes(skill)
                        ? prev.filter((s) => s !== skill)
                        : [...prev, skill],
                    )
                  }
                  className={`rounded-full px-4 py-2 text-sm ${
                    selectedSkills.includes(skill)
                      ? "bg-[#d4c5b5] text-black"
                      : "bg-[#2a2a2a] text-[#f5f5f0]"
                  } shadow-lg transition-all`}
                >
                  {skill}
                </motion.button>
              ))}
            </div>

            {/* Experience Level and Job Type Filters */}
            <div className="flex gap-6">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="rounded-lg bg-[#2a2a2a] px-4 py-2 text-[#f5f5f0]"
              >
                <option value="">Experience Level</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="rounded-lg bg-[#2a2a2a] px-4 py-2 text-[#f5f5f0]"
              >
                <option value="">Job Type</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockJobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ y: -5 }}
              className="rounded-xl bg-[#1a1a1a] p-6 shadow-xl"
            >
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h3 className="font-serif text-xl text-[#f5f5f0]">
                    {job.title}
                  </h3>
                  <p className="text-[#a0a0a0]">{job.company}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="italic text-red-400">
                  {job.matchPercentage}% Match
                </span>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#2a2a2a] px-2 py-1 text-xs text-[#f5f5f0]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full rounded-lg bg-[#d4c5b5] py-2 text-black transition-colors hover:bg-[#c4b5a5]">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPage;

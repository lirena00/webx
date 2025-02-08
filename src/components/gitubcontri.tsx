/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { motion } from "motion/react";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const GitHubContributions = () => {
  const weeks = 51; // Number of weeks in the year
  const days = 7; // Days in a week

  // Define GitHub color scale (more accurate)
  const colors = [
    "bg-[#2D2D2D]", // No contributions (dark background)
    "bg-[#FF9B9B]", // Low (1-3) - lighter
    "bg-[#FF8383]", // Medium (4-9) - medium
    "bg-[#FF6B6B]", // High (10-19) - base color
    "bg-[#FF5353]", // Very High (20+) - darker
  ];

  return (
    <motion.div
      className="mt-12 rounded-xl bg-[#161616] p-6"
      {...fadeIn}
      transition={{ delay: 0.3 }}
    >
      <h2 className="mb-4 font-serif text-2xl text-[#F5F1EA]">
        GitHub Contributions
      </h2>
      <div className="grid auto-cols-max grid-flow-col justify-between gap-0.5">
        {[...Array(weeks)].map((_, weekIndex) => (
          <div key={weekIndex} className="grid grid-rows-7 gap-0.5">
            {[...Array(days)].map((_, dayIndex) => {
              const contributions = Math.floor(Math.random() * 25); // Simulate contribution data
              let intensity =
                contributions === 0
                  ? 0
                  : contributions < 4
                    ? 1
                    : contributions < 10
                      ? 2
                      : contributions < 20
                        ? 3
                        : 4;

              return (
                <div
                  key={dayIndex}
                  className={`h-3 w-3 rounded-sm ${colors[intensity]}`}
                  title={`${contributions} contributions`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GitHubContributions;

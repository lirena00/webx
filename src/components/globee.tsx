import { Globe } from "./magicui/globe";
import { TypingAnimation } from "./magicui/typing-animation";

export default function DevMatchHero() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between min-h-[800px] py-16">
        {/* Left side - Text content */}
        <div className="flex flex-col space-y-6 w-1/2">
          <h1 className="text-8xl font-bold">
            <span className="bg-gradient-to-r from-slate-500 to-gray-400 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
              Dev{" "}
            </span>
            <span className="bg-gradient-to-r from-[#ff6b6b] to-[#cc4444] bg-clip-text text-transparent dark:from-[#ff6b6b] dark:to-[#cc4444]">
              Match
            </span>
          </h1>
          <TypingAnimation className="text-2xl text-slate-300 dark:text-gray-300 max-w-xl leading-relaxed">
            Connect with developers worldwide and find your perfect match for collaboration
          </TypingAnimation>
        </div>

        {/* Right side - Globe */}
        <div className="relative flex w-1/2 items-center justify-center">
          <div className="relative flex size-[600px] items-center justify-center overflow-hidden px-20 pb-20 pt-8">
            <Globe />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.5),rgba(0,0,0,0.2))] dark:bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.6),rgba(0,0,0,0.3))]" />
          </div>
        </div>
      </div>
    </div>
  );
}

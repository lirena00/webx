"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mic,
  Camera,
  Monitor,
  Hand,
  PhoneOff,
  MessageSquare,
  Clock,
  Eye,
  Volume2,
  ArrowLeft,
  Menu,
} from "lucide-react";

export default function InterviewPage() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#121212]">
      <header className="flex items-center justify-between border-b border-[#2a2a2a] bg-[#1a1a1a] p-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-[#C8BEB5] transition-colors hover:bg-[#2a2a2a]"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Back to Dashboard</span>
          </Link>
        </div>
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="rounded-lg bg-[#2a2a2a] p-2 text-[#C8BEB5] transition-all hover:bg-opacity-80 md:hidden"
        >
          <Menu size={20} />
        </button>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)] gap-6 p-4 md:p-6">
        <main className="flex flex-1 flex-col gap-4">
          <div className="relative flex-1 overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-2xl">
            <div className="absolute bottom-4 left-4 rounded-lg bg-black/50 px-3 py-1 text-[#C8BEB5]">
              Naman Sharma (You)
            </div>
          </div>

          <div className="hidden h-32 gap-4 sm:flex">
            <div className="relative w-48 rounded-xl bg-[#1a1a1a] shadow-lg">
              <div className="absolute bottom-2 left-2 rounded-lg bg-black/50 px-2 py-1 text-sm text-[#C8BEB5]">
                AI Interviewer
              </div>
            </div>
          </div>

          {/* Meeting controls */}
          <div className="flex flex-wrap justify-center gap-2 py-4 sm:gap-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`rounded-full p-3 sm:p-4 ${
                isMuted ? "bg-red-500" : "bg-[#2a2a2a]"
              } transition-all hover:bg-opacity-80`}
            >
              <Mic size={20} className="text-[#C8BEB5]" />
            </button>
            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`rounded-full p-3 sm:p-4 ${
                !isVideoOn ? "bg-red-500" : "bg-[#2a2a2a]"
              } transition-all hover:bg-opacity-80`}
            >
              <Camera size={20} className="text-[#C8BEB5]" />
            </button>
            <button className="rounded-full bg-[#2a2a2a] p-3 transition-all hover:bg-opacity-80 sm:p-4">
              <Monitor size={20} className="text-[#C8BEB5]" />
            </button>
            <button className="rounded-full bg-[#2a2a2a] p-3 transition-all hover:bg-opacity-80 sm:p-4">
              <Hand size={20} className="text-[#C8BEB5]" />
            </button>
            <button className="rounded-full bg-red-600 p-3 transition-all hover:bg-red-700 sm:p-4">
              <PhoneOff size={20} className="text-[#C8BEB5]" />
            </button>
          </div>
        </main>

        <aside
          className={`fixed bottom-0 right-0 top-16 z-50 w-80 bg-[#1a1a1a] p-4 shadow-xl transition-all md:relative md:top-0 md:z-0 md:translate-x-0 ${
            isChatOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="mb-4 flex items-center justify-between border-b border-[#2a2a2a] pb-4">
              <h2 className="font-serif text-xl text-[#F5F1EA]">
                Interview Details
              </h2>
              <Clock size={20} className="text-[#C8BEB5]" />
            </div>

            <div className="mb-4 flex-1 overflow-y-auto rounded-xl">
              <div className="space-y-4">
                <div className="rounded-lg bg-[#2a2a2a] p-3">
                  <p className="text-sm text-[#C8BEB5]">
                    Next question coming up...
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4 rounded-xl bg-[#232323] p-3">
              <h3 className="mb-2 font-serif text-[#F5F1EA]">AI Feedback</h3>
              <div className="flex items-center gap-2 text-sm text-[#C8BEB5]">
                <Eye size={16} />
                <span>Good eye contact maintained</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-[#C8BEB5]">
                <Volume2 size={16} />
                <span>Speaking pace: Optimal</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

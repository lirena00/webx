import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  MapPin,
  Building2,
  Mail,
} from "lucide-react";
import Sidebar from "~/components/sidebar";

export default function UserProfilePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* <Sidebar /> */}
      <div className="md:pl-64">
        {/* Header/Banner */}
        <div className="relative h-64 bg-gradient-to-r from-[#161616] to-[#1A1A1A] shadow-xl">
          <div className="absolute -bottom-20 left-8 md:left-12">
            <div className="h-40 w-40 rounded-full border-4 border-[#0A0A0A] bg-gradient-to-br from-[#FF6B6B] to-[#FF8B8B] shadow-xl"></div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="px-4 sm:px-8 md:px-12">
          <div className="mt-24">
            {/* Profile Header */}
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h1 className="font-serif text-4xl text-[#F5F1EA]">
                  Sarah Anderson
                </h1>
                <p className="mt-2 text-xl text-[#C8BEB5]">
                  Senior Product Designer
                </p>
                <div className="mt-4 flex items-center gap-6 text-[#C8BEB5]">
                  <span className="flex items-center gap-2 rounded-full bg-[#161616] px-4 py-2">
                    <Building2 size={16} />
                    <span>Design Studio X</span>
                  </span>
                  <span className="flex items-center gap-2 rounded-full bg-[#161616] px-4 py-2">
                    <MapPin size={16} />
                    <span>San Francisco, CA</span>
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                {[
                  { icon: <Twitter size={20} />, href: "#" },
                  { icon: <Linkedin size={20} />, href: "#" },
                  { icon: <Github size={20} />, href: "#" },
                  { icon: <Globe size={20} />, href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="rounded-full bg-[#161616] p-3 text-[#C8BEB5] transition-all duration-200 hover:bg-[#FF6B6B] hover:text-[#F5F1EA]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* About Section */}
            <div className="mt-12 rounded-xl bg-[#161616] p-8">
              <h2 className="mb-4 font-serif text-2xl text-[#F5F1EA]">About</h2>
              <p className="text-lg leading-relaxed text-[#C8BEB5]">
                Product designer with 8+ years of experience in creating
                user-centered digital experiences. Passionate about combining
                aesthetics with functionality to build products that users love.
              </p>
            </div>

            {/* Experience Section */}
            <div className="mt-12">
              <h2 className="mb-8 font-serif text-2xl text-[#F5F1EA]">
                Experience
              </h2>
              <div className="space-y-6">
                {[
                  {
                    role: "Senior Product Designer",
                    company: "Design Studio X",
                    period: "2021 - Present",
                    description:
                      "Leading the design system development and managing a team of 4 designers.",
                  },
                  {
                    role: "Product Designer",
                    company: "Tech Corp",
                    period: "2018 - 2021",
                    description:
                      "Designed and shipped features used by millions of users globally.",
                  },
                ].map((exp, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-[#161616] p-8 transition-all duration-200 hover:bg-[#1A1A1A]"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-xl text-[#F5F1EA]">
                          {exp.role}
                        </h3>
                        <p className="text-[#C8BEB5]">{exp.company}</p>
                      </div>
                      <span className="text-sm text-[#C8BEB5]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[#C8BEB5]">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="mb-20 mt-12">
              <h2 className="mb-8 font-serif text-2xl text-[#F5F1EA]">
                Featured Projects
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    title: "Design System 2.0",
                    description:
                      "A comprehensive design system for enterprise applications",
                    tech: ["Figma", "React", "TypeScript"],
                  },
                  {
                    title: "Mobile App Redesign",
                    description:
                      "Complete overhaul of a financial services app",
                    tech: ["Sketch", "Swift", "Kotlin"],
                  },
                ].map((project, i) => (
                  <div
                    key={i}
                    className="group rounded-xl bg-[#161616] p-8 transition-all duration-200 hover:bg-[#1A1A1A]"
                  >
                    <h3 className="mb-2 font-serif text-xl text-[#F5F1EA]">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-[#C8BEB5]">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="rounded-full bg-[#0A0A0A] px-4 py-2 text-sm text-[#C8BEB5] transition-colors group-hover:bg-[#161616]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

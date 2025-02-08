import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  Globe,
  MapPin,
  Building2,
  Mail,
} from "lucide-react";

export default function UserProfilePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pb-20">
      {/* Profile Header */}
      <div className="relative h-48 bg-gradient-to-r from-[#161616] to-[#1A1A1A]">
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 transform px-4 md:left-1/4 md:translate-x-0">
          <div className="h-32 w-32 rounded-full border-4 border-[#0A0A0A] bg-[#FF6B6B]"></div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4">
        {/* Profile Info */}
        <div className="mt-20 md:ml-48">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl text-[#F5F1EA]">
                Sarah Anderson
              </h1>
              <p className="text-xl text-[#C8BEB5]">Senior Product Designer</p>
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
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="rounded-full bg-[#161616] p-2 text-[#C8BEB5] hover:text-[#F5F1EA]"
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-[#161616] p-2 text-[#C8BEB5] hover:text-[#F5F1EA]"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-[#161616] p-2 text-[#C8BEB5] hover:text-[#F5F1EA]"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-[#161616] p-2 text-[#C8BEB5] hover:text-[#F5F1EA]"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="mt-8">
            <h2 className="mb-4 font-serif text-2xl text-[#F5F1EA]">About</h2>
            <p className="text-[#C8BEB5]">
              Product designer with 8+ years of experience in creating
              user-centered digital experiences. Passionate about combining
              aesthetics with functionality to build products that users love.
            </p>
          </div>

          {/* Experience */}
          <div className="mt-12">
            <h2 className="mb-6 font-serif text-2xl text-[#F5F1EA]">
              Experience
            </h2>
            <div className="space-y-8">
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
                <div key={i} className="rounded-lg bg-[#161616] p-6">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-[#F5F1EA]">
                        {exp.role}
                      </h3>
                      <p className="text-[#C8BEB5]">{exp.company}</p>
                    </div>
                    <span className="text-sm text-[#C8BEB5]">{exp.period}</span>
                  </div>
                  <p className="text-[#C8BEB5]">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mt-12">
            <h2 className="mb-6 font-serif text-2xl text-[#F5F1EA]">
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Design System 2.0",
                  description:
                    "A comprehensive design system for enterprise applications",
                  tech: ["Figma", "React", "TypeScript"],
                },
                {
                  title: "Mobile App Redesign",
                  description: "Complete overhaul of a financial services app",
                  tech: ["Sketch", "Swift", "Kotlin"],
                },
              ].map((project, i) => (
                <div key={i} className="rounded-lg bg-[#161616] p-6">
                  <h3 className="mb-2 font-serif text-xl text-[#F5F1EA]">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-[#C8BEB5]">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="rounded-full bg-[#0A0A0A] px-3 py-1 text-sm text-[#C8BEB5]"
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
    </main>
  );
}

import Link from "next/link";

export default function TestingPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#1A1A1A] bg-[#0A0A0A] p-6">
        <div className="mb-8">
          <h2 className="font-serif text-2xl text-[#F5F1EA]">
            Dashboard <span className="italic text-[#FF6B6B]">Beta</span>
          </h2>
        </div>
        <nav className="space-y-4">
          {["Overview", "Analytics", "Projects", "Settings"].map((item) => (
            <Link
              key={item}
              href="#"
              className="block rounded-lg px-4 py-2 text-[#C8BEB5] transition-colors hover:bg-[#1A1A1A]"
            >
              {item}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#0A0A0A] p-8">
        <header className="mb-8">
          <h1 className="font-serif text-4xl text-[#F5F1EA]">
            Welcome back, <span className="italic text-[#FF6B6B]">User</span>
          </h1>
          <p className="mt-2 text-[#C8BEB5]">
            Here&apos;s your project overview
          </p>
        </header>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {["Active Projects", "Completed", "In Review"].map((title) => (
            <div
              key={title}
              className="rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-6"
            >
              <h3 className="font-serif text-lg text-[#C8BEB5]">{title}</h3>
              <p className="mt-2 font-serif text-3xl text-[#F5F1EA]">
                {Math.floor(Math.random() * 100)}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-x-4">
          <button className="rounded-full bg-[#C8BEB5] px-8 py-3 font-medium text-[#0A0A0A] shadow-lg transition-colors hover:bg-[#D8CEC5]">
            New Project
          </button>
          <button className="rounded-full border border-[#C8BEB5] px-8 py-3 font-medium text-[#F5F1EA] transition-colors hover:bg-[#C8BEB5]/10">
            View All
          </button>
        </div>
      </main>
    </div>
  );
}

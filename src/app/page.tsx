import Link from "next/link";
import { Package, Users, Cpu, Layers } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <div className="mx-auto flex h-screen max-w-4xl flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 font-serif text-6xl leading-tight text-[#F5F1EA] md:text-7xl">
          Create something{" "}
          <span className="italic text-[#FF6B6B]">beautiful</span>
        </h1>
        <p className="mb-12 max-w-2xl font-serif text-xl text-[#C8BEB5] md:text-2xl">
          A modern approach to digital experiences, combining elegance with
          simplicity for reference only baaki dekh lena marji ho jaisa karna
        </p>
        <div className="space-x-4">
          <button className="rounded-full bg-[#C8BEB5] px-8 py-3 font-medium text-[#0A0A0A] shadow-lg transition-colors hover:bg-[#D8CEC5]">
            Get Started
          </button>
          <button className="rounded-full border border-[#C8BEB5] px-8 py-3 font-medium text-[#F5F1EA] transition-colors hover:bg-[#C8BEB5]/10">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-[#0F0F0F] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-center font-serif text-4xl text-[#F5F1EA]">
            Features that empower you
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Package />,
                title: "Powerful Tools",
                desc: "Advanced features for professional results",
              },
              {
                icon: <Users />,
                title: "Collaboration",
                desc: "Work together seamlessly",
              },
              {
                icon: <Cpu />,
                title: "AI-Powered",
                desc: "Smart automation for your workflow",
              },
              {
                icon: <Layers />,
                title: "Flexible Design",
                desc: "Adaptable to your needs",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-lg bg-[#161616] p-6 transition-colors hover:bg-[#1A1A1A]"
              >
                <div className="mb-4 text-3xl text-[#FF6B6B]">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-serif text-xl text-[#F5F1EA]">
                  {feature.title}
                </h3>
                <p className="text-[#C8BEB5]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-center font-serif text-4xl text-[#F5F1EA]">
            What our users say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="rounded-lg bg-[#161616] p-6">
                <p className="mb-4 text-[#C8BEB5]">
                  This platform has transformed how we approach our projects.
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-[#FF6B6B]"></div>
                  <div>
                    <h4 className="font-serif text-[#F5F1EA]">Jane Smith</h4>
                    <p className="text-sm text-[#C8BEB5]">
                      Lead Designer, Studio X
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#0F0F0F] py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-16 text-center font-serif text-4xl text-[#F5F1EA]">
            How it works
          </h2>
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Sign Up",
                desc: "Create your account in seconds",
              },
              { step: "02", title: "Customize", desc: "Set up your workspace" },
              {
                step: "03",
                title: "Create",
                desc: "Start building your projects",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <span className="mr-6 font-serif text-2xl text-[#FF6B6B]">
                  {item.step}
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-xl text-[#F5F1EA]">
                    {item.title}
                  </h3>
                  <p className="text-[#C8BEB5]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-16 text-center font-serif text-4xl text-[#F5F1EA]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I get started?",
                a: "Simply sign up and follow our quick start guide.",
              },
              {
                q: "What's included in the free plan?",
                a: "The free plan includes all essential features.",
              },
              {
                q: "Can I upgrade later?",
                a: "Yes, you can upgrade your plan at any time.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-lg bg-[#161616] p-6">
                <h3 className="mb-2 font-serif text-xl text-[#F5F1EA]">
                  {faq.q}
                </h3>
                <p className="text-[#C8BEB5]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#202020] bg-[#0F0F0F] py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-serif text-[#F5F1EA]">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#C8BEB5] hover:text-[#F5F1EA]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C8BEB5] hover:text-[#F5F1EA]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C8BEB5] hover:text-[#F5F1EA]">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-serif text-[#F5F1EA]">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#C8BEB5] hover:text-[#F5F1EA]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C8BEB5] hover:text-[#F5F1EA]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C8BEB5] hover:text-[#F5F1EA]">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-[#202020] pt-8 text-center text-[#C8BEB5]">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

'use client';

import Link from 'next/link';

export default function VisionPageClient() {
  return (
    <div className="min-h-screen pb-12">
      <section
        id="vision"
        className="relative min-h-screen overflow-hidden py-[clamp(4rem,8vw,8rem)]"
        style={{ background: 'var(--bg)' }}
      >
        <div className="relative z-[2] mx-auto max-w-[1400px] px-[clamp(1rem,4vw,4rem)]">
          <div className="mb-16 overflow-hidden text-center">
            <h1 className="sectionTitleGlobal">
              Our <span style={{ color: 'var(--accent)' }}>Vision</span>
            </h1>
          </div>

          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
                  We believe that great digital products are built on the foundation of understanding user needs and
                  market dynamics. Our vision is to empower businesses with cutting-edge digital solutions that drive
                  real growth and meaningful customer engagement.
                </p>
                <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
                  Every project we undertake is driven by a simple philosophy:{' '}
                  <strong className="text-[var(--accent)]">build products that matter</strong>. We don't just create
                  websites or applications; we craft digital experiences that solve real problems and deliver
                  measurable results.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-[var(--text)]">Our Principles</h2>
                <ul className="space-y-3">
                  {[
                    'User-centric design that prioritizes clarity and usability',
                    'Performance optimization for speed and reliability',
                    'Scalability built-in from day one',
                    'Transparent communication throughout the project',
                    'Continuous learning and technology adoption',
                  ].map((principle, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ background: 'var(--accent)' }}
                      />
                      <span className="text-[var(--text-secondary)]">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-2xl border"
              style={{ borderColor: 'rgba(var(--accent-rgb), 0.2)' }}
            >
              <div className="aspect-square bg-gradient-to-br from-[rgba(var(--accent-rgb),0.1)] to-[rgba(var(--accent-rgb),0.05)] p-8 flex flex-col items-center justify-center text-center">
                <div className="space-y-4">
                  <div
                    className="mx-auto w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(var(--accent-rgb), 0.15)' }}
                  >
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text)]">Innovation</h3>
                  <p className="text-[var(--text-secondary)]">
                    Leveraging the latest technologies and methodologies to stay ahead of the curve
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 space-y-8 rounded-2xl border p-8 md:p-12" style={{ borderColor: 'rgba(var(--accent-rgb), 0.2)' }}>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text)]">Why This Vision Matters</h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
                In today's digital landscape, businesses face unprecedented challenges. Technology evolves rapidly,
                user expectations are higher than ever, and competition is fierce. We exist to bridge this gap—to
                help companies navigate this complexity and emerge with products that don't just work, but inspire.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Client Success',
                  description: 'Your success is our success. We measure our impact through your growth metrics.',
                },
                {
                  title: 'Quality Craftsmanship',
                  description: 'Every line of code, every design pixel, every interaction is thoughtfully executed.',
                },
                {
                  title: 'Long-term Partnership',
                  description: "We don't just deliver and disappear. We support, evolve, and grow with you.",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2 rounded-xl border p-6" style={{ borderColor: 'rgba(var(--accent-rgb), 0.15)' }}>
                  <h3 className="font-semibold text-[var(--text)]">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              Ready to bring your vision to life?
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--bg)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

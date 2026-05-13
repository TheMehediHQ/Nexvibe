'use client';

import Link from 'next/link';

export default function TeamPageClient() {
  return (
    <div className="min-h-screen pb-12">
      <section
        id="team"
        className="relative min-h-screen overflow-hidden py-[clamp(4rem,8vw,8rem)]"
        style={{ background: 'var(--bg)' }}
      >
        <div className="relative z-[2] mx-auto max-w-[1400px] px-[clamp(1rem,4vw,4rem)]">
          <div className="mb-16 overflow-hidden text-center">
            <h1 className="sectionTitleGlobal">
              Our <span style={{ color: 'var(--accent)' }}>Team</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-[var(--text-secondary)]">
              A passionate group of designers, developers, and strategists dedicated to building exceptional digital
              products that drive real business impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {[
              {
                name: 'Mehedi Hasan',
                role: 'Founder & Lead Developer',
                expertise: 'Full-Stack Development, Product Strategy',
                icon: '👨‍💻',
                bio: 'Passionate about building scalable web applications with modern technologies. Brings 5+ years of experience in full-stack development.',
              },
              {
                name: 'Design Excellence',
                role: 'UI/UX Design',
                expertise: 'User Interface, User Experience Design',
                icon: '🎨',
                bio: 'Crafts beautiful, intuitive interfaces that users love. Focused on usability and visual hierarchy.',
              },
              {
                name: 'Digital Strategy',
                role: 'Strategy & Growth',
                expertise: 'Market Analysis, Growth Optimization',
                icon: '📊',
                bio: 'Helps businesses identify opportunities and develop strategies that lead to sustainable growth.',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 h-full"
                style={{ borderColor: 'rgba(var(--accent-rgb), 0.2)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'rgba(var(--accent-rgb), 0.05)',
                  }}
                />

                <div className="relative z-[2] space-y-4">
                  <div className="text-5xl">{member.icon}</div>
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--text)]">{member.name}</h2>
                    <p className="text-sm font-medium text-[var(--accent)]">{member.role}</p>
                  </div>
                  <p className="font-medium text-[var(--text-secondary)]">{member.expertise}</p>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="space-y-8 rounded-2xl border p-8 md:p-12"
            style={{ borderColor: 'rgba(var(--accent-rgb), 0.2)' }}
          >
            <div>
              <h2 className="text-2xl font-bold text-[var(--text)]">Why We Work Together</h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
                We're not just colleagues—we're a team united by shared values and a common mission. Every person at
                Nexvibe brings unique expertise, but we all share an unwavering commitment to excellence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Shared Vision',
                  description:
                    'We all believe in building products that make a real difference in the world and deliver genuine value to users.',
                },
                {
                  title: 'Continuous Growth',
                  description:
                    'Learning is at the core of everything we do. We invest in our skills and knowledge individually and as a team.',
                },
                {
                  title: 'Collaboration',
                  description:
                    'Open communication and diverse perspectives lead to better solutions. We believe in collective wisdom.',
                },
                {
                  title: 'Quality Over Speed',
                  description:
                    'We prioritize excellence and craftsmanship in every project we deliver. Speed is important, but quality is paramount.',
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-semibold text-[var(--text)]">{item.title}</h3>
                  <p className="text-[var(--text-secondary)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 rounded-2xl border-2 border-dashed p-12 text-center" style={{ borderColor: 'rgba(var(--accent-rgb), 0.3)' }}>
            <h2 className="text-2xl font-bold text-[var(--text)]">Join Us</h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Are you passionate about building exceptional digital products? We're always looking for talented individuals to join our team.
            </p>
            <Link
              href="mailto:hello@nexvibe.com"
              className="mt-6 inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--bg)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get In Touch
            </Link>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/about"
              className="text-[var(--accent)] hover:underline underline-offset-4"
            >
              ← Back to About
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

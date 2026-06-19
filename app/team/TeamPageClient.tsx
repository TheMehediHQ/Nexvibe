'use client';

import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Mehedi Hasan',
    role: 'Founder & Lead Developer',
    expertise: 'Full-Stack Development, Product Strategy',
    image: '/profile/1.png',
    bio: 'Passionate about building scalable web applications with modern technologies. Brings 5+ years of experience in full-stack development.',
  },
  {
    name: 'Md Hossain',
    role: 'Graphics Designer',
    expertise: 'Visual Design, Branding, Creative Direction',
    image: '/profile/3.png',
    bio: 'Creates visual assets and brand-ready layouts that make the product presentation feel polished and consistent.',
  },
  {
    name: 'Halima Katun',
    role: 'UI/UX Designer',
    expertise: 'User Research, Interface Design, Interaction Flow',
    image: '/profile/4.png',
    bio: 'Designs clean and intuitive user experiences with a strong focus on usability and clarity.',
  },
  {
    name: 'MD Rifat Hasan',
    role: 'Frontend Developer',
    expertise: 'React, Next.js, Responsive UI',
    image: '/profile/5.png',
    bio: 'Builds responsive interfaces and turns design concepts into fast, accessible web experiences.',
  },
  {
    name: 'Hasibul Hossain',
    role: 'Backend Developer',
    expertise: 'APIs, Server Logic, Database Integration',
    image: '/profile/2.png',
    bio: 'Focuses on backend systems, clean APIs, and reliable data flow that power the user-facing product.',
  },
];

export default function TeamPageClient() {
  return (
    <div className="min-h-screen pb-12">
      <section
        id="team"
        className="relative min-h-screen overflow-hidden py-[clamp(4rem,8vw,8rem)]"
        style={{ background: 'var(--bg)' }}
      >
        <div className="relative z-2 mx-auto max-w-350 px-[clamp(1rem,4vw,4rem)]">
          <div className="mb-16 overflow-hidden text-center">
            <h1 className="sectionTitleGlobal">
              Our <span style={{ color: 'var(--accent)' }}>Team</span>
            </h1>
            <p className="mx-auto mt-4 max-w-175 text-lg text-(--text-secondary)">
              A passionate group of designers, developers, and strategists dedicated to building exceptional digital
              products that drive real business impact.
            </p>
          </div>

          <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative h-full overflow-hidden rounded-3xl border p-4 transition-all duration-300"
                style={{ borderColor: 'rgba(var(--accent-rgb), 0.2)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'rgba(var(--accent-rgb), 0.05)',
                  }}
                />

                <div className="relative z-2 space-y-5">
                  <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
                    <Image
                      src={member.image}
                      alt={`${member.name} portrait`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={member.name === 'Mehedi Hasan'}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[rgba(6,9,14,0.88)] via-[rgba(6,9,14,0.2)] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--accent)">
                        {member.role}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">{member.name}</h2>
                    </div>
                  </div>
                  <div className="space-y-3 px-1 pb-2">
                    <p className="font-medium text-(--text-secondary)">{member.expertise}</p>
                    <p className="text-sm leading-relaxed text-(--text-secondary)">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        
{/* 
          <div
            className="mt-20 space-y-6 rounded-2xl border-2 border-dashed p-8 text-center md:p-12"
            style={{ borderColor: 'rgba(var(--accent-rgb), 0.3)' }}
          >
            <div className="mx-auto max-w-190 space-y-4">
              <h2 className="text-2xl font-bold text-(--text)">Join Our Team</h2>
              <p className="text-lg text-(--text-secondary)">
                We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/career"
                className="inline-flex items-center justify-center rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-all duration-300 hover:scale-105 active:scale-95"
              >
                View Open Positions
              </Link>
              <a
                href="https://wa.me/923405542097?text=Hello%20I%20want%20to%20send%20my%20resume"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--accent-rgb),0.35)] px-8 py-3 text-sm font-semibold text-(--text) transition-all duration-300 hover:bg-[rgba(var(--accent-rgb),0.08)] active:scale-95"
              >
                Send Your Resume
              </a>
            </div>
          </div> */}

        
        </div>
      </section>
    </div>
  );
}

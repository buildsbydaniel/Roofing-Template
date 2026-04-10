'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    title: 'Hillcrest full roof replacement',
    description: 'Complete tear-off and installation of a new architectural shingle system on this 2,800 sq ft Hillcrest home. Finished in 2 days with zero disruption to the family.',
    tags: ['Residential', '2 days'],
    quote: 'Peak Roofing showed up on time, worked clean, and the roof looks incredible. Best contractor experience I\'ve ever had.',
    author: 'James M., Hillcrest',
    bg: '#f5f2ed',
    text: '#111111',
    imgBg: '#c8c4bc',
  },
  {
    title: 'Mission Valley commercial reroof',
    description: 'Full flat roof replacement on a 12,000 sq ft commercial building using TPO membrane system. Completed on schedule with full insurance documentation.',
    tags: ['Commercial', '1 week'],
    quote: 'They handled everything — permits, insurance, coordination. Zero headaches. The building looks brand new.',
    author: 'Sandra K., Mission Valley',
    bg: '#111111',
    text: '#ffffff',
    imgBg: '#1e1e1e',
  },
  {
    title: 'La Jolla waterproofing & solar prep',
    description: 'Deck waterproofing and structural reinforcement for solar panel installation on a coastal La Jolla property. Salt-air rated materials throughout.',
    tags: ['Waterproofing', '3 days'],
    quote: 'We needed the roof ready for solar and Peak did it perfectly. Watertight, reinforced, and ahead of schedule.',
    author: 'Derek L., La Jolla',
    bg: '#f5f2ed',
    text: '#111111',
    imgBg: '#c8c4bc',
  },
]

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Header slides up and fades out during first 15% of scroll
  const headerY = useTransform(scrollYProgress, [0, 0.15], ['0%', '-110%'])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  // Card 0 rises in from 15% to 40%, shrinks from 50% to 65%
  const card0Y = useTransform(scrollYProgress, [0.15, 0.40], ['120%', '0%'])
  const card0Scale = useTransform(scrollYProgress, [0.50, 0.65], [1, 0.94])

  // Card 1 rises in from 50% to 75%, shrinks from 75% to 90%
  const card1Y = useTransform(scrollYProgress, [0.50, 0.75], ['120%', '0%'])
  const card1Scale = useTransform(scrollYProgress, [0.75, 0.90], [1, 0.94])

  // Card 2 rises in from 75% to 100%
  const card2Y = useTransform(scrollYProgress, [0.75, 1.0], ['120%', '0%'])

  return (
    <section id="portfolio" style={{ background: '#f5f2ed' }}>

      {/* Tall scroll container — 400vh gives scroll room for header + 3 cards */}
      <div ref={containerRef} style={{ height: '400vh' }}>

        {/* Sticky viewport — everything renders inside here */}
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>

          {/* Section header — slides up as scroll begins */}
          <motion.div
            ref={headerRef}
            style={{ y: headerY, opacity: headerOpacity }}
          >
            <div style={{ textAlign: 'center', padding: '0 48px 32px' }}>
              <span style={{
                display: 'inline-block',
                background: '#111',
                color: '#fff',
                fontSize: '11px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase' as const,
                padding: '5px 14px',
                borderRadius: '100px',
                marginBottom: '14px',
                fontFamily: 'var(--font-inter, sans-serif)',
              }}>
                Our work
              </span>
              <h2 style={{
                fontFamily: 'var(--font-playfair, Georgia, serif)',
                fontSize: '42px',
                fontWeight: 400,
                color: '#111',
                lineHeight: 1.15,
                marginBottom: '10px',
              }}>
                Get inspired by our work
              </h2>
              <p style={{ fontSize: '16px', color: '#111', opacity: 0.5 }}>
                See how we&apos;ve protected San Diego homes with expert craftsmanship.
              </p>
            </div>
          </motion.div>

          {/* Card stack — cards rise from below, centered in remaining space */}
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 120px',
          }}>

            {/* Card 0 */}
            <motion.div style={{
              position: 'absolute',
              inset: '40px 120px',
              borderRadius: '20px',
              overflow: 'hidden',
              zIndex: 1,
              y: card0Y,
              scale: card0Scale,
              background: projects[0].bg,
              display: 'flex',
            }}>
              <div style={{ width: '42%', background: projects[0].imgBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/600x500" alt={projects[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, padding: '44px 40px', color: projects[0].text, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '28px', fontWeight: 400 }}>{projects[0].title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.65 }}>{projects[0].description}</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {projects[0].tags.map(tag => <span key={tag} style={{ fontSize: '11px', padding: '4px 14px', borderRadius: '100px', border: '1px solid rgba(0,0,0,0.2)', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }}>{tag}</span>)}
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />
                <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: 1.65, opacity: 0.7 }}>&ldquo;{projects[0].quote}&rdquo;</p>
                <p style={{ fontSize: '13px', opacity: 0.45 }}>— {projects[0].author}</p>
              </div>
            </motion.div>

            {/* Card 1 */}
            <motion.div style={{
              position: 'absolute',
              inset: '40px 120px',
              borderRadius: '20px',
              overflow: 'hidden',
              zIndex: 2,
              y: card1Y,
              scale: card1Scale,
              background: projects[1].bg,
              display: 'flex',
            }}>
              <div style={{ width: '42%', background: projects[1].imgBg, flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/600x500" alt={projects[1].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, padding: '44px 40px', color: projects[1].text, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '28px', fontWeight: 400 }}>{projects[1].title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.65 }}>{projects[1].description}</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {projects[1].tags.map(tag => <span key={tag} style={{ fontSize: '11px', padding: '4px 14px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.2)', textTransform: 'uppercase' as const, letterSpacing: '0.5px', color: '#fff' }}>{tag}</span>)}
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.12)' }} />
                <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: 1.65, opacity: 0.7 }}>&ldquo;{projects[1].quote}&rdquo;</p>
                <p style={{ fontSize: '13px', opacity: 0.45 }}>— {projects[1].author}</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div style={{
              position: 'absolute',
              inset: '40px 120px',
              borderRadius: '20px',
              overflow: 'hidden',
              zIndex: 3,
              y: card2Y,
              background: projects[2].bg,
              display: 'flex',
            }}>
              <div style={{ width: '42%', background: projects[2].imgBg, flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/600x500" alt={projects[2].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, padding: '44px 40px', color: projects[2].text, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '28px', fontWeight: 400 }}>{projects[2].title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.65 }}>{projects[2].description}</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {projects[2].tags.map(tag => <span key={tag} style={{ fontSize: '11px', padding: '4px 14px', borderRadius: '100px', border: '1px solid rgba(0,0,0,0.2)', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }}>{tag}</span>)}
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />
                <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: 1.65, opacity: 0.7 }}>&ldquo;{projects[2].quote}&rdquo;</p>
                <p style={{ fontSize: '13px', opacity: 0.45 }}>— {projects[2].author}</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

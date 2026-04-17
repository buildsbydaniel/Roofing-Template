'use client'
import { useEffect, useRef } from 'react'

const testimonials = [
  { quote: 'Peak Roofing completely transformed our roof. The craftsmanship was outstanding and the team was professional from start to finish.', author: 'James M.', location: 'Hillcrest', initials: 'JM' },
  { quote: 'They showed up on time every day, worked clean, and finished ahead of schedule. Couldn\'t be happier with the result.', author: 'Sofia R.', location: 'El Cajon', initials: 'SR' },
  { quote: 'Got 3 quotes and Peak was the most transparent. New roof looks incredible. Highly recommend to anyone in San Diego.', author: 'Derek K.', location: 'La Mesa', initials: 'DK' },
  { quote: 'After the storm they were on-site same day. Fixed everything fast and perfectly. Incredible response time.', author: 'Laura D.', location: 'Santee', initials: 'LD' },
  { quote: 'Best contractor experience I\'ve ever had. They handled permits, insurance, everything. Zero headaches.', author: 'Sandra K.', location: 'Mission Valley', initials: 'SK' },
  { quote: 'Our roof has never looked better. The team was respectful of our property and cleaned up perfectly after every day.', author: 'Michael T.', location: 'Chula Vista', initials: 'MT' },
  { quote: 'Peak did our waterproofing and solar prep. Watertight, reinforced, and finished ahead of schedule. Highly recommend.', author: 'Rachel M.', location: 'La Jolla', initials: 'RM' },
  { quote: 'From first call to final walkthrough — seamless. Will absolutely use them again for our next project.', author: 'Oliver B.', location: 'San Diego', initials: 'OB' },
]

function TestimonialCard({ quote, author, location, initials }: typeof testimonials[0]) {
  return (
    <div style={{
      background: '#eeecea',
      borderRadius: '20px',
      padding: '36px 36px 36px',
      width: '400px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '28px',
      minHeight: '260px',
    }}>
      {/* Top: stars + quote */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '5px' }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: '#111', fontSize: '18px' }}>★</span>
          ))}
        </div>
        <p style={{
          fontSize: '16px',
          color: '#111',
          lineHeight: 1.65,
          margin: 0,
          opacity: 0.8,
        }}>
          {quote}
        </p>
      </div>

      {/* Bottom: avatar + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.13)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '15px',
          fontWeight: 600,
          color: 'rgba(0,0,0,0.4)',
          flexShrink: 0,
          letterSpacing: '0.5px',
        }}>
          {initials}
        </div>
        <span style={{ fontSize: '15px', fontWeight: 500, color: '#111' }}>
          {author}
        </span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(0)
  const speedRef = useRef(1)
  const targetSpeedRef = useRef(1)
  const rafRef = useRef<number>()
  const halfWidthRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const init = () => {
      halfWidthRef.current = track.scrollWidth / 2
    }

    const loop = () => {
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05
      xRef.current -= speedRef.current
      if (xRef.current <= -halfWidthRef.current) {
        xRef.current += halfWidthRef.current
      }
      track.style.transform = `translateX(${xRef.current}px)`
      rafRef.current = requestAnimationFrame(loop)
    }

    setTimeout(() => {
      init()
      loop()
    }, 100)

    const outer = track.parentElement
    const slowDown = () => { targetSpeedRef.current = 0.2 }
    const speedUp = () => { targetSpeedRef.current = 1 }
    outer?.addEventListener('mouseenter', slowDown)
    outer?.addEventListener('mouseleave', speedUp)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      outer?.removeEventListener('mouseenter', slowDown)
      outer?.removeEventListener('mouseleave', speedUp)
    }
  }, [])

  const allCards = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" style={{ background: '#f5f2ed', padding: '80px 0' }}>
      <div style={{ textAlign: 'center', padding: '0 48px 48px' }}>
        <span style={{
          display: 'inline-block', background: '#111', color: '#fff',
          fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase',
          padding: '5px 14px', borderRadius: '100px', marginBottom: '14px',
        }}>Testimonials</span>
        <h2 style={{
          fontFamily: 'var(--font-playfair, Georgia, serif)',
          fontSize: '42px', fontWeight: 400, color: '#111', marginBottom: '10px',
        }}>Hear from our clients</h2>
        <p style={{ fontSize: '16px', color: '#111', opacity: 0.5 }}>
          What San Diego homeowners say about working with Peak Roofing Co.
        </p>
      </div>

      <div style={{ overflow: 'hidden', width: '100%', cursor: 'default' }}>
        <div ref={trackRef} style={{ display: 'flex', width: 'max-content', gap: '16px', padding: '8px 0' }}>
          {allCards.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

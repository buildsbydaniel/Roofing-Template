'use client';
import { useRef } from 'react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';

const projects = [
  {
    title: 'Hillcrest full roof replacement',
    description:
      'Complete tear-off and installation of a new architectural shingle system on this 2,800 sq ft Hillcrest home. Finished in 2 days with zero disruption to the family.',
    image: '/images/Hillcrest.webp',
    color: '#e8e4dd',
    dark: false,
  },
  {
    title: 'Mission Valley commercial reroof',
    description:
      'Full flat roof replacement on a 12,000 sq ft commercial building using TPO membrane system. Completed on schedule with full insurance documentation.',
    image: '/images/Mission Valley.webp',
    color: '#1a1a1a',
    dark: true,
  },
  {
    title: 'La Jolla waterproofing & solar prep',
    description:
      'Deck waterproofing and structural reinforcement for solar panel installation on a coastal La Jolla property. Salt-air rated materials throughout.',
    image: '/images/La jolla.webp',
    color: '#2c3e45',
    dark: true,
  },
];

interface CardProps {
  i: number;
  title: string;
  description: string;
  image: string;
  color: string;
  dark: boolean;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function Card({ i, title, description, image, color, dark, progress, range, targetScale }: CardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const textColor = dark ? '#ffffff' : '#111111';
  const mutedColor = dark ? 'rgba(255,255,255,0.55)' : 'rgba(17,17,17,0.55)';

  return (
    <div
      ref={container}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
      }}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          position: 'relative',
          display: 'flex',
          width: '76%',
          height: '460px',
          borderRadius: '20px',
          overflow: 'hidden',
          transformOrigin: 'top',
        }}
      >
        {/* Left: text content */}
        <div style={{
          width: '42%',
          flexShrink: 0,
          padding: '48px 36px 48px 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '18px',
          color: textColor,
        }}>
          <h3 style={{
            fontFamily: 'var(--font-serif, Georgia, serif)',
            fontSize: '26px',
            fontWeight: 400,
            lineHeight: 1.2,
            margin: 0,
            color: textColor,
          }}>
            {title}
          </h3>
          <p style={{
            fontSize: '14px',
            lineHeight: 1.65,
            color: mutedColor,
            margin: 0,
          }}>
            {description}
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: mutedColor,
              textDecoration: 'underline',
              cursor: 'pointer',
              width: 'fit-content',
            }}
          >
            Get a quote
            <svg width="18" height="10" viewBox="0 0 22 12" fill="none">
              <path
                d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* Right: image with scale effect */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <motion.div style={{ scale: imageScale, width: '100%', height: '100%' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="portfolio" className="bg-[#f5f2ed]">

      {/* Section header — normal flow, scrolls away */}
      <div className="text-center pt-24 pb-4 px-6">
        <div className="inline-block bg-[#111111] text-white text-xs tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-5">
          Our Work
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-[#111111] leading-tight mb-4">
          Get inspired by our work
        </h2>
        <p className="text-[#111111]/50 text-base max-w-md mx-auto">
          See how we&apos;ve protected San Diego homes with expert craftsmanship and attention to detail.
        </p>
      </div>

      {/* Stacking cards container */}
      <div ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              title={project.title}
              description={project.description}
              image={project.image}
              color={project.color}
              dark={project.dark}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

    </section>
  );
}

import { useState } from 'react';

export default function ModeSelectScreen({ onSelectMode }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      id="mode-select-screen"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background:
          'radial-gradient(ellipse at 20% 50%, oklch(28% 0.14 280 / 0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, oklch(28% 0.1 320 / 0.3) 0%, transparent 50%), oklch(12% 0.02 280)',
        gap: '40px',
      }}
    >
      {/* Hero */}
      <div className="animate-fadeInUp" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '12px' }}>🎬</div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 3.2rem)',
            fontWeight: 900,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          <span className="text-gradient">Celebrity</span>
          <br />
          <span style={{ color: 'white' }}>Age Game</span>
        </h1>
        <p
          style={{
            color: 'oklch(70% 0.05 280)',
            marginTop: '12px',
            fontSize: '1.05rem',
          }}
        >
          Choose your edition to get started
        </p>
      </div>

      {/* Mode cards */}
      <div
        className="animate-fadeInUp"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          width: '100%',
          maxWidth: '560px',
          animationDelay: '0.1s',
          animationFillMode: 'both',
        }}
      >
        {/* Classic Edition */}
        <ModeCard
          id="mode-classic"
          emoji="🌎"
          title="Classic Edition"
          subtitle="132 global stars from 30+ countries"
          tags={['🎬 Actors', '🎵 Musicians', '⚽ Athletes', '🌍 Icons']}
          gradient="linear-gradient(135deg, oklch(61% 0.24 280), oklch(61% 0.24 320))"
          glowColor="oklch(61% 0.24 280 / 0.5)"
          borderColor="oklch(61% 0.24 280 / 0.3)"
          hovered={hovered === 'classic'}
          onHover={() => setHovered('classic')}
          onLeave={() => setHovered(null)}
          onClick={() => onSelectMode('classic')}
        />

        {/* Malena Edition */}
        <ModeCard
          id="mode-malena"
          emoji="🇦🇷"
          title="Malena Edition"
          subtitle="40+ Argentine celebrities only"
          tags={['⚽ Fútbol', '🎵 Música', '🎬 Actores', '📱 Luzu TV']}
          gradient="linear-gradient(135deg, oklch(72% 0.18 220), oklch(92% 0.05 220))"
          glowColor="oklch(72% 0.18 220 / 0.5)"
          borderColor="oklch(72% 0.18 220 / 0.4)"
          badge="EDICIÓN ESPECIAL"
          badgeGradient="linear-gradient(135deg, oklch(72% 0.18 220), oklch(55% 0.2 220))"
          hovered={hovered === 'malena'}
          onHover={() => setHovered('malena')}
          onLeave={() => setHovered(null)}
          onClick={() => onSelectMode('malena')}
        />
      </div>

      <p
        className="animate-fadeInUp"
        style={{
          color: 'oklch(45% 0.03 280)',
          fontSize: '0.85rem',
          textAlign: 'center',
          animationDelay: '0.2s',
          animationFillMode: 'both',
        }}
      >
        2–6 players · Pass the screen around · Ages pulled from Wikipedia
      </p>
    </div>
  );
}

function ModeCard({
  id,
  emoji,
  title,
  subtitle,
  tags,
  gradient,
  glowColor,
  borderColor,
  badge,
  badgeGradient,
  hovered,
  onHover,
  onLeave,
  onClick,
}) {
  return (
    <button
      id={id}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        background: 'oklch(20% 0.025 280 / 0.6)',
        backdropFilter: 'blur(16px)',
        border: `2px solid ${hovered ? borderColor : 'oklch(100% 0 0 / 0.08)'}`,
        borderRadius: '20px',
        padding: '28px 24px',
        cursor: 'pointer',
        textAlign: 'center',
        transform: hovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        transition:
          'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s ease, box-shadow 0.25s ease',
        boxShadow: hovered
          ? `0 24px 48px ${glowColor}`
          : '0 4px 16px oklch(0% 0 0 / 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow overlay on hover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: gradient,
          opacity: hovered ? 0.08 : 0,
          transition: 'opacity 0.25s ease',
          borderRadius: '18px',
          pointerEvents: 'none',
        }}
      />

      {/* Badge */}
      {badge && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: badgeGradient,
            color: 'white',
            fontSize: '0.6rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            padding: '3px 8px',
            borderRadius: '6px',
          }}
        >
          {badge}
        </div>
      )}

      {/* Emoji */}
      <div style={{ fontSize: '3.2rem', lineHeight: 1 }}>{emoji}</div>

      {/* Title */}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.3rem',
          fontWeight: 800,
          margin: 0,
          color: 'white',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p
        style={{
          margin: 0,
          fontSize: '0.9rem',
          color: 'oklch(65% 0.04 280)',
          lineHeight: 1.4,
        }}
      >
        {subtitle}
      </p>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          justifyContent: 'center',
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: 'oklch(100% 0 0 / 0.07)',
              border: '1px solid oklch(100% 0 0 / 0.1)',
              borderRadius: '8px',
              padding: '3px 10px',
              fontSize: '0.75rem',
              color: 'oklch(75% 0.04 280)',
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: '4px',
          padding: '10px 24px',
          borderRadius: '10px',
          background: gradient,
          color: 'white',
          fontWeight: 700,
          fontSize: '0.9rem',
          width: '100%',
          transition: 'filter 0.2s ease',
          filter: hovered ? 'brightness(1.1)' : 'brightness(1)',
        }}
      >
        Play Now →
      </div>
    </button>
  );
}

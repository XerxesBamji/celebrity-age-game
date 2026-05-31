/**
 * A reusable celebrity card.
 * Props:
 *   celeb: { name, photo, age, loading, error }
 *   hideAge: boolean — whether to show or hide the age
 *   size: 'normal' | 'large'
 */
export default function CelebrityCard({ celeb, hideAge = false, size = 'normal' }) {
  const isLarge = size === 'large';
  const imgSize = isLarge ? 200 : 140;

  if (celeb?.loading) {
    return (
      <div
        className="animate-shimmer"
        style={{
          borderRadius: '16px',
          height: isLarge ? '340px' : '260px',
          width: '100%',
        }}
      />
    );
  }

  return (
    <div
      className="glass card-hover"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        textAlign: 'center',
        padding: isLarge ? '24px 20px' : '16px',
      }}
    >
      {/* Photo */}
      <div
        style={{
          width: imgSize,
          height: imgSize,
          borderRadius: '50%',
          margin: '0 auto',
          overflow: 'hidden',
          background: 'oklch(25% 0.03 280)',
          border: '3px solid oklch(100% 0 0 / 0.1)',
          position: 'relative',
        }}
      >
        {celeb?.photo ? (
          <img
            src={celeb.photo}
            alt={celeb.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isLarge ? '3rem' : '2rem',
              background: 'linear-gradient(135deg, oklch(30% 0.08 280), oklch(25% 0.06 300))',
            }}
          >
            🎬
          </div>
        )}
      </div>

      {/* Name */}
      <h3
        style={{
          margin: isLarge ? '16px 0 8px' : '12px 0 6px',
          fontSize: isLarge ? '1.3rem' : '1rem',
          fontWeight: 700,
          color: 'white',
          lineHeight: 1.2,
        }}
      >
        {celeb?.name}
      </h3>

      {/* Age */}
      {hideAge ? (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '999px',
            background: 'oklch(25% 0.04 280)',
            border: '1px solid oklch(100% 0 0 / 0.08)',
            color: 'oklch(45% 0.03 280)',
            fontSize: isLarge ? '0.95rem' : '0.8rem',
          }}
        >
          <span>🔒</span>
          <span>Age hidden</span>
        </div>
      ) : (
        <div
          className="animate-bounce-in"
          style={{
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: '4px',
          }}
        >
          <span
            style={{
              fontSize: isLarge ? '2.2rem' : '1.8rem',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              color: 'oklch(84% 0.18 85)',
            }}
          >
            {celeb?.age ?? '?'}
          </span>
          <span style={{ color: 'oklch(55% 0.04 280)', fontSize: '0.85rem' }}>yrs</span>
        </div>
      )}
    </div>
  );
}

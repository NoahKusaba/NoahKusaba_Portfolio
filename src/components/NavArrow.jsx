export default function NavArrow({ direction, onClick }) {
  const isPrev = direction === 'prev';
  return (
    <button
      type="button"
      className={`nav-arrow ${isPrev ? 'prev' : 'next'}`}
      onClick={onClick}
      aria-label={isPrev ? 'Previous slide' : 'Next slide'}
    >
      {isPrev ? '\u2039' : '\u203A'}
    </button>
  );
}

export default function NavArrow({ direction, onClick }) {
  const isPrev = direction === 'prev';
  return (
    <a href="/#" className={`nav-arrow ${isPrev ? 'prev' : 'next'}`} onClick={onClick}>
      {isPrev ? '\u2039' : '\u203A'}
    </a>
  );
}

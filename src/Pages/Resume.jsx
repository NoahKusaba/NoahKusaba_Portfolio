export default function Resume({ onClose }) {
  return (
    <>
      <button type="button" className="resume-backdrop" onClick={onClose} aria-label="Close resume" />
      <embed src="/Resume.pdf" type="application/pdf" />
    </>
  )
}

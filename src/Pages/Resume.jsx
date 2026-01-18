export default function Resume({ onClose }) {
  return (
    <>
      <div className="resume-backdrop" onClick={onClose} />
      <embed src="/Resume.pdf" type="application/pdf" />
    </>
  )
}

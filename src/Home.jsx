import './App.css';
import { useState, useEffect, useCallback, useRef } from "react";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Resume from "./Pages/Resume.jsx";
import Experience from "./Pages/Experience.jsx";
import Contact from "./Pages/Contact.jsx";
import Background from "./components/Background.jsx";
import NavArrow from "./components/NavArrow.jsx";

const pages = {
  aboutPage: About,
  projectsPage: Projects,
  resumePage: Resume,
  experiencePage: Experience,
  contactPage: Contact,
};

function Home() {
  const [currentPage, setPage] = useState(null);
  const [currentSlide, setSlide] = useState(0);
  const wrapper = useRef(null);

  const closeModal = useCallback(() => { setPage(""); setSlide(0); }, []);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && closeModal();
    const handleClick = (e) => wrapper.current && !wrapper.current.contains(e.target) && closeModal();
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [closeModal]);

  const PageComponent = pages[currentPage];

  return (
    <>
      <Background />
      <div className="HomePage">
        <div id="instructions">
          <div className="iText">&#123;esc&#125;</div>
          <div className="iText">&#123;outsideClick&#125;</div>
        </div>
        <div className="Flexbox">
          <button type="button" className="deg90" id="about" onClick={() => setPage("aboutPage")}><span className="shake">ABOUT</span></button>
          <button type="button" className="deg45" id="projects" onClick={() => setPage("projectsPage")}><span className="shake">PROJECTS</span></button>
          <button type="button" className="deg90" id="resume" onClick={() => setPage("resumePage")}><span className="shake">RESUME</span></button>
        </div>

        {PageComponent && currentPage === "resumePage" ? (
          <PageComponent onClose={closeModal} />
        ) : PageComponent && (
          <div className='BorderPage' ref={wrapper}>
            <PageComponent currentSlide={currentSlide} setSlide={setSlide} />
            <NavArrow direction="prev" onClick={() => setSlide(currentSlide - 1)} />
            <NavArrow direction="next" onClick={() => setSlide(currentSlide + 1)} />
          </div>
        )}

        <div className='Flexbox'>
          <button type="button" className="deg90" id="experience" onClick={() => setPage("experiencePage")}><span className="shake">EXPERIENCE</span></button>
          <div id="c"><span className="shake">C</span></div>
          <div id="stacked">
            <button type="button" className="degNeg45" id="contact" onClick={() => setPage("contactPage")}><span className="shake">ONTACT</span></button>
            <button type="button" className="deg45" id="connect" onClick={() => window.open("https://www.linkedin.com/in/noah-kusaba/")}><span className="shake">ONNECT</span></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

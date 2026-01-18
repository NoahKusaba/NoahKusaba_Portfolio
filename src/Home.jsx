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
          <div className="deg90" id="about" onClick={() => setPage("aboutPage")}><div className="shake">ABOUT</div></div>
          <div className="deg45" id="projects" onClick={() => setPage("projectsPage")}><div className="shake">PROJECTS</div></div>
          <div className="deg90" id="resume" onClick={() => setPage("resumePage")}><div className="shake">RESUME</div></div>
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
          <div className="deg90" id="experience" onClick={() => setPage("experiencePage")}><div className="shake">EXPERIENCE</div></div>
          <div id="c"><div className="shake">C</div></div>
          <div id="stacked">
            <div className="degNeg45" id="contact" onClick={() => setPage("contactPage")}><div className="shake">ONTACT</div></div>
            <div className="deg45" id="connect" onClick={() => window.open("https://www.linkedin.com/in/noah-kusaba/")}><div className="shake">ONNECT</div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

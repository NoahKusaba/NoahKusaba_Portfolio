import SliderPage from "../components/SliderPage"
import { passport, queens } from "../assets/images"

const slides = [
  <div key={0} className="FlexPage">
    <img src={passport} alt="Noah Kusaba" className="passport-img" />
    <div className="pageTitle">Noah S. Kusaba</div>
    <div className="textBorder">
      <div className="bodyText" id="centeredText">Senior Software Engineer at Fetch Rewards</div>
      <br />
      <div className="bodyText">
        Building distributed systems, MLOps platforms, and data infrastructure.
        AWS Certified Data Analytics/Engineering Specialist.
      </div>
    </div>
  </div>,
  <div key={1} className="FlexPage">
    <img src={queens} alt="Queen's University" className="queens-img" />
    <div className="pageTitle">Education</div>
    <div className="textBorder">
      <ul>
        <li className="bodyText">Queen's University: BASc Mechanical Engineering</li>
      </ul>
    </div>
  </div>
];

export default function About({ currentSlide, setSlide }) {
  return <SliderPage data={slides} renderSlide={(slide) => slide} currentSlide={currentSlide} setSlide={setSlide} />;
}

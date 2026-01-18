import SliderPage, { DataSlide } from "../components/SliderPage"
import data from "../PageData/Projects.json"
import { imageMap } from "../assets/images"

export default function Projects({ currentSlide, setSlide }) {
  return (
    <SliderPage
      data={data}
      currentSlide={currentSlide}
      setSlide={setSlide}
      renderSlide={(slide) => (
        <DataSlide
          slide={slide}
          imgSrc={imageMap[slide.imageID]}
          imgClass="project-img"
          fallback={<div className={`gradient-placeholder ${slide.imageID}`} />}
        />
      )}
    />
  );
}

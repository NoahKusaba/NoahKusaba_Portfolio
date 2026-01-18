import SliderPage, { DataSlide } from "../components/SliderPage"
import data from "../PageData/Experience.json"

export default function Experience({ currentSlide, setSlide }) {
  return (
    <SliderPage
      data={data}
      currentSlide={currentSlide}
      setSlide={setSlide}
      renderSlide={(slide) => (
        <DataSlide slide={slide} imgSrc={slide.faviconUrl} imgClass="experience-img" />
      )}
    />
  );
}

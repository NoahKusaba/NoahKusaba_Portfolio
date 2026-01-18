import { useSlideControl } from "../hooks/useSlideControl"

export default function SliderPage({ data, renderSlide, currentSlide, setSlide }) {
  const idx = useSlideControl(currentSlide, setSlide, data.length);
  return <div className="sliderImage">{renderSlide(data[idx], idx)}</div>;
}

export function DataSlide({ slide, imgSrc, imgClass, fallback }) {
  return (
    <div className="FlexPage">
      {imgSrc ? (
        <img src={imgSrc} alt={slide.title} className={imgClass} />
      ) : fallback}
      <div className="pageTitle">{slide.title}</div>
      <div className="textBorder-wrapper">
        <ul className="textBorder">
          {slide.list.map((item, i) => (
            <li key={i} className="bodyText">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

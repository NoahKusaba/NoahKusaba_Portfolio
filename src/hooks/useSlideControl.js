import { useEffect } from "react";

export function useSlideControl(currentSlide, setSlide, length) {
  useEffect(() => {
    if (currentSlide < 0) setSlide(0);
    else if (currentSlide >= length) setSlide(length - 1);
  }, [currentSlide, setSlide, length]);

  return Math.max(0, Math.min(currentSlide, length - 1));
}

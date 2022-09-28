import { useCallback, useEffect, useState } from "react";
import "./Carousel.css";
import Progress from "../Progress";
import Button from "../Button";
import Dots from "../Dots";

function Carousel({ images, time }) {
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [slide, setSlide] = useState(0);

  const cycleForward = useCallback(() => {
    if (slide === 0) {
      if (index < images.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
      setSeconds(0);
      setSlide(-1);
    }
  }, [index, images, slide]);

  const cycleBackward = useCallback(() => {
    if (slide === 0) {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(images.length - 1);
      }
      setSeconds(0);
      setSlide(1);
    }
  }, [index, images, slide]);

  useEffect(() => {
    let delay = 10;
    let toSeconds = 1000;
    let interval = null;
    interval = setInterval(() => {
      setSeconds((seconds) => seconds + delay / toSeconds);
      if (seconds >= time / toSeconds) {
        cycleForward();
      }
    }, delay);

    return () => clearInterval(interval);
  }, [seconds, index, time, cycleForward]);

  return (
    <div className="Carousel">
      <div className="Box">
        <div className="TopSection">
          <Button functionality={cycleBackward} forward={false} />
          <div className="Picture">
            <img
              src={images[index]}
              alt="Oh nyo!"
              onAnimationEnd={() => setSlide(0)}
              slide={slide}
            />
          </div>
          <Button functionality={cycleForward} forward={true} />
        </div>
        <Progress seconds={seconds} time={time} />
      </div>
      <Dots images={images} index={index} />
    </div>
  );
}

export default Carousel;

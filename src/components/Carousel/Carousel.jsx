import { useCallback, useEffect, useState } from "react";
import "./Carousel.css";
import Progress from "../Progress";
import Button from "../Button";

function Carousel({ images, time }) {
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const cycleForward = useCallback(() => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setSeconds(0);
  }, [index, images]);

  const cycleBackward = useCallback(() => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
    setSeconds(0);
  }, [index, images]);

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
      <div className="Top">
        <Button functionality={cycleBackward} forward={false} />
        <div className="Picture">
          <img src={images[index]} alt="Oh nyo!" />
        </div>
        <Button functionality={cycleForward} forward={true} />
      </div>
      <Progress seconds={seconds} time={time} />
    </div>
  );
}

export default Carousel;

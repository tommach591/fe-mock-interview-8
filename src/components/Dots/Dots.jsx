import "./Dots.css";

function Dots({ images, index }) {
  return (
    <div className="Dots">
      {images.map((e, i) => {
        return i === index ? (
          <div className="Filled" key={i}></div>
        ) : (
          <div className="Empty" key={i}></div>
        );
      })}
    </div>
  );
}

export default Dots;

import "./Progress.css";

function Progress({ seconds, time }) {
  let width = 300;
  let percent = width - (seconds / (time / 1000)) * width;

  return (
    <div className="Progress">
      <div className="Outside" style={{ width: `${width}px` }}>
        <div className="Inside" style={{ width: `${percent}px` }}></div>
      </div>
    </div>
  );
}

export default Progress;

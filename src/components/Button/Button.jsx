import "./Button.css";

function Button({ functionality, forward }) {
  return (
    <div
      className="Button"
      onClick={() => {
        functionality();
      }}
    >
      {forward ? (
        <div className="Forward"></div>
      ) : (
        <div className="Backward"></div>
      )}
    </div>
  );
}

export default Button;

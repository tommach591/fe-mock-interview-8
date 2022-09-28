/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Pictures } from "../../utils/constants";
import Carousel from "../Carousel";

function App() {
  const [time, setTime] = useState(5000);
  const [images, setImages] = useState([...Pictures]);

  return (
    <div className="App">
      <Carousel images={images} time={time} />
    </div>
  );
}

export default App;

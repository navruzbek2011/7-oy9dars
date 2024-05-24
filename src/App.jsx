import "./App.css";
import data from "./data/data.json"
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
function App() {
  const [dataLength, setDataLength] = useState(4)
  // console.log(dataLength);
  return (
    <div>
      <div className="container">
        {data.slice(0, dataLength).map((e, i) => (
          <div className="card" key={i}>
            <img className="images" src={e.img} alt="" />
            <p className="title">{e.titele}</p>
            <button className="yurak">
              <FaHeart />
            </button>
          </div>
        ))}
      </div>
      <div className="box">
        <button onClick={() => setDataLength(dataLength - 4)} className="btn2">Kamroq kurish</button>
        <button onClick={() => setDataLength(dataLength + 4)} className="btn">Kuproq kurish</button>
      </div>
    </div>
  );
}

export default App;

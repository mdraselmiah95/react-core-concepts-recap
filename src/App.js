import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyComponent brand="Apple" price="7000"></MyComponent>
      <MyComponent brand="Realme" price="13000"></MyComponent>
      <MyComponent brand="Phone" price="2000"></MyComponent>
    </div>
  );
}

function MyComponent(props) {
  const handleAddPoint = () => {
    // console.log("clicked");
    const newPoints = points + 1;
    setPoints(newPoints);
  };
  const [points, setPoints] = useState(0);
  return (
    <div className="Recap">
      <h1>React concept recap</h1>
      <p>I can write my own component</p>
      <h1>This is a cool Brand: {props.brand}</h1>
      <p style={{ color: "pink", fontWeight: "bold" }}>
        Sorry for the Price: {props.price}. My points: {points}
      </p>
      <button onClick={handleAddPoint}>Add Point</button>
    </div>
  );
}

export default App;

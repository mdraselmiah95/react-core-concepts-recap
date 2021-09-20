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
  return (
    <div className="Recap">
      <h1>React concept recap</h1>
      <p>I can write my own component</p>
      <h1>This is a cool Brand: {props.brand}</h1>
      <p>Sorry for the Price: {props.price}</p>
    </div>
  );
}

export default App;

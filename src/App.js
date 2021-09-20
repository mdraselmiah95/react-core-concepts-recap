import "./App.css";

function App() {
  return (
    <div className="App">
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
    </div>
  );
}

function MyComponent() {
  return (
    <div className="Recap">
      <h1>This is a start of new React concept recap</h1>
      <p>I can write my own component</p>
    </div>
  );
}

export default App;

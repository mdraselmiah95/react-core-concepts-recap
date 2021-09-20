import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand="Apple" price="7000"></MyComponent>
      <MyComponent brand="Realme" price="13000"></MyComponent>
      <MyComponent brand="Phone" price="2000"></MyComponent>
    </div>
  );
}
// loadUsers

function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Loaded Users: {users.length}</h1>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div className="User">
      <h4>Name: {props.name}</h4>
      <p>User Email: {props.email}</p>
    </div>
  );
}

// my component
function MyComponent(props) {
  const handleAddPoint = () => {
    // console.log("clicked");
    const newPoints = points * 2;
    setPoints(newPoints);
  };
  const [points, setPoints] = useState(1);
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

import React, { useState } from "react";
import "./App.css";
import Child from "./child";

const App = () => {
  const [count, setCount] = useState(0);
  const [name] = useState("Aria");
  const [books, setBooks] = useState([
    { id: 1, title: "book 1", author: "author 1" },
    { id: 2, title: "book 2", author: "author 2" },
    { id: 3, title: "book 3", author: "author 3" },
  ]);

  const handleIncrement = () => setCount((count) => count + 1);

  return (
    <div className="App">
      <header className="App-header">
        <Child name={name} />
        <button onClick={handleIncrement}>
          Click me {count === 0 ? "zero" : count}
        </button>

        {books.map(({ id, title, author }) => (
          <div key={id}>
            {title} {author}
          </div>
        ))}
      </header>
    </div>
  );
};

export default App;

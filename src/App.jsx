import React from "react";
import "./App.css";
import { TodoContextProvider } from "./context/TodoContextProvider";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>Hello</TodoContextProvider>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Nav from "./Nav";
import NftDescription from "./NftDescription";
import ImageBox from "./ImageBox";
import BigBg from "./BigBg";
import Background from "./Background";

function App() {
  return (
    <div className="app">
      <BigBg />
      <Background />
      <Nav />
      <div className="container">
        <NftDescription />
        <ImageBox />
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import logo from "../assets/webreact.jpeg";

import styles from "./App.module.scss";
import { Routes, Route,Link } from "react-router-dom"
import About from "./About";


function App(props) {
  return (
    <>
      <div className={styles.App}>This is oftena react app using webpack</div>
      <img src={logo}></img>
      <br></br>
      <Link id="1" key={1} to="about">React Link tag 1</Link>
      <br></br>
      <Link id="2" key={2} to="about">React Link tag 2</Link>
      <br></br>
      <Link id="3" key={3} to="about">React Link tag 3</Link>
      <br></br>
      <a id="4" key={4} href="about">Normal anchor 4</a>
      <br></br>
      <a id="5" key={5} href="about">Normal anchor 5</a>
      <br></br>
      <a id="6" key={6} href="about">Normal anchor 6</a>
      <Routes>
        <Route path="about" element={ <About/> } />
      </Routes>
    </>
  );
}

export default App;

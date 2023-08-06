import React, { useState, useEffect } from "react";
import logo from "../assets/webreact.jpeg";

import styles from "./App.module.scss";
import About from "./About";
import LinkTag from "./LinkTag";
import AnchorTag from "./AnchorTag";
import { Routes, Route,Link } from "react-router-dom"

function Main() {
  return (
    <div id="main">
      <div className={styles.App}>This is oftena react app using webpack</div>
      <img src={logo}></img>
      <LinkTag key='1' number={1}/>
      <LinkTag key='2' number={2}/>
      <LinkTag key='3' number={3}/>
      <AnchorTag key='4' number={4}/>
      <AnchorTag key='5' number={5}/>
      <AnchorTag key='6' number={6}/>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Main;

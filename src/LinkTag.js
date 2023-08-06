import React, { useState } from 'react'
import { Routes, Route,Link } from "react-router-dom"
import styles from "./App.module.scss";


function LinkTag({number}) {
  const [color,setColor] = useState('rgb(255,255,255');
  function random() {
    return Math.floor(Math.random() * 256); // Returns a random integer between 0 and 255 (inclusive)
  }

  function colorChange(isWhite)
  {
    if (isWhite) setColor(`rgb(255,255,255)`)
    else setColor(`rgb(${random()},${random()},${random()})`)
  }

  return (
    <div className={styles.anchorWrapper} style={{backgroundColor:color}} >
      <Link onMouseEnter={colorChange.bind(null,false)} onMouseLeave={colorChange.bind(null,true)} id={number}  to="about">
        React Link tag {number}
      </Link>
    </div>
  );
}

export default LinkTag
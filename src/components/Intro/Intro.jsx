
import React from 'react'
import './Intro.css'
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Moi Shadrack</h1>
          <h3>

          Full Stack Developer <span ref={textRef}></span>
          {/* <title><strong> Front-end Developer | Full-stack Developer</strong></title> */}
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/work.png" alt="" />
        </a>
      </div>
    </div>
  );
}
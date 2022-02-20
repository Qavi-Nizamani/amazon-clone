import React from "react";
import classes from "./Hero.module.css";
const Hero = () => {
  const leftSlideHandler = () => {
    const slide = document.getElementById("heroImage");
    slide.classList.add(classes.leftSlide);
    setTimeout(() => {
      slide.style.backgroundImage = "url(/images/hero2.jpg";
      slide.classList.remove(classes.leftSlide);
      slide.classList.add(classes.fromRight);
      setTimeout(() => {
        slide.classList.remove(classes.fromRight);
      }, 400);
    }, 200);
  };

  const rightSlideHandler = () => {
    const slide = document.getElementById("heroImage");
    slide.classList.add(classes.rightSlide);
    setTimeout(() => {
      slide.style.backgroundImage = "url(/images/hero.jpg";
      slide.classList.remove(classes.rightSlide);
      slide.classList.add(classes.fromLeft);
      setTimeout(() => {
        slide.classList.remove(classes.fromLeft);
      }, 400);
    }, 200);
  };
  return (
    <div className={classes.hero}>
      <div id="heroImage" className={classes.heroImage}></div>
      <button onClick={leftSlideHandler}>Left</button>
      <button onClick={rightSlideHandler}>Right</button>
    </div>
  );
};

export default Hero;

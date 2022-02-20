import React from "react";
import BabyProducts from "./BabyProducts";
import classes from "./Content.module.css";
import VideoGames from "./VideoGames";

const Main = () => {
  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <div className={classes.category}>
          <h3>Show by Category</h3>
          <div className={classes.categoryImage}>
            <img src="/images/hero.jpg" alt="category image" />
          </div>
          <a>Shop now</a>
        </div>
        <div className={classes.category}>
          <h3>Show by Category</h3>
          <div className={classes.categoryImage}>
            <img src="/images/hero.jpg" alt="category image" />
          </div>
          <a>Shop now</a>
        </div>
        <div className={classes.category}>
          <h3>Show by Category</h3>
          <div className={classes.categoryImage}>
            <img src="/images/hero.jpg" alt="category image" />
          </div>
          <a>Shop now</a>
        </div>
        <div className={classes.category}>
          <h3>Show by Category</h3>
          <div className={classes.categoryImage}>
            <img src="/images/hero.jpg" alt="category image" />
          </div>
          <a>Shop now</a>
        </div>
        <div className={classes.category}>
          <h3>Show by Category</h3>
          <div className={classes.categoryImage}>
            <img src="/images/hero.jpg" alt="category image" />
          </div>
          <a>Shop now</a>
        </div>
        <div className={classes.category}>
          <h3>Show by Category</h3>
          <div className={classes.categoryImage}>
            <img src="/images/hero.jpg" alt="category image" />
          </div>
          <a>Shop now</a>
        </div>
        <div className={classes.category}>
          <h3>Show by Category</h3>
          <div className={classes.categoryImage}>
            <img src="/images/hero.jpg" alt="category image" />
          </div>
          <a>Shop now</a>
        </div>
        <div className={classes.category}>
          <h3>Show by Category</h3>
          <div className={classes.categoryImage}>
            <img src="/images/hero.jpg" alt="category image" />
          </div>
          <a>Shop now</a>
        </div>
      </div>
      <VideoGames />
      <BabyProducts />
    </section>
  );
};

export default Main;

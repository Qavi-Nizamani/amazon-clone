import React from "react";
import classes from "./Container.module.css";
const Container = (props) => {
  return (
    <div className={classes.wrapContainer + " " + props.className}>
      <div className={classes.Container}>{props.children}</div>
    </div>
  );
};

export default Container;

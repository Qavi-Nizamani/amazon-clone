import React from "react";
import { BackDrop } from "../../UI/Modal/Modal";
import classes from "./Signuprecommendation.module.css";
const SignupRecommendation = () => {
  return (
    <div className={classes.signup}>
      <p className={classes.recommendationheading}>
        See personalized recommendations
      </p>
      <button className={classes.recommendationbtn}>Sign in</button>
      <span className={classes.recommendationcustomer}>New customer</span>
      <a href="#" className={classes.recommendationstart}>
        Start Here.
      </a>
    </div>
  );
};

export default SignupRecommendation;

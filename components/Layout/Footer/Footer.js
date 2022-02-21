import React from "react";
import classes from "./Footer.module.css";
import SignupRecommendation from "./SignupRecommendation";
import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <SignupRecommendation />
      <BackToTop />
    </footer>
  );
};

export default Footer;

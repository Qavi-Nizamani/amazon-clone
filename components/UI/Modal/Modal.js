import React from "react";
import classes from "./Modal.module.css";

export const BackDrop = (props) => {
  return <div onClick={props.onClose} className={classes.backDrop +' '+props.className}></div>;
};

const Modal = (props) => {
  return (
    <BackDrop onClick={props.onClose}>
      <div className={classes.modal + ' ' + props.className}>{props.children}</div>
    </BackDrop>
  );
};

export default Modal;

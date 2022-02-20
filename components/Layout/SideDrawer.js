import React from "react";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  return (
    <div className={classes.wrapSideDrawer}>
      <div className={classes.sideDrawer}>
        <h3>Hello, Abdul</h3>
        <div className={classes.sideDrawer__content}>
          <h3 className={classes.sideDrawer__content_title}>Digital Content & Devices</h3>
          <ul className={classes.sideDrawer__content_ul}>
            <li className={classes.sideDrawer__content_ul_li}>
              Amazon Music
            </li>
            <li className={classes.sideDrawer__content_ul_li}>
              Kindle E-readers & Books
            </li>
            <li className={classes.sideDrawer__content_ul_li}>
              Appstore for Android
            </li>
          </ul>
        </div>

        <div>
          <h3 className={classes.sideDrawer__content_title}>Digital Content & Devices</h3>
          <ul>
            <li className={classes.sideDrawer__content_ul_li}>
              Amazon Music
            </li>
            <li className={classes.sideDrawer__content_ul_li}>
              Kindle E-readers & Books
            </li>
            <li className={classes.sideDrawer__content_ul_li}>
              Appstore for Android
            </li>
          </ul>
        </div>

        <div>
          <h3 className={classes.sideDrawer__content_title}>Digital Content & Devices</h3>
          <ul>
            <li className={classes.sideDrawer__content_ul_li}>
              Amazon Music
            </li>
            <li className={classes.sideDrawer__content_ul_li}>
              Kindle E-readers & Books
            </li>
            <li className={classes.sideDrawer__content_ul_li}>
              Appstore for Android
            </li>
          </ul>
        </div>
        <div>
          <h3 className={classes.sideDrawer__content_title}>Digital Content & Devices</h3>
          <ul>
            <li className={classes.sideDrawer__content_ul_li}>
              Amazon Music
            </li>
            <li className={classes.sideDrawer__content_ul_li}>
              Kindle E-readers & Books
            </li>
            <li className={classes.sideDrawer__content_ul_li}>
              Appstore for Android
            </li>
          </ul>
        </div>
      </div>
      <span className={classes.closeButton} onClick={props.onClose}>X</span>
    </div>
  );
};

export default SideDrawer;

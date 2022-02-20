import React, { useState } from "react";
import { BackDrop } from "../../UI/Modal/Modal";
import classes from "./Header.module.css";
import AccountAndLists from "../../Profile/AccountAndLists";
import Search from "./Search";
import SideDrawer from "../SideDrawer";
const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const openSideDrawerHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const accountAndListsMouseEnterHandler = () => {
    setShowProfile(true);
  };
  
  const accountAndListsMouseLeaveHandler = () => {
    setShowProfile(false);
  };

  return (
    <>
      <header className={classes.header}>
        <section className={classes.topNav}>
          <div className={classes.leftNav}>
            <div className={classes.logo}>
              <a href="#">AMAZON</a>
            </div>
            <div className={classes.destination}>Deliver</div>
          </div>
          <Search />
          <div className={classes.navRight}>
            <div className={classes.language}>Lang</div>
            {showProfile && <BackDrop />}
            <div
              className={classes.accountAndLists}
              onMouseEnter={accountAndListsMouseEnterHandler}
              onMouseLeave={accountAndListsMouseLeaveHandler}
            >
              Accounts & Lists
              {showProfile && <AccountAndLists />}
            </div>

            <div className={classes.returnAndOrders}>& Orders</div>
            <div className={classes.cart}>I am Cart</div>
          </div>
        </section>
        {showSideDrawer && (
          <BackDrop
            onClose={openSideDrawerHandler}
            className={classes.drawerBackdrop}
          />
        )}
        {showSideDrawer && <SideDrawer onClose={openSideDrawerHandler} />}
        <nav className={classes.mainNav}>
          <ul className={classes.mainNav}>
            <li>
              <button onClick={openSideDrawerHandler}>All</button>
            </li>
            <li>Today's Deals</li>
            <li>Buy Again</li>
            <li>Customer Service</li>
            <li>Browsing History</li>
            <li>Gift Cards</li>
            <li>Abdul's Amazon.com</li>
            <li>Registry</li>
            <li>Sell</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

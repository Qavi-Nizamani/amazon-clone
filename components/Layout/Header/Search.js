import React, { useState } from "react";
import { BackDrop } from "../../UI/Modal/Modal";
import classes from "./Search.module.css";
const Search = () => {
  const [isTouched, setIsTouched] = useState(false);

  const focusHandler = () => {
    setIsTouched(true);
  };
  const blurHandler = () => {
    setIsTouched(false);
  };
  const searchHandler = (e)=>{
e.preventDefault();
  }
  
  const searchClasses = isTouched
    ? `${classes.formControl} ${classes.orangeBorder}`
    : `${classes.formControl}`;

  return (
    <>
      {isTouched && <BackDrop />}
      <form onSubmit={searchHandler} className={classes.search}>
        <div className={searchClasses}>
          <input onFocus={focusHandler} onBlur={blurHandler} type={"text"} />
          <button>Search</button>
        </div>
      </form>
    </>
  );
};

export default Search;

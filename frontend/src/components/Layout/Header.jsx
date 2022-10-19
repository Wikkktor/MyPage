import React from "react";
import foodappheader from '../../assets/foodappheader.jpg';
import classes from './Header.module.css'
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food-App</h1>
        <HeaderButton showCart={props.showCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={foodappheader} alt='food' />
      </div>
    </>
  );
};

export default Header;

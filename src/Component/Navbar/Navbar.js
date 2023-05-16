import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

import style from "./Navbar.module.css";
import Logo from "../../assests/logo.svg";

export default function Navbar() {
  return (
    <div className={style.main}>
      <div className={style.navLeft}>
        <img src={Logo} alt="logo" />
        <a href='' className={style.option}>Courses <RiArrowDropDownLine/></a>
        <a href='' className={style.option}>Programs <RiArrowDropDownLine/></a>
      </div>
      <div className={style.navRight}>
      <a href='' className={style.option}><AiOutlineSearch /></a>
      <a href='' className={style.option}>Login</a>
      <button className={style.btn}>JOIN NOW</button>
      </div>
    </div>
  );
}

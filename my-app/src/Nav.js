import React from "react";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import NavScript from "./Nav_script";

const Nav = () => {
  // const [navbarShow, setNavbarShow] = useState("inactive");
  // useEffect(() => {
  //   NavScript();
  // }, []);
  // //const [active, setActive] = useState("");
  // function handleClick(e) {
  //   e.stopPropagation();

  //   e.target.classList.toggle("dropdown"); // 改變 hamburger -> X
  //   // testing
  //   // console.log(e.target);
  //   // testing
  //   // console.log(e.target.classList);
  //   if (e.target.classList[0] === "dropdown") {
  //     setNavbarShow("active");
  //   } else {
  //     setNavbarShow("hide");
  //   }
  // }
  // function handleClickA(e) {
  //   const ulChange = e.target.parentNode.parentNode;
  //   console.log(e.target.parentNode.parentNode); //ul

  //   ulChange.add("hide");
  //   ulChange.remove("show");
  // }
  return (
    <nav class="banner banner_background">
      <ul class="nav_ul">
        <a href="#" class="home_link">
          <img src={require("./image/logo_circle.png")} alt="logo" class="banner_logo"></img>
        </a>
        <li class="banner_button">
          <a href="login" class="login_button ">
            立即報名
          </a>
        </li>
        <li class="banner_button">
          <a href="#review" class="review_button">
            歷屆回顧
          </a>
        </li>
        <li class="banner_button">
          <a href="#traffic" class="traffic_button">
            交通資訊
          </a>
        </li>
        <li class="banner_button">
          <a href="#faq" class="faq_button">
            常見問題
          </a>
        </li>
        <li class="banner_button">
          <a href="#info" class="info_button">
            報名資訊
          </a>
        </li>
        <li class="banner_button">
          <a href="#about" class="about_button">
            營隊介紹
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

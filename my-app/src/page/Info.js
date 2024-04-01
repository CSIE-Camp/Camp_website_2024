import React from "react";

export const Info = () => {
  function attend_click() {
    window.location.replace("/login");
  }
  return (
    <div class="attend_info_">
      <section class="lesson">
        <div><h2>日期</h2>
        <p class='info_BigWord'>2024 7/1 ~ 7/5</p></div>
        <img
          src={require("../image/google_icon/calendar.png")}
          alt="date_icon"
          class="imageinfo"
        ></img>
      </section>

      <div class="lesson">
      <div><h2>地點</h2>
        <p class='info_BigWord'>國立台灣師範大學公館校區</p></div>
        <img
          src={require("../image/google_icon/location.png")}
          alt="school_icon"
          class="imageinfo"
        ></img>
      </div>
      <div class="lesson">
        <div><h2>報名時間</h2>
        <p class='info_BigWord'>第一階段：4/20 ~ 5/27<br></br>第二階段：優先一階備取 6/1 ~ 6/7</p></div>
        <img
          src={require("../image/google_icon/clock.png")}
          alt="clock_icon"
          class="imageinfo"
        ></img>
      </div>

      <div class="lesson">
        <h2>個人報名</h2>
        <img
          src={require("../image/google_icon/person.png")}
          alt="solo_icon"
          class="imageinfo"
        ></img>
      </div>
      <div class="lesson">
        <h2>團體報名</h2>
        <img
          src={require("../image/google_icon/group.png")}
          alt="group_icon"
          class="imageinfo"
        ></img>
      </div>

      <button type="button" class="attend_button" onClick={attend_click}>
        報名營隊
      </button>
    </div>
  );
};

export default Info;

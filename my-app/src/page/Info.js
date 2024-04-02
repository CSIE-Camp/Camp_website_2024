import React from "react";

export const Info = () => {
  function attend_click() {
    window.location.replace("https://camp-app.csie.cool/login");
  }
  return (
    <div class="attend_info_">
      <section class="lesson">
        <div><h2>日期</h2>
        <p>2024 7/1 ~ 7/5</p></div>
        <img
          src={require("../image/google_icon/calendar.png")}
          alt="date_icon"
          class="imageinfo"
        ></img>
      </section>

      <div class="lesson">
      <div><h2>地點</h2>
        <p>國立台灣師範大學公館校區</p></div>
        <img
          src={require("../image/google_icon/location.png")}
          alt="school_icon"
          class="imageinfo"
        ></img>
      </div>
      <div class="lesson">
        <div><h2>報名時間</h2>
        <p>第一階段：4/20 ~ 5/27</p></div>
        <img
          src={require("../image/google_icon/clock.png")}
          alt="clock_icon"
          class="imageinfo"
        ></img>
      </div>

      <div class="lesson">
        <h2>報名費用</h2>
        <img
          src={require("../image/google_icon/paid.png")}
          alt="paid_icon"
          class="imageinfo"
        ></img>
      </div>
      <div class="lesson">
        <h2>詳細資訊</h2>
        <img
          src={require("../image/google_icon/description.png")}
          alt="description_icon"
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

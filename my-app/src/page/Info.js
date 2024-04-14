import React from "react";

export const Info = () => {
  function attend_click() {
    window.open("https://camp-app.csie.cool/login", "_blank");
  }
  return (
    <div class="attend_info_">
      <section class="lesson">
        <div>
          <h2>日期</h2>
          <p>113 年 7 月 1 日 至 113 年 7 月 5 日</p>
        </div>
        <img
          src={require("../image/google_icon/calendar.png")}
          alt="date_icon"
          class="imageinfo"
        ></img>
      </section>

      <div class="lesson">
        <div>
          <h2>地點</h2>
          <p>國立臺灣師範大學公館校區</p>
        </div>
        <img
          src={require("../image/google_icon/location.png")}
          alt="school_icon"
          class="imageinfo"
        ></img>
      </div>
      <div class="lesson">
        <div>
          <h2>報名時間</h2>
          <p>第一階段：113 年 4 月 20 日 至 113 年 5 月 27 日</p>
        </div>
        <img
          src={require("../image/google_icon/clock.png")}
          alt="clock_icon"
          class="imageinfo"
        ></img>
      </div>

      <div class="lesson">
        <div>
          <h2>報名費用</h2>
          <p>
            新臺幣 9500 元整<br></br>早鳥優惠：新臺幣 8900 元整（113 年 4 月 20 日 至 113 年 4 月 30
            日）
          </p>
        </div>
        <img src={require("../image/google_icon/paid.png")} alt="paid_icon" class="imageinfo"></img>
      </div>
      <div class="lesson">
        <div>
          <h2>詳細資訊</h2>
          <p>
            {" "}
            <a href="https://docs.google.com/document/d/1-IfWEmdciveIbeI3UuuFrzIo26U1mj23lXVqvMRNDCk/edit?usp=sharing">
              報名簡章
            </a>{" "}
          </p>
        </div>
        <img
          src={require("../image/google_icon/description.png")}
          alt="description_icon"
          class="imageinfo"
        ></img>
      </div>

      <button type="button" class="attend_button effect" onClick={attend_click}>
        立即報名
      </button>
    </div>
  );
};

export default Info;

import React from "react";

export const Info = () => {
  function attend_click() {
    window.location.replace("https://camp-app.csie.cool/login");
  }

  return (
    <div class="attend_info_">
      {/* <div class="early_bird-notice">
        <p>早鳥優惠進行中</p>
      </div> */}
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
          <h2>住宿地點</h2>
          <p>
            <a href="https://guidehotel.com.tw/hotel-detail/1052">承攜行旅 臺北重慶館</a>
            <br></br>103 臺北市大同區臺北市大同區重慶北路一段 62 號
          </p>
        </div>
        <img
          src={require("../image/google_icon/hotel.png")}
          alt="hotel_icon"
          class="imageinfo"
        ></img>
      </div>
      <div class="lesson">
        <div>
          <h2>報名時間</h2>
          <p>
            <del class="time_up">第一階段：113 年 4 月 20 日 至 113 年 5 月 20 日</del>（已截止）
          </p>
          <p>第一階段錄取名單公布：113 年 5 月 27 日</p>
          <p>第一階段繳費期限：113 年 6 月 1 日</p>
          <p>第二階段：113 年 6 月 1 日 至 113 年 6 月 7 日</p>
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
            新臺幣 9500 元整<br></br>
            <div class="early_bird">
              {/* <span class="early_bird-label">進行中</span> */}
              <span class="early_bird_text">
                早鳥優惠：新臺幣 8900 元整（113 年 4 月 20 日 至 113 年 4 月 30 日） （已截止）
              </span>
            </div>
          </p>
        </div>
        <img src={require("../image/google_icon/paid.png")} alt="paid_icon" class="imageinfo"></img>
      </div>
      <div class="lesson">
        <div>
          <h2>匯款資訊</h2>
          <p>國立臺灣師範大學資訊工程系學會 112 學年度郵局帳號：</p>
          <p>戶名：國立臺灣師範大學資訊工程系學會洪軾凱</p>
          <p>郵局代號：700</p>
          <p>匯款帳號：0001972 0101705</p>

          <p>
            請在匯款備註註明：<b>2024師大資工營費用</b> 喔
          </p>
        </div>
        <img
          src={require("../image/google_icon/send_money.png")}
          alt="description_icon"
          class="imageinfo"
        ></img>
      </div>
      <div class="lesson">
        <div>
          <h2>詳細資訊</h2>
          <p class="doc-link">
            {" "}
            <a href="https://docs.google.com/document/d/1-IfWEmdciveIbeI3UuuFrzIo26U1mj23lXVqvMRNDCk/edit?usp=sharing">
              點此查看 <b>報名簡章</b>
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

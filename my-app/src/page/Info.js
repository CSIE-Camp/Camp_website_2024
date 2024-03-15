import React from "react";

export const Info = () => {
  function attend_click() {
    window.location.replace("/login");
  }
  return (
    <div class="attend_info_">
      <div class="lesson">
        <h2>日期</h2>
        <img
          src={require("../image/google_icon/calendar.png")}
          alt="date_icon"
          class="imageinfo"
        ></img>
      </div>

      <div class="lesson">
        <h2>地點</h2>
        <img
          src={require("../image/google_icon/location.png")}
          alt="school_icon"
          class="imageinfo"
        ></img>
      </div>
      <div class="lesson">
        <h2>報名時間</h2>
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

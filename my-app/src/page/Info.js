import React from "react";

export const Info = () => {
    function attend_click(){
        window.location.replace('https://www.google.com.tw/')
    }
  return (
    <div class="attend_info_">
        <div class="info">
            <h1 class = 'infotext'>報名資訊</h1>
        </div>
        
        <div class="date">
            <h2 class="datetitle">日期</h2>
            <img src={require("../image/dateicon.jpg")} alt="date_icon" class="dateicon">
                </img>
        </div>
    
        <div class="place">
            <h2 class="placetitle">地點</h2>
            <img src={require("../image/school_icon.png")} alt="school_icon" class="schoolicon"></img>
        </div>
        <div class="time">
            <h2 class="timetitle">報名時間</h2>
            <img src={require("../image/clockicon.png")} alt="clock_icon" class="clockicon"></img>

        </div>
        
        <div class="solo">
            <h2 class="solotitle">個人報名</h2>
            <img src={require("../image/soloicon.png")} alt="solo_icon" class="soloicon"></img>
        </div>
        <div class="group">
            <h2 class="grouptitle">團體報名</h2>
            <img src={require("../image/groupicon.png")} alt="group_icon" class="groupicon"></img>
        </div>

        <button type="button" class="attend_button" onClick={attend_click}>報名營隊</button>

    </div>
  );
};

export default Info;

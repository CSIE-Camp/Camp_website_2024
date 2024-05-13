import React from "react";

export const FAQ = () => {
  return (
    <div id="page_faq">
      {/*
      <div class="comment">
        <h3>
          <center>點擊問題方塊來為你解惑吧！</center>
        </h3>
      </div>
      */}
      <div class="grid-container">
        <div class="cell course-1">
          {" "}
          {/*rwd1 rwd2 的用意是當變成單一 column 的畫寬時，各方塊文字顏色交錯變換。*/}
          <div class="question">
            <div class="category-course">
              <span class="material-symbols-outlined">keyboard</span>
              <span class="text">課程</span>
            </div>
            <p>沒有基礎的適合來參加嗎？</p>
          </div>
          <div class="response">
            <p>非常歡迎。我們的課程都是新手導向，都是在零基礎的情況下設計的。</p>
          </div>
        </div>
        <div class="cell course-2">
          <div class="question">
            <div class="category-course">
              <span class="material-symbols-outlined">keyboard</span>
              <span class="text">課程</span>
            </div>
            <p>我已經有基礎了課程對我而言會不會太簡單？</p>
          </div>
          <div class="response">
            <p>不會。我們會提供補充資料或挑戰任務給已經有基礎的同學挑戰！</p>
          </div>
        </div>
        <div class="cell course-3">
          <div class="question">
            <div class="category-course">
              <span class="material-symbols-outlined">keyboard</span>
              <span class="text">課程</span>
            </div>
            <p>會有教授來上課嗎？</p>
          </div>
          <div class="response">
            <p>會！第一天會有系上的教授為我們帶來《走進 CS》演講。</p>
          </div>
        </div>
        <div class="cell dormitory-1">
          <div class="question">
            <div class="category-dormitory">
              <span class="material-symbols-outlined">hotel</span>
              <span class="text">住宿</span>
            </div>
            <p>住宿是幾人一間？需要帶睡袋嗎？</p>
          </div>
          <div class="response">
            <p>
              都是兩人一間，不用帶睡袋哦。好奇的話可以看一下「承攜行旅 台北重慶館」的房間圖片。{" "}
            </p>
          </div>
        </div>
        <div class="cell dormitory-2">
          <div class="question">
            <div class="category-dormitory">
              <span class="material-symbols-outlined">hotel</span>
              <span class="text">住宿</span>
            </div>
            <p>可以不要跟大家一起住宿嗎？</p>
          </div>
          <div class="response">
            <p>
              課程安排中有包含小隊的團體實作，而多數討論的時間會在回到旅館之後。因此會要求各學員住宿，以便進行小組討論。{" "}
            </p>
          </div>
        </div>
        <div class="cell register-1">
          <div class="question">
            <div class="category-register">
              <span class="material-symbols-outlined">done_all</span>
              <span class="text">報名</span>
            </div>
            <p>我怎麼知道我有沒有報名成功？</p>
          </div>
          <div class="response">
            <p>
              完成所有報名小任務後，會出現申請報名的按鈕，點下去出現「報名已受理」即代表報名成功！
            </p>
          </div>
        </div>
        <div class="cell register-2">
          <div class="question">
            <div class="category-register">
              <span class="material-symbols-outlined">done_all</span>
              <span class="text">報名</span>
            </div>
            <p>按下報名後還可以修改個人資料嗎？</p>
          </div>
          <div class="response">
            <p>可以。在個人資料中點選「編輯」即可修改，不用點選「取消報名」再修改哦！</p>
          </div>
        </div>
        <div class="cell register-3">
          <div class="question">
            <div class="category-register">
              <span class="material-symbols-outlined">done_all</span>
              <span class="text">報名</span>
            </div>
            <p>早鳥優惠的時間是怎麼計算的？</p>
          </div>
          <div class="response">
            <p>
              以最後點選「申請報名」的時間為準，也就是 5/1 00:00 開始不要亂玩「取消報名」按鈕哦！
            </p>
          </div>
        </div>
        <div class="cell register-4">
          <div class="question">
            <div class="category-register">
              <span class="material-symbols-outlined">done_all</span>
              <span class="text">報名</span>
            </div>
            <p>個人資料填寫中和程式相關的問題是否會影響錄取？</p>
          </div>
          <div class="response">
            <p>不會。這個問題僅供我們做分隊的參考。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

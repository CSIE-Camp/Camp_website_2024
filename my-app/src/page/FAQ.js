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
        <div class="grid-item wide rwd1">
          {" "}
          {/*rwd1 rwd2 的用意是當變成單一 column 的畫寬時，各方塊文字顏色交錯變換。*/}
          <div class="question">
            <div class="category-course">
              <span class="material-symbols-outlined">keyboard</span>
              <span class="text">課程</span>
            </div>
            <p>上課需要什麼先備知識？</p>
          </div>
          <div class="response">
            <p>
              回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1
              回覆 1 回覆 1 回覆 1 回覆 1{" "}
            </p>
          </div>
        </div>
        <div class="grid-item narrow rwd2">
          <div class="question">
            <div class="category-dormitory">
              <span class="material-symbols-outlined">hotel</span>
              <span class="text">住宿</span>
            </div>
            <p>上課內容是什麼？</p>
          </div>
          <div class="response">
            <p>回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 </p>
          </div>
        </div>
        <div class="grid-item narrow rwd1">
          <div class="question">
            <div class="category-register">
              <span class="material-symbols-outlined">done_all</span>
              <span class="text">報名</span>
            </div>
            <p>要如何報名？</p>
          </div>
          <div class="response">
            <p>回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 </p>
          </div>
        </div>
        <div class="grid-item wide s rwd2">
          <div class="question">
            <div class="category-course">
              <span class="material-symbols-outlined">keyboard</span>
              <span class="text">課程</span>
            </div>
            <p>報名的資格有限制嗎？</p>
          </div>
          <div class="response">
            <p>
              回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1
              回覆 1 回覆 1 回覆 1 回覆 1{" "}
            </p>
          </div>
        </div>
        <div class="grid-item wide rwd1">
          <div class="question">
            <div class="category-course">
              <span class="material-symbols-outlined">keyboard</span>
              <span class="text">課程</span>
            </div>
            <p>從哪裡獲得最新資訊？</p>
          </div>
          <div class="response">
            <p>
              回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1
              回覆 1 回覆 1 回覆 1 回覆 1{" "}
            </p>
          </div>
        </div>
        <div class="grid-item narrow rwd2">
          <div class="question">
            <div class="category-dormitory">
              <span class="material-symbols-outlined">hotel</span>
              <span class="text">住宿</span>
            </div>
            <p>退費機制？</p>
          </div>
          <div class="response">
            <p>回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 回覆 1 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

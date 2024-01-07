import React from "react";

const Exam = () => {
  return (
    <div id="examPage">
      <h1>小測驗</h1>
      <hr width="80%" />
      <form>
        <div id="question1" className="question">
          <div>1. 營隊舉辦的日期是哪時候呢?(請參閱報名資訊)</div>
          <label>
            <input type="radio" value="A" />
            7/4~7/7
          </label>
          <label>
            <input type="radio" value="B" />
            7/3~7/6
          </label>
          <label>
            <input type="radio" value="C" />
            7/3~7/7
          </label>
        </div>
        <div id="question2" className="question">
          <div>2. 報名費用為多少新台幣呢?(請參閱報名資訊)</div>
          <label>
            <input type="radio" value="A" />
            6000
          </label>
          <label>
            <input type="radio" value="B" />
            6500
          </label>
          <label>
            <input type="radio" value="C" />
            7000
          </label>
        </div>
        <div id="question3" className="question">
          <div>3. 下列哪項「不是」你在營隊會學到的東西?(請參閱營隊介紹)</div>
          <label>
            <input type="radio" value="A" />
            製作網頁
          </label>
          <label>
            <input type="radio" value="B" />
            網路安全與密碼學
          </label>
          <label>
            <input type="radio" value="C" />
            製作 Discord Bot
          </label>
          <label>
            <input type="radio" value="C" />
            製作虛擬實境
          </label>
        </div>
        <div id="question3" className="question">
          <div>4. 下列哪項事情在營隊期間可以做?(請參閱報名資訊)</div>
          <label>
            <input type="radio" value="A" />
            突然想吃麥當勞所以自己偷偷跑出去吃麥當勞
          </label>
          <label>
            <input type="radio" value="B" />
            突然想吃麥當勞所以跟隊輔哥哥姊姊們鬧脾氣
          </label>
          <label>
            <input type="radio" value="C" />
            突然想吃麥當勞所以簽下離營安全保證書了哦
          </label>
          <label>
            <input type="radio" value="C" />
            突然想吃麥當勞所以自己偷偷在校門口領外送
          </label>
        </div>
        <button type="submit">對答案</button>
      </form>
    </div>
  );
};

export default Exam;

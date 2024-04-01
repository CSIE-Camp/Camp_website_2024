import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-h1">營隊介紹</h1>
      <section className="about">
        <p>
        長達 62 天的暑假即將到來～但度芬疏失卻不見，然而更糟的是，他的終結者正在暴走！？！？<br></br>
        各位特務們，邪惡的度芬疏失又在耍詭計！聽說他已經關在大樓長達一個月沒有出現了，我需要你趕快查出度芬疏失的下落！事態緊急！快跟著你們學長特務 P 的腳步！找出隱藏在四州地區背後的可怕真相！
        </p>
      </section>

      <h1 className="text-h1">課程介紹</h1>
      <section className="lesson">
        <div>
          <h2>Python 基礎</h2>
          <p>學習 Python 程式語言的基礎知識，包括語法、變數、迴圈等。</p>
        </div>

        <img src={require("../image/google_icon/code.png")} alt="base" class="image" />
      </section>

      <section className="lesson">
        <div>
          <h2>ML 教學</h2>
          <p>深入了解機器學習的基本概念，並實際應用在問題解決上。</p>
        </div>

        <img src={require("../image/google_icon/brain.png")} alt="machine learing" class="image" />
      </section>

      <section className="lesson">
        <div>
          <h2>Python 進階</h2>
          <p>進階 Python 程式設計，包括函式式程式設計、物件導向等進階主題。</p>
        </div>

        <img src={require("../image/google_icon/pattern.png")} alt="advanced" class="image" />
      </section>

      <section className="lesson">
        <div>
          <h2>Pygame 遊戲設計</h2>
          <p>使用 Pygame 框架開發簡單的遊戲，學習遊戲開發的基本原理。</p>
        </div>

        <img src={require("../image/google_icon/game.png")} alt="pygame" class="image" />
      </section>

      <section className="lesson">
        <div>
          <h2>資訊安全</h2>
          <p>介紹資訊安全的基本概念，並學習保護系統和數據的方法。</p>
        </div>

        <img
          src={require("../image/google_icon/security.png")}
          alt="information security"
          class="image"
        />
      </section>
    </div>
  );
};
export default About;

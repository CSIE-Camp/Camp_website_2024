import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-h1">營隊介紹</h1>
      <section className="about">
        <p>
          長達 62 天的暑假即將到來～但度芬疏失卻不見，然而更糟的是，他的終結者正在暴走！？！？
          <br></br>
          各位特務們，邪惡的度芬疏失又在耍詭計！聽說他已經關在大樓長達一個月沒有出現了，我需要你趕快查出度芬疏失的下落！事態緊急！快跟著你們學長特務
          P 的腳步！找出隱藏在四州地區背後的可怕真相！
        </p>
      </section>

      <h1 className="text-h1">課程介紹</h1>
      <section className="lesson">
        <div>
          <h2>Python 基礎</h2>
          <p>
            本課程旨在介紹 Python 程式語言的基礎概念，以及在實際應用中常用的功能。學員將學習如何使用
            Python
            處理輸出、計算、變數、條件判斷、迴圈、串列、字典等基礎知識。此外，課程將提供實際練習和案例，以幫助學員更好地理解和應用所學知識。
          </p>
        </div>

        <img src={require("../image/google_icon/code.png")} alt="base" class="image" />
      </section>

      <section className="lesson">
        <div>
          <h2>Python 進階</h2>
          <p>
            學完了 Python 基礎的課程後，我們會帶你們學習更多更進階的 Python
            功能，如：物件導向、Class、如何使用函式庫、Try & Except 還有 Python
            虛擬環境的架設，讓你們對 Python 的世界有更深的了解。
          </p>
        </div>

        <img src={require("../image/google_icon/pattern.png")} alt="advanced" class="image" />
      </section>

      <section className="lesson">
        <div>
          <h2>Pygame 遊戲設計</h2>
          <p>
            這門課程將介紹 Pygame 的基礎語法，並透過簡單的練習來幫助學員熟悉 Pygame
            的操作。這樣他們可以了解如何撰寫基本的遊戲程式碼。課程中還將安排實際動手操作的部分，我們會準備好一個遊戲的程式碼，接著讓學員們互相合作，實作出遊戲其它的一些功能。最後，我們將進行一場比賽，讓學員們展示他們所學，並享受競爭的樂趣。
          </p>
        </div>

        <img src={require("../image/google_icon/game.png")} alt="pygame" class="image" />
      </section>

      <section className="lesson">
        <div>
          <h2>ML 教學</h2>
          <p>
            看著每天新聞上滿滿 AI 的話題、遊手好閒玩著
            ChatGPT，然而卻總是霧裡看花嗎？這門課當中，我們將在 3
            小時帶領你從基礎的機器學習知識開始探索，到文字、圖像、數據等各領域應用上的概念；並且手把手運用程式碼進行圖像辨識實作，訓練一個屬於你的機器學習模型，你將不再與
            AI 遙不可及！
          </p>
        </div>

        <img src={require("../image/google_icon/brain.png")} alt="machine learing" class="image" />
      </section>

      <section className="lesson">
        <div>
          <h2>資訊安全</h2>
          <p>
            在當今數位時代，資訊安全已成為一門不可或缺的學問。營隊間將開設一門資訊安全課程，旨在培養學生對於網路安全的基本認知與實戰技能。在課程中，我們引入滲透測試的概念，透過模擬攻擊的方式，讓學生深入了解系統漏洞和弱點可能帶來的風險。隨著近期頻繁發生的網絡攻擊事件，本課程也聚焦於資訊安全技術與防禦策略，更細緻地探討了人類行為模式對安全防護的影響。並透過營期間的活動，學生將領悟安全防範不僅限於技術層面，更需洞察人性的弱點。
          </p>
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

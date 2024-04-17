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
          <h2>機器學習</h2>
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
            想知道什麼是資訊安全中名為滲透測試的東西嗎？ 想知道駭客如何從多個看似不起眼的 Bug
            串成一條攻擊鏈嗎？ 又或者是想盡辦法如何打下一台主機，在受害方加載惡意程式嗎？
            我們會先介紹網路的概念，了解網路協定的程式漏洞，接著透過實戰的方式入侵一台受害者的電腦，在其中蘊含了資安最有名的競賽
            CTF (Capture The Flag) 各種類型的結合，包括密碼學 (Cryptography)、逆向工程
            (Reverse)、有漏洞的服務 (Pwn) 等，甚至還有利用惡意蠕蟲使病毒橫向移動！
            當然最後也會教大家如何從中防禦，有興趣的話簡報最後的部分也會講到課後延伸學習的知識點喔～
            在這堂課你會學到：
            <ul class="class-list">
              <li>網路概念與協定：了解 SMB 的應用及缺陷</li>
              <li>
                逆向工程 Reverse：利用反編譯或反組譯來解析處理 SMB 的驅動程式 (C 語言 & 組合語言)
              </li>
              <li>
                有漏洞的服務 Pwn：尋找 SMB 驅動程式中存在的漏洞、撰寫攻擊腳本
                (此課程不會教大家如何撰寫攻擊腳本)
              </li>
              <li>蠕蟲病毒 Ransomware：了解被加密了哪些檔案</li>
            </ul>
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

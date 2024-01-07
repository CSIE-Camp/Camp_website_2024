import React, { useState } from "react";

const About = () => {
  const [summaryClick, setsummaryClick] = useState("");
  let Summary_ctrl = true;

  return (
    <div
      className="aboutFlex"
      onClick={() => {
        if (summaryClick !== "" && Summary_ctrl) setsummaryClick("");
        Summary_ctrl = true;
      }}
    >
      <div className="aboutBox">
        <h1>營隊介紹</h1>
        <div className="intro">
          <div className="secondTitle">
            <h2>
              <img
                src={require("../image/iconForSecondTitle.png")}
                className="secondTitle"
                alt="Zelda!"
              ></img>{" "}
              主題介紹
            </h2>
          </div>

          <p>
            精心開發的 MMORPG 虛擬實境遊戲，綠樹公司所舉辦的 Challenger
            大賽即將震撼開幕！每五年一次的盛事，讓您體驗生存挑戰競賽，今年更在空島上舉行，絕對是您不容錯過的難得機會！更讓人振奮的是，五年前的冠亞軍，史考特和利奧拉，也將再次出現在競技場上，為爭奪冠軍而戰！趕快加入我們的行列，挑戰冠軍的頭銜，一同在遊戲中創造不朽的傳說！
          </p>
        </div>
        <div className="intro">
          <div className="secondTitle">
            <h2>
              <img
                src={require("../image/iconForSecondTitle.png")}
                className="secondTitle"
                alt="Treasure!"
              ></img>{" "}
              課程介紹
            </h2>
          </div>
          <div className="courseList">
            <div className="detail">
              <div
                className={`summary ${summaryClick === "1_active" ? "click-true" : "click-false"}`}
                onClick={(e) => {
                  !e.currentTarget.classList.contains("click-true")
                    ? setsummaryClick("1_active")
                    : setsummaryClick("");
                  Summary_ctrl = false;
                }}
              >
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                來做自己專屬的 BLOG 吧!
                <img src={require("../image/arrowDown.png")} className="summary " alt="down"></img>
              </div>
              <div
                className="hidden"
                onClick={() => {
                  Summary_ctrl = false;
                }}
              >
                <div className="hidden_text">
                  網路上充滿許多的部落格，美食、科技等甚麼都有，甚麼都不奇怪。想知道怎麼從零打造展現自己獨特性的部落格嗎？想做出自己的學習歷程網站讓教授眼睛一亮嗎？
                  <br />
                  透過這門課，我們會手把手地教你如何製作一個精美的部落格網站！從創建 Markdown
                  開始，一步步使用 Hugo 與 GitHub
                  完成部落格網站的搭建。這門課程涵蓋從頭到尾的所有步驟，讓你能夠掌握建立部落格的技巧。無論你對網站開發毫無經驗，還是已經有基本技能，這門課都會讓你獲益匪淺！
                  <br />
                  在這堂課你會學到：
                  <br />
                  <ul>
                    <li>Markdown：用簡單的方式創造不簡單的筆記</li>
                    <li>GitHub：分享與管理你的程式鉅作</li>
                    <li>Hugo：做出獨一無二的部落格</li>
                  </ul>
                  <br />
                  快來師大資工營，創造專屬於自己的網站，並透過持續的編輯，打造具有個人魅力的知識空間吧！
                  <a href="https://www.instagram.com/p/CrVZKO3pzQ7/?igshid=YmMyMTA2M2Y=">
                    IG 貼文連結
                  </a>
                </div>
              </div>
            </div>
            <div className="detail">
              <div
                className={`summary ${summaryClick === "2_active" ? "click-true" : "click-false"}`}
                onClick={(e) => {
                  !e.currentTarget.classList.contains("click-true")
                    ? setsummaryClick("2_active")
                    : setsummaryClick("");
                  Summary_ctrl = false;
                }}
              >
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                創造屬於你的discord bot
                <img src={require("../image/arrowDown.png")} className="summary" alt="down"></img>
              </div>
              <div
                className="hidden"
                onClick={() => {
                  Summary_ctrl = false;
                }}
              >
                <div className="hidden_text">
                  Discord
                  是提供語音和文字聊天功能的平台，是許多遊戲社群的首選。在這個課程中，我們會協助你使用
                  Discord Bot 的開發框架，創建出能夠回答問題、玩遊戲等多種有趣功能的機器人。
                  <br />
                  此外，這堂課也會融合現在討論度很高的 ChatGPT 背後的 OpenAI API！透過 ChatGPT
                  的自然語言處理技術，無論是回答問題、編寫文章、玩遊戲，都能夠如同真人般應答如流。
                  <br />
                  最後，即使是沒有程式設計經驗的新手也不用擔心！我們的課程會從基礎的寫程式技巧開始，引導你進入
                  Discord Bot 開發的世界。
                  <br />
                  透過這個課程，你將掌握以下技能：
                  <br />
                  <ul>
                    <li>從 0 開始的 Node.js 程式設計</li>
                    <li>Discord Bot 開發的基礎知識</li>
                    <li>設計 prompt 讓 ChatGPT 的回應更準確、更符合需求</li>
                  </ul>
                  <a href="https://www.instagram.com/p/Cq0Bxk8JIMa/?igshid=YmMyMTA2M2Y=">
                    IG 貼文連結
                  </a>
                </div>
              </div>
            </div>
            <div className="detail">
              <div
                className={`summary ${summaryClick === "3_active" ? "click-true" : "click-false"}`}
                onClick={(e) => {
                  !e.currentTarget.classList.contains("click-true")
                    ? setsummaryClick("3_active")
                    : setsummaryClick("");
                  Summary_ctrl = false;
                }}
              >
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                Web Design & Developement
                <img src={require("../image/arrowDown.png")} className="summary" alt="down"></img>
              </div>
              <div
                className="hidden"
                onClick={() => {
                  Summary_ctrl = false;
                }}
              >
                <div className="hidden_text">
                  相信大家一定對網頁不陌生吧！
                  <br />
                  想知道網購平台或社群媒體的精美網站是怎麼做出來的嗎？
                  <br />
                  想做出一個酷酷專屬於自己的學習歷程網站嗎？
                  <br />
                  在這堂課「網頁設計與開發」的課程，我們會從最基礎易懂的部分開始，帶你們做出一個自己的網站！透過網站展現你的個人特質與專業形象，吸引更多人的注意力，為學習歷程檔案增加亮點吧！
                  <br />
                  最後偷偷告訴你們，我們也會與 Discord Bot
                  課程連結，做出屬於自己的網站儀表板，敬請期待吧！
                  <br />
                  在這堂課你會學到：
                  <ul>
                    <li>網路原理及網頁的基本概念</li>
                    <li>網頁骨架（HTML 語法）</li>
                    <li>網頁美觀及創作（CSS & SCSS 語法）</li>
                  </ul>
                  <br />
                  —《你不需要很厲害才開始學網頁，但你要開始才能變得更厲害。》
                  <br />
                  <a href="https://www.instagram.com/p/CrDu9fbpv9U/?igshid=YmMyMTA2M2Y=">
                    IG 貼文連結
                  </a>
                </div>
              </div>
            </div>
            <div className="detail">
              <div
                className={`summary ${summaryClick === "4_active" ? "click-true" : "click-false"}`}
                onClick={(e) => {
                  !e.currentTarget.classList.contains("click-true")
                    ? setsummaryClick("4_active")
                    : setsummaryClick("");
                  Summary_ctrl = false;
                }}
              >
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                Cyber Security Stuff
                <img src={require("../image/arrowDown.png")} className="summary" alt="down"></img>
              </div>
              <div
                className="hidden"
                onClick={() => {
                  Summary_ctrl = false;
                }}
              >
                <div className="hidden_text">
                  領過 6000
                  元了嗎？知道他們是怎麼防止別人領走你的份或是重複領嗎？沒錯，他們使用了資料庫！
                  <br />
                  這堂課會告訴你什麼是資料庫，以及如何實際應用它！想在 Discord Bot 上做文字 RPG
                  或是記帳程式嗎？我們會協助你運用資料庫安全的儲存各種資料。
                  <br />
                  你曾經有過資料外洩的經驗嗎？肯定有，全台灣 2300
                  萬人的個資早就在網路上販賣了。我們在這堂課會帶你認識 SQL
                  injection（資料隱碼攻擊）如何防禦，守護你的遊戲公正性！
                  <br />
                  在玩別隊設計的遊戲都打不贏嗎？當然我們也會教你如何攻擊，並實際運用所學，嘗試破解其他小隊的資料庫。攻擊！防禦！來打一場資料攻防戰吧！
                  <br />
                  透過這個課程，你將掌握以下技能：
                  <br />
                  <ul>
                    <li>資料庫基本知識</li>
                    <li>SQL 的基本語法</li>
                    <li>SQL injection 如何攻擊與防範</li>
                  </ul>
                  <a href="https://www.instagram.com/p/Cq7wNTHJvli/?igshid=YmMyMTA2M2Y=">
                    IG 貼文連結
                  </a>
                </div>
              </div>
            </div>
            <div className="detail">
              <div
                className={`summary ${summaryClick === "5_active" ? "click-true" : "click-false"}`}
                onClick={(e) => {
                  !e.currentTarget.classList.contains("click-true")
                    ? setsummaryClick("5_active")
                    : setsummaryClick("");
                  Summary_ctrl = false;
                }}
              >
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                基礎密碼學 - 從古典到現代
                <img src={require("../image/arrowDown.png")} className="summary" alt="down"></img>
              </div>
              <div
                className="hidden"
                onClick={() => {
                  Summary_ctrl = false;
                }}
              >
                <div className="hidden_text">
                  想知道如何加密出一則讓別人看不懂的訊息嗎？🔐 <br />
                  想知道怎麼在沒有密鑰的情況下 🕵️破密
                  <br />
                  想知道怎麼在沒有密鑰的情況下，破密 一則像 59,58,55,30,59,54,67,7a 這樣的訊息嗎？🕵️‍♀️
                  <br />
                  我們會先介紹密碼學的歷史，從古希臘/羅馬時期的替換式密碼出發，經歷二戰時期的 Enigma
                  轉盤機，再介紹現代加密的方法！
                  <br />
                  最後，這堂課還會有一個「神秘的手作作品」能帶回家做紀念！🥳 <br />
                  <br />
                  對密碼學產生好奇？或是想知道一開始的神秘字串要如何解開？那就快報名參加師大資工營，讓我們來一同揭開密碼學的神秘面紗吧！
                  <br />
                  在這堂課你會學到：
                  <br />
                  <ul>
                    <li>古典密碼學：移項式、替換式等基礎加密方式</li>
                    <li>現代密碼學：DES、RSA 等現代加密演算法</li>
                    <li>工具應用：應用各種工具，解決密碼學問題</li>
                  </ul>
                  <a href="https://www.instagram.com/p/CrLOQCFJSta/?igshid=YmMyMTA2M2Y=">
                    IG 貼文連結
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default About;

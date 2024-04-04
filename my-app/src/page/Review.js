import React, { useEffect, useState } from "react";
//import ReviewScript from "./Review_script.js";
const review_up_image_totle = 10;
//let actoncekey = 1;

//生成<img>的函式
const img_produce = (img_num, year) => {
  let img_output = [];
  let tempa;
  for (let i = 0; i < img_num; i++) {
    tempa = "review_up_imageNum_" + i; //建立除錯用的id
    img_output.push(
      <img
        src={require(`../image/photo_review/${i}.jpg`)}
        alt="review_up_image"
        id={tempa}
        className="review_up_image"
        key={tempa}
      ></img>,
    );
  }
  return img_output;
};

//生成點點的函式
const dot_produce = (img_num) => {
  let dot_output = [];
  let tempa;
  for (let i = 0; i < img_num; i++) {
    tempa = "review_up_dotNum_" + i; //建立編號、這次的功能不只為了除錯
    dot_output.push(<div id={tempa} className="review_up_dot" key={tempa}></div>);
  }
  return dot_output;
};

const ReviewScript = () => {
  const ri_arrow_l = document.getElementById("ri_arrow_l"); //抓左邊箭頭
  const ri_arrow_r = document.getElementById("ri_arrow_r"); //抓右邊箭頭
  const img_array = document.querySelectorAll(".review_up_image"); //將圖片設成array
  const review_up_dot = document.querySelectorAll(".review_up_dot");
  const review_up_image_totle = img_array.length;
  const rootStyles = getComputedStyle(document.querySelector("div#page_review"));
  const photo_xd = parseInt(rootStyles.getPropertyValue("--npr--photo_xd"));
  const photo_yd = parseInt(rootStyles.getPropertyValue("--npr--photo_yd"));
  const img_touch_left = document.getElementById("ri_img_touch_left");
  const img_touch_right = document.getElementById("ri_img_touch_right");

  let now_show_img = 0; //最前面是第幾張
  let nsi_temp, img_style;

  //聽左邊的箭頭
  ri_arrow_l.addEventListener("click", () => {
    if (now_show_img <= 0) {
      //超過圖片總數要回到起點
      now_show_img = review_up_image_totle - 1;
    } else {
      now_show_img--;
    }
    img_show_func(now_show_img);
    //console.log("left" + now_show_img);//D3rr0r
  });
  //聽左邊的觸碰
  img_touch_left.addEventListener("click", () => {
    if (now_show_img <= 0) {
      //超過圖片總數要回到起點
      now_show_img = review_up_image_totle - 1;
    } else {
      now_show_img--;
    }
    img_show_func(now_show_img);
  });

  //聽右邊的箭頭
  ri_arrow_r.addEventListener("click", () => {
    if (now_show_img >= review_up_image_totle - 1) {
      //低於0要先到終點
      now_show_img = 0;
    } else {
      now_show_img++;
    }
    img_show_func(now_show_img);
    //console.log("right" + now_show_img);//D3rr0r
  });
  //聽右邊的觸碰
  img_touch_right.addEventListener("click", () => {
    if (now_show_img >= review_up_image_totle - 1) {
      //低於0要先到終點
      now_show_img = 0;
    } else {
      now_show_img++;
    }
    img_show_func(now_show_img);
  });

  //聽下面的點點條
  review_up_dot.forEach((e) => {
    e.addEventListener("click", () => {
      now_show_img = parseInt(e.id.slice(-1)); //切點點的id取編號、記得要轉成數字形式
      img_show_func(now_show_img);
    });
  });

  const dot_show_func = (e, nsi_temp) => {
    switch (
      e //運算第e張圖片時要怎麼顯示
    ) {
      case 0:
        review_up_dot[nsi_temp].style.backgroundColor = "rgb(218, 85, 18)";
        review_up_dot[nsi_temp].style.borderColor = "rgb(218, 85, 18)";
        break;
      case 1:
        review_up_dot[nsi_temp].style.backgroundColor = "rgba(218, 85, 18,0.6)";
        review_up_dot[nsi_temp].style.borderColor = "";
        break;
      case 2:
        review_up_dot[nsi_temp].style.backgroundColor = "rgba(218, 85, 18,0.3)";
        review_up_dot[nsi_temp].style.borderColor = "";
        break;
      default:
        review_up_dot[nsi_temp].style.backgroundColor = "";
        review_up_dot[nsi_temp].style.borderColor = "";
        break;
    }
  };

  const img_show_func = (e) => {
    for (let i = 0; i < review_up_image_totle; i++) {
      nsi_temp = e + i; //第i次迴圈要控制的圖片編號
      //console.log("aaa"+nsi_temp);//D3rr0r
      if (nsi_temp >= review_up_image_totle) {
        nsi_temp = nsi_temp - review_up_image_totle;
      } //超過圖片總數要減掉圖片總數，圖片array是一個圓
      img_style = img_array[nsi_temp].style; //變數好看一點
      img_style.zIndex = ""; //z-index要先歸零，不然會擋到箭頭，還有可能出bug
      if (i <= 2) {
        //要顯示的三張，設transition是為了動起來
        img_style.top = (2 - i) * photo_yd + "vw";
        img_style.right = (2 - i) * photo_xd + "vw";
        img_style.opacity = 1;
        img_style.zIndex = 2 - i;
        img_style.transform = `scale(1)`;
        img_style.filter = `blur(${i * 2}px)`;
      } else if (i === review_up_image_totle - 1) {
        //即將顯示的前一張
        img_style.top = 9 + "vw";
        img_style.right = 9 + "vw";
        img_style.opacity = 0;
        img_style.zIndex = 3;
        img_style.transform = `scale(0)`;
      } else {
        //其他放後面
        img_style.top = (2 - i) * photo_yd + "vw";
        img_style.right = (2 - i) * photo_xd + "vw";
        img_style.opacity = 0;
        img_style.zIndex = 0;
        img_style.transform = `scale(0)`;
        //img_style.transition = "";
      }
      if (i === 0) {
        img_style.border = "5px white solid";
      } else {
        img_style.border = "";
      }
      dot_show_func(i, nsi_temp);
    }
  };
  img_show_func(now_show_img); //先載入一次進行排版
};

export const Review = () => {
  useEffect(() => {
    function fetch_review_script() {
      ReviewScript();
    }
    fetch_review_script();
    // if (actoncekey !== 1) {
    //   ReviewScript();
    // } else {
    //   actoncekey++;
    // }
  }, []);

  const [isShown, setIsShown] = useState(2023);
  const change_year = (year_num) => {
    setIsShown(year_num);
  };

  return (
    <div id="page_review">
      <div className="pageReviewFlex">
        {/* 歷屆 logo */}
        <div id="page_review_year">
          <div id="year_logo" onClick={() => change_year(2023)}>
            <div id="year">2023</div>
            <img src={require("../image/logo_review/2023_logo.png")} alt="review_2023_logo" />
          </div>
          <div id="year_logo" onClick={() => change_year(2022)}>
            <div id="year">2022</div>
            <img src={require("../image/logo_review/2022_logo.png")} alt="review_2022_logo" />
          </div>
          <div id="year_logo" onClick={() => change_year(2021)}>
            <div id="year">2021</div>
            <img src={require("../image/logo_review/2021_logo.png")} alt="review_2021_logo" />
          </div>
          <div id="year_logo" onClick={() => change_year(2020)}>
            <div id="year">2020</div>
            <img src={require("../image/logo_review/2020_logo.png")} alt="review_2020_logo" />
          </div>
          {/* <div id="year_logo" onClick={() => change_year(2019)}>
            <div id="year">2019</div>
            <img src={require("../image/logo_review/2019_logo.png")} alt="review_2019_logo"/>
          </div>
          <div id="year_logo" onClick={() => change_year(2018)}>
            <div id="year">2018</div>
            <img src={require("../image/logo_review/2018_logo.png")} alt="review_2018_logo"/>
          </div> */}
        </div>

        {/* 2023 review course */}
        <div className="year_review" style={{ display: isShown === 2023 ? "flex" : "none" }}>
          <div>
            <div id="review_title">2023</div>
            <div id="review_title">E 級玩家</div>
          </div>
          <div id="rt_content">
            <li>Discord Bot</li>
            <div id="course">
              <p>
                Discord
                是提供語音和文字聊天功能的平台，是許多遊戲社群的首選。在這個課程中，我們會協助你使用
                Discord Bot
                的開發框架，創建出能夠回答問題、玩遊戲等多種有趣功能的機器人。此外，這堂課也會融合現在討論度很高的
                ChatGPT 背後的 OpenAI API！透過 ChatGPT
                的自然語言處理技術，無論是回答問題、編寫文章、玩遊戲，都能夠如同真人般應答如流。
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid02n5Fxd2V7725PXDuJ74zye8wjcDXu8iPLsMSMjRQrEE5He2tE44LFp7ouJmcqawz4l">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>資料庫與資訊安全</li>
            <div id="course">
              <p>
                你曾經有過資料外洩的經驗嗎？肯定有，全台灣 2300
                萬人的個資早就在網路上販賣了。我們在這堂課會帶你認識 SQL
                injection（資料隱碼攻擊）如何防禦，守護你的遊戲公正性！在玩別隊設計的遊戲都打不贏嗎？當然我們也會教你如何攻擊，並實際運用所學，嘗試破解其他小隊的資料庫。攻擊！防禦！來打一場資料攻防戰吧！
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid0MFeoPv7EcPsz4UpqpdCXMoJTysMVnt2xZv3Yn8fFpxcoSbNgRKHm2RwKgcwAuXVTl">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>網頁設計與開發</li>
            <div id="course">
              <p>
                相信大家一定對網頁不陌生吧！想知道網購平台或社群媒體的精美網站是怎麼做出來的嗎？想做出一個酷酷專屬於自己的學習歷程網站嗎？在這堂課「網頁設計與開發」的課程，我們會從最基礎易懂的部分開始，帶你們做出一個自己的網站！透過網站展現你的個人特質與專業形象，吸引更多人的注意力，為學習歷程檔案增加亮點吧！最後偷偷告訴你們，我們也會與
                Discord Bot 課程連結，做出屬於自己的網站儀表板，敬請期待吧！
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid02awwFdTkqNRfDZ4RzfmpnyA6GsC5MoaZF8MyEQmfhwHgZm2TfAEt3eQRHgHHFpstWl">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>密碼學</li>
            <div id="course">
              <p>
                想知道如何加密出一則讓別人看不懂的訊息嗎？🔐想知道怎麼在沒有密鑰的情況下，破密一則像
                59, 58, 55, 30, 59, 54, 67, 7a
                這樣的訊息嗎？🕵️‍♀️我們會先介紹密碼學的歷史，從古希臘／羅馬時期的替換式密碼出發，經歷二戰時期的
                Enigma
                轉盤機，再介紹現代加密的方法！此外，除了上述的知識講解外，本次課程當中也會藉由分組，進行《密碼學解題競賽》！透過大量實作解題的環節，讓學員更能有效的吸收並即時演練上課所學，並將依分數排行頒發獎狀～最後，這堂課還會有一個「神秘的手作作品」能帶回家做紀念！
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid02u4KTSioCRupXKhAppnUJf1MiGkP5c46NxhZ9tChyQAWA2ux8MovydMiXBtTng2pCl">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>部落格</li>
            <div id="course">
              <p>
                網路上充滿許多的部落格，美食、科技等甚麼都有，甚麼都不奇怪。想知道怎麼從零打造展現自己獨特性的部落格嗎？想做出自己的學習歷程網站讓教授眼睛一亮嗎？透過這門課，我們會手把手地教你如何製作一個精美的部落格網站！從創建
                Markdown 開始，一步步使用 Hugo 與 GitHub
                完成部落格網站的搭建。這門課程涵蓋從頭到尾的所有步驟，讓你能夠掌握建立部落格的技巧。無論你對網站開發毫無經驗，還是已經有基本技能，這門課都會讓你獲益匪淺！
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid0eJDq7EL4Nbqf9exmxV4vpua8vaTsQZxZ5z4DDjKxJrkay5ueGiBBz6QMDUZ18XBil">
                更<br />多<br />介<br />紹
              </a>
            </div>
          </div>
        </div>
        {/* 2022 review course */}
        <div className="year_review" style={{ display: isShown === 2022 ? "flex" : "none" }}>
          <div>
            <div id="review_title">2022</div>
            <div id="review_title">CSI:Eden</div>
          </div>
          <div id="rt_content">
            <li>打造專屬於自己的桌布</li>
            <div id="course">
              <p>
                想不想為自己設計一個獨一無二的桌布呢?或是想做一個炫酷的動態桌布🤩我們運用 Rainmeter
                這個軟體，去做出可以不同於 Windows
                系統死板的桌面。我們將教學員們如何自己改動別人做好的套件，藉由改動裡面的參數或指令，做出符合自己期望功能的套件。另外，使用
                Honeycomb
                跟文字改動做為課程主題，學習如何解析與修改別人撰寫的軟體設定檔，打造一個專屬於自己的桌布。
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid02c7D8sYK75spiB6fWyWjh7wkjTGWsbDZhAYLAMmE3RKmj7kAsqjCivybTcK6xguJil">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>最容易掌握的程式語言</li>
            <div id="course">
              <p>
                想學寫程式但不知道先學哪一種程式語言？先學 Python 就對了！Python
                是一種高階程式語言，比起其它程式語言，Python
                所使用的語法更簡潔直觀，容易理解，所以即使沒有任何程式基礎，Python
                都會是很好掌握基本功能的一個程式語言；Python
                也擁有許多的函式庫，能提供許多方便的功能，遇到特定的問題時，只要懂得運用相應的函式庫，就能快速解決，簡直就是程式設計師的哆啦A夢！
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid0tagzVuPUpeKNsp3Bkkr1CFYaFQ4q65i5xRnBABatuZw4Y8HzLD9anZEuZugENpaJl">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>接觸資工界不得不碰的</li>
            <div id="course">
              <p>
                厭倦 Mincrosoft Windows 想要嘗試新的作業系統？GNU/Linux 可謂很不錯的選擇！我們將介紹
                GNU/Linux
                這個特別的作業系統，不僅圖形介面使用簡單，而且系統構造穩定。其中裡面最特別的就是有命令列需要額外記憶，但是別擔心，我們將帶領學員們一步一步，慢慢熟悉與動手實作一些常見且實用的指令。除此之外，GNU/Linux
                比起 Windows，更可以滿足使用者對於高性能 and 高效率的需求。
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid033iFQFRCV46Q8zvg2MVd1eJMqyntxyJAbxPfXw9gYyFwj7VG3sTejRUhWeiGDPLHMl">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>程式設計師與他們的快樂好夥伴</li>
            <div id="course">
              <p>
                你知道該怎麼建立自己的程式作品集嗎？你想和其他開發者學習技術交流嗎？那千萬別錯過學習
                Git 與了解 GitHub 的機會！Git 是一個分散式的版本控制軟體，而 GitHub 則是一個支援 Git
                程式碼存取和遠端托管的平台服務，可用來查找、分享、參與開源程式碼。Git 與 GitHub
                可說是資訊人的必備技能，我們將會帶領學員們熟悉 Git 與
                GitHub，感受他們的威力與好處，可以把你酷酷的程式碼分享出去，也可以和別人一起合作專案，還能向其他開發者學習更優秀的技術。
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid0aMeQLHJs8mYd5V8kg5oBkWvbQLJNPmif9WHzmrEimqXh1Wzfuasot2Zj51Vr9Zkzl">
                更<br />多<br />介<br />紹
              </a>
            </div>
          </div>
        </div>
        {/* 2021 review course */}
        <div className="year_review" style={{ display: isShown === 2021 ? "flex" : "none" }}>
          <div>
            <div id="review_title">2021</div>
            <div id="review_title">Cyberbug</div>
          </div>
          <div id="rt_content">
            <li>Hexo & Git</li>
            <div id="course">
              <p>
                Blog 一直是人們分享生活、共享資訊的平台，網路上充滿著各式各樣的
                Blog，有旅游的、知識的、遊戲的⋯⋯，想知道如何建立屬於自己的 Blog 嗎？在此我們選擇
                Hexo 這款多種亮主題的網框，帶著各位學員們從零開始踏上建立 Blog
                的旅程。不僅教你怎麼建立 Blog，Git 也是 CS
                世界裡常見的名詞，過程中也會手把手教你如何使用 Git，讓你成為網頁設計的 master！
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid0ggNaMc4xkuZmtqQwKCbn96ntRCfUXp1GeFL5JR2nfYN9zsr28qjBtYt25XJBZZQ7l">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>計算機概論</li>
            <div id="course">
              <p>
                資工系又名 Computer Science (and Information Engineering) Computer ...... 電腦
                ......
                計算機！在踏入這片未知的新大陸之前，透過計算機概論這堂課，來了解一切電腦相關的事物吧！電腦是從何時產生的呢？為什麼「電腦」是一種「計算機」呢？一起來了解電腦的演變以及資料在電腦中是如何被處理的吧！
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid02oqUkvivA4NwUunfotrBu41yZusRwQRwta7s7SyRCnDx2ZJTL9XovPGFR5rPg7t7Rl">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>Node.js / Python 開發 Discord Bot</li>
            <div id="course">
              <p>
                想要自己的聊天機器人嗎？不滿於網路上的聊天機器人？只要會基礎的程式使用 Node.js 和
                Python 就能開發出屬於自己的 Discord
                Bot！想要的功能都能自己打造，用自己的雙手寫出理想的聊天機器人！
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid02Vg3CPnk71GHoLMt6qzDQsF3EJXGsfRQxZecEEzUnqvseXevepepLc6HSWKj4eTUrl">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>Python 基礎程式設計</li>
            <div id="course">
              <p>
                Python 一個因為創始者在聖誕節太閒而創造的程式語言現在成為了許多人使用的程式語言之一
                NLP、ML，這幾項技術也時常使用 Python
                為何大家會愛用？為何會變成主流之一？就讓我們在資工營時學習這個程式語言吧！
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid0Sj8HD585P4M5A48nwFx5GDs54x8Mc3LJB6UqzMS6GYTuCcnwBNhAb8opfiraBeXAl">
                更<br />多<br />介<br />紹
              </a>
            </div>
          </div>
        </div>
        {/* 2020 review course */}
        <div className="year_review" style={{ display: isShown === 2020 ? "flex" : "none" }}>
          <div>
            <div id="review_title">2020</div>
            <div id="review_title">BUG</div>
            <div id="review_title"> 與</div>
            <div id="review_title">他們</div>
            <div id="review_title">的</div>
            <div id="review_title">產地</div>
          </div>
          <div id="rt_content">
            <li>C++ 程式設計及實作</li>
            <div id="course">
              <p>
                你是否曾經想過，人們是如何命令電腦呢？今年暑假，讓我們帶你一窺資工系的生活，學習如何以
                C++
                程式語言來和電腦溝通，將其實用於日常生活之中，並將你的想法由電腦展現。這裡有專業的學長，帶你離開微軟，深入
                GNU/Linux 的世界，在了解 C++ 的語法之後，試著使用 C++ 搭配 OpenCV
                函式庫，運用自己獨特的想法，寫出屬於自己的小畫家。相信在完成自己的程式之後，能得到最初的感動，體會程式語言的美好。
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid02zXqXD3oSYhuHqQTJTQodYhRQKyHtKzky5SnwftR2DYTGsvmKigA56YbhrzaHpdml">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>網路 IP 及網頁設計</li>
            <div id="course">
              <p>
                想要成為一個專業的工程師，網頁設計是資工必要的專業技能。如何運用 HTML 及 CSS
                來打造屬於自己的網頁，我們不僅僅手把手教你寫出自己的網頁，也會教你網路世界背後的原理「IP
                位址」，IP
                位址是在錯綜複雜的網路世界中，幫助你準確定位與傳送資訊的重要關鍵，讓你不再迷失於網路世界之中，在你上完所有課程之後，你就會具備暢遊網路世界的能力了。
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid0Yu7k3R9JaR2TbPW6WkzR5qD7CXm3wzLyrrb6pfeuDX7ax5MCpXZCnoH1oGhM5C7Zl">
                更<br />多<br />介<br />紹
              </a>
            </div>
            <br />
            <li>密碼學</li>
            <div id="course">
              <p>
                在現代生活中，密碼無處不在，它背負著保障我們個人隱私的使命。你們是否和我一樣，曾因為看見「密碼強度：弱」，而感到煩悶？它背後判斷所依循的法則到底為何？我們將一步一步地帶你走進這玄幻的密碼學。從符號到數論，從凱薩密碼到
                RSA
                加密，到底如何加密才不會輕易地被破解？又怎麼樣透過解密來獲得自己想要的資訊？這就像是一場戰役，彼此沙盤推演、互相往來，激發你潛藏的駭客魂，讓你在追求勝仗的路上欲罷不能！
              </p>
              <a href="https://www.facebook.com/ntnucsiecamp/posts/pfbid0ycpv4ofWNd7mDC2mecAtSqJv2J81rpUi8NFWNhkfCaUEwfCjsGqWhpZpqSP6EdpYl">
                更<br />多<br />介<br />紹
              </a>
            </div>
          </div>
        </div>

        {/* <div className="year_review" style={{display: isShown === 2019 ? "flex" : "none"}}>
          <div id="review_title">2022 CSI:Eden</div>
          <div id="rt_content">
            1. 自Eden系統誕生以來，社會犯罪率曾經大幅降低，一切都歸功於Eden強大的犯罪現場重現功能。
            <br></br>
            <br></br>
            2. 然而往日的榮光以被「蟒蛇」作為養分嚥下。
            <br></br>
            <br></br>
            3. 不久前，Eden系統被自稱「蟒蛇」的組織攻擊，犯罪現場重現功能失去其意義，社會犯罪率扶搖直上，造就社會動盪、人心惶惶。
            <br></br>
            <br></br>
            4. 上層立即下令調查局徹查此事件，隨著調查的逐漸深入，竟發現案情並沒有調查人員們所想像的那麼單純……
            <br></br>
            <br></br>
            5. 嗨嗨
          </div>
        </div>
        <div className="year_review" style={{display: isShown === 2018 ? "flex" : "none"}}>
          <div id="review_title">2022 CSI:Eden</div>
          <div id="rt_content">
            1. 自Eden系統誕生以來，社會犯罪率曾經大幅降低，一切都歸功於Eden強大的犯罪現場重現功能。
            <br></br>
            <br></br>
            2. 然而往日的榮光以被「蟒蛇」作為養分嚥下。
            <br></br>
            <br></br>
            3. 不久前，Eden系統被自稱「蟒蛇」的組織攻擊，犯罪現場重現功能失去其意義，社會犯罪率扶搖直上，造就社會動盪、人心惶惶。
            <br></br>
            <br></br>
            4. 上層立即下令調查局徹查此事件，隨著調查的逐漸深入，竟發現案情並沒有調查人員們所想像的那麼單純……
            <br></br>
            <br></br>
            5. 嗨嗨
          </div>
        </div> */}

        <div id="page_review_up">
          <div id="ri_up_1">
            <div id="ri_arrow_l" className="ri_arrow_c">
              <div id="ri_arrow_m1" className="ri_arrow_m"></div>
              <div id="ri_arrow_m2" className="ri_arrow_m"></div>
              <div id="ri_arrow_m3" className="ri_arrow_m"></div>
            </div>
            <div id="ri_img_container">
              <div id="ri_img_touch_left"></div>
              <div id="ri_img_touch_right"></div>
              {img_produce(review_up_image_totle)}
            </div>
            <div id="ri_arrow_r" className="ri_arrow_c">
              <div id="ri_arrow_m1" className="ri_arrow_m"></div>
              <div id="ri_arrow_m2" className="ri_arrow_m"></div>
              <div id="ri_arrow_m3" className="ri_arrow_m"></div>
            </div>
          </div>
          <div id="ri_up_2">
            <div id="ri_img_dotbar" className="dot_bar">
              {dot_produce(review_up_image_totle)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

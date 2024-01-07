import React, { useEffect } from "react";
//import ReviewScript from "./Review_script.js";
const review_up_image_totle = 10;
//let actoncekey = 1;

//生成<img>的函式
const img_produce = (img_num) => {
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
  return (
    <div id="page_review">
      <div className="pageReviewFlex">
        <div id="page_review_down">
          <div id="rt_title">2022 CSI:Eden</div>
          <div id="rt_content">
            自Eden系統誕生以來，社會犯罪率曾經大幅降低，一切都歸功於Eden強大的犯罪現場重現功能。
            <br></br>
            <br></br>
            然而往日的榮光以被「蟒蛇」作為養分嚥下。
            <br></br>
            <br></br>
            不久前，Eden系統被自稱「蟒蛇」的組織攻擊，犯罪現場重現功能失去其意義，社會犯罪率扶搖直上，造就社會動盪、人心惶惶。
            <br></br>
            <br></br>
            上層立即下令調查局徹查此事件，隨著調查的逐漸深入，竟發現案情並沒有調查人員們所想像的那麼單純……
          </div>
        </div>
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

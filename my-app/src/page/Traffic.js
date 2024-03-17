import React, { useState } from "react";

const Traffic = () => {
  const [clickedBtn, setClickedBtn] = useState("metro");

  function metro() {
    setClickedBtn("metro");
    let content = document.getElementById("tra-metro");
    let computedStyle = window.getComputedStyle(content);
    if (computedStyle.getPropertyValue("display") === "none") {
      content.style.display = "block";
      document.getElementById("tra-bus").style.display = "none";
      document.getElementById("tra-car").style.display = "none";
    }
    // content.style.display = "none";
  }

  function bus() {
    setClickedBtn("bus");
    let content = document.getElementById("tra-bus");
    let computedStyle = window.getComputedStyle(content);
    if (computedStyle.getPropertyValue("display") === "none") {
      content.style.display = "block";
      document.getElementById("tra-metro").style.display = "none";
      document.getElementById("tra-car").style.display = "none";
    }
    // content.style.display = "none";
  }

  function car() {
    setClickedBtn("car");
    let content = document.getElementById("tra-car");
    let computedStyle = window.getComputedStyle(content);
    if (computedStyle.getPropertyValue("display") === "none") {
      content.style.display = "block";
      document.getElementById("tra-metro").style.display = "none";
      document.getElementById("tra-bus").style.display = "none";
    }
    // content.style.display = "none";
  }

  function loading() {
    const load = document.getElementById("loading-block");
    load.style.display = "block";
    load.style.console.log(load.style.display);
    load.addEventListener("mouseover", () => {
      console.log("mouse");
    });
  }

  function off() {
    const load = document.getElementById("loading-block");
    load.style.display = "none";
  }

  return (
    <>
      <div className="container">
        <div className="traffic-info">
          <h3 className="ntnu-address">臺灣師範大學公館校區（師大分部）</h3>
          <h3 className="ntnu-address">
            11677 台北市文山區汀州路四段 88 號 應用科學大樓一樓 資訊工程學系
          </h3>
        </div>
        <div className="map-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2149.9659516315546!2d121.53552866807054!3d25.007001962683137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9602b8f4639%3A0x32245faca67b22c9!2z5ZyL56uL6Ie654Gj5bir56-E5aSn5a246LOH6KiK5bel56iL5a2457O75pqo56CU56m25omA!5e0!3m2!1sen!2stw!4v1710680069146!5m2!1sen!2stw"
            /*width="600"
            height="450"*/
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="traffic-method">
          <div className="traffic-block">
            <button
              className={clickedBtn === "metro" ? "traffic-btn clicked" : "traffic-btn"}
              onClick={metro}
            >
              搭乘捷運
            </button>
            <button
              className={clickedBtn === "bus" ? "traffic-btn clicked" : "traffic-btn"}
              onClick={bus}
            >
              搭乘公車
            </button>
            <button
              className={clickedBtn === "car" ? "traffic-btn clicked" : "traffic-btn"}
              onClick={car}
            >
              自行開車
            </button>
          </div>
        </div>
        <div id="tra-metro">
          <div
            style={{
              marginBottom: "30px",
              justifyContent: "center",
              fontSize: "30px",
              marginLeft: "13%",
              marginTop: "3%",
            }}
          ></div>
          <p className="method-sub-title">搭乘捷運</p>
          <div className="outside-traffic">
            <div className="traffic-metro">
              <div className="metro-method">
                {/* <div
                  style={{
                    display: "grid",
                    // placeItems: "center",
                    gap: "4px",
                    gridAutoFlow: "column",
                  }}
                > */}
                <div className="ctrl-path">
                  <div className="spot-block">
                    <img src={require("../image/google_icon/metro.png")} className="metro-image" />
                  </div>
                  <div className="line">
                    <p>
                      搭乘<span class="green-text"> 綠 </span>線
                    </p>
                    <div>
                      <div
                        // onMouseOver={loading}
                        // onMouseDown={off}
                        className="straight-line"
                        // style={{ width: "150px", position: "relative" }}
                      >
                        {/*150*/}
                        {/*
                        <div id="loading-block">
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                        </div>
                */}
                      </div>
                    </div>
                  </div>
                  <div className="spot-block">
                    捷運公館站
                    <br />1 號出口
                  </div>
                  <div className="line">
                    <p>
                      <span class="material-symbols-rounded">directions_walk</span>
                      <span class="material-symbols-rounded">arrow_downward</span>
                      <br />
                      沿羅斯福路往南
                      <br />約 11 分鐘抵達
                    </p>
                    <div className="straight-line"></div> {/*150*/}
                  </div>
                  <div className="spot-block">
                    國立臺灣師範大學 <br />
                    公館校區門口
                  </div>
                  <div className="line">
                    <p>
                      <span class="material-symbols-rounded">directions_walk</span>
                      <span class="material-symbols-rounded">arrow_top_left</span>
                      <br />
                      直行進入校園
                      <br />
                      經過紫紅色建築後左轉
                    </p>
                    <div className="straight-line"></div> {/*150*/}
                  </div>
                  <div className="spot-block">
                    應用科學大樓 <br />
                    一樓集合地
                  </div>
                </div>
              </div>
            </div>
            <div className="traffic-metro">
              <div className="metro-method" style={{ marginTop: "50px", marginBottom: "50px" }}>
                {/* <div
                  style={{
                    display: "grid",
                    // placeItems: "center",
                    gap: "4px",
                    gridAutoFlow: "column",
                  }}
                > */}
                <div className="ctrl-path">
                  <div className="spot-block">
                    <img src={require("../image/google_icon/metro.png")} className="metro-image" />
                  </div>
                  <div className="line">
                    <p>
                      搭乘<span class="green-text"> 綠 </span>線
                    </p>
                    <div className="straight-line"></div>
                    {/*150*/}
                  </div>
                  <div className="spot-block">
                    捷運萬隆站
                    <br />4 號出口
                  </div>
                  <div className="line">
                    <p>
                      <span class="material-symbols-rounded">directions_walk</span>
                      <span class="material-symbols-rounded">arrow_upward</span>
                      <br />
                      沿羅斯福路往北
                      <br />約 10 分鐘抵達
                    </p>
                    <div className="straight-line"></div> {/*300*/}
                  </div>
                  <div className="spot-block">
                    國立臺灣師範大學 <br />
                    公館校區門口
                  </div>
                  <div className="line">
                    <p>
                      <span class="material-symbols-rounded">directions_walk</span>
                      <span class="material-symbols-rounded">arrow_top_left</span>
                      <br />
                      直行進入校園
                      <br />
                      經過紫紅色建築後左轉
                    </p>
                    <div className="straight-line"></div> {/*150*/}
                  </div>
                  <div className="spot-block">
                    應用科學大樓 <br />
                    一樓集合地
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{ display: "flex", marginTop: "8%" }}>
            <div>
              <b>
                <p className="bus-title">搭乘公車</p>
              </b>
              <img src={require("../image/bus.png")} className="bus-image" />
            </div>
            <div className="bus-method"></div>
          </div> */}
          <p></p>
        </div>
        <div id="tra-bus">
          <p className="method-sub-title">搭乘公車</p>
          <div className="outside-traffic">
            <div className="traffic-metro">
              <div className="bus-method">
                {/* <div
                  style={{
                    display: "grid",
                    // placeItems: "center",
                    gap: "4px",
                    gridAutoFlow: "column",
                  }}
                > */}
                <div className="ctrl-path">
                  <div className="spot-block">
                    <img src={require("../image/google_icon/bus.png")} className="bus-image" />
                  </div>
                  <div className="line">
                    <p>
                      搭乘
                      <br />
                      0 南、109、236 區<br />
                      251、251 區、252
                      <br />
                      253、278、278 區<br />
                      280、280 直、284
                      <br />
                      505、52、530
                      <br />
                      606、643、644
                      <br />
                      648、660、668
                      <br />
                      棕 11、藍 28
                      <br />
                      羅斯福路幹線
                      <br />
                      松江新生幹線
                      <br />
                      復興幹線
                      <br />
                      基隆路幹線
                      <br />
                      景美-榮總（快）
                    </p>
                    <div>
                      <div
                        // onMouseOver={loading}
                        // onMouseDown={off}
                        className="straight-line"
                        // style={{ width: "150px", position: "relative" }}
                      >
                        {/*150*/}
                        {/*
                        <div id="loading-block">
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                        </div>
                */}
                      </div>
                    </div>
                  </div>
                  <div className="spot-block">
                    公車
                    <br />
                    「師大分部」站
                  </div>
                  <div className="line">
                    <p>
                      <span class="material-symbols-rounded">directions_walk</span>
                      <span class="material-symbols-rounded">arrow_back</span>
                      <br />
                      向西步行
                      <br />約 2 分鐘抵達
                    </p>
                    <div className="straight-line"></div> {/*150*/}
                  </div>
                  <div className="spot-block">
                    國立臺灣師範大學 <br />
                    公館校區門口
                  </div>
                  <div className="line">
                    <p>
                      <span class="material-symbols-rounded">directions_walk</span>
                      <span class="material-symbols-rounded">arrow_top_left</span>
                      <br />
                      直行進入校園
                      <br />
                      經過紫紅色建築後左轉
                    </p>
                    <div className="straight-line"></div> {/*150*/}
                  </div>
                  <div className="spot-block">
                    應用科學大樓 <br />
                    一樓集合地
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tra-car">
          <p className="method-sub-title">開車路線</p>
          <div className="outside-traffic">
            <div className="traffic-car">
              <div className="car-method">
                {/* <div
                  style={{
                    display: "grid",
                    // placeItems: "center",
                    gap: "4px",
                    gridAutoFlow: "column",
                  }}
                > */}
                <div className="ctrl-path">
                  <div className="spot-block">
                    <img src={require("../image/google_icon/car.png")} className="car-image" />
                  </div>
                  <div className="line">
                    <p>
                      <span class="material-symbols-rounded">near_me</span>
                      <br />
                      導航至
                      <br />
                      <b>
                        <a href={"https://maps.app.goo.gl/ZCmo2pzEMXvfB4Sw9"}>
                          國立臺灣師範大學 公館校區
                        </a>
                      </b>
                    </p>
                    <div>
                      <div
                        // onMouseOver={loading}
                        // onMouseDown={off}
                        className="straight-line"
                        // style={{ width: "150px", position: "relative" }}
                      >
                        {/*150*/}
                        {/*
                        <div id="loading-block">
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                          <div id="loading-ani" style={{ position: "absolute", top: "-5px" }}></div>
                        </div>
                */}
                      </div>
                    </div>
                  </div>
                  <div className="spot-block">
                    國立臺灣師範大學 <br />
                    公館校區門口
                  </div>
                  <div className="line">
                    <p>
                      <span class="material-symbols-rounded">directions_walk</span>
                      <span class="material-symbols-rounded">arrow_top_left</span>
                      <br />
                      直行進入校園
                      <br />
                      經過紫紅色建築後左轉
                    </p>
                    <div className="straight-line"></div> {/*150*/}
                  </div>
                  <div className="spot-block">
                    應用科學大樓 <br />
                    一樓集合地
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="script.js"></script>
      </div>
    </>
  );
};

export default Traffic;

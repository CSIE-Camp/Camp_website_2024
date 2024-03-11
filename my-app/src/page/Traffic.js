import React, { useState } from "react";

const Traffic = () => {
  function public_method() {
    let content = document.getElementById("tra-pub");
    let computedStyle = window.getComputedStyle(content);
    if (computedStyle.getPropertyValue("display") === "none") {
      content.style.display = "block";
      document.getElementById("tra-car").style.display = "none";
    }
    // content.style.display = "none";
  }

  function car() {
    let content = document.getElementById("tra-car");
    let computedStyle = window.getComputedStyle(content);
    if (computedStyle.getPropertyValue("display") === "none") {
      content.style.display = "block";
      document.getElementById("tra-pub").style.display = "none";
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
          <p className="ntnu-address">臺灣師範大學公館校區（師大分部）</p>
          <p className="ntnu-address">
            11677 台北市文山區汀州路四段 88 號 應用科學大樓一樓 資訊工程學系
          </p>
        </div>
        <div className="map-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.7905148156797!2d121.53508984715559!3d25.007233251863084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa1e27ab738b%3A0x2e5be38c37583475!2z5ZyL56uL6Ie654Gj5bir56-E5aSn5a24IOWFrOmkqOagoeWNgA!5e0!3m2!1szh-TW!2stw!4v1705928987464!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="traffic-method">
          <div className="traffic-block">
            <button className="traffic-btn" onClick={public_method}>
              大眾運輸工具
            </button>
            <button className="traffic-btn" onClick={car}>
              自行開車
            </button>
          </div>
        </div>
        <div id="tra-pub">
          <div
            style={{
              marginBottom: "30px",
              justifyContent: "center",
              fontSize: "30px",
              marginLeft: "13%",
              marginTop: "3%",
            }}
          >
            <b>
              <p className="metro-title" style={{ fontSize: "30px" }}>
                搭乘捷運
              </p>
            </b>
          </div>
          <div className="outside-traffic">
            <div className="traffic-public">
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
                  <img src={require("../image/metro.png")} className="metro-image" />
                  <div className="line">
                    <p>搭乘綠線</p>
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
                  <div className="spot-block">捷運萬隆站</div>
                  <div className="line" class={{ textAlign: "center" }}>
                    <p>沿羅斯福路往北步行約10分鐘抵達</p>
                    <div className="straight-line"></div> {/*150*/}
                  </div>
                  <div className="spot-block">
                    國立臺灣師範大學 <br />
                    公館校區門口
                  </div>
                  <div className="line">
                    <p>步行至應用科學大樓</p>
                    <div className="straight-line"></div> {/*150*/}
                  </div>
                  <div className="spot-block">
                    應用科學大樓 <br />
                    一樓集合地
                  </div>
                </div>
              </div>
            </div>
            <div className="traffic-public">
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
                  <img src={require("../image/metro.png")} className="metro-image" />
                  <div className="line">
                    <p>搭乘綠線</p>
                    <div className="straight-line"></div>
                    {/*150*/}
                  </div>
                  <div className="spot-block">捷運公館站</div>
                  <div className="line">
                    <p>沿羅斯福路往南步行約11分鐘抵達</p>
                    <div className="straight-line"></div> {/*300*/}
                  </div>
                  <div className="spot-block">
                    國立臺灣師範大學 <br />
                    公館校區門口
                  </div>
                  <div className="line">
                    <p>步行至應用科學大樓</p>
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
        <div id="tra-car">
          <p style={{ fontSize: "30px", marginLeft: "14%", marginBottom: "3%" }}>
            <b>開車路線</b>
          </p>
          <div className="traffic-car">
            <div
              style={{ display: "grid", placeItems: "center", gap: "4px", gridAutoFlow: "column" }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={require("../image/car.png")} width="45" height="50" alt="drive" />
                <p class={{ textAlign: "center" }}>開車</p>
              </div>
            </div>
            <div className="line">
              <p>
                <b>
                  導航至
                  <a href={"https://maps.app.goo.gl/ZCmo2pzEMXvfB4Sw9"}>
                    國立臺灣師範大學 公館校區
                  </a>
                </b>
              </p>
              <div className="straight-line"></div> {/* 280px */}
            </div>
            <div className="spot-block">
              國立臺灣師範大學 <br />
              公館校區門口
            </div>
            <div className="line">
              <p>步行至應用科學大樓</p>
              <div className="straight-line"></div> {/* 150px */}
            </div>
            <div className="spot-block">
              應用科學大樓 <br />
              一樓集合地
            </div>
          </div>
        </div>
        <script src="script.js"></script>
      </div>
    </>
  );
};

export default Traffic;

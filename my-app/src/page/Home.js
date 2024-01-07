import React from "react";
import video from "../video/3Disland.mp4";
// import video2 from "../video/3Disland2.webm";
const Home = () => {
  return (
    <div>
      <main>
        <div class="card">
          <section class="left">
            <div className="imgFlex">
              {/* <img src={require("../image/3DIsland.png")} title="Island" alt="Island" /> */}

              <video id="v1" src={video} playsinline preload autoPlay loop muted></video>
              {/* <video id="v2" src={video2} controls autoPlay loop muted></video> */}
            </div>
          </section>
          <section class="right">
            <div class="words">
              <div className="h1">
                <span class="C">C</span>hallenger
              </div>
              <div className="h1">
                <span class="S">S</span>urviving
              </div>
              <div className="h1">
                <span class="I">I</span>slands:
              </div>
              <div className="h1">
                <span class="E">E</span>級玩家
              </div>

              <div id="subtitle">
                2023 師大資工營 <br />
                NTNU CSIE CAMP
              </div>
            </div>
            <div className="registerButton">
              <a href="https://camp-app.csie.cool/login">
                <button className="register">立即報名</button>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;

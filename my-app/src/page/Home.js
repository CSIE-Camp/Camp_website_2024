import React, { useState } from "react";
// import camp_introduction_img from "../image/draw_icon/camp_introduction.png";
// import registration_information_img from "../image/draw_icon/registration_information.png";
// import faq_img from "../image/draw_icon/faq.png";
// import traffic_information_img from "../image/draw_icon/traffic_information.png";
// import review_img from "../image/draw_icon/review.png";
import banner from "../image/banner.png";
import About from "./About";
import Info from "./Info";
import FAQ from "./FAQ";
import Traffic from "./Traffic";
import Review from "./Review";

const Home = () => {
  const [descriptions, setDescriptions] = useState({
    image1: { visible: true, content: <About /> },
    image2: { visible: true, content: <Info /> },
    image3: { visible: true, content: <FAQ /> },
    image4: { visible: true, content: <Traffic /> },
    image5: { visible: true, content: <Review /> },
  });

  const toggleDescription = (imageId) => {
    setDescriptions((prevState) => ({
      ...prevState,
      [imageId]: {
        ...prevState[imageId],
        visible: !prevState[imageId].visible,
      },
    }));
  };

  return (
    <div id="main" style={{ margin: "64px 0%" }}>
      <header style={{ textAlign: "center" }} id="header">
        <img src={banner} alt="banner" style={{ width: "100%" }} />
      </header>
      <div className="container">
        <div>
          <div className="col-6 col-12-medium">
            <section>
              <ul className="big-image-list" style={{ listStyleType: "none" }}>
                {[1, 2, 3, 4, 5].map((index) => (
                  <li key={index}>
                    {index > 1 && <div style={{ height: "100%" }}></div>}
                    <div style={{ textAlign: index % 2 === 0 ? "right" : "left" }}>
                      <h2
                        style={{ textAlign: index % 2 === 0 ? "right" : "left" }}
                        class="home_titles"
                      >
                        {index === 1 && <font id="about">營隊資訊</font>}
                        {index === 2 && <font id="info">報名資訊</font>}
                        {index === 3 && <font id="faq">FAQ</font>}
                        {index === 4 && <font id="traffic">交通資訊</font>}
                        {index === 5 && <font id="review">歷屆回顧</font>}
                      </h2>
                      <hr />
                      <div onClick={() => toggleDescription(`image${index}`)}>
                        {/* <img
                          src={
                            index === 1
                              ? camp_introduction_img
                              : index === 2
                              ? registration_information_img
                              : index === 3
                              ? faq_img
                              : index === 4
                              ? traffic_information_img
                              : review_img
                          }
                          className={`image${index}`}
                          alt=""
                          style={{ width: "4em", height: "4em" }}
                        /> */}
                      </div>
                      <p
                        className={`text-below${index}`}
                        style={{ textAlign: index % 2 === 0 ? "right" : "left" }}
                      ></p>
                    </div>

                    <div
                      style={{
                        textAlign: index % 2 === 0 ? "right" : "left",
                        width: "100%",
                        // display: descriptions[`image${index}`].visible ? "block" : "none",
                        wordWrap: "break-word",
                      }}
                    >
                      {descriptions[`image${index}`].content}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

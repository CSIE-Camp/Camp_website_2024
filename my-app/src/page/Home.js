import React, { useState } from "react";
import RegistrationInformation from "../image/Registration_Information.png";
import FAQimg from "../image/FAQ.png";
import TrafficInformation from "../image/Traffic_Information.png";
import Reviewimg from "../image/review.png";
import Logo from "../image/logo2024_.png";
import About from "./About";
import Info from "./Info";
import FAQ from "./FAQ";
import Traffic from "./Traffic";
import Review from "./Review";

const Home = () => {
  const [descriptions, setDescriptions] = useState({
    image1: { visible: false, content: <Info /> },
    image2: { visible: false, content: <FAQ /> },
    image3: { visible: false, content: <Traffic /> },
    image4: { visible: false, content: <Review /> },
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
    <div id="main" style={{ margin: "0 0%" }}>
      <header style={{ textAlign: "center" }} id="header">
        <img src={Logo} alt="Logo" style={{ width: "100%" }} />
      </header>
      <div className="container">
        <div>
          <div>
            <section>
              <h2>
                <font color="#ffead8" id="about">
                  營隊介紹
                </font>
              </h2>
              <p>
                <About />
              </p>
              <p>&nbsp;</p>
            </section>
          </div>

          <div className="col-6 col-12-medium">
            <section>
              <ul className="big-image-list" style={{ listStyleType: "none" }}>
                {[1, 2, 3, 4].map((index) => (
                  <li key={index}>
                    {index > 1 && <div style={{ height: "100%" }}></div>}
                    <div style={{ textAlign: index % 2 === 0 ? "right" : "left" }}>
                      <h2 style={{ textAlign: index % 2 === 0 ? "right" : "left" }}>
                        {index === 1 && (
                          <font color="#ffead8" id="info">
                            報名資訊
                          </font>
                        )}
                        {index === 2 && (
                          <font color="#ffead8" id="faq">
                            FAQ
                          </font>
                        )}
                        {index === 3 && (
                          <font color="#ffead8" id="traffic">
                            交通資訊
                          </font>
                        )}
                        {index === 4 && (
                          <font color="#ffead8" id="review">
                            歷屆回顧
                          </font>
                        )}
                      </h2>
                      <hr />
                      <a href="#" onClick={() => toggleDescription(`image${index}`)}>
                        <img
                          src={
                            index === 1
                              ? RegistrationInformation
                              : index === 2
                              ? FAQimg
                              : index === 3
                              ? TrafficInformation
                              : Reviewimg
                          }
                          className={`image${index}`}
                          alt=""
                          style={{ width: "5%", height: "5%" }}
                        />
                      </a>
                      <p
                        className={`text-below${index}`}
                        style={{ textAlign: index % 2 === 0 ? "right" : "left" }}
                      >
                        {index === 1 && "點擊圖片查看內容"}
                        {index === 2 && "點擊圖片查看內容"}
                        {index === 3 && "點擊圖片查看內容"}
                        {index === 4 && "點擊圖片查看內容"}
                      </p>
                    </div>

                    <div
                      style={{
                        textAlign: index % 2 === 0 ? "right" : "left",
                        width: "100%",
                        display: descriptions[`image${index}`].visible ? "block" : "none",
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

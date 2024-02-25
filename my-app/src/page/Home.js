import React, { useState } from "react";
import video from "../video/3Disland.mp4";
import RegistrationInformation from "../image/Registration Information.jpg";
import FAQ from "../image/FAQ.jpg";
import TrafficInformation from "../image/Traffic Information.jpg";
import Review from "../image/Review.jpg";
import Logo from "../image/logo2024_.jpg";

const Home = () => {
  const [descriptions, setDescriptions] = useState({
    image1: { visible: false, content: "報名資訊內容" },
    image2: { visible: false, content: "FAQ內容" },
    image3: { visible: false, content: "交通資訊內容" },
    image4: { visible: false, content: "歷屆回顧內容" }
  });

  const toggleDescription = (imageId) => {
    setDescriptions(prevState => ({
      ...prevState,
      [imageId]: {
        ...prevState[imageId],
        visible: !prevState[imageId].visible
      }
    }));
  };

  return (
    <div id="main" style={{ margin: "0 15%" }}>
      <header style={{ textAlign: "center" }}>
        <img src={Logo} alt="Logo" style={{ width: "100%"}} />
      </header>
      <div className="container">
        <div>
          <div>
            <section>
              <h2><font color="#ffead8">營隊介紹</font></h2>
              <p>CSIE CAMP</p>
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
                        {index === 1 && <font color="#ffead8">報名資訊</font>}
                        {index === 2 && <font color="#ffead8">FAQ</font>}
                        {index === 3 && <font color="#ffead8">交通資訊</font>}
                        {index === 4 && <font color="#ffead8">歷屆回顧</font>}
                      </h2>
                      <hr />
                      <a href="#" onClick={() => toggleDescription(`image${index}`)}>
                        <img
                          src={index === 1 ? RegistrationInformation : index === 2 ? FAQ : index === 3 ? TrafficInformation : Review}
                          className={`image${index}`}
                          alt=""
                          style={{ width: "5%", height: "5%" }}
                        />
                      </a>
                      <p className={`text-below${index}`} style={{ textAlign: index % 2 === 0 ? "right" : "left" }}>
                        {index === 1 && "點擊圖片查看內容"}
                        {index === 2 && "點擊圖片查看內容"}
                        {index === 3 && "點擊圖片查看內容"}
                        {index === 4 && "點擊圖片查看內容"}
                      </p>
                    </div>

                    <div style={{ textAlign: index % 2 === 0 ? "right" : "left", width: "100%", display: descriptions[`image${index}`].visible ? "block" : "none", wordWrap: "break-word" }}>
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

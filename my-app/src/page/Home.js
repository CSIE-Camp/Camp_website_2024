import React from "react";
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
const menuItems = [
  {
    name: "營隊介紹",
    eng_name: "about",
  },
  {
    name: "報名資訊",
    eng_name: "info",
  },
  {
    name: "常見問題",
    eng_name: "faq",
  },
  {
    name: "交通資訊",
    eng_name: "traffic",
  },
  {
    name: "歷屆回顧",
    eng_name: "review",
  },
];
const Home = () => {
  const pages = [<About />, <Info />, <FAQ />, <Traffic />, <Review />];
  // const [descriptions, setDescriptions] = useState({
  //   image1: { visible: true, content: <About /> },
  //   image2: { visible: true, content: <Info /> },
  //   image3: { visible: true, content: <FAQ /> },
  //   image4: { visible: true, content: <Traffic /> },
  //   image5: { visible: true, content: <Review /> },
  // });

  /*
  const toggleDescription = (imageId) => {
    setDescriptions((prevState) => ({
      ...prevState,
      [imageId]: {
        ...prevState[imageId],
        visible: !prevState[imageId].visible,
      },
    }));
  };
*/

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
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <div
                      style={{ textAlign: index % 2 !== 0 ? "right" : "left" }}
                      id={item.eng_name}
                    >
                      <h2
                        style={{ textAlign: index % 2 !== 0 ? "right" : "left" }}
                        class="home_titles"
                      >
                        <span>{item.name}</span>
                      </h2>
                      <hr />
                      <p
                        className={`text-below${index}`}
                        style={{ textAlign: index % 2 !== 0 ? "right" : "left" }}
                      ></p>
                    </div>
                    <div
                      style={{
                        textAlign: index % 2 !== 0 ? "right" : "left",
                        width: "100%",
                        // display: descriptions[`image${index}`].visible ? "block" : "none",
                        wordWrap: "break-word",
                      }}
                    >
                      {pages[index]}
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

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="before">
        <h3 class="before_title">歷年網站</h3>
        <a href="/old/2023">2023</a>
      </div>
      <div class="contact">
        <h2 class="contact_title contact_text">聯絡方式</h2>
        <p class="contact_content contact_text">
          信箱：camp@csie.cool<br></br>
          連絡電話：0978-935-279<br></br>
          (張建堯 總籌)
        </p>
      </div>
      <div class="social_media">
        <a href="https://www.facebook.com/ntnucsiecamp" target="_blank">
          <img
            src={require("./image/social_media_icon/fb.png")}
            alt="facebook"
            class="facebook_icon social_media_icon"
          ></img>
        </a>
        <a href="https://www.instagram.com/ntnucsiecamp/" target="_blank">
          <img
            src={require("./image/social_media_icon/ig.png")}
            alt="instagram"
            class="instagram_icon social_media_icon"
          ></img>
        </a>
        <a href="http://m.me/ntnucsiecamp" target="_blank">
          <img
            src={require("./image/social_media_icon/messenger.png")}
            alt="messenger"
            class="messenger_icon social_media_icon"
          ></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

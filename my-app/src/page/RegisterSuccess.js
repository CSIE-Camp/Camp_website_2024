import React from "react";
//import { Link } from "react-router-dom";

export const RegisterSuccess = () => {
  return (
    <form className="registSuccess">
      <h1 className="title">註冊帳號</h1>
      <div className="inputFlex">
        <div className="inputEmail">
          <input className="loginMail" placeholder="請輸入電子信箱" type={"email"} />
        </div>
      </div>
      <h2 className="subtitle">建立密碼</h2>
      <div className="inputFlex">
        <div className="inputEmail">
          <input className="loginMail" placeholder="請輸入電子信箱" type={"email"} />
          <button className="confirm" type="submit">
            <span className="arrow"></span>
          </button>
        </div>
        {/* <div className="pwd_container">
          <input className="loginPassword" placeholder="請輸入密碼" type={"password"} />
        </div> */}
      </div>
    </form>
  );
};
export default RegisterSuccess;

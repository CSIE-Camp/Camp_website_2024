import React from "react";
//import { Link } from "react-router-dom";

export const Register = () => {
  function handlerLoading(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <form className="regist">
      <h1 className="title">註冊帳號</h1>
      <p className="help">* 請填寫你的電子信箱</p>

      <div className="inputFlex">
        <div className="inputEmail">
          <input className="loginMail" placeholder="請輸入電子信箱" type={"email"} />
          <button className="confirm" type="submit" onClick={handlerLoading}>
            <span className="arrow"></span>
          </button>
          {/* Testing */}
          {/* <button className="loading" type="">
            <span className="arrow"></span>
          </button> */}
        </div>

        {/* 如果註冊成功，顯示以下box */}
        <div className="helpFlex">
          <p className="help">* 請至電子信箱查收驗證信</p>
        </div>
        <div className="passwordFlex">
          <input className="forgetPassword" placeholder="建立新密碼" type={"password"} />
          <div className="pwd_container">
            <input className="forgetPassword" placeholder="再次輸入密碼" type={"password"} />
            <button className="confirm" type="submit">
              <span className="arrow"></span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Register;

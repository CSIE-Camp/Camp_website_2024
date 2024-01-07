import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    await login(email, password);
  };
  return (
    <form className="login" onSubmit={handleLogin}>
      <h1 className="title">登入帳號</h1>
      <div className="inputFlex">
        <input
          className="loginMail"
          placeholder="請輸入電子信箱"
          type={"email"}
          value={email || ""}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="pwd_container">
          <input
            className="loginPassword"
            placeholder="請輸入密碼"
            type={"password"}
            value={password || ""}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="confirm" type="submit">
            <span className="arrow"></span>
          </button>
        </div>
      </div>
      <div className="helpFlex">
        <div className="helpContent">
          <Link to="/forget">忘記密碼?</Link>
          <Link to="/register">還沒註冊資工營帳號?</Link>
        </div>
      </div>
    </form>
  );
};
export default Login;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./page/Home";
import Footer from "./Footer";
import About from "./page/About";
import Info from "./page/Info";
import More from "./page/More";
import Login from "./page/Login";
import Form from "./page/Form";
import Forget from "./page/Forget";
import Register from "./page/Register";
import RegisterSuccess from "./page/RegisterSuccess";
import Review from "./page/Review";
import Admin from "./page/Admin";
import Personal from "./page/Personal";
import Payment from "./page/Payment";
import Exam from "./page/Exam";

const App = () => {
  return (
    <div className="App">
      <div id="bg">
        <div id="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
            <Route path="/more" element={<More />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registerSuccess" element={<RegisterSuccess />} />
            <Route path="/form" element={<Form />} />
            <Route path="/review" element={<Review />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/exam" element={<Exam />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

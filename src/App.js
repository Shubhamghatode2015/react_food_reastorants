import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import CheckOut from "./components/CheckOut";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/menu"} element={<Menu />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/togo"} element={<CheckOut />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

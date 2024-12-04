import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

import Footer from "./components/footer/footer.component";

import Shop from "./routes/shop/shop.component";


import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import SignInForm from "./components/sign-in-form/sign-in-form.component";

// import "./assets/css/bootstrap.min.css";

import { GlobalStyles } from "./global.style";
import Layout from "./layout/layout.component";

import { checkUserSession } from "./store/user/user.slice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])
  return (
    <>
    <GlobalStyles />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigation />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="category/*" element={<Shop/>}/>
          <Route path="signup" element={<SignUpForm/>}/>
          <Route path="signin" element={<SignInForm/>}/>
          <Route element={<Footer />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
};

export default App;

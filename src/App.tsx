import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

import Footer from "./components/footer/footer.component";

import Shop from "./routes/shop/shop.component";

import Authentication from "./routes/authentication/authentication.component";

// import "./assets/css/bootstrap.min.css";

import { GlobalStyles } from "./global.style";
import Layout from "./layout/layout.component";

const App = () => {
  return (
    <>
    <GlobalStyles />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigation />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="category/*" element={<Shop/>}/>
          <Route path="auth" element={<Authentication/>}/>
          <Route element={<Footer />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
};

export default App;

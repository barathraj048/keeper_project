import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Title, Body } from "./note";

const app = () => {
  return (
    <div>
      <h1 className="header" name="header">
        <Header />
      </h1>
      <p className="footer">
        <Footer />
      </p>
      <div className="note">
        <h1 className="noteh1 ">
          <Title />
        </h1>
        <p className="notep">
          <Body />
        </p>
      </div>
    </div>
  );
};
export default app;

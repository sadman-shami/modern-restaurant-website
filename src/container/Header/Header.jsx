import React from "react";
import { SubHeading } from "../../components";
import Images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <React.Fragment>
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading Title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key to Fine Dine</h1>
        <p className="p__inter" style={{ margin: "2rem 0", color: "#aaa" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={Images.welcome} alt="header" />
      </div>
    </div>
  </React.Fragment>
);

export default Header;

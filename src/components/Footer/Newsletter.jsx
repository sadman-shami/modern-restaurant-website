import React from "react";
import { SubHeading } from "../../components";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading Title="Newletter" />
      <h2 className="headtext__cormorant">Subscribe To Our Newletter</h2>
      <p className="p__inter">And never miss latest updates!</p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your Email Address." />
      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;

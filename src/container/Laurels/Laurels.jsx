import React from "react";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="awards" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__inter">{subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading Title="Awards & Recognition" />
      <h2 className="headtext__cormorant">Our Laurels</h2>

      <div className="app__laurels_awards">
        {data.awards.map((award, i) => (
          <AwardCard award={award} key={i} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;

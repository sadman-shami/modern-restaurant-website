import React from "react";
import Images from "../../constants/images";

const SubHeading = ({ Title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{Title}</p>
    <img src={Images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;

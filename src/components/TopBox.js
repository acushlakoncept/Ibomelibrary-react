import React from "react";
import Button from "react-bootstrap/Button";
import '../assets/styles/topbox.css'

export default function Topbox({ name, brName, image, alt }) {
  return (
    <div className="top__box">
      <img src={image} className="top__box--img rounded" alt={alt} />
      <Button className="btn-htg top__box--btn">
        <span className="htg-b">{name}</span>
        <br />
        {brName}
      </Button>
    </div>
  );
}

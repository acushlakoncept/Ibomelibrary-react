import React from "react";
import '../assets/styles/topbox.css'

export default function Topbox({ name, brName, image, alt, link="#" }) {
  return (
    <div className="top__box">
      <img src={image} className="top__box--img rounded" alt={alt} />
      <a href={link} className="btn-htg top__box--btn">
        <span className="htg-b">{name}</span>
        <br />
        {brName}
      </a>
    </div>
  );
}

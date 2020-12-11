import React from 'react';
import '../assets/styles/topbox.css';
import PropTypes from 'prop-types';

export default function Topbox({
  name, brName, image, alt, link = '#',
}) {
  return (
    <div className="top__box">
      <img src={image} className="top__box--img rounded" alt={alt} />
      <a href={link} target="__blank" rel="noopener" className="btn-htg top__box--btn">
        <span className="htg-b">{name}</span>
        <br />
        {brName}
      </a>
    </div>
  );
}

Topbox.propTypes = {
  name: PropTypes.string.isRequired,
  brName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

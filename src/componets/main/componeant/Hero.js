import React from "react";

function Hero ({isSugation,user}) {
  const { img, username, subtitle } = user;

  return (
    <div className="hero-top">
      <div className="hero-container-img">
        <img
          className={isSugation ? "small" : "big"}
          src={img}
          alt="hero-info"
        />
        <div className="hero-content">
          <div>
            <h4>{username}</h4>
            <p>{subtitle}</p>
          </div>
          <div className="hero-button">
            <p>{isSugation ? "follow" : "swetch"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

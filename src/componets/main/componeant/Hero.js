import React from "react";

function Hero(props) {
  return (
    <div className="hero-top">
      <div className="hero-container-img">
        <img
          className={props.isSugation ? "small" : "big"}
          src={props.user.img}
          alt="hero-info"
        />
        <div className="hero-content">
            <div>
                <h4>{props.user.username}</h4>
                <p>{props.user.subtitle}</p>
            </div>
            <div className="hero-button">
                <p>{props.isSugation ? "follow" : "swetch"}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

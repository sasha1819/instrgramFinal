import React from "react";

function SuggestionsTitle(props) {
  return (
    <div className="title-container">
      <div className="title">
        <p>{props.title}</p>
      </div>
      <div className="btn">
        <button>{props.labelBtn}</button>
      </div>
    </div>
  );
}

export default SuggestionsTitle;

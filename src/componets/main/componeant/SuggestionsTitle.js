import React from "react";

function SuggestionsTitle({title,labelBtn}) {


  return (
    <div className="title-container">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="btn">
        <button>{labelBtn}</button>
      </div>
    </div>
  );
}

export default SuggestionsTitle;

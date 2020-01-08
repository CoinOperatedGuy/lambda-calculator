import React from "react";

const SpecialButton = (props) => {
  console.log(props, 'special button props');
  return (
    <div className="special-buttons">
      <button> {props.special} </button>
    </div>
  );
};

export default SpecialButton
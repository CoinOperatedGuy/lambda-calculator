import React from "react";

const NumberButton = (props) => {
    console.log(props, 'numbers button props');
    return ( 
    <div className = "number-buttons">
        <button> { props.number } </button>  
    </div>
    );
};

export default NumberButton
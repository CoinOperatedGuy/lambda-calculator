import React from "react";

const OperatorButton = (props) => {
    console.log(props, 'operators button props');
    return ( 
        <div className="operator-buttons">
        <button> { props.operator.char } </button> 
        </div >
    );
};

export default OperatorButton
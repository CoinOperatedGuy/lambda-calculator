import React from "react";

const OperatorButton = (props) => {
    console.log(props, 'operators button props');
    return ( 
        <div>
        <button> { props.operator.char } </button> 
        </div >
    );
};

export default OperatorButton
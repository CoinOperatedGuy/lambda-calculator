import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';
import "../../../App.css";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
    // STEP 2 - add the imported data to state
    const [oper] = useState(operators);
    console.log(oper);

    return ( 
    <div className="operator-buttons"> 
        {oper.map((operator, index) => {
                return <OperatorButton operator={operator} key={index}/>
            })}

    </div>
    );
};

export default Operators;
import React, { useState } from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';
import "../../../App.css";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
    // STEP 2 - add the imported data to state
    const [spec] = useState(specials);
    console.log(spec);

    return ( 
    <div className="special-buttons">
        {spec.map((special, index) => {
            return <SpecialButton special={special} key={index}/>
        })}
    </div>
    );
};

export default Specials;
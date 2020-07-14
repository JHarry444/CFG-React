import React, { useState } from 'react';
import Input from './Input';

export default function LiftingState() {
   
    const [value, setValue] = useState("weapon");


    const handleChange = (event) => {
        console.log("Target: ", event.target);
        setValue(event.target.value);
    }

    return(
        <div>
            <Input bloop={value} changeHandler={handleChange}/>
            <Input  bloop={value} changeHandler={handleChange}/>
        </div>
    );

}
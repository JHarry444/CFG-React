import React, { useState } from 'react';

export default function Dupe() {
   
    const [value, setValue] = useState("");


    const handleChange = (event) => {
        console.log("Target: ", event.target);
        setValue(event.target.value);
    }

    return(
        <div>
            <input value={value} onChange={handleChange}/>
            <input value={value} onChange={handleChange}/>
            <input value={value} onChange={handleChange}/>
        </div>
    );

}
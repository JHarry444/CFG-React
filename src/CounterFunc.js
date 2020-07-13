import React, { useState } from 'react';

export default function Counter() {

    // const myState = useState(0);
    // const counterValue = myState[0];
    // const setCounterValue = myState[1];

    const [counterValue, setCounterValue] = useState(0); //hook

    const clickHandler = (change) => {
        setCounterValue(counterValue + change); // this.state.counterValue = 45
    }


       return( 
            <div>
                <input value={counterValue}/><br/>
                <button onClick={() => clickHandler(-1)}>-1</button><button onClick={() => clickHandler(+1)}>+1</button>
            </div>
       );

}
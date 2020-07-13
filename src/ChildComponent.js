import React from 'react';

export default function ChildComponent(props)  {
        console.log(props);
        return(
            <div>
                <h1>Message: {props.message}</h1>
                <button onClick={props.click}>CLICK ME</button>
            </div>
        )
    }


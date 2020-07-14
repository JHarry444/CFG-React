import React from 'react';

export default function Input(props) {

    return(
        <input value={props.bloop} onChange={props.changeHandler}/>
    );
}
import React from 'react';

export default function DeepLink(props) {
    const handleClick = () => {
        props.history.push("/weapon");
    }

    return (
        <button onClick={handleClick}>Deep Shenanigans</button>
    )
}
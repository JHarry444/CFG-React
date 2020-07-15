import React from 'react';
import PropTypes from 'prop-types';

export default function Hero(props) {
    return (
        <div className='card' onClick={() => props.history.push(`/hero/${props.name}`)}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Secret Identity: {props.secretIdentity}</p>
        </div>
    );
}

Hero.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired,
    secretIdentity: PropTypes.string.isRequired,
}

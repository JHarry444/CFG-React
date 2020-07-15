import React from 'react';
import PropTypes from 'prop-types';

export default function Hero(props) {
    return (
        <div className='card'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Secret Identity: {props.secretIdentity}</p>
        </div>
    );
}

Hero.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    secretIdentity: PropTypes.string.isRequired,
}

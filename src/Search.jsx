import React from 'react';
import PropTypes from 'prop-types';

export default function Search(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input value={props.search} onChange={props.handleChange} name='search' placeholder='Enter search here' />
            <button>Search</button>
        </form>
    );
}

Search.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired
}
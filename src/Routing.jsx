import React from 'react';
import { Link } from 'react-router-dom';
import DeepLink from './DeepLink';

export default function Routing(props) {

    console.log(props);
    const handleClick = () => {
        props.history.push("/weapon");
    }
    return(
        <div>
            <a href="/weapon">Anchor</a>
            <br/>
            <Link to="/weapon">Link</Link>
            <br/>
            <button onClick={handleClick}>Shenanigans</button>
            <DeepLink {...props} history={props.history} match={props.match} location={props.location}/>
        </div>
    )
}
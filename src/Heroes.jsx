/* eslint-disable react/jsx-key */
import React from 'react';
import Axios from 'axios';
import Hero from './Hero';

export default class Heroes extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            heroes: {
                members: []
            }
        }
    }


    componentDidMount() {
        Axios.get('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json')
            .then(res => {
                this.setState({ heroes: res.data });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <h1>{this.state.heroes.squadName}</h1>
                <div>
                    {this.state.heroes.members.map((hero, index) => <Hero key={index} {...hero}/>)}
                </div>
            </div>
        );
    }
}
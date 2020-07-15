/* eslint-disable react/jsx-key */
import React from 'react';
import Axios from 'axios';
import Hero from './Hero';
import Search from './Search';

export default class Heroes extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            heroes: {
                members: []
            },
            search: ''
        }
    }


    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        Axios.get('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json')
            .then(res => {
                const heroes = {
                    squadName: res.data.squadName,
                    members: res.data.members.filter(member => member.name.toLowerCase().includes(this.state.search.toLowerCase().trim()))
                }
                this.setState({ heroes: heroes });
            })
            .catch(err => console.error(err));
    }
    render() {
        return (
            <div>
                <h1>{this.state.heroes.squadName}</h1>
                <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} search={this.state.search} />
                <div>
                    {this.state.heroes.members.map((hero, index) => <Hero history={this.props.history} key={index} {...hero}/>)}
                </div>
            </div>
        );
    }
}
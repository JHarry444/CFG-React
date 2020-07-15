import React from 'react';
import Axios from 'axios';

export default class HeroDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hero: {
                name: '',
                age: 0,
                secretIdentity: '',
                powers: []
            }
        }
    }

    componentDidMount() {
        Axios.get('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json')
            .then(res => {
                const hero = res.data.members.filter(member => member.name === this.props.match.params.name)[0];
                this.setState({ hero: hero });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className='card'>
                <p>Name: {this.state.hero.name}</p>
                <p>Age: {this.state.hero.age}</p>
                <p>Secret Identity: {this.state.hero.secretIdentity}</p>
                <p>Powers: {this.state.hero.powers.join(', ')}</p>
            </div>
        )
    }
}
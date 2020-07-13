import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0
        }
    }

    clickHandler = (change) => {
        this.setState({counterValue: this.state.counterValue + change}) // this.state.counterValue = 45
    }

    render() {

       return( 
            <div>
                <input value={this.state.counterValue}/><br/>
                <button onClick={() => this.clickHandler(-1)}>-1</button><button onClick={() => this.clickHandler(+1)}>+1</button>
            </div>
       );
    }
}
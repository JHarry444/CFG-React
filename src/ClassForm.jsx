import React from 'react';
import Input from './Input';

export default class ClassForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          User:
        <Input value={this.state.username} name="username" changeHandler={this.handleChange} />
        </label>
        <label>
          Pass:
        <Input value={this.state.password} type="password" name="password" changeHandler={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
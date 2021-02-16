import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {

  state = {
    account: {username: '', password: ''}
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //const username = this.username.current.value;

    // call the server for submission
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input}) => {
    console.log(input.value);
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({ account });
  }

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            lable="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            lable="Password"
            onChange={this.handleChange}
          />        
        <button className="btn btn-primary">Login</button>
        </form>
      </div>
    )    
  }
}

export default LoginForm;
import React, { Component } from 'react';

class LoginForm extends Component {

  state = {
    account: {username: '', password: ''}
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;

    // call the server for submission
    console.log(username);
  };

  handleChange = (e) => {
    console.log(e.currentTarget.value);
    const account = {...this.state.account};
    account[e.target.name] = e.target.value;
    this.setState({account});
  }

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              value={account.username}
              onChange={this.handleChange}
              name="username"
              id="username" 
              type="text" 
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    )    
  }
}

export default LoginForm;
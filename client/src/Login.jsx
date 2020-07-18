import React, { Component } from 'react'

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    const {username, password} = this.state
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleLogin(this.state);
        this.props.history.push('/items')
      }}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.handleChange}></input>
        <br/>
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}></input>
        <br/>
      <button>Login</button>
      </form>
     
      
    )
  }
}



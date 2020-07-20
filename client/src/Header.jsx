import React, {Component} from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom'
import Login from './Login'

import Signup from './Signup'

export default class Header extends Component {
 
  
  
  render() {
    return (
      <div className="header">
        <Link to ="/"><h1>Exchange Zero</h1></Link>
        <Link to="/"><button
          onClick={() => {
            this.props.handleLogout();
            
          }}
          
        >Logout</button>
          </Link>
        
            <Route path='/' exact render={(props) => (
              <Login
                {...props}
                handleLogin={this.props.handleLogin}
              currentUser={this.props.currentUser}
            
          
              />
            )} />
              <Link to="/signup">Sign up</Link>
             
            <Route path='/signup' render={(props) => (
              <Signup
                {...props}
                handleSignup={this.props.handleSignup}
          
              />
            )} />
      
       
      </div>
     
    )
  }
}

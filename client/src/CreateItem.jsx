import React, { Component } from 'react'

export default class CreateItem extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleItemCreate(this.state)
        this.props.history.push('/items')
      }}
      
      >
        <label>
          <input type='text'
            value={this.state.name}
            onChange={this.handleChange} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

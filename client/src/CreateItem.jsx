import React, { Component } from 'react'

export default class CreateItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item_name: '' 
      }
  }

  

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      item_name: value 
      })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleItemCreate(this.state)
        this.props.history.push('/')
      }}
      
      >
        <label>
          <input type='text'
            value={this.state.item_name}
            onChange={this.handleChange} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

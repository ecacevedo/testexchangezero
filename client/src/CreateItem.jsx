import React, { Component } from 'react'

export default class CreateItem extends Component {
  state = {
    item_name: '',
    locationdetails: '',
    image_url:'',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]:value
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
            name= 'item_name'
            placeholder='Item Name'
            value={this.state.item_name}
            onChange={this.handleChange} />
          <input type='text'
            name='locationdetails'
            placeholder='Location'
            value={this.state.locationdetails}
            onChange={this.handleChange} />
          <input type='text'
            name='image_url'
            placeholder='Image URL'
            value={this.state.image_url}
            onChange={this.handleChange} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

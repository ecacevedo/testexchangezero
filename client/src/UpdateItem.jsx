import React, { Component } from 'react'

export default class UpdateItem extends Component {
    state = {
      item_name: '',
      locationdetails: '',
      image_url:'',
    }
  
  componentDidMount() {
    if (this.props.itemItem) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if ( prevProps.itemItem !== this.props.itemItem ) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      item_name: this.props.itemItem.item_name,
      locationdetails: this.props.itemItem.locationdetails,
      image_url: this.props.itemItem.image_url
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]:value
      })
  }

  render() {
    const { handleItemUpdate, history, id } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleItemUpdate(id, this.state);
        history.push('/items')
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

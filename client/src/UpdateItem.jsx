import React, { Component } from 'react'

export default class UpdateItem extends Component {
    state = {
      item_name: '' 
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
      item_name: this.props.itemItem.item_name
    })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      item_name: value 
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
            value={this.state.item_name}
            onChange={this.handleChange} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

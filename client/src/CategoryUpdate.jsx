import React, { Component } from 'react'
import { item } from './services/items'
import { addCategories } from './services/categories'



export default class CategoryUpdate extends Component {
  state = {
    state_item: null,
    CatergoryId: null
 }

 componentDidMount() {
  this.fetchitemItem();
}

fetchitemItem = async () => {
  const state_item = await item(this.props.id);
  this.setState({ state_item });
}

handleAddcategory = async () => {
  const { state_item, categoryId } = this.state;
  const newitem = await addCategories(state_item.id, categoryId);
  this.setState({ state_item: newitem });
}

handleChange = (e) => {
  const { value } = e.target;
  this.setState({
    categoryId: value
  })
}

render() {
  const { state_item } = this.state;

  return (
    <div>
      {state_item && (
        <>
          <h3>{state_item.name}</h3>
          {state_item.categories.map(category => (
            <p key={category.id}>{category.name}</p>
          ))}
          <select onChange={this.handleChange}>
            <option disabled selected>-- Select a category --</option>
            {this.props.categories.map(category => (
              <option value={category.id}>{category.category_name}</option>
            ))}
          </select>
          <button onClick={this.handleAddcategory}>Add</button>
        </>
      )}
    </div>
  )
}
}
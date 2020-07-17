import React from 'react'

export default function ShowCategories(props) {
  return (
    <div>
      <h2>Categories</h2>
      {props.categories.map(category => (
        <p>{category.category_name}</p>
      ))}
    </div>
  )
}

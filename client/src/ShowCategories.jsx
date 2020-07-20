import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowCategories(props) {
  return (
    <div>
      <h2>Categories</h2>
      {props.categories.map(category => (
        <Link to={`/categories/${category.id}`}>
          <p>{category.category_name}</p> </Link>
      ))}
    </div>
  )
}

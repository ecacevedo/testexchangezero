import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import { item } from './services/items';

export default function ShowBasicItems(props) {
  return (
    <div>
      <Link to="/categories">Categories</Link>
      {props.items.map(items => (
        <React.Fragment key={items.id}>
          <p>{items.item_name} </p>
          <p>{items.locationdetails}</p>
          <img className="items-Image" src={items.image_url} />
          
          
        </React.Fragment>
      ))}
    
     
    </div>
  )
}
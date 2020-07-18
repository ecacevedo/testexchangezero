import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'

export default function ShowItems(props) {
  return (
    <div>
      
      {props.items.map(items => (
        <>
        <p>{items.item_name} </p>
          <p>{items.locationdetails}</p>
          <img className="items-Image" src={items.image_url}/>
        </>
      ))}
      <Link to="/items/new"><button>Create Item</button></Link>
    </div>
  )
}
